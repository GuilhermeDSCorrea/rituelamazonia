import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Volume2, VolumeX, Leaf, HelpCircle } from 'lucide-react';
import { PROGRAM_INFO } from '../data/protocolData';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenQuiz: () => void;
  audioPlaying: boolean;
  toggleAudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCheckout,
  onOpenQuiz,
  audioPlaying,
  toggleAudio
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E6D5B8]/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#1A3323] flex items-center justify-center text-[#E6C875] shadow-sm transition-transform group-hover:scale-105">
            <Leaf className="w-5 h-5 stroke-[1.75]" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl tracking-wide font-semibold text-[#1A3323] block leading-none">
              Rituel Amazônia
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#B89753] font-medium block mt-0.5">
              Protocole de Skincare Digital
            </span>
          </div>
        </a>

        {/* Center / Right Controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Audio Ambience Toggle Button */}
          <button
            onClick={toggleAudio}
            className={`hidden md:flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full transition-all border ${
              audioPlaying
                ? 'bg-[#1A3323] text-[#FDFBF7] border-[#1A3323]'
                : 'bg-[#F8F3EE] text-[#1A3323] border-[#E6D5B8] hover:bg-[#E2D4C3]/30'
            }`}
            title="Ambiance sonore sensorielle Amazonie"
          >
            {audioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#E6C875] animate-pulse" />
                <span>Sons Amazonie (Actifs)</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#879883]" />
                <span>Ambiance Sonore</span>
              </>
            )}
          </button>

          {/* Quick Quiz Link */}
          <button
            onClick={onOpenQuiz}
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-[#1A3323] hover:text-[#B89753] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Mon Diagnostic</span>
          </button>

          {/* Price Pill */}
          <div className="hidden xs:flex items-center bg-[#F2F5F1] px-3 py-1 rounded-full border border-[#879883]/30 text-xs text-[#1A3323] font-semibold">
            <span className="text-[#B89753] font-bold mr-1">{PROGRAM_INFO.price}</span>
            <span className="text-[11px] text-[#2C3531]/70 font-normal">Accès à vie</span>
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenCheckout}
            className="flex items-center gap-2 bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md hover:shadow-lg transform active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-[#E6C875]" />
            <span>Accéder au protocole</span>
          </button>
        </div>
      </div>
    </header>
  );
};
