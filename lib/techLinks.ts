/**
 * Canonical destination for every technology named in the Tech Stack (About)
 * and in the project tag lists.
 *
 * Products point at their own homepage or docs; concepts that have no vendor
 * (RAG, NLP, Agentic AI…) point at the closest thing to a canonical reference.
 *
 * Keys are lowercased — look them up through `techLink()`, never directly, so
 * casing in content.json never has to match this file. A label with no entry
 * renders as a plain, unlinked chip, so adding a tag to content.json can never
 * break the build or produce a dead link.
 */
const TECH_LINKS: Record<string, string> = {
  // ── Languages & core AI/ML ──
  python: 'https://www.python.org',
  openai: 'https://openai.com',
  chatgpt: 'https://chatgpt.com',
  'gpt-4o': 'https://openai.com/index/hello-gpt-4o/',
  claude: 'https://www.anthropic.com/claude',
  gemini: 'https://gemini.google.com',
  'google ai': 'https://ai.google.dev',
  deepseek: 'https://www.deepseek.com',
  llama: 'https://www.llama.com',
  'llama 3': 'https://www.llama.com',
  'hugging face': 'https://huggingface.co',
  langchain: 'https://www.langchain.com',
  langgraph: 'https://langchain-ai.github.io/langgraph/',
  tensorflow: 'https://www.tensorflow.org',
  pytorch: 'https://pytorch.org',
  unsloth: 'https://unsloth.ai',
  abacusai: 'https://abacus.ai',

  // ── Mathematics & theory ──
  'linear algebra': 'https://en.wikipedia.org/wiki/Linear_algebra',
  'probability & statistics': 'https://en.wikipedia.org/wiki/Statistics',
  optimization: 'https://en.wikipedia.org/wiki/Mathematical_optimization',
  'numerical methods': 'https://en.wikipedia.org/wiki/Numerical_analysis',
  'time series analysis': 'https://en.wikipedia.org/wiki/Time_series',
  'quantum machine learning': 'https://en.wikipedia.org/wiki/Quantum_machine_learning',

  // ── Concepts (no vendor — canonical reference instead) ──
  rag: 'https://arxiv.org/abs/2005.11401',
  'agentic ai': 'https://platform.openai.com/docs/guides/agents',
  'multi-agent': 'https://en.wikipedia.org/wiki/Multi-agent_system',
  llms: 'https://en.wikipedia.org/wiki/Large_language_model',
  nlp: 'https://en.wikipedia.org/wiki/Natural_language_processing',
  'computer vision': 'https://en.wikipedia.org/wiki/Computer_vision',
  ml: 'https://en.wikipedia.org/wiki/Machine_learning',
  lstm: 'https://en.wikipedia.org/wiki/Long_short-term_memory',
  'recommender systems': 'https://en.wikipedia.org/wiki/Recommender_system',

  // ── Backend & APIs ──
  django: 'https://www.djangoproject.com',
  'django rest': 'https://www.django-rest-framework.org',
  fastapi: 'https://fastapi.tiangolo.com',
  flask: 'https://flask.palletsprojects.com',
  celery: 'https://docs.celeryq.dev',
  twilio: 'https://www.twilio.com',
  vapi: 'https://vapi.ai',

  // ── Frontend ──
  react: 'https://react.dev',
  'next.js': 'https://nextjs.org',
  streamlit: 'https://streamlit.io',
  'tailwind css': 'https://tailwindcss.com',

  // ── Databases & vector stores ──
  postgresql: 'https://www.postgresql.org',
  mysql: 'https://www.mysql.com',
  mongodb: 'https://www.mongodb.com',
  faiss: 'https://faiss.ai',
  pinecone: 'https://www.pinecone.io',
  chroma: 'https://www.trychroma.com',
  bigquery: 'https://cloud.google.com/bigquery',

  // ── Cloud & DevOps ──
  docker: 'https://www.docker.com',
  aws: 'https://aws.amazon.com',
  azure: 'https://azure.microsoft.com',
  'github actions': 'https://github.com/features/actions',
  vercel: 'https://vercel.com',

  // ── AI dev tools ──
  cursor: 'https://cursor.com',
  'claude code': 'https://docs.claude.com/en/docs/claude-code/overview',
  'github copilot': 'https://github.com/features/copilot',
  'openai codex': 'https://openai.com/codex/',
  windsurf: 'https://windsurf.com',
};

export function techLink(label: string): string | undefined {
  return TECH_LINKS[label.trim().toLowerCase()];
}
