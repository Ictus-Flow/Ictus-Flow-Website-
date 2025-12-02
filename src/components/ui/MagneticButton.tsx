'use client';

import { useRef, useState, ReactNode, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

/**
 * Button component with magnetic hover effect
 * Can be rendered as either a button or an anchor tag
 */
export const MagneticButton = ({
  children,
  className = "",
  onClick,
  href
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // Magnetic strength
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`relative transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </Component>
  );
};
