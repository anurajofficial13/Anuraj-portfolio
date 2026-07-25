import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Cursor from './components/layout/Cursor';
import useTheme from './hooks/useTheme';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  // Initialize scroll reveal observer
  useScrollReveal();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setSpotlightPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <Cursor />

      {/* Interactive Mouse Spotlight Overlay */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(650px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
        }}
      ></div>

      {/* Aurora Gradient Background (Continuous 18s Loop) */}
      <div className="fixed inset-0 -z-20 bg-grid-pattern opacity-[0.35] pointer-events-none"></div>
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 -z-20 w-[1000px] h-[550px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-aurora"></div>
      <div className="fixed bottom-0 right-0 -z-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none animate-aurora"></div>

      {/* Layout Components */}
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
