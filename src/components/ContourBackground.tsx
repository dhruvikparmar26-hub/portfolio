import React from 'react';

export const ContourBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-[#030817]" />
      
      {/* Subtle radial ambient glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#071329]/80 blur-[120px]" />
      <div className="absolute top-[30%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-[#0B1530]/60 blur-[140px]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#071329]/70 blur-[130px]" />

      {/* Very faint topographic vector contours */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] stroke-[#58D6FF]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="0.8"
      >
        <pattern id="contour-pattern" x="0" y="0" width="800" height="800" patternUnits="userSpaceOnUse">
          <path d="M 0,200 C 150,150 250,280 400,220 C 550,160 650,240 800,200" />
          <path d="M 0,350 C 120,300 280,420 400,340 C 520,260 680,380 800,320" />
          <path d="M 0,500 C 180,460 220,580 400,520 C 580,460 620,560 800,480" />
          <path d="M 0,650 C 160,600 300,720 450,640 C 600,560 700,680 800,620" />
          {/* Subtle concentric contour rings */}
          <ellipse cx="620" cy="380" rx="140" ry="80" />
          <ellipse cx="620" cy="380" rx="100" ry="55" />
          <ellipse cx="620" cy="380" rx="60" ry="32" />
          <ellipse cx="200" cy="580" rx="120" ry="70" />
          <ellipse cx="200" cy="580" rx="80" ry="45" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#contour-pattern)" />
      </svg>

      {/* Fine architectural coordinate grid & crosshairs */}
      <div className="absolute inset-0 contour-lines opacity-[0.4]" />


    </div>
  );
};
