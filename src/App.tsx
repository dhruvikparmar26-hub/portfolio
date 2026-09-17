import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { SelectedWork } from './components/SelectedWork';
import { TechnicalStack } from './components/TechnicalStack';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ContourBackground } from './components/ContourBackground';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'experience', 'work', 'skills', 'achievements', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030817] text-[#F4F5F7] selection:bg-[#58D6FF]/20 selection:text-[#58D6FF]">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Atmospheric Topographic & Gradient Background */}
      <ContourBackground />

      {/* Fixed Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Flow of Editorial Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <SelectedWork />
        <TechnicalStack />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
