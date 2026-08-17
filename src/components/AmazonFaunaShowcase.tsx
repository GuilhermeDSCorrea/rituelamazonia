import React, { useState } from 'react';
import { Sparkles, Trees, Eye, Droplets, Sun, Feather, Shield, ArrowRight } from 'lucide-react';
import { AMAZON_ANIMALS, AmazonAnimalTotem } from '../data/ancestralData';

interface AmazonFaunaShowcaseProps {
  onStartQuiz: () => void;
}

export const AmazonFaunaShowcase: React.FC<AmazonFaunaShowcaseProps> = ({ onStartQuiz }) => {
  const [selectedAnimal, setSelectedAnimal] = useState<AmazonAnimalTotem>(AMAZON_ANIMALS[0]);

  return (
    <section id="faune-sacree" className="py-24 bg-[#07130A] text-[#FDFBF7] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1A3323] rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3323] border border-[#C5A059]/40 text-[#E6C875] text-xs font-bold uppercase tracking-widest">
            <Trees className="w-4 h-4 text-[#C5A059]" />
            <span>Guides Spirituels & Biologiques</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7] font-bold leading-tight">
            La Faune Sacrée d'Amazonie &{' '}
            <span className="italic text-[#E6C875] font-normal">Leur Totem Cutané</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D4E5D7]/80 font-light leading-relaxed">
            Chaque créature de la jungle maîtresse incarne une adaptation biologique d'exception. Découvrez l'animal qui résonne avec la métamorphose de votre peau.
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMAZON_ANIMALS.map((animal) => {
            const isSelected = selectedAnimal.id === animal.id;
            return (
              <div
                key={animal.id}
                onClick={() => setSelectedAnimal(animal)}
                className={`bg-[#122A1B]/90 backdrop-blur-md rounded-3xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#E6C875] shadow-[0_0_25px_rgba(230,200,117,0.25)] ring-1 ring-[#E6C875]'
                    : 'border-[#C5A059]/30 hover:border-[#C5A059] shadow-lg'
                }`}
              >
                <div>
                  {/* Animal Image */}
                  <div className="h-48 rounded-2xl overflow-hidden mb-4 border border-[#C5A059]/40 relative">
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#0A1A10]/90 text-[#E6C875] border border-[#C5A059]/50">
                      {animal.element}
                    </span>
                  </div>

                  {/* Info */}
                  <span className="text-[10px] text-[#C5A059] font-mono italic block">
                    {animal.scientificName}
                  </span>
                  
                  <h3 className="font-serif text-xl font-bold text-[#FDFBF7] group-hover:text-[#E6C875] transition-colors mt-0.5">
                    {animal.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#E6C875] mt-1">
                    {animal.symbol}
                  </p>

                  <p className="text-xs text-[#D4E5D7]/80 leading-relaxed font-light mt-3">
                    {animal.totemMeaning}
                  </p>
                </div>

                {/* Skin Resonance Footer */}
                <div className="mt-6 pt-4 border-t border-[#C5A059]/20 space-y-3">
                  <div className="p-2.5 rounded-xl bg-[#0A1A10]/80 text-[11px] text-[#D4E5D7]/90 leading-snug">
                    <strong className="text-[#E6C875] block mb-0.5">Correspondance Cutanée :</strong>
                    {animal.skinResonance}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartQuiz();
                    }}
                    className="w-full text-center py-2.5 rounded-xl bg-[#1A3E28] group-hover:bg-[#C5A059] group-hover:text-[#0A1A10] text-[#E6C875] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Découvrir si c'est mon totem</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#122A1B] via-[#1A3E28] to-[#122A1B] p-8 rounded-3xl border border-[#C5A059]/40 max-w-3xl mx-auto space-y-4 shadow-2xl">
          <Sparkles className="w-6 h-6 text-[#E6C875] mx-auto animate-pulse" />
          <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">
            Prête à révéler l'animal protecteur de votre peau ?
          </h3>
          <p className="text-xs sm:text-sm text-[#D4E5D7]/80 font-light max-w-lg mx-auto">
            Passez le diagnostic interactif en 2 minutes pour recevoir votre ordonnance de soin botanique personnalisée.
          </p>
          <button
            onClick={onStartQuiz}
            className="bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-xl hover:scale-105"
          >
            Lancer le Quiz Botanique & Faune d'Amazonie
          </button>
        </div>

      </div>
    </section>
  );
};
