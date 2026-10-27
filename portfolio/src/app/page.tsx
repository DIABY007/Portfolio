import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
// Chatbot Botpress est intégré dans le layout.tsx
// import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
      {/* Chatbot Botpress est intégré dans le layout.tsx */}
    </main>
  );
}
