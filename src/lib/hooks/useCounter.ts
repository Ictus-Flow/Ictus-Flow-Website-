import { useState, useEffect, useRef } from 'react';

/**
 * Result of the useCounter hook
 */
interface UseCounterResult {
  count: number;
  ref: React.RefObject<HTMLDivElement>;
}

/**
 * Custom hook for animated counting up numbers with intersection observer
 * @param end - The target number to count to
 * @param duration - Duration of the animation in milliseconds (default: 2000ms)
 * @param start - Starting number (default: 0)
 * @returns Object containing current count and ref to attach to the element
 */
export const useCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0
): UseCounterResult => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration, start]);

  return { count, ref };
};
