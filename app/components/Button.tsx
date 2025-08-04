import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = 'rounded-xl cursor-pointer transition-colors duration-200 font-medium px-4 py-3 text-base';
  
  const variantClasses = {
    primary: 'bg-[#34A853] hover:bg-[#34A853]/90 text-white',
    outline: 'border-2 border-[#34A853] text-[#34A853] bg-white hover:bg-white/90',
  };

  const widthClass = fullWidth ? 'w-[90%]' : '';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    widthClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button; 