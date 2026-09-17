import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code2, Database, Terminal, Compass, Layers } from 'lucide-react';

export const TechnicalStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categoryIcons: Record<string, any> = {
    'Languages': Code2,
    'Frameworks & Libraries': Layers,
    'Databases & Tools': Database,
    'Core CS Pillars': Cpu,
    'Areas of Interest': Compass,
  };

  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ skill: s, category: c.category }))
  );

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 sm:py-36 border-t border-[rgba(120,150,200,0.15)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#FFB36B] uppercase font-semibold">
            03 — TECHNICAL STACK
          </span>
          <div className="h-[1px] flex-1 bg-[rgba(120,150,200,0.15)]" />
          <span className="text-[10px] font-mono tracking-widest text-[#66738A]">SYSTEMS & COMPETENCIES</span>
        </div>

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#F4F5F7] tracking-tight">
              Architectural Toolkit & Algorithmic Foundation
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A8B2C5] font-light leading-relaxed">
              No generic percentages or arbitrary bars. A structured map of core engineering competencies,
              computational frameworks, and fundamental computer science disciplines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeCategory === 'All'
                  ? 'bg-[#58D6FF] text-[#030817] font-semibold'
                  : 'bg-[#071329] text-[#A8B2C5] border border-[rgba(120,150,200,0.2)] hover:border-[#58D6FF]'
              }`}
            >
              ALL SYSTEMS
            </button>
            {SKILL_CATEGORIES.map((c) => (
              <button
                key={c.category}
                onClick={() => setActiveCategory(c.category)}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeCategory === c.category
                    ? 'bg-[#58D6FF] text-[#030817] font-semibold'
                    : 'bg-[#071329] text-[#A8B2C5] border border-[rgba(120,150,200,0.2)] hover:border-[#58D6FF]'
                }`}
              >
                {c.category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Technology Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = categoryIcons[cat.category] || Terminal;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="p-7 rounded-lg border border-[rgba(120,150,200,0.18)] bg-[#071329]/80 backdrop-blur-sm relative group hover:border-[#58D6FF]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)] mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#030817] text-[#58D6FF] border border-[rgba(120,150,200,0.2)]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-serif text-[#F4F5F7] font-medium tracking-wide">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#66738A]">
                    0{catIdx + 1}
                  </span>
                </div>

                {/* Skills Interactive Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill;
                    return (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-200 cursor-default ${
                          isHovered
                            ? 'bg-[#58D6FF] text-[#030817] shadow-[0_0_12px_rgba(88,214,255,0.4)] scale-105 font-medium'
                            : 'bg-[#030817] text-[#F4F5F7] border border-[rgba(120,150,200,0.2)] hover:border-[#58D6FF]'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};
