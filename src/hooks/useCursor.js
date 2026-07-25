import { useEffect, useRef } from 'react';

export default function useCursor() {
  const cursorRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let blurX = 0;
    let blurY = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if mouse is hovering an interactive element for cursor expansion glow
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.group') ||
        target.closest('[role="button"]')
      );

      if (cursorRef.current && blurRef.current) {
        if (isInteractive) {
          cursorRef.current.classList.add('cursor-hover');
          blurRef.current.classList.add('blur-hover');
        } else {
          cursorRef.current.classList.remove('cursor-hover');
          blurRef.current.classList.remove('blur-hover');
        }
      }
    };

    // Smooth lerp loop for trailing outer blur ring (60 FPS)
    const render = () => {
      blurX += (mouseX - blurX) * 0.18;
      blurY += (mouseY - blurY) * 0.18;

      if (blurRef.current) {
        blurRef.current.style.transform = `translate3d(${blurX}px, ${blurY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { cursorRef, blurRef };
}
