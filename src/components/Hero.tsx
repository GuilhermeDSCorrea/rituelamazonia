import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Download, Star, Leaf, CheckCircle2, Lock } from 'lucide-react';
import { PROGRAM_INFO, IMAGES } from '../data/protocolData';
import { AMAZON_FOREST_IMAGES } from '../data/ancestralData';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenQuiz }) => {
  return (
    <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#07130A] via-[#0E2617] to-[#0A1A10] text-[#FDFBF7]">
      {/* Background Rainforest Canopy Wallpaper & Subtle Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={AMAZON_FOREST_IMAGES.canopy}
          alt="Canopée Amazonie"
          className="w-full h-full object-cover filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130A]/95 via-[#0E2617]/85 to-[#0A1A10]" />
      </div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#1A3E28]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Direct Response Hook & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Urgency / Hook Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163824] border border-[#C5A059]/50 text-[#E6C875] text-xs font-bold tracking-wider uppercase shadow-md">
              <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
              <span>Le Secret Ancestral de Skincare Amazonien</span>
            </div>

            {/* High-Converting Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FDFBF7] leading-[1.12] font-bold tracking-tight">
              Une peau ferme, éclatante et rajeunie grâce au{' '}
              <span className="italic font-normal text-[#E6C875] underline decoration-[#C5A059]/60 underline-offset-8">
                rituel secret d'Amazonie
              </span>
            </h1>

            {/* Laser-Focused Subtitle */}
            <p className="text-base sm:text-lg text-[#D4E5D7]/90 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Oubliez les 10 étapes chimiques et les crèmes à 80€. Découvrez le protocole pas-à-pas de <strong>5 minutes par jour</strong> basé sur les résines pures et huiles sacrées des tribus indigènes pour lisser, illuminer et réparer votre peau dès 7 jours.
            </p>

            {/* 3 Irresistible Bullet Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-2xl bg-[#0A1A10]/80 border border-[#C5A059]/30 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#E6C875] shrink-0 font-bold text-xs">
                  1
                </div>
                <span className="text-xs font-medium text-[#D4E5D7] leading-tight">
                  <strong className="text-[#FDFBF7] block">Bio-Actifs Purs</strong> Sang-de-dragon & Buriti
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-[#0A1A10]/80 border border-[#C5A059]/30 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#E6C875] shrink-0 font-bold text-xs">
                  2
                </div>
                <span className="text-xs font-medium text-[#D4E5D7] leading-tight">
                  <strong className="text-[#FDFBF7] block">5 Min / Jour</strong> Gestes d'auto-massage
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-[#0A1A10]/80 border border-[#C5A059]/30 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#E6C875] shrink-0 font-bold text-xs">
                  3
                </div>
                <span className="text-xs font-medium text-[#D4E5D7] leading-tight">
                  <strong className="text-[#FDFBF7] block">Résultats en 7J</strong> Teint frais & rebondi
                </span>
              </div>
            </div>

            {/* Direct Offer Box & CTA (No-Brainer Conversion) */}
            <div className="bg-[#122A1B] p-5 sm:p-6 rounded-3xl border-2 border-[#C5A059] shadow-2xl max-w-xl mx-auto lg:mx-0 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#E6C875] font-extrabold">Offre Spéciale Découverte</span>
                    <span className="bg-[#C5A059] text-[#0A1A10] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
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
                      (Paiement unique • Accès à vie)
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] px-7 py-4 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(197,160,89,0.4)] hover:shadow-[0_0_30px_rgba(230,200,117,0.7)] flex items-center justify-center gap-2 transform active:scale-98 group"
                >
                  <span>Rejoindre le rituel</span>
                  <ArrowRight className="w-4 h-4 text-[#0A1A10] transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Guarantees sub-bar */}
              <div className="mt-4 pt-3 border-t border-[#C5A059]/30 flex flex-wrap items-center justify-center sm:justify-between text-[11px] text-[#D4E5D7]/80 gap-2">
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-[#E6C875]" />
                  Téléchargement & Accès immédiat
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E6C875]" />
                  Garantie Sérénité 14 jours
                </span>
              </div>
            </div>

            {/* Quick Diagnostic Link / Secondary Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={onOpenQuiz}
                className="text-xs font-bold text-[#E6C875] hover:text-[#FDFBF7] transition-colors flex items-center gap-1.5 underline decoration-[#C5A059] underline-offset-4"
              >
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Faire mon diagnostic de peau amazonienne personnalisé (Gratuit - 1 min)</span>
              </button>
            </div>

            {/* Social Proof with Real Star Rating */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#C5A059] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#C5A059] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Avis cliente"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#C5A059] object-cover"
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
                  Validé par <strong className="text-[#E6C875]">3 480+ femmes</strong> pour une peau lumineuse
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: High Converting Visual Ebook & Skincare Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059] to-[#264A35] rounded-3xl transform rotate-2 scale-105 opacity-30 blur-2xl" />

              <div className="relative bg-[#122A1B] rounded-3xl p-3 shadow-2xl border-2 border-[#C5A059]/60 overflow-hidden">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] group">
                  <img
                    src={IMAGES.tablet}
                    alt="Rituel Amazônia - Protocole Digital & Guide Botanique"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10]/95 via-transparent to-transparent opacity-90" />

                  {/* Overlay Text Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-[#FDFBF7]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-ping" />
                      <span className="text-[11px] uppercase tracking-widest text-[#E6C875] font-bold">
                        Pack Digital Complet + Vidéos + Fiches
                      </span>
                    </div>
                    <p className="font-serif text-base sm:text-lg font-bold leading-tight">
                      Le Protocole Rituel Amazônia (5 Modules)
                    </p>
                  </div>
                </div>

                {/* Feature Pills */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#0A1A10] border border-[#C5A059]/30 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#E6C875] shrink-0">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#FDFBF7]">Secret Ancestral</p>
                      <p className="text-[10px] text-[#D4E5D7]/70">Actifs 100% naturels</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0A1A10] border border-[#C5A059]/30 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#E6C875] shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#E6C875]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#FDFBF7]">Accès Immédiat</p>
                      <p className="text-[10px] text-[#D4E5D7]/70">Smartphone & Tablette</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Price Tag Badge */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#C5A059] text-[#0A1A10] p-3 rounded-2xl shadow-2xl border-2 border-[#FDFBF7] flex items-center gap-2 transform rotate-2 animate-bounce">
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-[#0A1A10] block font-black">Accès Immédiat</span>
                  <span className="font-serif text-xl font-black leading-none text-[#0A1A10]">Seulement 9,90 €</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

