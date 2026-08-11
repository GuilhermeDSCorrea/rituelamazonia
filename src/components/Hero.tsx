import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Download, Star, Leaf } from 'lucide-react';
import { PROGRAM_INFO, IMAGES } from '../data/protocolData';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenQuiz }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F8F3EE] via-[#FDFBF7] to-[#FDFBF7]">
      {/* Background Subtle Organic Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#879883]/10 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#E2D4C3]/20 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Offer */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Category */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A3323]/5 border border-[#1A3323]/10 text-[#1A3323] text-xs font-medium tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B89753]" />
              <span>Protocole de Skincare Digital • Édition Amazonie</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A3323] leading-[1.15] font-semibold tracking-tight">
              Le secret d'un rituel de beauté inspiré de{' '}
              <span className="italic font-normal text-[#264A35] underline decoration-[#C5A059]/40 underline-offset-8">
                l'Amazonie
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#2C3531]/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Découvrez une routine de soin simple, élégante et pas à pas. 
              Un programme digital conçu pour harmoniser votre peau, apaiser les rougeurs et retrouver un éclat naturel sans surcharge de produits.
            </p>

            {/* Price Highlight Card */}
            <div className="bg-[#FDFBF7] p-4 sm:p-5 rounded-2xl border border-[#E6D5B8]/60 shadow-sm max-w-xl mx-auto lg:mx-0 gold-glow">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#B89753] font-semibold">Offre Découverte Exclusive</span>
                    <span className="bg-[#1A3323] text-[#E6C875] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      -80% AUJOURD'HUI
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#1A3323]">
                      {PROGRAM_INFO.price}
                    </span>
                    <span className="text-sm text-[#2C3531]/50 line-through">
                      {PROGRAM_INFO.regularPrice}
                    </span>
                    <span className="text-xs text-[#264A35] font-medium ml-1">
                      (Paiement unique • Accès à vie)
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-6 py-3.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 transform active:scale-98 group"
                >
                  <span>Commencer le rituel</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C875] transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-[#E6D5B8]/30 flex flex-wrap items-center justify-center sm:justify-between text-[11px] text-[#2C3531]/70 gap-2">
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-[#B89753]" />
                  Téléchargement numérique immédiat
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#264A35]" />
                  Garantie Sérénité 14 jours
                </span>
              </div>
            </div>

            {/* Quick Diagnostic Link */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2">
              <button
                onClick={onOpenQuiz}
                className="text-xs font-medium text-[#1A3323] underline decoration-[#B89753] hover:text-[#B89753] transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B89753]" />
                Pas sûre ? Faites notre diagnostic peau gratuit en 1 min
              </button>
            </div>

            {/* Social Proof Stars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FDFBF7] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FDFBF7] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FDFBF7] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                  <span className="text-xs font-bold text-[#1A3323] ml-1">4.9/5</span>
                </div>
                <p className="text-[11px] text-[#2C3531]/70">
                  Adopté par <strong className="text-[#1A3323]">2 480+ femmes</strong> passionnées de soin naturel
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Refined Amazonia & Digital Product Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3323] to-[#879883] rounded-3xl transform rotate-2 scale-105 opacity-15 blur-lg" />

              <div className="relative bg-[#FDFBF7] rounded-3xl p-3 shadow-xl border border-[#E6D5B8]/80 gold-card-border overflow-hidden">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] group">
                  <img
                    src={IMAGES.tablet}
                    alt="Rituel Amazônia - Digital Skincare Ebook & Protocol App"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3323]/60 via-transparent to-transparent opacity-80" />

                  {/* Overlay Text Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-[#FDFBF7]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-ping" />
                      <span className="text-[11px] uppercase tracking-widest text-[#E6C875] font-semibold">
                        Format 100% Digital
                      </span>
                    </div>
                    <p className="font-serif text-lg font-medium leading-tight">
                      Rituel Amazônia : Votre guide interactif & PDF
                    </p>
                  </div>
                </div>

                {/* Floating Feature Pills */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#F8F3EE] border border-[#E6D5B8]/40 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1A3323]/10 flex items-center justify-center text-[#1A3323] shrink-0">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1A3323]">Botanique Amazonienne</p>
                      <p className="text-[10px] text-[#2C3531]/70">Ingrédients purs & doux</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F2F5F1] border border-[#879883]/30 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#264A35]/10 flex items-center justify-center text-[#264A35] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1A3323]">Accès Téléphone & PC</p>
                      <p className="text-[10px] text-[#2C3531]/70">Espace membre + PDF</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Price Tag Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#1A3323] text-[#FDFBF7] p-3 rounded-2xl shadow-lg border border-[#E6C875]/40 flex items-center gap-2.5 transform rotate-3">
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-[#E6C875] block font-semibold">Accès Immédiat</span>
                  <span className="font-serif text-xl font-bold leading-none text-[#FDFBF7]">Seulement 9,90 €</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
