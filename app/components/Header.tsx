import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <nav className={`w-full ${className}`}>
      <div className="flex mt-10 ml-10 items-center gap-2">
        <h1 className="text-2xl ml-10 font-bold text-white lg:text-black">LOGO</h1>
      </div>
    </nav>
  );
};

export default Header; 