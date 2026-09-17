import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Plane, Hotel, Luggage, Wallet, ArrowDown, ShieldCheck, Check } from 'lucide-react';

export const JourneysVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [isSimulating, setIsSimulating] = useState(false);

  const subAgents = [
    { id: 'flights', label: 'FLIGHTS AGENT', icon: Plane, latency: '340ms', status: 'Optimal routes identified' },
    { id: 'stays', label: 'STAYS AGENT', icon: Hotel, latency: '420ms', status: 'Boutique accommodations curated' },
    { id: 'packing', label: 'PACKING AGENT', icon: Luggage, latency: '210ms', status: 'Weather & climate gear compiled' },
    { id: 'budget', label: 'BUDGET AGENT', icon: Wallet, latency: '190ms', status: 'Multi-currency constraints verified' },
  ];

  const triggerSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    setTimeout(() => setActiveStep(1), 700);
    setTimeout(() => setActiveStep(2), 1600);
    setTimeout(() => setActiveStep(3), 2500);
    setTimeout(() => {
      setActiveStep(4);
      setIsSimulating(false);
    }, 3400);
  };

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-lg border border-[rgba(120,150,200,0.22)] bg-[#071329] p-6 flex flex-col justify-between relative overflow-hidden group">
      {/* Background architectural grid */}
      <div className="absolute inset-0 contour-lines opacity-20 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-bl from-[#FFB36B]/10 to-transparent pointer-events-none" />

      {/* Top Bar: Multi-Agent Status */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)] text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FFB36B]" />
          <span className="text-[#F4F5F7] tracking-widest font-semibold uppercase">LANGGRAPH STATEGRAPH</span>
        </div>
        <button
          onClick={triggerSimulation}
          disabled={isSimulating}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#030817] border border-[#FFB36B]/40 hover:border-[#FFB36B] text-[10px] font-mono text-[#FFB36B] transition-colors cursor-pointer"
        >
          <Play className="w-2.5 h-2.5 fill-current" />
          <span>{isSimulating ? 'STREAMING...' : 'RUN SIMULATION'}</span>
        </button>
      </div>

      {/* Center Graph: Orchestration Nodes */}
      <div className="relative z-10 py-4 my-auto space-y-4">
        {/* Node 1: User Request */}
        <div className="flex items-center justify-between p-2.5 rounded bg-[#030817]/90 border border-[rgba(120,150,200,0.2)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#58D6FF]" />
            <span className="text-xs font-mono text-[#A8B2C5]">USER INPUT</span>
          </div>
          <span className="text-[11px] font-mono text-[#F4F5F7]">"7 Days in Kyoto // Photography Focus"</span>
        </div>

        {/* Central Orchestrator Bar */}
        <div className="p-3 rounded-lg border border-[#FFB36B]/50 bg-[#0B1530] text-center shadow-[0_0_20px_rgba(255,179,107,0.12)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#FFB36B] uppercase tracking-wider mb-1">
            <span>STATEGRAPH ORCHESTRATOR</span>
            <span>ANTHROPIC CLAUDE API</span>
          </div>
          <p className="text-xs text-[#F4F5F7] font-mono">
            Non-blocking parallel task decomposition via StateGraph (SSE Streaming)
          </p>
        </div>

        {/* Connecting Lines & Sub-Agents Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          {subAgents.map((agent, idx) => {
            const Icon = agent.icon;
            const isCompleted = activeStep >= 2;
            const isCurrent = activeStep === 1;

            return (
              <div
                key={agent.id}
                className={`p-2.5 rounded border transition-all duration-300 ${
                  isCurrent
                    ? 'border-[#58D6FF] bg-[#071329] shadow-[0_0_12px_rgba(88,214,255,0.2)] scale-[1.02]'
                    : isCompleted
                    ? 'border-[rgba(120,150,200,0.3)] bg-[#030817]/90'
                    : 'border-[rgba(120,150,200,0.15)] bg-[#030817]/50 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className="w-3.5 h-3.5 text-[#58D6FF]" />
                  <span className="text-[9px] font-mono text-[#66738A]">{agent.latency}</span>
                </div>
                <span className="text-[10px] font-mono text-[#F4F5F7] block font-semibold">
                  {agent.label}
                </span>
                <span className="text-[9px] text-[#A8B2C5] leading-tight block mt-1">
                  {agent.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Result Node: Synthesized Itinerary */}
        <div className="p-3 rounded bg-gradient-to-r from-[#030817] via-[#0B1530] to-[#030817] border border-[#55E6C1]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[#55E6C1]/20 text-[#55E6C1]">
              <Check className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className="text-xs font-mono text-[#F4F5F7] font-semibold block">
                COMPREHENSIVE ITINERARY EMITTED
              </span>
              <span className="text-[10px] font-mono text-[#55E6C1]">
                SSE Time-to-First-Result: &lt; 280ms
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#55E6C1]/15 text-[#55E6C1]">
            SYNTHESIZED
          </span>
        </div>
      </div>

      {/* Bottom Bar: Security & Auth Layer */}
      <div className="relative z-10 pt-3 border-t border-[rgba(120,150,200,0.15)] flex items-center justify-between text-[10px] font-mono text-[#66738A]">
        <div className="flex items-center gap-1.5 text-[#A8B2C5]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#58D6FF]" />
          <span>SECURITY LAYER:</span>
          <span className="text-[#F4F5F7]">Argon2id + TOTP MFA + Dual JWT</span>
        </div>
        <span className="text-[#58D6FF]">HTTPONLY COOKIES</span>
      </div>
    </div>
  );
};
