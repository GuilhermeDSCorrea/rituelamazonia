import React from 'react';

export const ForestFoliageOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Top Left Hanging Jungle Vine */}
      <div className="absolute -top-6 -left-6 w-40 sm:w-56 h-40 sm:h-56 opacity-20 transition-opacity hover:opacity-30">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#1A3323]">
          <path d="M10 0C30 50 120 40 80 120C60 160 140 180 190 200" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          {/* Leaves along vine */}
          <path d="M30 25C15 20 5 35 20 45C35 55 45 40 30 25Z" fill="currentColor"/>
          <path d="M60 42C50 25 70 15 80 30C90 45 75 55 60 42Z" fill="currentColor"/>
          <path d="M90 65C75 75 70 95 90 100C110 105 105 80 90 65Z" fill="currentColor"/>
          <path d="M75 125C55 130 50 150 70 160C90 170 95 140 75 125Z" fill="currentColor"/>
          <path d="M130 160C120 180 140 195 155 180C170 165 150 150 130 160Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Top Right Hanging Tropical Palm Leaves */}
      <div className="absolute -top-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 opacity-20 transform rotate-45">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#264A35]">
          <path d="M180 10C120 50 80 120 10 180" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M150 30C120 20 90 40 130 60C170 80 180 40 150 30Z" fill="currentColor"/>
          <path d="M130 60C90 50 70 80 110 100C150 120 160 80 130 60Z" fill="currentColor"/>
          <path d="M100 100C60 90 40 120 80 135C120 150 130 110 100 100Z" fill="currentColor"/>
          <path d="M70 135C30 130 20 155 50 170C80 185 90 150 70 135Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Floating Animated Leaf Particles across screen */}
      <div className="absolute top-1/4 left-[5%] animate-bounce duration-[8000ms] opacity-25">
        <svg className="w-8 h-8 text-[#1A3323]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5 16 3 21C8 21 14 18 17 8Z" />
          <path d="M12 2C6 4 3 8 2 13C6 12 10 9 12 2Z" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-[3%] animate-pulse duration-[6000ms] opacity-20">
        <svg className="w-10 h-10 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3C10 3 4 9 3 20C9 19 15 13 21 3Z" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-[2%] opacity-15 animate-pulse duration-[10000ms]">
        <svg className="w-12 h-12 text-[#264A35]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
        </svg>
      </div>

      {/* Bottom Right Tropical Fern Watermark */}
      <div className="absolute -bottom-8 -right-8 w-52 sm:w-72 h-52 sm:h-72 opacity-15">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#1A3323]">
          <path d="M20 190C60 140 120 80 190 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="50" cy="160" r="15" fill="currentColor"/>
          <circle cx="80" cy="130" r="18" fill="currentColor"/>
          <circle cx="110" cy="100" r="20" fill="currentColor"/>
          <circle cx="140" cy="70" r="18" fill="currentColor"/>
          <circle cx="170" cy="40" r="14" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};
