import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'view'>('default');
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Update small dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest('[data-cursor="view"]') || target.closest('.project-card')) {
          setCursorType('view');
        } else if (
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.closest('[data-cursor="pointer"]')
        ) {
          setCursorType('link');
        } else {
          setCursorType('default');
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth trailing animation for outer ring
    let reqId: number;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      reqId = requestAnimationFrame(animate);
    };
    reqId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(reqId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className={`fixed -top-1 -left-1 w-2 h-2 rounded-full bg-[#58D6FF] transition-opacity duration-150 ${
          cursorType === 'view' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing interactive ring */}
      <div
        ref={ringRef}
        className={`fixed flex items-center justify-center rounded-full transition-all duration-200 ease-out border ${
          cursorType === 'view'
            ? '-top-8 -left-8 w-16 h-16 bg-[#58D6FF] text-[#030817] border-transparent scale-100'
            : cursorType === 'link'
            ? '-top-5 -left-5 w-10 h-10 border-[#FFB36B] bg-[#FFB36B]/10 scale-110'
            : '-top-4 -left-4 w-8 h-8 border-[rgba(120,150,200,0.35)] bg-transparent scale-100'
        } ${isClicking ? 'scale-90' : ''}`}
        style={{ willChange: 'transform' }}
      >
        {cursorType === 'view' && (
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
            VIEW
          </span>
        )}
      </div>
    </div>
  );
};
