import React from 'react';

interface FooterProps {
  text?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  text = "QTR | 2'25",
  className = '' 
}) => {
  return (
    <footer className={`hidden lg:block mt-[200px] ${className}`}>
      <div className="text-center text-sm text-gray-500">
        <p>{text}</p>
      </div>
    </footer>
  );
};

export default Footer; 