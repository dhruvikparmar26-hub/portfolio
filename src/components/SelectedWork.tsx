import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { MomentumVisual } from './visuals/MomentumVisual';
import { JourneysVisual } from './visuals/JourneysVisual';
import { VisionCaptionVisual } from './visuals/VisionCaptionVisual';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<string>('01');

  const renderVisual = (type: string) => {
    switch (type) {
      case 'realtime':
        return <MomentumVisual />;
      case 'agent-orchestration':
        return <JourneysVisual />;
      case 'vision-attention':
        return <VisionCaptionVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="relative py-28 sm:py-36 border-t border-[rgba(120,150,200,0.15)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#58D6FF] uppercase font-semibold">
            02 — SELECTED WORK
          </span>
          <div className="h-[1px] flex-1 bg-[rgba(120,150,200,0.15)]" />
          <span className="text-[10px] font-mono tracking-widest text-[#66738A]">SYSTEMS & ARCHITECTURE</span>
        </div>

        {/* Section Intro Statement */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F4F5F7] tracking-tight leading-[1.1]">
            Curated Engineering Projects & AI Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A8B2C5] font-light leading-relaxed">
            Production-style applications bridging high-concurrency Node.js architectures,
            multi-agent LangGraph orchestrators, and explainable deep learning pipelines.
          </p>
        </div>

        {/* Video-Inspired Interactive Quick Selector / Index Bar */}
        <div className="mb-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PROJECTS.map((proj) => {
            const isSelected = activeProjectTab === proj.number;
            return (
              <a
                key={proj.number}
                href={`#project-${proj.number}`}
                onClick={() => setActiveProjectTab(proj.number)}
                className={`p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#58D6FF] bg-[#071329] shadow-[0_0_20px_rgba(88,214,255,0.12)]'
                    : 'border-[rgba(120,150,200,0.18)] bg-[#071329]/40 hover:bg-[#071329] hover:border-[rgba(120,150,200,0.4)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#58D6FF] tracking-wider">
                    Project-{parseInt(proj.number, 10)}
                  </span>
                  <span className="text-[10px] font-mono text-[#66738A]">{proj.date}</span>
                </div>
                <div className="mt-3">
                  <h4 className="text-lg font-serif text-[#F4F5F7] font-medium">{proj.title}</h4>
                  <span className="text-xs font-mono text-[#FFB36B] block mt-0.5">{proj.category}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Projects Editorial Showcase */}
        <div className="space-y-32 sm:space-y-44">
          {PROJECTS.map((project, index) => {
            // Alternating layouts as specified:
            // 01: Visual Left, Text Right
            // 02: Text Left, Visual Right
            // 03: Visual Left, Text Right
            const isVisualLeft = index % 2 === 0;

            return (
              <div
                key={project.number}
                id={`project-${project.number}`}
                className="project-card relative scroll-mt-32"
                data-cursor="view"
              >
                {/* Large Background Watermark Number */}
                <div className="absolute -top-14 right-4 text-7xl sm:text-9xl font-serif font-light text-[rgba(120,150,200,0.06)] select-none pointer-events-none">
                  {project.number}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Visual Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-6 ${
                      isVisualLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {renderVisual(project.architectureType)}
                  </motion.div>

                  {/* Editorial Text Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isVisualLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Top Metadata */}
                    <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#FFB36B] uppercase mb-2">
                      <span>PROJECT {project.number}</span>
                      <span>/</span>
                      <span className="text-[#A8B2C5]">{project.category}</span>
                      <span>/</span>
                      <span className="text-[#66738A]">{project.date}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F4F5F7] font-light leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg font-mono text-[#58D6FF] mt-1 font-medium">
                      {project.subtitle}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#071329] border border-[rgba(120,150,200,0.2)] text-[11px] font-mono text-[#A8B2C5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Full Resume Description Bullets */}
                    <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-[#A8B2C5] font-light leading-relaxed border-t border-[rgba(120,150,200,0.15)] pt-6">
                      {project.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#58D6FF] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Project Action Links (Exact URLs preserved) */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#58D6FF] text-[#030817] font-mono text-xs tracking-wider font-semibold hover:bg-[#58D6FF]/90 transition-all shadow-[0_0_15px_rgba(88,214,255,0.25)] group"
                        >
                          <span>LAUNCH PROJECT</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-[rgba(120,150,200,0.3)] bg-[#071329]/80 text-[#F4F5F7] font-mono text-xs tracking-wider hover:border-[#58D6FF] hover:bg-[#071329] transition-all group"
                        >
                          <Github className="w-4 h-4 text-[#58D6FF]" />
                          <span>SOURCE CODE</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#A8B2C5] group-hover:text-[#58D6FF] transition-colors" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
