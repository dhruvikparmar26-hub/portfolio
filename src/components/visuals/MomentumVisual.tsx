import React, { useState, useEffect } from 'react';
import { Radio, Users, ShieldCheck, Activity, Cpu, ArrowRight } from 'lucide-react';

export const MomentumVisual: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeRole, setActiveRole] = useState<'student' | 'mentor' | 'admin'>('student');

  const liveEvents = [
    { type: 'QUIZ_SUBMIT', user: 'Student #412', detail: 'Real-time score & analytics emitted', status: '200 OK' },
    { type: 'MENTOR_BOOKED', user: 'Mentor Dr. Shah', detail: 'Calendar slot sync across rooms', status: 'SYNCED' },
    { type: 'CERT_GEN', user: 'Python Worker', detail: 'PyMuPDF offloaded asynchronous task', status: 'COMPLETED' },
    { type: 'ROOM_JOINED', user: 'Study Room #04', detail: 'WebRTC & Socket.io presence update', status: 'BROADCAST' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % liveEvents.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-lg border border-[rgba(120,150,200,0.22)] bg-[#071329] p-6 flex flex-col justify-between relative overflow-hidden group">
      {/* Background architectural grid & circuit lines */}
      <div className="absolute inset-0 contour-lines opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#58D6FF]/10 to-transparent pointer-events-none" />

      {/* Top Bar: System Status */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)] text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#58D6FF] animate-ping" />
          <span className="text-[#F4F5F7] tracking-widest font-semibold uppercase">SOCKET.IO ENGINE</span>
        </div>
        <div className="flex items-center gap-2 text-[#66738A]">
          <span>LATENCY &lt; 18ms</span>
          <span>•</span>
          <span className="text-[#55E6C1]">EVENT-DRIVEN</span>
        </div>
      </div>

      {/* Center: System Architecture Node Graph */}
      <div className="relative z-10 py-6 my-auto">
        <div className="grid grid-cols-3 gap-3 text-center">
          {/* Client Node */}
          <div className="p-3.5 rounded border border-[rgba(120,150,200,0.2)] bg-[#030817]/80">
            <span className="text-[9px] font-mono tracking-wider text-[#66738A] block uppercase">CLIENT</span>
            <span className="text-xs font-semibold text-[#F4F5F7] block mt-1">React + Vite SPA</span>
            <div className="mt-2 flex justify-center gap-1">
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-[#58D6FF]/20 text-[#58D6FF]">
                Virtual Study
              </span>
            </div>
          </div>

          {/* Node.js + Express Middleware (RBAC) */}
          <div className="p-3.5 rounded border border-[#58D6FF]/40 bg-[#0B1530] shadow-[0_0_20px_rgba(88,214,255,0.1)]">
            <span className="text-[9px] font-mono tracking-wider text-[#58D6FF] block uppercase">API LAYER</span>
            <span className="text-xs font-semibold text-[#F4F5F7] block mt-1">Express RBAC</span>
            <div className="mt-2 flex justify-center">
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-[#55E6C1]/20 text-[#55E6C1] flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5" />
                Server-Side Boundaries
              </span>
            </div>
          </div>

          {/* Python Worker */}
          <div className="p-3.5 rounded border border-[rgba(120,150,200,0.2)] bg-[#030817]/80">
            <span className="text-[9px] font-mono tracking-wider text-[#FFB36B] block uppercase">WORKER</span>
            <span className="text-xs font-semibold text-[#F4F5F7] block mt-1">Python Microservice</span>
            <div className="mt-2 flex justify-center">
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-[#FFB36B]/20 text-[#FFB36B]">
                PyMuPDF Reports
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic RBAC Boundary Visualizer */}
        <div className="mt-6 p-4 rounded bg-[#030817]/60 border border-[rgba(120,150,200,0.15)]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#66738A] mb-2">
            <span>INTERACTIVE ROLE-BASED ACCESS CONTROL (RBAC)</span>
            <span className="text-[#58D6FF]">{activeRole.toUpperCase()} SCOPE</span>
          </div>

          <div className="flex gap-2 mb-3">
            {(['student', 'mentor', 'admin'] as const).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase transition-all ${
                  activeRole === role
                    ? 'bg-[#58D6FF] text-[#030817] font-semibold'
                    : 'bg-[#071329] text-[#A8B2C5] border border-[rgba(120,150,200,0.2)] hover:border-[#58D6FF]'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-[#A8B2C5]">
            {activeRole === 'student' && (
              <span className="text-[#55E6C1]">
                ✓ Virtual Room Join, Quiz Submissions, Live Socket Progress Dashboard. Restricted from mentor slots administration.
              </span>
            )}
            {activeRole === 'mentor' && (
              <span className="text-[#FFB36B]">
                ✓ Calendar Slot Reservation, Student Assessment Reviews, Real-time Discussion Room Moderation.
              </span>
            )}
            {activeRole === 'admin' && (
              <span className="text-[#58D6FF]">
                ✓ Global Platform Telemetry, Course Schema Publishing, Background PyMuPDF Certificate Dispatching.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Live Socket Event Stream */}
      <div className="relative z-10 pt-3 border-t border-[rgba(120,150,200,0.15)]">
        <div className="flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-[#58D6FF]" />
            <span className="text-[#66738A]">LIVE EVENT BUS:</span>
            <span className="text-[#F4F5F7] font-medium">{liveEvents[activeEvent].type}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#55E6C1]/15 text-[#55E6C1] border border-[#55E6C1]/30">
            {liveEvents[activeEvent].status}
          </span>
        </div>
        <p className="mt-1 text-[11px] font-mono text-[#A8B2C5] truncate">
          {liveEvents[activeEvent].detail}
        </p>
      </div>
    </div>
  );
};
