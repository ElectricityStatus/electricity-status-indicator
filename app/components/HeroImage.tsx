import React from 'react';
import Image from 'next/image';
import WorldImg from '@/public/worldImg.png';

interface HeroImageProps {
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const HeroImage: React.FC<HeroImageProps> = ({ 
  src = WorldImg,
  alt = "World Image",
  className = '',
  width = 1000,
  height = 1000
}) => {
  return (
    <div className={`hidden lg:flex lg:w-[60%] bg-black relative lg:justify-center lg:items-center lg:h-screen ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width} 
        height={height}
        className="object-cover h-[700px] w-[600px]"
        priority
      />
    </div>
  );
};

export default HeroImage; 