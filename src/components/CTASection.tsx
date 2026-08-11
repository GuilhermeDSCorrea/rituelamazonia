import React from 'react';
import { ShoppingBag, ShieldCheck, Sparkles, Lock, Download, Check } from 'lucide-react';
import { PROGRAM_INFO } from '../data/protocolData';

interface CTASectionProps {
  onOpenCheckout: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-[#1A3323] text-[#FDFBF7] relative overflow-hidden">
      
      {/* Background Organic Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#264A35] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E6C875]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#264A35] border border-[#E6C875]/30 text-[#E6C875] text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Rituel Amazônia • Protocole de Skincare</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto text-[#FDFBF7]">
          Commencez votre nouvelle routine dès aujourd'hui pour{' '}
          <span className="italic text-[#E6C875] underline decoration-[#E6C875]/40 underline-offset-8">
            seulement 9,90 €
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#E2D4C3] max-w-2xl mx-auto leading-relaxed">
          Rejoignez le programme digital et profitez immédiatement d'une méthode claire, douce et structurée pour harmoniser votre teint au quotidien.
        </p>

        {/* Feature Checkmarks Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#E2D4C3] pt-2">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#E6C875]" />
            Accès membre immédiat
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#E6C875]" />
            Guide Ebook PDF à télécharger
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#E6C875]" />
            Garantie Sérénité 14 jours
          </span>
        </div>

        {/* Call To Action Box */}
        <div className="bg-[#264A35]/80 p-6 sm:p-8 rounded-3xl border border-[#E6C875]/30 max-w-xl mx-auto space-y-6 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-[#E6C875]/20 pb-4 text-left">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#E6C875] font-semibold block">Accès Numérique Complet</span>
              <p className="font-serif text-2xl font-bold text-[#FDFBF7]">Rituel Amazônia</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#E2D4C3] line-through block">47,00 €</span>
              <span className="font-serif text-3xl font-bold text-[#E6C875]">9,90 €</span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full bg-[#E6C875] hover:bg-[#D4B562] text-[#1A3323] py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-2 transform active:scale-98"
          >
            <ShoppingBag className="w-5 h-5 text-[#1A3323]" />
            <span>Commencer le rituel (9,90 €)</span>
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-[#E2D4C3] pt-1">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#E6C875]" />
              Paiement 100% Sécurisé
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-[#E6C875]" />
              Téléchargement instantané
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
