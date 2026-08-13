import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Download, Star, Leaf, Trees, Compass } from 'lucide-react';
import { PROGRAM_INFO, IMAGES } from '../data/protocolData';
import { AMAZON_FOREST_IMAGES } from '../data/ancestralData';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenQuiz }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0F281B] via-[#1A3A28] to-[#FDFBF7] text-[#FDFBF7]">
      {/* Background Rainforest Canopy Wallpaper & Glow */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src={AMAZON_FOREST_IMAGES.canopy}
          alt="Rainforest Canopy"
          className="w-full h-full object-cover filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F281B]/80 via-[#1A3A28]/95 to-[#FDFBF7]" />
      </div>

      {/* Decorative Organic Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#264A35]/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Offer */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Category */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#234A33] border border-[#C5A059]/40 text-[#E6C875] text-xs font-semibold tracking-wider uppercase shadow-md">
              <Trees className="w-4 h-4 text-[#C5A059]" />
              <span>Protocole Skincare Digital • Sagesse & Botanique Amazonienne</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FDFBF7] leading-[1.15] font-semibold tracking-tight">
              Le secret d'un rituel de beauté inspiré de{' '}
              <span className="italic font-normal text-[#E6C875] underline decoration-[#C5A059]/60 underline-offset-8">
                l'Amazonie
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#D4E5D7]/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Inspiré par la puissance des plantes sacrés et des arbres séculaires de la forêt tropicale.
              Une routine de soin simple, élégante et pas à pas pour harmoniser votre peau, apaiser les rougeurs et raviver votre éclat naturel.
            </p>

            {/* 3 Botanical Ancestral Highlights */}
            <div className="grid grid-cols-3 gap-2 py-1 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-2.5 rounded-xl bg-[#0F281B]/80 border border-[#C5A059]/30 flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-[11px] font-medium text-[#D4E5D7] leading-tight">Actifs Botaniques Purs</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0F281B]/80 border border-[#C5A059]/30 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-[11px] font-medium text-[#D4E5D7] leading-tight">Rituels Matin & Soir</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0F281B]/80 border border-[#C5A059]/30 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-[11px] font-medium text-[#D4E5D7] leading-tight">Effet Éclat Naturel</span>
              </div>
            </div>

            {/* Price Highlight Card */}
            <div className="bg-[#122E1D] p-5 sm:p-6 rounded-2xl border border-[#C5A059]/60 shadow-2xl max-w-xl mx-auto lg:mx-0 gold-glow">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#E6C875] font-bold">Offre Découverte Exclusive</span>
                    <span className="bg-[#C5A059] text-[#0A1A10] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      -80% AUJOURD'HUI
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#FDFBF7]">
                      {PROGRAM_INFO.price}
                    </span>
                    <span className="text-sm text-[#D4E5D7]/50 line-through">
                      {PROGRAM_INFO.regularPrice}
                    </span>
                    <span className="text-xs text-[#E6C875] font-medium ml-1">
                      (Paiement unique • Accès immédiat)
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 transform active:scale-98 group uppercase"
                >
                  <span>Rejoindre le rituel</span>
                  <ArrowRight className="w-4 h-4 text-[#0A1A10] transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-[#C5A059]/30 flex flex-wrap items-center justify-center sm:justify-between text-[11px] text-[#D4E5D7]/80 gap-2">
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-[#E6C875]" />
                  Téléchargement numérique immédiat
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E6C875]" />
                  Garantie Sérénité 14 jours
                </span>
              </div>
            </div>

            {/* Quick Diagnostic Link */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2">
              <button
                onClick={onOpenQuiz}
                className="text-xs font-semibold text-[#E6C875] underline decoration-[#C5A059] hover:text-[#FDFBF7] transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                Pas sûre ? Faites notre diagnostic peau amazonienne gratuit (1 min)
              </button>
            </div>

            {/* Social Proof Stars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#C5A059] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#C5A059] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#C5A059] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                  <span className="text-xs font-bold text-[#FDFBF7] ml-1">4.9/5</span>
                </div>
                <p className="text-[11px] text-[#D4E5D7]/80">
                  Adopté par <strong className="text-[#E6C875]">2 480+ femmes</strong> adeptes de soin naturel
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Refined Amazonia & Digital Product Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059] to-[#264A35] rounded-3xl transform rotate-2 scale-105 opacity-25 blur-xl" />

              <div className="relative bg-[#0F281B] rounded-3xl p-3 shadow-2xl border border-[#C5A059]/60 overflow-hidden">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] group">
                  <img
                    src={IMAGES.tablet}
                    alt="Rituel Amazônia - Digital Skincare Ebook & Protocol App"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10]/90 via-transparent to-transparent opacity-90" />

                  {/* Overlay Text Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-[#FDFBF7]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-ping" />
                      <span className="text-[11px] uppercase tracking-widest text-[#E6C875] font-bold">
                        Format Digital Interactif + PDF
                      </span>
                    </div>
                    <p className="font-serif text-lg font-medium leading-tight">
                      Rituel Amazônia : Votre espace membre & fiches botaniques
                    </p>
                  </div>
                </div>

                {/* Floating Feature Pills */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#173822] border border-[#C5A059]/30 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#E6C875] shrink-0">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#FDFBF7]">Botanique Sacrée</p>
                      <p className="text-[10px] text-[#D4E5D7]/70">Ingrédients amazoniens</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#173822] border border-[#C5A059]/30 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#E6C875] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#FDFBF7]">Accès Immédiat</p>
                      <p className="text-[10px] text-[#D4E5D7]/70">Téléphone & Tablette</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Price Tag Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#C5A059] text-[#0A1A10] p-3 rounded-2xl shadow-xl border border-[#FDFBF7]/40 flex items-center gap-2.5 transform rotate-3">
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-[#0A1A10] block font-extrabold">Accès Instantané</span>
                  <span className="font-serif text-xl font-extrabold leading-none text-[#0A1A10]">Seulement 9,90 €</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

