import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AcursioLogo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  // Height sizing
  const dimensions = {
    sm: { width: 34, height: 42 },
    md: { width: 44, height: 54 },
    lg: { width: 56, height: 68 },
  }[size];

  return (
    <div className={`relative flex items-center select-none cursor-pointer transition-transform hover:scale-105 ${className}`}>
      <Image
        src="/acursio.webp"
        alt="Acursio Official Logo"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="object-contain drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]"
      />
    </div>
  );
};
