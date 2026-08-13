import React from 'react';
import { Heart, Feather, Sparkles, Compass, ShieldAlert, CheckCircle2, Trees, Leaf } from 'lucide-react';
import { IMAGES } from '../data/protocolData';
import { AMAZON_FOREST_IMAGES } from '../data/ancestralData';

interface DesireAwakeningProps {
  onOpenCheckout: () => void;
}

export const DesireAwakening: React.FC<DesireAwakeningProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Subtle Leaf Background Accents */}
      <div className="absolute top-12 right-0 w-64 h-64 text-[#1A3323]/5 pointer-events-none transform translate-x-1/2">
        <Trees className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F3EE] border border-[#E6D5B8]/80 text-[#B89753] text-xs font-semibold tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
            <span>Harmonie Cutanée & Sérénité Botanique</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3323] font-semibold leading-tight">
            Et si votre soin quotidien s'inspirait enfin de la{' '}
            <span className="italic font-normal text-[#264A35]">sagesse vivante de l'Amazonie</span> ?
          </h2>

          <p className="text-base text-[#2C3531]/80 leading-relaxed max-w-2xl mx-auto">
            De nombreuses femmes se sentent aujourd'hui saturées par la multiplication des sérums agressifs et des étapes interminables. Il est temps de revenir à la pureté essentielle de la nature.
          </p>
        </div>

        {/* 2-Column Story / Reality vs Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Dual Visual Photo Column */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Primary Woman Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E6D5B8] gold-card-border group">
              <img
                src={IMAGES.woman}
                alt="Femme sereine au teint lumineux et naturel"
                className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3323]/90 via-[#1A3323]/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-[#FDFBF7] space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#E6C875] font-bold block">
                  L'esprit Rituel Amazônia
                </span>
                <blockquote className="font-serif text-base sm:text-lg italic leading-snug">
                  « La beauté d'une peau ne naît pas de la surcharge, mais de l'harmonie constante d'un rituel bienveillant. »
                </blockquote>
              </div>
            </div>

            {/* Inset Secondary Amazon Rainforest Photo Card */}
            <div className="p-3 bg-[#1A3323] rounded-2xl border border-[#C5A059]/40 shadow-lg text-[#FDFBF7] flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#C5A059]/50">
                <img
                  src={AMAZON_FOREST_IMAGES.mistRiver}
                  alt="Brume du fleuve Amazone"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#E6C875] flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Savoirs Botaniques Ancestraux</span>
                </p>
                <p className="text-[11px] text-[#D4E5D7]/80 mt-0.5 leading-snug">
                  Savoir quoi appliquer, quand l'appliquer, et surtout avec quelle gestuelle apaisante.
                </p>
              </div>
            </div>

          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Common Frustration */}
            <div className="bg-[#F8F3EE]/80 p-6 rounded-2xl border border-[#E6D5B8]/80 space-y-3">
              <div className="flex items-center gap-2 text-[#264A35] font-semibold text-sm">
                <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
                <span>La réalité de beaucoup de routines actuelles</span>
              </div>
              <p className="text-sm text-[#2C3531]/80 leading-relaxed">
                Empiler 8 flacons le matin, essayer le dernier synthétique à la mode sans savoir s'il convient à sa peau, ressentir des tiraillements ou de la fatigue cutanée... La surcharge amène souvent la confusion et l'abandon.
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
                
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Légèreté & Minimalisme</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Seulement les gestes essentiels pour laisser respirer la peau.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Guidance Pas à Pas</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Chaque matin et chaque soir, suivez votre fiche claire.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <Sparkles className="w-4 h-4 text-[#B89753]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Éclat Naturel Ravivé</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Retrouvez un teint frais, uniforme et reposé au fil des jours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E6D5B8]">
                  <div className="p-2 rounded-lg bg-[#1A3323]/10 text-[#1A3323] shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#264A35]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A3323]">Seulement 9,90 €</h4>
                    <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Un savoir-faire accessible sans aucun abonnement caché.</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick CTA button */}
            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-2 bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all shadow-md hover:shadow-xl"
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

