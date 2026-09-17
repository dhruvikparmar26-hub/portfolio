import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Cpu, Award, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-[rgba(120,150,200,0.15)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#FFB36B] uppercase font-semibold">
            01 — ABOUT
          </span>
          <div className="h-[1px] flex-1 bg-[rgba(120,150,200,0.15)]" />
          <span className="text-[10px] font-mono tracking-widest text-[#66738A]">IDENTITY & RIGOR</span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Large Editorial Statement */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-light leading-[1.18] text-[#F4F5F7]"
            >
              I build digital products where{' '}
              <span className="italic text-[#58D6FF] font-normal">engineering</span>,{' '}
              <span className="italic text-[#FFB36B] font-normal">usability</span>, and{' '}
              <span className="italic text-[#55E6C1] font-normal">intelligent systems</span> meet.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 space-y-5 text-[#A8B2C5] text-base sm:text-lg leading-relaxed font-light"
            >
              <p>
                Full-stack engineer skilled in Data Structures & Algorithms (DSA), specializing in
                AI-augmented MERN applications. My focus centers on architecting production-grade software
                systems with deterministic state, robust security boundaries, and high-performance real-time layers.
              </p>
              <p>
                From building asynchronous multi-agent orchestrators over the Claude API in LangGraph to
                designing role-based WebSocket engines for collaborative learning platforms, I bring a
                rigorous algorithmic mindset to every layer of the stack.
              </p>
            </motion.div>

            {/* Principles Badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                'Algorithmic Problem Solver',
                'Production MERN Architecture',
                'LangGraph Multi-Agent Orchestration',
                'Event-Driven WebSockets',
                'Explainable AI & CV',
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full border border-[rgba(120,150,200,0.25)] bg-[#071329]/70 text-xs font-mono tracking-wider text-[#A8B2C5] hover:text-[#58D6FF] hover:border-[#58D6FF]/50 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Structured Metadata Panel */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 rounded-lg border border-[rgba(120,150,200,0.2)] bg-[#071329]/80 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Corner decorative accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#58D6FF]/10 to-transparent pointer-events-none" />
              
              <div className="pb-6 border-b border-[rgba(120,150,200,0.15)]">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#58D6FF] uppercase">
                  ACADEMIC & SYSTEM PROFILE
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded border border-[rgba(120,150,200,0.2)] bg-[#030817] text-[#58D6FF]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#66738A] uppercase block">
                      EDUCATION
                    </span>
                    <span className="text-sm font-medium text-[#F4F5F7] block mt-0.5">
                      {PERSONAL_INFO.educationSummary.degree}
                    </span>
                    <span className="text-xs text-[#A8B2C5] block mt-0.5">
                      Nirma University – Institute of Technology
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded border border-[rgba(120,150,200,0.2)] bg-[#030817] text-[#FFB36B]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#66738A] uppercase block">
                      SPECIALIZATION / MINOR
                    </span>
                    <span className="text-sm font-medium text-[#F4F5F7] block mt-0.5">
                      {PERSONAL_INFO.educationSummary.minor}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[rgba(120,150,200,0.15)]">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#66738A] uppercase block">
                      ACADEMIC CGPA
                    </span>
                    <span className="text-2xl font-serif text-[#F4F5F7] font-medium block mt-1">
                      8.65 <span className="text-xs font-mono text-[#66738A]">/ 10</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#66738A] uppercase block">
                      DSA RIGOR
                    </span>
                    <span className="text-2xl font-serif text-[#58D6FF] font-medium block mt-1">
                      550+ <span className="text-xs font-mono text-[#66738A]">SOLVED</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(120,150,200,0.15)]">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#66738A]">STATUS</span>
                    <span className="text-[#55E6C1] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#55E6C1] animate-ping" />
                      ACTIVELY ENGINEERING
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
