'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Python / AI Developer',
    company: 'Infolyze Solutions',
    location: 'Lahore, Pakistan',
    period: 'May 2025 - Present',
    description: [
      'Built AI pipelines including data ingestion, LLM fine-tuning (LLaMA 3.2, Unsloth), and vector indexing (FAISS, Chroma)',
      'Designed and deployed RAG pipelines for report generation and contextual chatbots, reducing manual reporting by 60%',
      'Automated property insights using BigQuery and summarization agents, improving turnaround by 40%',
      'Developed multi-agent AI architectures for reasoning, planning, and executing complex workflows',
      'Delivered SaaS/Micro-SaaS apps including resume analyzers, OCR tools, and real-time translators',
      'Integrated AI models into full-stack apps (Django, Flask, FastAPI)',
    ],
  },
  {
    id: 2,
    role: 'Python / AI Developer',
    company: 'DigiMark Developers',
    location: 'Lahore, Pakistan',
    period: 'Mar 2024 - May 2025',
    description: [
      'Delivered custom chatbots and voicebots using RAG and generative AI models deployed in production',
      'Designed web applications and APIs (Django REST, Flask, FastAPI) integrating AI pipelines',
      'Developed ML/DL workflows for NLP, CV, and time series analysis',
      'Applied LLMs (OpenAI, Hugging Face) for automated content creation and knowledge extraction',
      'Built hybrid search solutions using SQL and vector databases (Pinecone, FAISS, Chroma)',
    ],
  },
  {
    id: 3,
    role: 'Junior Python / AI Developer',
    company: 'Expert System Solution',
    location: 'Lahore, Pakistan',
    period: 'Aug 2023 - Mar 2024',
    description: [
      'Developed AI solutions with Python/Django, NumPy, Pandas, scikit-learn, Keras, PyTorch',
      'Delivered OCR and LSTM-based prediction tools automating manual data tasks',
      'Contributed to database-backed AI apps using SQL/MySQL',
    ],
  },
  {
    id: 4,
    role: 'AI Intern',
    company: 'ZS Study Advisors',
    location: 'Lahore, Pakistan',
    period: 'Jul 2023 - Aug 2023',
    description: [
      'Implemented prototype AI solutions for NLP and CV tasks',
      'Supported early-stage adoption of automation in operations',
    ],
  },
  {
    id: 5,
    role: 'Demonstrator',
    company: 'CHEP, University of the Punjab',
    location: 'Lahore, Pakistan',
    period: 'Sep 2022 - Jul 2023',
    description: [
      'Guided students in FYPs, assignments, and AI/physics projects',
      'Assisted with grading, classroom projects, and hands-on demonstrations',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h2>Experience</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            4+ years of experience building production-ready AI systems and full-stack applications.
          </p>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          <div style={{ position: 'absolute', left: '7px', top: '0', bottom: '0', width: '2px', background: 'var(--border)' }} />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ position: 'relative', marginBottom: '40px' }}
            >
              <div style={{ position: 'absolute', left: '-29px', top: '4px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent)', border: '3px solid var(--bg-primary)' }} />
              
              <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', padding: '28px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '12px', gap: '8px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{exp.role}</h3>
                    <p style={{ color: 'var(--accent)', fontSize: '1rem' }}>{exp.company}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '4px' }}>{exp.location}</p>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '16px' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: 1.7 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
