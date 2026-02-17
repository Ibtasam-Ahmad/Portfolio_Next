'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Chat-Bot & Voice-Bot',
    description: 'Built intelligent Chat-Bot and Voice-Bot systems using LLMs, Eleven Labs, Twilio, and Django for web and call applications. Features include NLP-powered conversation, telephony integration, and seamless user experiences.',
    tags: ['LLMs', 'Eleven Labs', 'Twilio', 'Django', 'NLP'],
    year: '2024',
  },
  {
    id: 2,
    title: 'PDF-Based Custom Chat-Bot',
    description: 'PDF chatbot using Django with text similarity analysis, vector database management, and OpenAI NLP. Parses PDF documents to deliver tailored assistance in legal, educational, and research contexts.',
    tags: ['Django', 'OpenAI', 'NLP', 'Vector DB', 'OCR', 'RAG'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Multimodal RAG Chatbot',
    description: 'Versatile multimodal RAG chatbot handling images, textual documents, freehand sketches, construction sketches, and real-time web search. Combines retrieval and generation for contextually aware responses.',
    tags: ['RAG', 'GPT-4o', 'Llama 3', 'Computer Vision', 'Web Search'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Creator Ranking System',
    description: 'AI system using ML, NLP, and computer vision to predict creator success based on social media data. Analyzes user profiles, posts, interactions, and visual content for ranking.',
    tags: ['NLP', 'LSTM', 'Computer Vision', 'Machine Learning', 'Recommender Systems'],
    year: '2023',
  },
  {
    id: 5,
    title: 'PPE Detection System',
    description: 'Computer vision system for automatic detection of Personal Protective Equipment in images and videos. Improves workplace safety by ensuring compliance with safety regulations.',
    tags: ['Computer Vision', 'Object Detection', 'YOLO', 'Deep Learning'],
    year: '2023',
  },
  {
    id: 6,
    title: 'Neural Network & QLSTM Predictions',
    description: 'Research project comparing LSTM and Quantum LSTM (QLSTM) networks for time series prediction, sentiment analysis, and language modeling tasks.',
    tags: ['LSTM', 'QLSTM', 'Quantum Computing', 'Deep Learning', 'TensorFlow'],
    year: '2023',
  },
  {
    id: 7,
    title: 'Resume Analyzer',
    description: 'NLP and OCR-powered system that extracts and structures information from resumes for recruitment and applicant tracking purposes.',
    tags: ['NLP', 'OCR', 'Python', 'Machine Learning'],
    year: '2022',
  },
  {
    id: 8,
    title: 'Wrong Car Parking Detection',
    description: 'Image processing and recognition system that detects incorrectly parked cars in parking lots and generates alerts for security personnel.',
    tags: ['Computer Vision', 'Image Processing', 'Object Detection', 'Python'],
    year: '2022',
  },
];

export default function Projects() {
  return (
    <section id="work" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h2>Projects</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            A selection of AI/ML projects showcasing expertise in generative AI, NLP, computer vision, and full-stack development.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--bg-tertiary)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              whileHover={{ y: -8, borderColor: 'var(--text-muted)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{project.year}</span>
                <div style={{ width: '48px', height: '48px', background: 'var(--bg-secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              <h3 style={{ marginBottom: '12px' }}>{project.title}</h3>
              <p style={{ fontSize: '1rem', marginBottom: '24px', lineHeight: 1.7 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '6px 12px',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
