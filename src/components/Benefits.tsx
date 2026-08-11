import React from 'react';
import { Feather, Compass, Calendar, Sparkles, Heart, RefreshCw, Layers } from 'lucide-react';
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
    <section className="py-20 bg-[#F8F3EE]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B89753] block">
            Les Piliers du Protocole
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3323] font-semibold leading-tight">
            Les 6 bénéfices de votre nouvelle routine
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
              className="bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl border border-[#E6D5B8]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F3EE] border border-[#E6D5B8]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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

              <div className="mt-6 pt-4 border-t border-[#E6D5B8]/30 flex items-center gap-2 text-xs font-medium text-[#1A3323]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89753]" />
                <span>Inclus dans le protocole à 9,90 €</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#2C3531]/70 mb-4">
            Un protocole complet, sans abonnement, directement accessible sur votre smartphone ou tablette.
          </p>

          <button
            onClick={onOpenCheckout}
            className="bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md hover:shadow-lg"
          >
            Découvrir Rituel Amazônia pour 9,90 €
          </button>
        </div>

      </div>
    </section>
  );
};
