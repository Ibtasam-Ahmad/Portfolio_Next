import content from '@/data/content.json';

/**
 * One source of truth for everything a crawler reads.
 *
 * Every value here is derived from data/content.json rather than restated, so
 * the structured data can never quietly disagree with the page it describes —
 * which is the failure mode Google penalises. Editing a job title, a skill or
 * a social link in the content file updates the markup with it.
 *
 * The canonical origin is the ONE thing that cannot be inferred. It reads from
 * NEXT_PUBLIC_SITE_URL when present (so preview and production deploys emit
 * their own canonical), and falls back to `site.url` in content.json.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || content.site.url
).replace(/\/$/, '');

const { site, about, services, publications, blog, certifications, resume, experience } = content;

/** Absolute URL for a site-relative path — schema.org wants absolute, always. */
export function absolute(path = '/'): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

/** Every named technology across the Tech Stack, flattened and de-duplicated.
 *  Feeds `knowsAbout`, which is how a Person entity states its expertise. */
function knowsAbout(): string[] {
  return Array.from(new Set(about.skillGroups.flatMap((g) => g.skills)));
}

/** Roles become Organization references so employment history is machine-readable. */
function pastEmployers() {
  return Array.from(new Set(experience.map((e) => e.company)))
    .filter((name) => name !== site.worksFor.name)
    .map((name) => ({ '@type': 'Organization', name }));
}

/** Certifications as credentials, each attributed to its issuing body. */
function credentials() {
  return certifications.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c.title,
    credentialCategory: 'certificate',
    dateCreated: c.year,
    recognizedBy: { '@type': 'Organization', name: c.issuer },
  }));
}

/** Services as a priced-elsewhere offer catalogue — the entity a "hire an AI
 *  engineer" query is actually looking for. */
function offerCatalog() {
  return {
    '@type': 'OfferCatalog',
    name: 'AI engineering and full-stack development services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
        provider: { '@id': absolute('#person') },
        areaServed: 'Worldwide',
      },
    })),
  };
}

const person = {
  '@type': 'Person',
  '@id': absolute('#person'),
  name: site.name,
  url: absolute(),
  jobTitle: site.jobTitle,
  description: site.description,
  email: `mailto:${site.email}`,
  image: absolute('opengraph-image'),
  knowsAbout: knowsAbout(),
  knowsLanguage: ['en', 'ur'],
  sameAs: site.sameAs,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.country,
  },
  worksFor: { '@type': 'Organization', name: site.worksFor.name },
  alumniOf: site.alumniOf.map((a) => ({
    '@type': 'CollegeOrUniversity',
    name: a.name,
    url: a.url,
  })),
  hasOccupation: {
    '@type': 'Occupation',
    name: site.jobTitle,
    occupationLocation: { '@type': 'City', name: site.location.city },
    skills: knowsAbout().join(', '),
  },
  hasCredential: credentials(),
  makesOffer: offerCatalog().itemListElement,
  ...(pastEmployers().length ? { affiliation: pastEmployers() } : {}),
};

const website = {
  '@type': 'WebSite',
  '@id': absolute('#website'),
  url: absolute(),
  name: site.title,
  description: site.description,
  inLanguage: site.language,
  publisher: { '@id': absolute('#person') },
  copyrightHolder: { '@id': absolute('#person') },
};

/** ProfilePage is the correct page type for a personal portfolio; it tells a
 *  crawler the page IS the person rather than merely mentioning them. */
const profilePage = {
  '@type': 'ProfilePage',
  '@id': absolute('#webpage'),
  url: absolute(),
  name: site.title,
  description: site.description,
  inLanguage: site.language,
  isPartOf: { '@id': absolute('#website') },
  about: { '@id': absolute('#person') },
  mainEntity: { '@id': absolute('#person') },
};

/** The arXiv preprint. Real, citable, and the strongest authority signal here. */
const scholarlyArticles = publications.map((p) => ({
  '@type': 'ScholarlyArticle',
  '@id': p.link,
  headline: p.title,
  name: p.title,
  author: p.authorList.map((name) => ({ '@type': 'Person', name })),
  datePublished: p.datePublished,
  url: p.link,
  sameAs: p.link,
  publisher: { '@type': 'Organization', name: 'arXiv' },
  keywords: p.tags.join(', '),
  isPartOf: { '@type': 'Periodical', name: 'arXiv' },
}));

/** Articles live on Medium, so each entry points `url` at the canonical host
 *  and claims authorship only — never that the text is on this page. */
const blogPostings = {
  '@type': 'ItemList',
  '@id': absolute('#articles'),
  name: content.sections.blog.heading,
  itemListElement: blog.map((post, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'BlogPosting',
      headline: post.title,
      abstract: post.excerpt,
      datePublished: post.datePublished,
      url: post.link,
      mainEntityOfPage: post.link,
      author: { '@id': absolute('#person') },
      articleSection: post.category,
    },
  })),
};

const educationalCredentials = resume.education.map((e) => ({
  '@type': 'EducationalOccupationalCredential',
  name: e.degree,
  description: e.note,
  recognizedBy: { '@type': 'CollegeOrUniversity', name: e.school },
}));

/** The complete graph, emitted as a single <script type="application/ld+json">.
 *  @graph with @id cross-references is the form Google recommends over several
 *  disconnected blocks: the entities are explicitly linked rather than guessed. */
export function jsonLdGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...person, hasCredential: [...credentials(), ...educationalCredentials] },
      website,
      profilePage,
      blogPostings,
      ...scholarlyArticles,
    ],
  };
}
