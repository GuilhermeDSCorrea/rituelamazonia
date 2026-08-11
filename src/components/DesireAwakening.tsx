import React from 'react';
import { Heart, Feather, Sparkles, Compass, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/protocolData';

interface DesireAwakeningProps {
  onOpenCheckout: () => void;
}

export const DesireAwakening: React.FC<DesireAwakeningProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F3EE] border border-[#E6D5B8]/60 text-[#B89753] text-xs font-semibold tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
            <span>Pourquoi ce protocole a été pensé pour vous</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3323] font-semibold leading-tight">
            Et si votre soin quotidien devenait enfin un moment de{' '}
            <span className="italic font-normal text-[#264A35]">douceur et de sérénité</span> ?
          </h2>

          <p className="text-base text-[#2C3531]/80 leading-relaxed">
            De nombreuses femmes se sentent aujourd'hui perdues face à la multiplication des tendances, des produits agressifs et des étapes interminables. Il est temps de revenir à l'essentiel.
          </p>
        </div>

        {/* 2-Column Story / Reality vs Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E6D5B8]/80 gold-card-border">
              <img
                src={IMAGES.woman}
                alt="Femme sereine au teint lumineux et naturel"
                className="w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3323]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7] space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#E6C875] font-semibold block">
                  L'esprit Rituel Amazônia
                </span>
                <blockquote className="font-serif text-lg italic leading-snug">
                  « La beauté d'une peau ne naît pas de la surcharge, mais de l'harmonie constante d'un rituel bienveillant. »
                </blockquote>
              </div>
            </div>

            {/* Subtle floating quote card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#F8F3EE] p-4 rounded-2xl border border-[#E6D5B8] shadow-lg max-w-xs text-xs text-[#1A3323] hidden sm:block">
              <p className="font-medium text-[#1A3323]">✨ Sagesse Botanique :</p>
              <p className="text-[#2C3531]/80 mt-1">
                Savoir quoi appliquer, quand l'appliquer, et surtout avec quelle gestuelle apaisante.
              </p>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Common Frustration */}
            <div className="bg-[#F8F3EE]/60 p-6 rounded-2xl border border-[#E6D5B8]/40 space-y-3">
              <div className="flex items-center gap-2 text-[#264A35] font-semibold text-sm">
                <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
                <span>La réalité de beaucoup de routines actuelles</span>
              </div>
              <p className="text-sm text-[#2C3531]/80 leading-relaxed">
                Empiler 8 flacons le matin, essayer le dernier ingrédient à la mode sans savoir s'il convient à sa peau, ressentir des tiraillements ou de la fatigue cutanée... La surcharge amène souvent la confusion et l'abandon.
              </p>
            </div>

            {/* The Amazonian Vision */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#1A3323] font-semibold">
                L’expérience sensorielles d’un rituel guidé
              </h3>
              
              <p className="text-sm text-[#2C3531]/80 leading-relaxed">
                Inspiré par la richesse naturelle et la sagesse végétale de l'Amazonie, **Rituel Amazônia** a été créé pour transformer ce moment en une parenthèse précieuse. Vous n’avez plus besoin de deviner : tout est structuré avec élégance et simplicité.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]/60">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Légèreté & Minimalisme</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Seulement les gestes essentiels pour laisser respirer la peau.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]/60">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Guidance Pas à Pas</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Chaque matin et chaque soir, suivez votre fiche claire.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]/60">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <Sparkles className="w-4 h-4 text-[#B89753]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Éclat Naturel Ravivé</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Retrouvez un teint frais, uniforme et reposé au fil des jours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]/60">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#264A35]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Seulement 9,90 €</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Un savoir-faire accessible sans compromis sur la qualité.</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick CTA button */}
            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-2 bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <span>Rejoindre le rituel dès aujourd'hui (9,90 €)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
