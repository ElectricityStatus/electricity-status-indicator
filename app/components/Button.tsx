"use client"

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  loading = false,
  disabled = false,
  ...props
}) => {
  const baseClasses = 'rounded-xl cursor-pointer transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#34A853] hover:bg-[#34A853]/90 text-white focus:ring-[#34A853]/50',
    outline: 'border-2 border-[#34A853] text-[#34A853] bg-white hover:bg-[#34A853] hover:text-white focus:ring-[#34A853]/50',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500/50',
    ghost: 'text-[#34A853] hover:bg-[#34A853]/10 focus:ring-[#34A853]/50',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  // Only apply full width if explicitly requested, otherwise preserve original responsive behavior
  const widthClass = fullWidth ? 'w-full' : 'w-[90%] lg:w-[70%]';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button; 