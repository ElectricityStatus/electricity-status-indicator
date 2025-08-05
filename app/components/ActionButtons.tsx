"use client"  
import React from 'react';
import Button from './Button';
import Link from 'next/link';

interface ActionButton {
  text: string;
  variant: 'primary' | 'outline' | 'secondary' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
  href: string; // Required href for navigation
}

interface ActionButtonsProps {
  buttons: ActionButton[];
  className?: string;
  buttonClassName?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  buttons, 
  className = '',
  buttonClassName = ''
}) => {
  return (
    <div className={`mt-36 flex gap-4 flex-col justify-center items-center ${className}`}>
      {buttons.map((button, index) => (
        <Link 
          key={index} 
          href={button.href}
          className="w-full flex justify-center"
          style={{ textDecoration: 'none' }}
        >
          <Button 
            variant={button.variant} 
            size="lg"
            className={buttonClassName}
            loading={button.loading}
            disabled={button.disabled}
          >
            {button.text}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ActionButtons;