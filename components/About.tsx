'use client';

import { motion } from 'framer-motion';

const skills = [
  'Python',
  'Django',
  'FastAPI',
  'Flask',
  'LangChain',
  'Hugging Face',
  'OpenAI',
  'Claude',
  'DeepSeek',
  'TensorFlow',
  'PyTorch',
  'React',
  'PostgreSQL',
  'MongoDB',
  'FAISS',
  'Pinecone',
  'Chroma',
  'RAGs',
  'NLP',
  'Computer Vision',
  'LLMs',
  'Agentic AI',
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ marginBottom: '24px' }}>About Me</h2>
            <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
              As an AI Developer with 4+ years of experience, I specialize in designing and deploying end-to-end intelligent systems. My expertise spans machine learning, deep learning, NLP, computer vision, RAGs, Agentic AI, and LLM integration.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
              I've delivered AI products, SaaS applications, and custom MVPs for startups and established businesses. My stack includes Python, Django, FastAPI, Flask, LangChain, HuggingFace, OpenAI, Claude, DeepSeek, TensorFlow, and PyTorch.
            </p>
            <p style={{ lineHeight: 1.8 }}>
              I also offer full-stack development with React, PostgreSQL, MongoDB, and vector databases (FAISS, Pinecone, Chroma). Let me help you build, ship, and scale real-world AI solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', padding: '40px', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '24px', fontSize: '1.25rem' }}>Skills & Technologies</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    style={{
                      padding: '10px 18px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: '8px',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
