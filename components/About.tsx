'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'AI / ML / GenAI',
    skills: ['Python', 'OpenAI', 'LangChain', 'LangGraph', 'LLaMA', 'Claude', 'DeepSeek', 'Hugging Face', 'TensorFlow', 'PyTorch', 'RAG', 'NLP', 'Computer Vision', 'Agentic AI', 'Unsloth'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Django', 'FastAPI', 'Flask', 'Django REST', 'Celery'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Streamlit', 'Tailwind CSS'],
  },
  {
    label: 'Databases & Vector Stores',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'FAISS', 'Pinecone', 'Chroma', 'BigQuery'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['Docker', 'AWS', 'Azure', 'GitHub Actions', 'Vercel'],
  },
  {
    label: 'AI Dev Tools',
    skills: ['Cursor', 'Claude Code', 'GitHub Copilot', 'OpenAI Codex', 'ChatGPT', 'Windsurf'],
  },
];

const highlights = [
  { icon: '⚡', text: '25+ AI systems shipped to production' },
  { icon: '💰', text: '40–70% cost reduction for clients on average' },
  { icon: '🔬', text: 'Published researcher on arXiv (LSTM vs QLSTM)' },
  { icon: '🌐', text: '23K+ LinkedIn followers in the AI community' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'start' }}>
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">One Developer.<br />Full Stack. All AI.</h2>

            <p style={{ marginBottom: '20px', lineHeight: 1.85 }}>
              I work with startups and businesses who need one person to handle everything — UI design, backend development, AI integration, and deployment. No agencies, no handoffs, no &quot;that&apos;s not my part.&quot;
            </p>
            <p style={{ marginBottom: '20px', lineHeight: 1.85 }}>
              With 4+ years building production AI systems, I&apos;ve delivered intelligent chatbots, automation pipelines, SaaS platforms, and multi-agent systems for 100+ clients across healthcare, real estate, e-commerce, and finance.
            </p>
            <p style={{ marginBottom: '20px', lineHeight: 1.85 }}>
              My background in Computational Physics means I approach problems with scientific rigor — and my published research on Quantum ML demonstrates I push boundaries beyond standard solutions.
            </p>
            <p style={{ marginBottom: '36px', lineHeight: 1.85 }}>
              I also build with the latest AI development tools — Cursor, Claude Code, GitHub Copilot, and OpenAI Codex — meaning I ship faster and smarter than traditional development workflows, passing the efficiency gains directly to my clients.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
                >
                  <span style={{ fontSize: '1.125rem', width: '28px', textAlign: 'center' }}>{h.icon}</span>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', margin: 0 }}>{h.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '36px' }}>
              <h3 style={{ marginBottom: '24px', fontSize: '1.125rem', color: 'var(--text-primary)' }}>Tech Stack</h3>
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="skill-group-label">{group.label}</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: '6px 13px',
                          background: 'var(--bg-tertiary)',
                          borderRadius: '8px',
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border)',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
