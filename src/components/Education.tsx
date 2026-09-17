import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 sm:py-28 border-t border-[rgba(120,150,200,0.15)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-xs font-mono tracking-[0.25em] text-[#58D6FF] uppercase font-semibold">
            ACADEMIC PEDIGREE
          </span>
          <div className="h-[1px] flex-1 bg-[rgba(120,150,200,0.15)]" />
          <span className="text-[10px] font-mono tracking-widest text-[#66738A]">EDUCATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#F4F5F7] tracking-tight">
              Rigorous Foundations in Computer Science & AI
            </h2>
            <p className="mt-4 text-sm text-[#A8B2C5] font-light leading-relaxed">
              Academic excellence marked by top national percentiles and dedicated specialization in
              Adaptive AI, systems programming, and algorithmic design at Nirma University.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {EDUCATION.map((item, idx) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-lg border border-[rgba(120,150,200,0.18)] bg-[#071329]/60 hover:bg-[#071329] hover:border-[#58D6FF]/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-[#58D6FF]/10 text-[#58D6FF] border border-[#58D6FF]/20">
                        {item.badge}
                      </span>
                      {item.minor && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-[#FFB36B]/10 text-[#FFB36B] border border-[#FFB36B]/20">
                          {item.minor}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif text-[#F4F5F7] font-normal group-hover:text-[#58D6FF] transition-colors pt-2">
                      {item.institution}
                    </h3>

                    <p className="text-sm font-medium text-[#A8B2C5]">{item.degree}</p>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#66738A] pt-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#58D6FF]/70" />
                        {item.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FFB36B]/70" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="text-[10px] font-mono tracking-widest text-[#66738A] uppercase block">
                      SCORE
                    </span>
                    <span className="text-xl sm:text-2xl font-serif font-medium text-[#F4F5F7] block mt-0.5">
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
