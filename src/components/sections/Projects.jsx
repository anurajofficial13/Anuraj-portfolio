import React from 'react';
import * as Icons from 'lucide-react';
import { projects } from '../../data/projects';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SectionTitle from '../ui/SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="bg-indigo-500/[0.02] reveal">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my most impactful work spanning different ecosystems."
          center
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8" id="projects-grid">
          {projects.map((project, idx) => {
            const IconComponent = Icons[project.icon] || Icons.Globe;
            const ExternalLinkIcon = Icons.ExternalLink;

            return (
              <Card
                key={idx}
                className="group rounded-[28px] overflow-hidden border border-black/5 dark:border-white/[0.08] hover:border-indigo-500/30 backdrop-blur-xl transition-all duration-500"
              >
                <div className="h-60 overflow-hidden relative bg-[#08090a]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
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
                <div className="p-7 space-y-3.5">
                  <div className="flex justify-between items-center">
                    <Badge variant="project">
                      {project.category}
                    </Badge>
                    <div className="text-indigo-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                    {project.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
