import React from 'react';
import { motion } from 'motion/react';
import { AbstractHeroVisual } from './AbstractHeroVisual';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Header Label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center justify-between border-b border-[rgba(120,150,200,0.18)] pb-4 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#A8B2C5]"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#58D6FF] animate-pulse" />
          <span className="text-[#F4F5F7] font-medium">FULL-STACK ENGINEER</span>
          <span className="text-[#66738A]">/</span>
          <span>AI-AUGMENTED MERN</span>
          <span className="text-[#66738A]">/</span>
          <span className="text-[#FFB36B]">DSA (550+)</span>
        </div>

      </motion.div>

      {/* Main Hero Composition: Editorial Headline + 3D Visual */}
      <div className="relative my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left / Foreground Editorial Name & Positioning */}
        <div className="lg:col-span-7 z-10 flex flex-col justify-center">


          {/* Enormous Serif Name */}
          <div className="relative font-serif font-light tracking-tight leading-[0.88] select-none">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] text-[#F4F5F7]"
            >
              DHRUVIKSINH
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] text-[#F4F5F7]"
            >
              PARMAR
            </motion.div>
          </div>

          {/* Positioning statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 sm:mt-8 max-w-xl"
          >
            <p className="text-xs sm:text-sm font-mono tracking-[0.18em] text-[#FFB36B] uppercase font-medium">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#A8B2C5] leading-relaxed font-light">
              {PERSONAL_INFO.statement}
            </p>
          </motion.div>

          {/* Quick Pillars Markers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 pt-6 border-t border-[rgba(120,150,200,0.15)] grid grid-cols-3 gap-3 max-w-xl"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-[#58D6FF] tracking-wider">01</span>
              <span className="text-[11px] font-mono text-[#F4F5F7] tracking-wider uppercase mt-0.5">
                FULL-STACK
              </span>
              <span className="text-[10px] text-[#66738A]">MERN & Real-time</span>
            </div>
            <div className="flex flex-col border-l border-[rgba(120,150,200,0.15)] pl-3">
              <span className="text-[10px] font-mono text-[#FFB36B] tracking-wider">02</span>
              <span className="text-[11px] font-mono text-[#F4F5F7] tracking-wider uppercase mt-0.5">
                ALGORITHMS
              </span>
              <span className="text-[10px] text-[#66738A]">550+ Problems</span>
            </div>
            <div className="flex flex-col border-l border-[rgba(120,150,200,0.15)] pl-3">
              <span className="text-[10px] font-mono text-[#55E6C1] tracking-wider">03</span>
              <span className="text-[11px] font-mono text-[#F4F5F7] tracking-wider uppercase mt-0.5">
                AI SYSTEMS
              </span>
              <span className="text-[10px] text-[#66738A]">LangGraph & CV</span>
            </div>
          </motion.div>
        </div>

        {/* Right / Hero 3D Abstract Sculpture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 h-[360px] sm:h-[460px] lg:h-[580px] w-full relative flex items-center justify-center"
        >


          <AbstractHeroVisual />
        </motion.div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Coordinates */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex items-center justify-between border-t border-[rgba(120,150,200,0.15)] pt-6 text-[11px] font-mono text-[#A8B2C5]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#FFB36B] font-bold">●</span>
          <span className="tracking-widest">AHMEDABAD, INDIA</span>
          <span className="text-[#66738A]">|</span>
          <span className="text-[#66738A] hidden sm:inline">NIRMA UNIVERSITY (CSE)</span>
        </div>

        {/* Scroll CTA */}
        <a
          href="#about"
          className="flex items-center gap-2 tracking-[0.25em] text-[#F4F5F7] hover:text-[#58D6FF] transition-colors group cursor-pointer"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#58D6FF]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
