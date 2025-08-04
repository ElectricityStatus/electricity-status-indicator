import React from 'react';

interface HeroContentProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ 
  title = "STOP GUESSING\nSTART CHECKING.",
  subtitle = "Real-time electricity updates from your area.",
  className = '' 
}) => {
  return (
    <div className={`flex flex-col text-start justify-center ${className}`}>
      <div className="pl-[15%] lg:text-black text-white gap-2.5 flex flex-col">
        <h1 className="font-bold sm:text-4xl text-2xl leading-[100%] tracking-[0%]">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-base font-normal lg:pt-2 lg:font-medium sm:text-[18px] leading-[100%] tracking-[0%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroContent; 