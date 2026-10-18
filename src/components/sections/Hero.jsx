import React, { useState, useEffect } from 'react';
import { ChevronRight, Layers } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { scrollToSection } from '../../utils/scroll';

export default function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)`
            }}
          >
            <Badge variant="indigo">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
              Web Developer & <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">WordPress, WooCommerce & Shopify</span> Specialist.
            </h1>
            <p className="text-base sm:text-lg max-w-lg leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
              Web Developer with hands-on experience in WordPress, WooCommerce, Shopify, and custom web development. Skilled in PHP, MySQL, HTML, CSS, JavaScript, Figma, Canva, and Photopea.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Button onClick={() => scrollToSection('projects')} variant="primary" className="group">
                View Projects{' '}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>

          <div
            className="relative group max-w-sm lg:max-w-md mx-auto w-full animate-float transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${parallaxOffset.x * -0.6}px, ${parallaxOffset.y * -0.6}px, 0)`
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-black/10 dark:border-white/[0.08] bg-[#0f1117] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
                alt="Anuraj P Web Development Workspace"
                className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-5 left-5 right-5 p-5 glass-linear rounded-2xl border border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm tracking-tight">Full-Stack Core</div>
                    <div className="text-slate-400 text-[11px] font-medium">WordPress • WooCommerce • Shopify</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
