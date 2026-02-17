'use client';

import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Agentic AI: Key Terms You Should Know',
    category: 'AI',
    date: 'Mar 12, 2025',
    excerpt: 'A clear breakdown of the core terms used in discussing autonomous, decision-making AI systems.',
    link: 'https://medium.com/@shibtasam/agentic-ai-key-terms-you-should-know-42758ff4dab0',
  },
  {
    id: 2,
    title: 'Exploring the Landscape of Multiple LLMs',
    category: 'AI',
    date: 'Feb 14, 2025',
    excerpt: 'An overview of top language model providers and the strengths of each ecosystem.',
    link: 'https://medium.com/@shibtasam/exploring-the-landscape-of-multiple-large-language-models-24dd2ec27ad8',
  },
  {
    id: 3,
    title: 'Advanced Prompting Techniques for LLMs',
    category: 'AI',
    date: 'Dec 2, 2024',
    excerpt: 'Delving into techniques like Least-to-Most Prompting to boost LLM output quality.',
    link: 'https://medium.com/@shibtasam/beyond-the-basics-advanced-prompting-techniques-for-llms-619df4919223',
  },
  {
    id: 4,
    title: 'Advanced Retrieval-Augmented Generation',
    category: 'AI',
    date: 'Sep 19, 2024',
    excerpt: 'A deep dive into state-of-the-art RAG methods and how to implement them effectively.',
    link: 'https://medium.com/@shibtasam/exploring-advanced-retrieval-augmented-generation-techniques-a-comprehensive-guide-to-standard-b025d37c7932',
  },
  {
    id: 5,
    title: 'Master OOP in Minutes',
    category: 'Programming',
    date: 'May 11, 2024',
    excerpt: 'A compact guide to encapsulation, abstraction, inheritance, and polymorphism.',
    link: 'https://medium.com/@shibtasam/master-oop-in-minutes-a-crash-course-on-encapsulation-abstraction-inheritance-polymorphism-99b3929d17b8',
  },
  {
    id: 6,
    title: 'Quantum Gates, A Brief Introduction',
    category: 'Quantum Computing',
    date: 'Aug 28, 2023',
    excerpt: 'Understand how quantum gates manipulate qubit states in basic quantum circuits.',
    link: 'https://medium.com/@shibtasam/quantum-gates-a-brief-introduction-1a39085bea57',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h2>Blog</h2>
          <p style={{ marginTop: '16px', maxWidth: '500px' }}>
            Articles on AI, Machine Learning, and Technology.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 500 }}>{blog.category}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>{blog.date}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.4 }}>{blog.title}</h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {blog.excerpt}
              </p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
