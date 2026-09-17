import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-[rgba(120,150,200,0.15)] overflow-hidden">
      {/* Background soft radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-gradient-to-t from-[#071329] via-[#0B1530]/40 to-transparent pointer-events-none rounded-t-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#FFB36B] uppercase font-semibold">
            04 — CONTACT
          </span>
          <div className="h-[1px] flex-1 bg-[rgba(120,150,200,0.15)]" />
          <span className="text-[10px] font-mono tracking-widest text-[#66738A]">DIALOGUE & INQUIRY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dramatic Editorial Headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#F4F5F7] tracking-tight leading-[1.05]">
                LET’S BUILD<br />
                <span className="italic text-[#58D6FF] font-normal">SOMETHING</span><br />
                MEANINGFUL.
              </h2>

              <p className="mt-8 text-base sm:text-lg text-[#A8B2C5] font-light max-w-xl leading-relaxed">
                Interested in building thoughtful software, intelligent systems, and meaningful digital experiences?
                Whether you’re exploring full-stack engineering roles, collaborative research, or AI architectures,
                I’m always open to discussing compelling ideas.
              </p>

              {/* Strong Primary CTA Button */}
              <div className="mt-10">
                <a
                  id="contact-primary-cta"
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20//%20Dhruviksinh%20Parmar`}
                  className="inline-flex items-center gap-4 px-8 py-4 rounded-md bg-[#58D6FF] text-[#030817] font-mono text-sm tracking-widest font-semibold hover:bg-[#58D6FF]/90 transition-all shadow-[0_0_25px_rgba(88,214,255,0.3)] hover:scale-[1.02] group"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Verified Direct Channels & Social Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-lg border border-[rgba(120,150,200,0.2)] bg-[#071329]/90 backdrop-blur-sm space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)] text-[11px] font-mono tracking-widest text-[#58D6FF] uppercase">
                <span>DIRECT CHANNELS</span>
                <span className="text-[#55E6C1]">VERIFIED</span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded bg-[#030817] border border-[rgba(120,150,200,0.18)] group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#071329] text-[#58D6FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#66738A] block uppercase">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-mono text-[#F4F5F7] hover:text-[#58D6FF] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email)}
                  className="p-2 text-[#A8B2C5] hover:text-[#F4F5F7] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#55E6C1]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social / Professional Networks */}
              <div className="pt-2">
                <span className="text-[10px] font-mono tracking-widest text-[#66738A] uppercase block mb-3">
                  PROFESSIONAL NETWORKS & PROFILES
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {/* LinkedIn - Exact URL */}
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-[#030817] border border-[rgba(120,150,200,0.18)] hover:border-[#58D6FF] flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#58D6FF]" />
                      <span className="text-xs font-mono text-[#F4F5F7]">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#66738A] group-hover:text-[#58D6FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* GitHub - Exact URL */}
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-[#030817] border border-[rgba(120,150,200,0.18)] hover:border-[#58D6FF] flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#58D6FF]" />
                      <span className="text-xs font-mono text-[#F4F5F7]">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#66738A] group-hover:text-[#58D6FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* LeetCode - Exact label preserved without guessing URL */}
                  <div className="p-3 rounded bg-[#030817] border border-[rgba(120,150,200,0.18)] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#F4F5F7] block">LeetCode</span>
                      <span className="text-[9px] font-mono text-[#FFB36B]">550+ Problems</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#66738A] px-1.5 py-0.5 rounded bg-[#071329]">
                      VERIFIED
                    </span>
                  </div>

                  {/* Codolio - Exact label preserved without guessing URL */}
                  <div className="p-3 rounded bg-[#030817] border border-[rgba(120,150,200,0.18)] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#F4F5F7] block">Codolio</span>
                      <span className="text-[9px] font-mono text-[#55E6C1]">Competitive</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#66738A] px-1.5 py-0.5 rounded bg-[#071329]">
                      VERIFIED
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
