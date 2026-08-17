import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Volume2, VolumeX, Leaf, Trees, Compass } from 'lucide-react';
import { PROGRAM_INFO } from '../data/protocolData';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenQuiz: () => void;
  onScrollToSection?: (id: string) => void;
  audioPlaying: boolean;
  toggleAudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCheckout,
  onOpenQuiz,
  onScrollToSection,
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

  const handleNav = (id: string) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1A10]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C5A059]/30 text-[#FDFBF7]'
          : 'bg-transparent py-4 text-[#FDFBF7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#173822] border border-[#C5A059]/60 flex items-center justify-center text-[#E6C875] shadow-sm transition-transform group-hover:scale-105">
            <Leaf className="w-5 h-5 stroke-[1.75]" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl tracking-wide font-semibold text-[#FDFBF7] block leading-none">
              Rituel Amazônia
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E6C875] font-medium block mt-0.5">
              Quiz & Sagesse Botanique
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#D4E5D7]/80">
          <button 
            onClick={() => handleNav('quiz-amazonien')}
            className="hover:text-[#E6C875] transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Diagnostic Peau</span>
          </button>
          
          <button 
            onClick={() => handleNav('secret-ancestral')}
            className="hover:text-[#E6C875] transition-colors flex items-center gap-1"
          >
            <Trees className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Le Secret Ancestral</span>
          </button>

          <button 
            onClick={() => handleNav('protocole-modules')}
            className="hover:text-[#E6C875] transition-colors flex items-center gap-1"
          >
            <span>Le Protocole (5 Modules)</span>
          </button>

          <button 
            onClick={() => handleNav('avis-clientes')}
            className="hover:text-[#E6C875] transition-colors"
          >
            Avis Vérifiés
          </button>
        </nav>

        {/* Center / Right Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Audio Ambience Toggle Button */}
          <button
            onClick={toggleAudio}
            className={`hidden md:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all border ${
              audioPlaying
                ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#E6C875]'
                : 'bg-[#173822]/80 border-[#C5A059]/30 text-[#D4E5D7]/80 hover:text-[#FDFBF7]'
            }`}
            title="Ambiance sonore sensorielle Amazonie"
          >
            {audioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#E6C875] animate-pulse" />
                <span>Forêt Active</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#D4E5D7]/60" />
                <span>Ambiance Sonore</span>
              </>
            )}
          </button>

          {/* Quick Quiz Launch CTA */}
          <button
            onClick={onOpenQuiz}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#1A3E28] hover:bg-[#235336] text-[#E6C875] border border-[#C5A059]/50 transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Mon Diagnostic</span>
          </button>

          {/* Price Pill */}
          <div className="hidden xs:flex items-center bg-[#0A1A10] px-3 py-1 rounded-full border border-[#C5A059]/40 text-xs text-[#FDFBF7] font-semibold">
            <span className="text-[#E6C875] font-bold mr-1">{PROGRAM_INFO.price}</span>
            <span className="text-[10px] text-[#D4E5D7]/70 font-normal">Accès à vie</span>
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenCheckout}
            className="flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-md hover:shadow-xl uppercase transform active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-[#0A1A10]" />
            <span className="hidden xs:inline">Obtenir le protocole</span>
            <span className="xs:hidden">9,90 €</span>
          </button>
        </div>
      </div>
    </header>
  );
};

