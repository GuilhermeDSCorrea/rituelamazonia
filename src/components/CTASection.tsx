import React from 'react';
import { ShoppingBag, ShieldCheck, Sparkles, Lock, Download, Check, Trees, Leaf } from 'lucide-react';
import { PROGRAM_INFO } from '../data/protocolData';
import { AMAZON_FOREST_IMAGES } from '../data/ancestralData';

interface CTASectionProps {
  onOpenCheckout: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-24 bg-[#0A1A10] text-[#FDFBF7] relative overflow-hidden">
      
      {/* Background Rainforest Canopy Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={AMAZON_FOREST_IMAGES.canopy}
          alt="Amazon Rainforest Background"
          className="w-full h-full object-cover filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A10] via-[#0A1A10]/90 to-[#0A1A10]" />
      </div>

      {/* Background Organic Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#264A35] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#173822] border border-[#C5A059]/40 text-[#E6C875] text-xs font-semibold uppercase tracking-widest shadow-lg">
          <Trees className="w-4 h-4 text-[#C5A059]" />
          <span>Rituel Amazônia • Éveil de Beauté Botanique</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto text-[#FDFBF7]">
          Incorporez la puissance de l'Amazonie dans votre routine pour{' '}
          <span className="italic text-[#E6C875] underline decoration-[#C5A059]/60 underline-offset-8">
            seulement 9,90 €
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#D4E5D7]/90 max-w-2xl mx-auto leading-relaxed font-light">
          Rejoignez le programme digital et profitez immédiatement d'une méthode claire, douce et structurée pour harmoniser votre teint grâce à la beauté botanique.
        </p>

        {/* Feature Checkmarks Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#D4E5D7] pt-2 font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#C5A059]" />
            Accès membre immédiat
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#C5A059]" />
            Ebook PDF & fiches plantes
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#C5A059]" />
            Garantie Sérénité 14 jours
          </span>
        </div>

        {/* Call To Action Box */}
        <div className="bg-[#122E1D] p-6 sm:p-8 rounded-3xl border border-[#C5A059]/60 max-w-xl mx-auto space-y-6 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 text-left">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#E6C875] font-bold block flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-[#C5A059]" />
                Accès Numérique & Botanique
              </span>
              <p className="font-serif text-2xl font-bold text-[#FDFBF7]">Rituel Amazônia</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#D4E5D7]/50 line-through block">47,00 €</span>
              <span className="font-serif text-3xl font-bold text-[#E6C875]">9,90 €</span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] py-4 rounded-full font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-2xl flex items-center justify-center gap-2 transform active:scale-98"
          >
            <ShoppingBag className="w-5 h-5 text-[#0A1A10]" />
            <span>Commencer le rituel (9,90 €)</span>
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-[#D4E5D7]/80 pt-1">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              Paiement 100% Sécurisé
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-[#C5A059]" />
              Accès immédiat par mail
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

