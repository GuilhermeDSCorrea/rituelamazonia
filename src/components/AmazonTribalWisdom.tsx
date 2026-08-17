import React, { useState } from 'react';
import { Sparkles, Sun, Shield, Feather, Heart, Leaf, Trees, ArrowRight } from 'lucide-react';
import { INDIGENOUS_TRIBES, IndigenousTribe } from '../data/ancestralData';

interface AmazonTribalWisdomProps {
  onStartQuiz: () => void;
}

export const AmazonTribalWisdom: React.FC<AmazonTribalWisdomProps> = ({ onStartQuiz }) => {
  const [selectedTribe, setSelectedTribe] = useState<IndigenousTribe>(INDIGENOUS_TRIBES[0]);

  const getTribeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5 text-[#E6C875]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#C5A059]" />;
      case 'Feather': return <Feather className="w-5 h-5 text-[#E6C875]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E6C875]" />;
      default: return <Leaf className="w-5 h-5 text-[#52B788]" />;
    }
  };

  return (
    <section id="tribus-indigenes" className="py-24 bg-[#0A1A10] text-[#FDFBF7] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3323] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3323] border border-[#C5A059]/40 text-[#E6C875] text-xs font-bold uppercase tracking-widest">
            <Trees className="w-4 h-4 text-[#C5A059]" />
            <span>Sagesse Vivante des Peuples Premiers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7] font-bold leading-tight">
            Les Tribus Gardiennes & Leurs{' '}
            <span className="italic text-[#E6C875] font-normal">Rituels Millénaires</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D4E5D7]/80 font-light leading-relaxed">
            Depuis des générations, les communautés indigènes d'Amazonie transmettent l'art sacré de soigner et d'illuminer la peau à partir des végétaux les plus puissants de la terre.
          </p>
        </div>

        {/* Tribal Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {INDIGENOUS_TRIBES.map((tribe) => {
            const isSelected = selectedTribe.id === tribe.id;
            return (
              <button
                key={tribe.id}
                onClick={() => setSelectedTribe(tribe)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#173822] border-[#E6C875] shadow-[0_0_15px_rgba(230,200,117,0.3)] scale-[1.02]'
                    : 'bg-[#122A1B]/70 border-[#C5A059]/30 hover:bg-[#1A3E28] hover:border-[#C5A059]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0A1A10] border border-[#C5A059]/40 flex items-center justify-center">
                    {getTribeIcon(tribe.emblemIcon)}
                  </div>
                  <span className="text-[10px] font-mono text-[#E6C875] uppercase">Acre / Amazone</span>
                </div>

                <div>
                  <h4 className="font-serif text-sm font-bold text-[#FDFBF7] group-hover:text-[#E6C875] transition-colors">
                    {tribe.name}
                  </h4>
                  <p className="text-[11px] text-[#D4E5D7]/60 mt-1 line-clamp-1">
                    {tribe.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tribe Detailed Showcase Card */}
        <div className="bg-[#122A1B]/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C5A059]/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image with Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/60 group">
                <img
                  src={selectedTribe.image}
                  alt={selectedTribe.name}
                  className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#E6C875] font-bold block">
                    Territoire Préservé
                  </span>
                  <p className="font-serif text-sm text-[#FDFBF7] font-semibold">
                    {selectedTribe.region}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Tribe Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#E6C875] block">
                  {selectedTribe.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFBF7] mt-1">
                  {selectedTribe.name}
                </h3>
              </div>

              {/* Ritual & Wisdom Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-[#0A1A10]/70 border border-[#C5A059]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E6C875]">
                    <Sun className="w-4 h-4 text-[#C5A059]" />
                    <span>Le Rituel Sacré</span>
                  </div>
                  <p className="text-xs text-[#D4E5D7]/90 leading-relaxed font-light">
                    {selectedTribe.sacredRitual}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A1A10]/70 border border-[#C5A059]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E6C875]">
                    <Leaf className="w-4 h-4 text-[#52B788]" />
                    <span>Savoir Botanique</span>
                  </div>
                  <p className="text-xs text-[#D4E5D7]/90 leading-relaxed font-light">
                    {selectedTribe.botanicalWisdom}
                  </p>
                </div>

              </div>

              {/* Ancestral Quote */}
              <blockquote className="p-4 rounded-xl bg-[#173822] border-l-4 border-[#C5A059] text-xs sm:text-sm text-[#E6C875] font-serif italic">
                {selectedTribe.quote}
              </blockquote>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onStartQuiz}
                  className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="w-4 h-4 text-[#0A1A10]" />
                  <span>Découvrir ma tribu gardienne dans le Quiz</span>
                </button>
                <span className="text-xs text-[#D4E5D7]/70 italic">
                  Quiz en 5 questions (gratuit & immédiat)
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
