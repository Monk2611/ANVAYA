import React from 'react';

interface EraBadgeProps {
  label: string;
  variant?: 'sandstone' | 'terracotta' | 'indigo' | 'brass';
  size?: 'sm' | 'md';
  className?: string;
}

export const EraBadge: React.FC<EraBadgeProps> = ({
  label,
  variant = 'sandstone',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    sandstone: 'bg-[#F3ECE2] text-[#684300] border-[#B8863B]/35',
    terracotta: 'bg-[#A8422B]/10 text-[#882B16] border-[#A8422B]/40',
    indigo: 'bg-[#1A2744]/10 text-[#1A2744] border-[#1A2744]/30',
    brass: 'bg-[#FFD9A9]/30 text-[#684300] border-[#B8863B]/60',
  };

  const sizeStyles = {
    sm: 'h-6 px-2 text-[10px]',
    md: 'h-7 px-2.5 text-[11px]',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-bold tracking-[0.12em] uppercase border ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      style={{ borderRadius: '0.25rem' }}
    >
      {label}
    </span>
  );
};
