import React, { useState, useMemo } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SectionTitle from '../ui/SectionTitle';

const TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'code', label: 'Code Projects' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const counts = useMemo(
    () => ({
      all: projects.length,
      wordpress: projects.filter((p) => p.type === 'wordpress').length,
      code: projects.filter((p) => p.type === 'code').length,
    }),
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-indigo-500/[0.02] reveal">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my most impactful work spanning different ecosystems."
          center
        />

        {/* Modern Interactive Filter Tabs */}
        <div className="flex justify-center items-center mt-8 mb-12 sm:mb-14">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex items-center p-1.5 sm:p-2 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.08] backdrop-blur-2xl shadow-inner gap-1 sm:gap-2 max-w-full overflow-x-auto"
          >
            {TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls="projects-grid"
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 flex items-center gap-2 select-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span
                    className={`relative z-10 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-black/5 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {counts[tab.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComponent = Icons[project.icon] || Icons.Globe;
              const ExternalLinkIcon = Icons.ExternalLink;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="h-full"
                >
                  <Card
                    className="group rounded-[28px] overflow-hidden border border-black/5 dark:border-white/[0.08] hover:border-indigo-500/30 backdrop-blur-xl transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="h-60 overflow-hidden relative bg-[#08090a] shrink-0">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/90 via-[#08090a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-semibold text-xs flex items-center gap-2 transition-all"
                          >
                            Visit Website <ExternalLinkIcon className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <button className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold text-xs flex items-center gap-2">
                            View Details <ExternalLinkIcon className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="p-7 space-y-3.5 flex flex-col flex-1">
                      <div className="flex justify-between items-center">
                        <Badge variant="project">
                          {project.category}
                        </Badge>
                        <div className="text-indigo-400">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-normal mt-auto">
                        {project.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
