"use client"  
import React from 'react';
import Button from './Button';

interface ActionButton {
  text: string;
  variant: 'primary' | 'outline' | 'secondary' | 'ghost';
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
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
        <Button 
          key={index}
          variant={button.variant} 
          size="lg"
          className={buttonClassName}
          onClick={button.onClick}
          loading={button.loading}
          disabled={button.disabled}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default ActionButtons; 