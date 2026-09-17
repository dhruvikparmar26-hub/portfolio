import React from 'react';
import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Terminal, Award, GitBranch, Binary, ChevronRight } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-28 sm:py-36 border-t border-[rgba(120,150,200,0.15)] overflow-hidden">
      {/* Background Algorithmic Vector Tree / Graph Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <svg viewBox="0 0 1000 600" className="w-full h-full stroke-[#58D6FF]" fill="none" strokeWidth="1">
          {/* Binary tree / graph paths */}
          <circle cx="500" cy="100" r="14" />
          <line x1="500" y1="114" x2="350" y2="220" />
          <line x1="500" y1="114" x2="650" y2="220" />
          
          <circle cx="350" cy="220" r="12" />
          <circle cx="650" cy="220" r="12" />
          
          <line x1="350" y1="232" x2="250" y2="340" />
          <line x1="350" y1="232" x2="430" y2="340" />
          <line x1="650" y1="232" x2="570" y2="340" />
          <line x1="650" y1="232" x2="750" y2="340" />

          <circle cx="250" cy="340" r="10" />
          <circle cx="430" cy="340" r="10" />
          <circle cx="570" cy="340" r="10" />
          <circle cx="750" cy="340" r="10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#55E6C1] uppercase font-semibold">
            QUANTITATIVE RIGOR
          </span>
          <div className="h-[1px] flex-1 bg-[rgba(120,150,200,0.15)]" />
          <span className="text-[10px] font-mono tracking-widest text-[#66738A]">ACHIEVEMENTS</span>
        </div>

        {/* Featured Big Number Block: 550+ DSA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 lg:p-16 rounded-xl border border-[rgba(120,150,200,0.25)] bg-[#071329]/90 backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#58D6FF]/15 via-[#FFB36B]/5 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* The Big Number */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-mono tracking-[0.3em] text-[#58D6FF] uppercase font-medium">
                PRIMARY COMPETITIVE BENCHMARK
              </span>
              <div className="mt-2 text-7xl sm:text-8xl lg:text-9xl font-serif font-light text-[#F4F5F7] tracking-tight flex items-baseline">
                550<span className="text-4xl sm:text-6xl text-[#FFB36B] font-normal">+</span>
              </div>
              <span className="text-lg sm:text-xl font-serif text-[#F4F5F7] font-medium tracking-wide mt-2">
                DSA PROBLEMS SOLVED
              </span>
              <p className="text-xs font-mono text-[#A8B2C5] mt-1 uppercase tracking-wider">
                LeetCode • Codeforces • GeeksforGeeks
              </p>
            </div>

            {/* Algorithmic Narrative */}
            <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-[rgba(120,150,200,0.18)] pt-6 lg:pt-0 lg:pl-10">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F4F5F7]">
                Proven Analytical Problem Solving in High-Pressure Arenas
              </h3>
              <p className="text-sm sm:text-base text-[#A8B2C5] font-light leading-relaxed">
                Comprehensive mastery of advanced data structures, graph traversals, dynamic programming,
                tree algorithms, and time/space complexity optimization, backed by consistent competitive
                problem-solving across leading judge platforms.
              </p>

              <div className="pt-4 grid grid-cols-3 gap-3">
                <div className="p-3 rounded border border-[rgba(120,150,200,0.18)] bg-[#030817]">
                  <span className="text-[10px] font-mono text-[#66738A] block uppercase">PLATFORM</span>
                  <span className="text-xs font-mono text-[#F4F5F7] font-semibold block mt-0.5">LeetCode</span>
                  <span className="text-[9px] font-mono text-[#58D6FF]">Active Solving</span>
                </div>
                <div className="p-3 rounded border border-[rgba(120,150,200,0.18)] bg-[#030817]">
                  <span className="text-[10px] font-mono text-[#66738A] block uppercase">PLATFORM</span>
                  <span className="text-xs font-mono text-[#F4F5F7] font-semibold block mt-0.5">Codeforces</span>
                  <span className="text-[9px] font-mono text-[#FFB36B]">Contest Practice</span>
                </div>
                <div className="p-3 rounded border border-[rgba(120,150,200,0.18)] bg-[#030817]">
                  <span className="text-[10px] font-mono text-[#66738A] block uppercase">PLATFORM</span>
                  <span className="text-xs font-mono text-[#F4F5F7] font-semibold block mt-0.5">GeeksforGeeks</span>
                  <span className="text-[9px] font-mono text-[#55E6C1]">Core CS Drills</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Percentiles Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-lg border border-[rgba(120,150,200,0.18)] bg-[#071329]/70 hover:border-[#58D6FF]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#66738A] mb-2">
              <span>NATIONAL RANKING</span>
              <span className="text-[#58D6FF]">PERCENTILE</span>
            </div>
            <div className="text-4xl font-serif text-[#F4F5F7] font-light">
              98.61<span className="text-lg font-mono text-[#FFB36B]">%</span>
            </div>
            <h4 className="text-base font-serif text-[#F4F5F7] mt-2">JEE Mains</h4>
            <p className="text-xs text-[#A8B2C5] mt-1 font-light leading-relaxed">
              Demonstrating high quantitative, mathematical, and algorithmic reasoning nationwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-lg border border-[rgba(120,150,200,0.18)] bg-[#071329]/70 hover:border-[#58D6FF]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#66738A] mb-2">
              <span>SECONDARY (10TH)</span>
              <span className="text-[#58D6FF]">PERCENTILE</span>
            </div>
            <div className="text-4xl font-serif text-[#F4F5F7] font-light">
              99.86<span className="text-lg font-mono text-[#FFB36B]">%</span>
            </div>
            <h4 className="text-base font-serif text-[#F4F5F7] mt-2">SSC Examination</h4>
            <p className="text-xs text-[#A8B2C5] mt-1 font-light leading-relaxed">
              Exceptional top-tier academic distinction from Nalanda School (GSEB 97.17% aggregate).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg border border-[rgba(120,150,200,0.18)] bg-[#071329]/70 hover:border-[#58D6FF]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#66738A] mb-2">
              <span>HIGHER SEC. (12TH)</span>
              <span className="text-[#58D6FF]">PERCENTILE</span>
            </div>
            <div className="text-4xl font-serif text-[#F4F5F7] font-light">
              95.86<span className="text-lg font-mono text-[#FFB36B]">%</span>
            </div>
            <h4 className="text-base font-serif text-[#F4F5F7] mt-2">HSC Examination</h4>
            <p className="text-xs text-[#A8B2C5] mt-1 font-light leading-relaxed">
              Top distinction in Science track from Gyanmanjari Vidhyapith, Bhavnagar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
