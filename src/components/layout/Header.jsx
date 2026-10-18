import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { scrollToSection } from '../../utils/scroll';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Header({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sectionIds = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 180;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove any hash on initial mount or page refresh and scroll smoothly to target if specified
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      window.history.replaceState(null, '', window.location.pathname);
      if (targetId) {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 100);
      }
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigate = (sectionId) => {
    scrollToSection(sectionId);
  };

  const handleMobileNavigate = (sectionId) => {
    closeMobileMenu();
    scrollToSection(sectionId);
  };

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
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform duration-300"></span>
            <span className="tracking-tighter font-extrabold">ANURAJ.P</span>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-indigo-600 dark:text-white font-extrabold'
                      : 'text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <ThemeToggle id="theme-toggle" isDark={isDark} toggleTheme={toggleTheme} />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle
              id="theme-toggle-mobile"
              isDark={isDark}
              toggleTheme={toggleTheme}
              className="p-2 text-indigo-600 dark:text-yellow-400"
            />
            <button id="menu-toggle" onClick={toggleMobileMenu} className="p-2 text-slate-900 dark:text-slate-100 focus:outline-none">
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
        <button id="menu-close" onClick={closeMobileMenu} className="absolute top-6 right-6 text-white focus:outline-none">
          <X className="w-8 h-8" />
        </button>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleMobileNavigate(item.id)}
              className={`mob-link text-3xl font-extrabold tracking-tighter cursor-pointer transition-colors focus:outline-none ${
                isActive
                  ? 'text-indigo-400'
                  : 'text-white hover:text-indigo-300'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </>
  );
}
