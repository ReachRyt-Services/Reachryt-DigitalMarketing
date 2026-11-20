import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false,
  ariaLabel,
  target,
  rel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.18;
    const y = (clientY - (top + height / 2)) * 0.18;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold text-sm tracking-tight transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deepNavy';

  const variantStyles: Record<string, string> = {
    primary:
      'bg-brand-blue hover:bg-brand-darkBlue text-white px-7 py-3.5 shadow-glow hover:shadow-glow-lg border border-blue-400/30',
    secondary:
      'bg-white/10 hover:bg-white/15 text-white px-7 py-3.5 border border-white/15 backdrop-blur-md',
    whatsapp:
      'bg-[#25D366] hover:bg-[#1ebe5a] text-slate-950 font-bold px-7 py-3.5 shadow-glow-whatsapp',
    outline:
      'bg-transparent hover:bg-brand-blue/10 text-brand-blue border border-brand-blue/40 px-6 py-3',
  };

  const innerContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16, mass: 0.4 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          target={target}
          rel={rel}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
          className={`${baseStyles} ${variantStyles[variant]} ${
            disabled ? 'opacity-60 cursor-not-allowed' : ''
          } ${className}`}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return innerContent;
};
