import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const experiences = [
  {
    role: "Web Developer",
    company: "BackB Digital Solutions",
    period: "Currently Working",
    location: "Hilite Business Park, Calicut, Kerala",
    description: "Developing responsive websites, e-commerce solutions, and managing backend systems using PHP, MySQL, and modern web technologies.",
    highlights: [
      "Convert Figma designs into responsive and user-friendly websites",
      "Build interfaces using HTML, CSS, and JavaScript",
      "Develop and manage backend functionality using PHP and MySQL to support dynamic website features",
      "Optimize website performance, security, and user experience",
      "Troubleshoot technical issues and plugin conflicts",
      "Implement eCommerce solutions including payment gateway integration"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="container mx-auto px-6">
        <SectionTitle
          title={
            <>
              Work <span className="text-indigo-500">Experience.</span>
            </>
          }
          subtitle="Hands-on web development experience delivering client solutions, custom WordPress themes, and e-commerce platforms."
          center
        />

        <div className="max-w-4xl mx-auto space-y-8 mt-12">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-7 sm:p-9 rounded-[28px] relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-black/5 dark:border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-bold shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="text-indigo-400 font-medium text-sm mt-0.5">{exp.company} • <span className="text-slate-400 font-normal">{exp.location}</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="indigo" className="py-1 px-3.5">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {exp.period}
                  </Badge>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/[0.05]">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

