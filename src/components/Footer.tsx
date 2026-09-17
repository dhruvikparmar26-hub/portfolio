import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative border-t border-[rgba(120,150,200,0.18)] bg-[#030817] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[rgba(120,150,200,0.12)]">
          {/* Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-serif text-[#F4F5F7] tracking-wider font-light">
                DHRUVIKSINH PARMAR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#58D6FF]" />
            </div>
            <p className="text-xs font-mono tracking-[0.25em] text-[#66738A] uppercase">
              FULL-STACK ENGINEER / AI SYSTEMS / DSA
            </p>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#A8B2C5]">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58D6FF] transition-colors"
            >
              LINKEDIN
            </a>
            <span className="text-[#66738A]">•</span>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58D6FF] transition-colors"
            >
              GITHUB
            </a>
            <span className="text-[#66738A]">•</span>
            <span className="text-[#66738A]">LEETCODE (550+)</span>
            <span className="text-[#66738A]">•</span>
            <span className="text-[#66738A]">CODOLIO</span>
            <span className="text-[#66738A]">•</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#FFB36B] transition-colors">
              EMAIL
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F4F5F7] hover:text-[#58D6FF] transition-colors cursor-pointer group px-4 py-2 rounded border border-[rgba(120,150,200,0.2)] bg-[#071329]/60 hover:border-[#58D6FF]"
            aria-label="Back to Top of Page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#58D6FF] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#66738A]">
          <div>
            <span>© 2026 DHRUVIKSINH PARMAR. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-3">
            <span>DESIGNED WITH EDITORIAL RIGOR</span>
            <span>/</span>
            <span className="text-[#A8B2C5]">BUILT WITH REACT + THREE.JS + TAILWIND</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
