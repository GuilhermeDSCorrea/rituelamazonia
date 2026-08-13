import React from 'react';
import { Feather, Compass, Calendar, Sparkles, Heart, RefreshCw, Layers, Leaf, Trees } from 'lucide-react';
import { BENEFITS } from '../data/protocolData';

interface BenefitsProps {
  onOpenCheckout: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenCheckout }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#B89753]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#264A35]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#B89753]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#264A35]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#B89753]" />;
      default:
        return <Layers className="w-5 h-5 text-[#1A3323]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8F3EE]/90 relative overflow-hidden">
      
      {/* Background Subtle Leaf Icon Watermarks */}
      <div className="absolute -top-10 -left-10 w-72 h-72 text-[#1A3323]/5 pointer-events-none">
        <Leaf className="w-full h-full" />
      </div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 text-[#1A3323]/5 pointer-events-none">
        <Trees className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A3323]/10 border border-[#1A3323]/20 text-[#1A3323] text-xs font-semibold tracking-wider uppercase">
            <Trees className="w-3.5 h-3.5 text-[#B89753]" />
            <span>Les Piliers de l'Équilibre Amazonien</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3323] font-semibold leading-tight">
            Les 6 bénéfices essentiels de votre nouvelle routine
          </h2>

          <p className="text-sm text-[#2C3531]/80 leading-relaxed">
            Chaque aspect du programme **Rituel Amazônia** a été pensé pour allier efficacité dermatologique naturelle, simplicité d'exécution et élégance féminine.
          </p>
        </div>

        {/* 6 Benefit Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-[#E6D5B8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1A3323]/10 border border-[#1A3323]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#1A3323] group-hover:text-[#E6C875] transition-all">
                  {getIcon(benefit.iconName)}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89753] block mb-1">
                  {benefit.subtitle}
                </span>

                <h3 className="font-serif text-2xl text-[#1A3323] font-semibold mb-3">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2C3531]/75 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6D5B8]/60 flex items-center gap-2 text-xs font-medium text-[#1A3323]">
                <Leaf className="w-3.5 h-3.5 text-[#B89753]" />
                <span>Inclus dans le protocole à 9,90 €</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#2C3531]/70 mb-4">
            Un protocole complet, sans aucun abonnement, directement accessible sur votre smartphone, tablette ou ordinateur.
          </p>

          <button
            onClick={onOpenCheckout}
            className="bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-xl uppercase"
          >
            Découvrir Rituel Amazônia pour 9,90 €
          </button>
        </div>

      </div>
    </section>
  );
};

