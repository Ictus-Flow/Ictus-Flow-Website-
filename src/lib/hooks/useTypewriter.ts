import { useState, useEffect } from 'react';

/**
 * Custom hook for typewriter effect animation
 * @param text - The text to display with typewriter effect
 * @param speed - Speed of typing in milliseconds (default: 50ms)
 * @param delay - Delay before starting the animation in milliseconds (default: 500ms)
 * @returns The text being progressively displayed
 */
export const useTypewriter = (
  text: string,
  speed: number = 50,
  delay: number = 500
): string => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, started]);

  return displayText;
};
