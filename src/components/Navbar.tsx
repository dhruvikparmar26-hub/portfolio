import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030817]/85 backdrop-blur-md border-b border-[rgba(120,150,200,0.15)] py-4'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left Monogram / Branding */}
        <a
          id="nav-logo-monogram"
          href="#"
          className="group flex items-center gap-3 cursor-pointer"
          aria-label="Dhruviksinh Parmar Portfolio Home"
        >
          {/* Custom geometric DP monogram reminiscent of the video */}
          <div className="relative w-9 h-9 rounded-md border border-[rgba(120,150,200,0.3)] bg-[#071329]/90 flex items-center justify-center transition-all duration-300 group-hover:border-[#58D6FF] group-hover:shadow-[0_0_15px_rgba(88,214,255,0.25)]">
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8">
              {/* Geometric 'D' */}
              <path
                d="M 8 7 L 15 7 C 20 7, 20 16, 15 16 L 8 16 Z"
                className="stroke-[#F4F5F7] group-hover:stroke-[#58D6FF] transition-colors"
              />
              {/* Interlocking 'P' offset */}
              <path
                d="M 14 16 L 21 16 C 25 16, 25 25, 21 25 L 14 25 M 14 16 L 14 28"
                className="stroke-[#FFB36B] transition-colors"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-[13px] font-semibold tracking-wider text-[#F4F5F7] group-hover:text-[#58D6FF] transition-colors">
              DHRUVIKSINH
            </span>
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#66738A] uppercase">
              PARMAR
            </span>
          </div>
        </a>

        {/* Center/Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] text-[#A8B2C5]">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-[#F4F5F7] ${
                  isActive ? 'text-[#F4F5F7]' : 'text-[#A8B2C5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#58D6FF] to-[#FFB36B] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="nav-cta-connect"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(120,150,200,0.25)] bg-[#071329]/60 hover:bg-[#0B1530] hover:border-[#58D6FF] text-[11px] font-mono tracking-widest text-[#F4F5F7] transition-all duration-300 group"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#58D6FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F4F5F7] hover:text-[#58D6FF] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#030817]/98 border-b border-[rgba(120,150,200,0.2)] px-6 py-8 flex flex-col gap-6 backdrop-blur-xl animate-fade-in"
        >
          {navLinks.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-serif tracking-wider text-[#F4F5F7] border-b border-[rgba(120,150,200,0.1)] pb-3"
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-[#FFB36B]">0{idx + 1}</span>
            </a>
          ))}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-md bg-gradient-to-r from-[#58D6FF]/20 to-[#FFB36B]/20 border border-[rgba(120,150,200,0.3)] text-xs font-mono tracking-widest text-[#F4F5F7]"
          >
            START A CONVERSATION →
          </a>
        </div>
      )}
    </header>
  );
};
