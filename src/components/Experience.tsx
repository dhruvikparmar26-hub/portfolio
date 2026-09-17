import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, Bug, Layers, Radio } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-[rgba(120,150,200,0.15)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#FFB36B] uppercase font-semibold">
            PROFESSIONAL PRACTICE
          </span>
          <div className="h-[1px] flex-1 bg-[rgba(120,150,200,0.15)]" />
          <span className="text-[10px] font-mono tracking-widest text-[#66738A]">EXPERIENCE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#F4F5F7] tracking-tight leading-tight">
              Production Engineering & Systems Stability
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A8B2C5] font-light leading-relaxed">
              Real-world engineering impact across adaptive learning platforms, addressing critical
              system stability, real-time event streaming, and API architecture.
            </p>

            <div className="mt-8 p-4 rounded border border-[rgba(120,150,200,0.2)] bg-[#071329]/60">
              <span className="text-[10px] font-mono tracking-widest text-[#58D6FF] uppercase block">
                CORE FOCUS
              </span>
              <p className="mt-1 text-xs text-[#A8B2C5]">
                Full-stack development, adaptive PLMS, WebSocket notifications, UI consistency & debugging.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline Card */}
          <div className="lg:col-span-8">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-lg border border-[rgba(120,150,200,0.2)] bg-[#071329]/90 p-8 sm:p-10 backdrop-blur-sm"
              >
                {/* Decorative header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(120,150,200,0.15)] gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#58D6FF]/15 text-[#58D6FF] border border-[#58D6FF]/30 tracking-wider">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-[#66738A]">ID // EXP-01</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F7] font-normal">
                      {exp.role}
                    </h3>
                    <p className="text-base text-[#FFB36B] font-medium mt-0.5">{exp.company}</p>
                  </div>

                  <div className="sm:text-right text-xs font-mono text-[#A8B2C5] space-y-1">
                    <div className="flex sm:justify-end items-center gap-1.5 text-[#58D6FF]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex sm:justify-end items-center gap-1.5 text-[#66738A]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle / summary */}
                <div className="py-4 text-sm font-mono text-[#A8B2C5] border-b border-[rgba(120,150,200,0.12)]">
                  {exp.summary}
                </div>

                {/* Key Achievements & Work Items */}
                <div className="mt-6 space-y-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#66738A] uppercase block">
                    ENGINEERING CONTRIBUTIONS & RESOLUTIONS
                  </span>

                  <ul className="space-y-3.5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#A8B2C5] leading-relaxed">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#58D6FF] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack used in experience */}
                <div className="mt-8 pt-6 border-t border-[rgba(120,150,200,0.15)] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#66738A] uppercase mr-2">
                    TECHNOLOGIES:
                  </span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#030817] border border-[rgba(120,150,200,0.2)] text-[11px] font-mono text-[#F4F5F7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
