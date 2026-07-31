'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import content from '@/data/content.json';

/*
  Four domain charts on a rotation — AI engineering, AI development, SaaS,
  large-scale systems — one visible at a time, auto-advancing.

  Design decisions worth knowing before editing:

  • Every chart uses a SINGLE hue (var(--accent)) except the two-series one,
    which pairs the accent with a de-emphasis gray. That is the "emphasis"
    form: one series is the point, the rest is context. It also happens to be
    the only colour scheme that survives all 17 design styles, since the
    accent is a moving target and a fixed categorical palette would clash
    with most of them.
  • --chart-muted was picked with the palette validator, not by eye: the
    obvious mid-gray sat at ΔE 11 from the default terracotta accent, under
    the 15 floor for normal colour vision. See globals.css.
  • Text never wears the series colour. Identity comes from the legend's line
    key and from proximity, never from coloured type.
  • Auto-rotation is pausable and is disabled outright under
    prefers-reduced-motion (WCAG 2.2.2).
*/

const { capabilities } = content;
const CHARTS = capabilities.charts;

/* Plot geometry. The container height includes the x-axis band so the axis
   labels are never cut off by a fixed height. */
const H = 200;
const PAD = { top: 18, right: 16, bottom: 26, left: 44 };
/* Horizontal bars: names go on the left, the value scale runs underneath. */
const PAD_BARS = { top: 10, right: 54, bottom: 24, left: 82 };
const BAR_MAX = 24;

const nf = new Intl.NumberFormat('en-US');

/* Bars round the DATA end only and stay square where they meet the baseline —
   a fully rounded rect reads as floating off the axis instead of growing from
   it. Hence hand-built paths rather than <rect rx>. */
function colPath(x: number, top: number, w: number, base: number, r = 4) {
  const rr = Math.max(0, Math.min(r, w / 2, base - top));
  return `M${x},${base} L${x},${top + rr} Q${x},${top} ${x + rr},${top} L${x + w - rr},${top} Q${x + w},${top} ${x + w},${top + rr} L${x + w},${base} Z`;
}
function rowPath(left: number, y: number, w: number, h: number, r = 4) {
  const rr = Math.max(0, Math.min(r, h / 2, w));
  return `M${left},${y} L${left + w - rr},${y} Q${left + w},${y} ${left + w},${y + rr} L${left + w},${y + h - rr} Q${left + w},${y + h} ${left + w - rr},${y + h} L${left},${y + h} Z`;
}

function niceCeil(v: number) {
  if (v <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / mag;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * mag;
}

type Point = { label: string; short: string; value: number; improved?: number };
type Chart = (typeof CHARTS)[number];

function useWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(560);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(Math.max(280, e.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w] as const;
}

function fmt(v: number, unit: string) {
  return unit === '%' ? `${v}%` : unit ? `${nf.format(v)}${unit}` : nf.format(v);
}

export default function CapabilityCharts() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tableView, setTableView] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [boxRef, width] = useWidth();

  const chart = CHARTS[active] as Chart;
  const points = chart.points as Point[];

  const select = useCallback((i: number) => {
    setActive(i);
    setHover(null);
  }, []);

  /* ?chart=<id> opens straight to one chart and holds it there — handy for
     linking someone to a specific claim, and the only way to inspect a given
     chart without waiting out the rotation. */
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('chart');
    if (!id) return;
    const i = CHARTS.findIndex((c) => c.id === id);
    if (i >= 0) {
      setActive(i);
      setPaused(true);
    }
  }, []);

  // Auto-advance. Disabled entirely for reduced-motion users, and paused
  // while the visitor is interacting or the tab is in the background.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      setActive((i) => (i + 1) % CHARTS.length);
      setHover(null);
    }, capabilities.rotateSeconds * 1000);
    return () => window.clearInterval(t);
  }, [paused]);

  /* Horizontal bars measure along X, so they need room on the left for
     category names and none underneath for them. Using the vertical padding
     for both left the funnel with no labels at all. */
  const isBars = chart.type === 'bars';
  const pad = isBars ? PAD_BARS : PAD;
  const plotW = width - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  const vMax = useMemo(() => {
    if (chart.axisMax) return chart.axisMax;
    return niceCeil(Math.max(...points.map((p) => Math.max(p.value, p.improved ?? 0))));
  }, [chart, points]);

  const x = (i: number) => pad.left + (plotW * (i + 0.5)) / points.length;
  const xLine = (i: number) => pad.left + (plotW * i) / (points.length - 1);
  const y = (v: number) => pad.top + plotH * (1 - v / vMax);
  /* Value → length, for the horizontal bars. */
  const vw = (v: number) => (plotW * v) / vMax;
  const band = (i: number) => pad.top + (plotH / points.length) * i;

  const ticks = [0, vMax / 2, vMax];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setHover((h) => Math.min(points.length - 1, (h ?? -1) + 1));
    else if (e.key === 'ArrowLeft') setHover((h) => Math.max(0, (h ?? points.length) - 1));
    else if (e.key === 'Escape') setHover(null);
    else return;
    e.preventDefault();
    setPaused(true);
  };

  const linePath = (key: 'value' | 'improved') =>
    points.map((p, i) => `${i ? 'L' : 'M'}${xLine(i)},${y((p[key] ?? 0) as number)}`).join(' ');

  const hovered = hover !== null ? points[hover] : null;

  return (
    <div
      className="cap-panel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setHover(null); }}
    >
      {/* One control row above the chart, per the filter rule. */}
      <div className="cap-tabs" role="tablist" aria-label="Capability charts">
        {CHARTS.map((c, i) => (
          <button
            key={c.id}
            role="tab"
            type="button"
            aria-selected={i === active}
            className={`cap-tab${i === active ? ' is-active' : ''}`}
            onClick={() => { select(i); setPaused(true); }}
          >
            {c.tab}
          </button>
        ))}
        <button
          type="button"
          className="cap-pause"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Resume automatic rotation' : 'Pause automatic rotation'}
          title={paused ? 'Resume rotation' : 'Pause rotation'}
        >
          {paused ? (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z" /></svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h4v16H7zM13 4h4v16h-4z" /></svg>
          )}
        </button>
      </div>

      <div className="cap-head">
        <h3 className="cap-title">{chart.title}</h3>
        <p className="cap-caption">{chart.caption}</p>
      </div>

      {/* Stat tile: the headline the chart is making. */}
      <div className="cap-stat">
        <span className="cap-stat-value">{chart.stat.value}</span>
        <span className="cap-stat-label">{chart.stat.label}</span>
      </div>

      {chart.type === 'emphasis-lines' && (
        <div className="cap-legend">
          <span className="cap-legend-item">
            <span className="cap-key cap-key-muted" aria-hidden="true" />
            {chart.series?.baseline}
          </span>
          <span className="cap-legend-item">
            <span className="cap-key cap-key-accent" aria-hidden="true" />
            {chart.series?.improved}
          </span>
        </div>
      )}

      <div className="cap-plot" ref={boxRef}>
        {!tableView && (
          <svg
            width={width}
            height={H}
            role="img"
            aria-label={`${chart.title}. ${chart.stat.value} ${chart.stat.label}`}
            tabIndex={0}
            onKeyDown={onKey}
            style={{ display: 'block', outlineOffset: '4px' }}
          >
            {/* Recessive solid hairline grid — never dashed. The grid runs
                across the VALUE axis, which is X for horizontal bars and Y
                for everything else. */}
            {ticks.map((t) =>
              isBars ? (
                <g key={t}>
                  <line x1={pad.left + vw(t)} x2={pad.left + vw(t)} y1={pad.top} y2={pad.top + plotH} className="cap-grid" />
                  <text x={pad.left + vw(t)} y={H - 8} className="cap-tick" textAnchor="middle">
                    {fmt(Math.round(t), chart.unit)}
                  </text>
                </g>
              ) : (
                <g key={t}>
                  <line x1={pad.left} x2={width - pad.right} y1={y(t)} y2={y(t)} className="cap-grid" />
                  <text x={pad.left - 9} y={y(t) + 4} className="cap-tick" textAnchor="end">
                    {fmt(Math.round(t), chart.unit)}
                  </text>
                </g>
              )
            )}

            {chart.type === 'emphasis-lines' ? (
              <>
                {/* The gap between the two lines IS the story, so it is washed
                    in at 10% rather than left as empty space. */}
                <path
                  className="cap-area"
                  d={`${linePath('value')} L${xLine(points.length - 1)},${y(points[points.length - 1].improved ?? 0)} ${points
                    .slice()
                    .reverse()
                    .map((p, i) => `L${xLine(points.length - 1 - i)},${y(p.improved ?? 0)}`)
                    .join(' ')} Z`}
                />
                <path className="cap-line cap-line-muted" d={linePath('value')} pathLength={1} />
                <path className="cap-line cap-line-accent" d={linePath('improved')} pathLength={1} />
                {hover !== null && (
                  <>
                    <line className="cap-crosshair" x1={xLine(hover)} x2={xLine(hover)} y1={pad.top} y2={pad.top + plotH} />
                    <circle className="cap-dot cap-dot-muted" cx={xLine(hover)} cy={y(points[hover].value)} r={4.5} />
                    <circle className="cap-dot cap-dot-accent" cx={xLine(hover)} cy={y(points[hover].improved ?? 0)} r={4.5} />
                  </>
                )}
              </>
            ) : chart.type === 'bars' ? (
              points.map((p, i) => {
                const bandH = plotH / points.length;
                const th = Math.min(BAR_MAX, bandH - 6);
                const by = band(i) + (bandH - th) / 2;
                const bw = Math.max(2, vw(p.value));
                return (
                  <g key={p.label}>
                    <path d={rowPath(pad.left, by, bw, th)} className={`cap-bar${hover === i ? ' is-hovered' : ''}`} />
                    {/* Category name outside the bar — never inside, where a
                        short bar would clip it. */}
                    <text x={pad.left - 8} y={by + th / 2 + 3.5} className="cap-tick" textAnchor="end">
                      {p.short}
                    </text>
                    {/* Bars carry their value at the tip. */}
                    <text x={pad.left + bw + 7} y={by + th / 2 + 3.5} className="cap-value" textAnchor="start">
                      {fmt(p.value, chart.unit)}
                    </text>
                  </g>
                );
              })
            ) : (
              points.map((p, i) => {
                const band = plotW / points.length;
                const th = Math.min(BAR_MAX, band - 10);
                const bh = Math.max(2, (plotH * p.value) / vMax);
                return (
                  <path
                    key={p.label}
                    d={colPath(x(i) - th / 2, pad.top + plotH - bh, th, pad.top + plotH)}
                    className={`cap-bar${hover === i ? ' is-hovered' : ''}`}
                  />
                );
              })
            )}

            {/* The category axis: vertical for horizontal bars, horizontal
                otherwise. Drawn after the marks so bars read as anchored. */}
            {isBars ? (
              <line x1={pad.left} x2={pad.left} y1={pad.top} y2={pad.top + plotH} className="cap-axis" />
            ) : (
              <line x1={pad.left} x2={width - pad.right} y1={pad.top + plotH} y2={pad.top + plotH} className="cap-axis" />
            )}

            {/* Category labels. `short` exists so these never collide on a phone. */}
            {!isBars &&
              points.map((p, i) => (
                <text
                  key={p.label}
                  x={chart.type === 'emphasis-lines' ? xLine(i) : x(i)}
                  y={H - 8}
                  className="cap-tick"
                  textAnchor="middle"
                >
                  {p.short}
                </text>
              ))}

            {/* Hit targets: full bands, far bigger than the marks themselves. */}
            {points.map((p, i) => {
              const step = isBars ? plotH / points.length : plotW / points.length;
              return (
                <rect
                  key={`hit-${p.label}`}
                  x={isBars ? pad.left : pad.left + step * i}
                  y={isBars ? pad.top + step * i : pad.top}
                  width={isBars ? plotW : step}
                  height={isBars ? step : plotH}
                  fill="transparent"
                  onMouseMove={() => setHover(i)}
                />
              );
            })}
          </svg>
        )}

        {/* Tooltips enhance, never gate — the same numbers live in the table. */}
        {!tableView && hovered && (
          <div
            className="cap-tooltip"
            style={{
              left: Math.min(
                Math.max(
                  62,
                  isBars
                    ? pad.left + vw(hovered.value) / 2
                    : chart.type === 'emphasis-lines'
                      ? xLine(hover!)
                      : x(hover!)
                ),
                width - 62
              ),
            }}
          >
            <span className="cap-tooltip-cat">{hovered.label}</span>
            {chart.type === 'emphasis-lines' ? (
              <>
                <span className="cap-tooltip-row">
                  <span className="cap-key cap-key-accent" aria-hidden="true" />
                  <strong>{fmt(hovered.improved ?? 0, chart.unit)}</strong> {chart.series?.improved}
                </span>
                <span className="cap-tooltip-row">
                  <span className="cap-key cap-key-muted" aria-hidden="true" />
                  <strong>{fmt(hovered.value, chart.unit)}</strong> {chart.series?.baseline}
                </span>
              </>
            ) : (
              <span className="cap-tooltip-row">
                <strong>{fmt(hovered.value, chart.unit)}</strong>
              </span>
            )}
          </div>
        )}

        {tableView && (
          <table className="cap-table">
            <thead>
              <tr>
                <th scope="col">{chart.type === 'emphasis-lines' ? 'Month' : 'Stage'}</th>
                {chart.type === 'emphasis-lines' ? (
                  <>
                    <th scope="col">{chart.series?.baseline}</th>
                    <th scope="col">{chart.series?.improved}</th>
                  </>
                ) : (
                  <th scope="col">Value</th>
                )}
              </tr>
            </thead>
            <tbody>
              {points.map((p) => (
                <tr key={p.label}>
                  <th scope="row">{p.label}</th>
                  <td>{fmt(p.value, chart.unit)}</td>
                  {chart.type === 'emphasis-lines' && <td>{fmt(p.improved ?? 0, chart.unit)}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="cap-foot">
        <span>{capabilities.note}</span>
        <button type="button" className="cap-table-toggle" onClick={() => setTableView((v) => !v)}>
          {tableView ? 'Chart view' : 'Table view'}
        </button>
      </div>
    </div>
  );
}
