import React, { useState } from 'react';
import { Eye, Layers, Sliders, Activity, Sparkles, Binary } from 'lucide-react';

export const VisionCaptionVisual: React.FC = () => {
  const [selectedTokenIdx, setSelectedTokenIdx] = useState(2);
  const [decodingMode, setDecodingMode] = useState<'beam' | 'greedy' | 'nucleus'>('nucleus');

  // Simulated tokens and their attention hotspots on an 8x8 grid
  const tokens = [
    { word: 'A', focus: [27, 28, 35, 36], weight: '0.12' },
    { word: 'vibrant', focus: [18, 19, 26, 27], weight: '0.78' },
    { word: 'geometric', focus: [10, 11, 12, 18, 19, 20], weight: '0.94' },
    { word: 'sculpture', focus: [19, 20, 27, 28, 35, 36], weight: '0.91' },
    { word: 'illuminated', focus: [36, 37, 44, 45, 52], weight: '0.85' },
    { word: 'in', focus: [45, 46], weight: '0.24' },
    { word: 'deep', focus: [50, 51, 58, 59], weight: '0.62' },
    { word: 'navy', focus: [58, 59, 60, 61], weight: '0.88' },
  ];

  const currentFocus = tokens[selectedTokenIdx].focus;

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-lg border border-[rgba(120,150,200,0.22)] bg-[#071329] p-6 flex flex-col justify-between relative overflow-hidden group">
      {/* Background architectural grid */}
      <div className="absolute inset-0 contour-lines opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#55E6C1]/10 to-transparent pointer-events-none" />

      {/* Top Bar: Model Architecture Benchmark */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)] text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#55E6C1]" />
          <span className="text-[#F4F5F7] tracking-widest font-semibold uppercase">EXPLAINABLE AI ENGINE</span>
        </div>
        <div className="flex items-center gap-1.5">
          {(['nucleus', 'beam', 'greedy'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setDecodingMode(mode)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase transition-all ${
                decodingMode === mode
                  ? 'bg-[#55E6C1] text-[#030817] font-bold'
                  : 'bg-[#030817] text-[#66738A] border border-[rgba(120,150,200,0.2)] hover:text-[#A8B2C5]'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Center: Spatial Attention Matrix + Synthetic Image Grid */}
      <div className="relative z-10 py-3 my-auto grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Visual Attention 8x8 Grid Canvas */}
        <div className="sm:col-span-5 flex flex-col items-center">
          <div className="relative w-44 h-44 rounded border border-[rgba(120,150,200,0.3)] bg-[#030817] p-1.5 grid grid-cols-8 gap-0.5 shadow-inner">
            {Array.from({ length: 64 }).map((_, idx) => {
              const isHot = currentFocus.includes(idx);
              return (
                <div
                  key={idx}
                  className={`rounded-[1px] transition-all duration-300 ${
                    isHot
                      ? 'bg-gradient-to-br from-[#FFB36B] to-[#55E6C1] opacity-90 shadow-[0_0_8px_rgba(85,230,193,0.4)] scale-95'
                      : 'bg-[#0B1530] opacity-40 hover:opacity-75'
                  }`}
                />
              );
            })}
            <div className="absolute bottom-1 right-2 text-[8px] font-mono text-[#66738A]">
              8x8 ATTENTION MESH
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#A8B2C5] mt-2">
            SPATIAL HEATMAP [WORD: "{tokens[selectedTokenIdx].word}"]
          </span>
        </div>

        {/* Model Pipeline Flow */}
        <div className="sm:col-span-7 space-y-2.5">
          <div className="p-2.5 rounded bg-[#030817]/90 border border-[rgba(120,150,200,0.2)] flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#66738A]">ENCODER COMPARISON</span>
            <span className="text-[#58D6FF]">BLIP ViT vs. InceptionV3 CNN</span>
          </div>

          <div className="p-2.5 rounded bg-[#030817]/90 border border-[rgba(120,150,200,0.2)] flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#66738A]">ATTENTION MECHANISM</span>
            <span className="text-[#FFB36B]">Bahdanau Additive + GRU</span>
          </div>

          {/* Decoding Strategy Metric */}
          <div className="p-2.5 rounded bg-[#0B1530] border border-[#55E6C1]/30 text-[11px] font-mono">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[#55E6C1]">DECODING: {decodingMode.toUpperCase()}</span>
              <span className="text-[10px] text-[#A8B2C5]">FastAPI SSE Stream</span>
            </div>
            <p className="text-[10px] text-[#A8B2C5]">
              {decodingMode === 'nucleus' && 'Top-p (p=0.92) sampling balances lexical diversity and human-like fluency.'}
              {decodingMode === 'beam' && 'Beam width k=5 optimizes log-likelihood with n-gram repetition penalty.'}
              {decodingMode === 'greedy' && 'Maximum a-posteriori greedy decoding with minimal inference latency.'}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Token Stream Bar */}
      <div className="relative z-10 pt-3 border-t border-[rgba(120,150,200,0.15)]">
        <span className="text-[9px] font-mono tracking-widest text-[#66738A] uppercase block mb-1.5">
          INTERACTIVE ATTENTION TOKEN STREAM (CLICK TO VIEW SPATIAL FOCUS):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {tokens.map((token, i) => (
            <button
              key={i}
              onClick={() => setSelectedTokenIdx(i)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                selectedTokenIdx === i
                  ? 'bg-[#55E6C1] text-[#030817] font-bold shadow-[0_0_12px_rgba(85,230,193,0.3)]'
                  : 'bg-[#030817] text-[#A8B2C5] border border-[rgba(120,150,200,0.2)] hover:border-[#58D6FF]'
              }`}
            >
              {token.word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
