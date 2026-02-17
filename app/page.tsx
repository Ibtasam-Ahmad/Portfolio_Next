import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Blog from '@/components/Blog';
import Certifications from '@/components/Certifications';
import Resume from '@/components/Resume';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Experience />
        <Publications />
        <Blog />
        <Certifications />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
