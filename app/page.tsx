import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Blog from '@/components/Blog';
import Certifications from '@/components/Certifications';
import Resume from '@/components/Resume';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';
import PixelCat from '@/components/PixelCat';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <Projects />
        <Experience />
        <Publications />
        <Blog />
        <Certifications />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppFloat />
      <BackToTop />
      <PixelCat />
    </>
  );
}
