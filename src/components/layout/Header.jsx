import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  const handleMobileHomeClick = (e) => {
    handleHomeClick(e);
    closeMobileMenu();
  };

  useEffect(() => {
    if (window.location.hash === '#home') {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 glass bg-white/80 dark:bg-[#08090a]/80 border-b border-black/5 dark:border-white/[0.08] backdrop-blur-2xl shadow-sm'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="/"
            onClick={handleHomeClick}
            className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform duration-300"></span>
            <span className="tracking-tighter font-extrabold">ANURAJ.P</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            <a
              href="/"
              onClick={handleHomeClick}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
            <ThemeToggle id="theme-toggle" isDark={isDark} toggleTheme={toggleTheme} />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle
              id="theme-toggle-mobile"
              isDark={isDark}
              toggleTheme={toggleTheme}
              className="p-2 text-indigo-600 dark:text-yellow-400"
            />
            <button id="menu-toggle" onClick={toggleMobileMenu} className="p-2 text-slate-900 dark:text-slate-100">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-center justify-center gap-8`}
      >
        <button id="menu-close" onClick={closeMobileMenu} className="absolute top-6 right-6 text-white">
          <X className="w-8 h-8" />
        </button>
        <a
          href="/"
          onClick={handleMobileHomeClick}
          className="mob-link text-3xl font-extrabold text-white tracking-tighter"
        >
          Home
        </a>
        <a href="#about" onClick={closeMobileMenu} className="mob-link text-3xl font-extrabold text-white tracking-tighter">
          About
        </a>
        <a href="#experience" onClick={closeMobileMenu} className="mob-link text-3xl font-extrabold text-white tracking-tighter">
          Experience
        </a>
        <a href="#projects" onClick={closeMobileMenu} className="mob-link text-3xl font-extrabold text-white tracking-tighter">
          Projects
        </a>
        <a href="#contact" onClick={closeMobileMenu} className="mob-link text-3xl font-extrabold text-white tracking-tighter">
          Contact
        </a>
      </div>
    </>
  );
}
