import { useEffect } from 'react';
import Lenis from 'lenis';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Github from './components/Github';
import Hackathon from './components/Hackathon';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Hide default cursor on desktop
    if (window.innerWidth >= 768) {
      document.body.style.cursor = 'none';
    }

    // Initialize Lenis for ultra-smooth scrolling physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links for smooth scrolling via Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        lenis.scrollTo(target.hash);
      }
    };
    
    document.addEventListener('click', handleAnchorClick);

    // Provide lenis instance to global window so navigation clicks can use it natively
    window.lenis = lenis;

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <ParticleBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />     
        <About />
  <Skills />
        <Education />
      
        <Projects />
        <Github />
        <Hackathon />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
