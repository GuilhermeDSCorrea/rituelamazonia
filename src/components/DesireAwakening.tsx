import React from 'react';
import { Heart, Sparkles, ShieldAlert, CheckCircle2, Trees, Leaf, Droplets, Sun, Feather, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/protocolData';
import { AMAZON_FOREST_IMAGES } from '../data/ancestralData';

interface DesireAwakeningProps {
  onOpenCheckout: () => void;
}

export const DesireAwakening: React.FC<DesireAwakeningProps> = ({ onOpenCheckout }) => {
  return (
    <section id="secret-ancestral" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden text-[#2C3531]">
      
      {/* Subtle Leaf Background Accents */}
      <div className="absolute top-12 right-0 w-80 h-80 text-[#1A3323]/5 pointer-events-none transform translate-x-1/3">
        <Trees className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F4EDE4] border border-[#E6D5B8] text-[#B89753] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
            <span>Le Secret Botanique Dévoilé</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3323] font-bold leading-tight">
            Pourquoi les crèmes à 80 € échouent et comment le{' '}
            <span className="italic font-normal text-[#264A35] underline decoration-[#C5A059]/40 underline-offset-8">
              secret ancestral d'Amazonie
            </span>{' '}
            transforme votre peau
          </h2>

          <p className="text-base sm:text-lg text-[#2C3531]/80 leading-relaxed max-w-2xl mx-auto font-light">
            Pendant des décennies, l'industrie cosmétique nous a fait croire qu'il fallait 10 flacons chimiques pour avoir une belle peau. Les tribus d'Amazonie prouvent le contraire depuis des millénaires.
          </p>
        </div>

        {/* The Shocking Comparison: Conventional Industry vs Ancestral Secret */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: The Modern Skincare Trap */}
          <div className="bg-[#FFF8F7] p-6 sm:p-8 rounded-3xl border border-red-200/80 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-100/70 px-3 py-1 rounded-full">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Le Piège des Cosmétiques Conventionnels</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B1E1E]">
                80% d'eau, des silicones étouffants et des conservateurs
              </h3>
              <p className="text-xs sm:text-sm text-red-950/80 leading-relaxed">
                La majorité des sérums coûteux ne font que masquer temporairement les ridules grâce à des polymères synthétiques. Dès que vous nettoyez votre visage, la peau redevient terne, sèche et fragilisée.
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 text-xs text-red-900/90 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span>Routines interminables de 8 à 12 étapes qui agressent la barrière cutanée</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span>Dépenses mensuelles récurrentes de 60 € à 150 € sans résultats durables</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span>Perturbateurs endocriniens et micro-plastiques invisibles</span>
              </li>
            </ul>
          </div>

          {/* Box 2: The Ancestral Amazonian Miracle */}
          <div className="bg-[#F2F7F3] p-6 sm:p-8 rounded-3xl border-2 border-[#C5A059] shadow-lg space-y-4 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A3323] bg-[#E2EDE4] px-3 py-1 rounded-full border border-[#C5A059]/40">
                <Leaf className="w-4 h-4 text-[#C5A059]" />
                <span>La Vérité du Rituel Amazônia</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A3323]">
                Des Bio-Actifs Sauvages 100% Purs + 5 Minutes de Gestuelle
              </h3>
              <p className="text-xs sm:text-sm text-[#1A3323]/80 leading-relaxed">
                Les femmes indigènes n'utilisent aucun produit chimique. Elles appliquent des résines et huiles pressées à froid qui nourrissent directement les cellules de la peau et stimulent la production naturelle de collagène.
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 text-xs text-[#1A3323] font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Effet tenseur immédiat grâce à la sève écarlate de Sang-de-Dragon</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Éclat doré sans maquillage grâce aux caroténoïdes purs de Buriti</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Une routine ultra-simple de 5 minutes chrono matin et soir</span>
              </li>
            </ul>
          </div>

        </div>

        {/* The 4 Sacred Hero Bio-Actives Showcase */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C5A059]">
              La Pharmacopée Sacrée
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A3323] font-bold">
              Les 4 Trésors Botaniques au Cœur du Rituel
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Plant 1: Sang de Dragon */}
            <div className="bg-[#F8F3EE] p-5 rounded-3xl border border-[#E6D5B8] space-y-3 hover:border-[#C5A059] transition-all group">
              <div className="h-36 rounded-2xl overflow-hidden relative border border-[#C5A059]/30">
                <img
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80"
                  alt="Sang de Dragon - Croton lechleri"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-[#0A1A10]/80 text-[#E6C875] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Tenseur & Fermeté
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1A3323]">
                Sang-de-Dragon
              </h4>
              <p className="text-xs text-[#2C3531]/80 leading-relaxed">
                Résine écarlate ancestrale riche en <em>taspine</em>. Stimule le renouvellement cellulaire et raffermit l'ovale du visage.
              </p>
            </div>

            {/* Plant 2: Huile de Buriti */}
            <div className="bg-[#F8F3EE] p-5 rounded-3xl border border-[#E6D5B8] space-y-3 hover:border-[#C5A059] transition-all group">
              <div className="h-36 rounded-2xl overflow-hidden relative border border-[#C5A059]/30">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
                  alt="Huile de Buriti"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-[#0A1A10]/80 text-[#E6C875] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Éclat Solaire & Antioxydant
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1A3323]">
                Huile de Buriti
              </h4>
              <p className="text-xs text-[#2C3531]/80 leading-relaxed">
                50x plus concentrée en pro-vitamine A que la carotte. Ravive instantanément la bonne mine et protège du stress oxydatif.
              </p>
            </div>

            {/* Plant 3: Beurre de Murumuru */}
            <div className="bg-[#F8F3EE] p-5 rounded-3xl border border-[#E6D5B8] space-y-3 hover:border-[#C5A059] transition-all group">
              <div className="h-36 rounded-2xl overflow-hidden relative border border-[#C5A059]/30">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
                  alt="Beurre de Murumuru"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-[#0A1A10]/80 text-[#E6C875] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Nutrition & Douceur Velours
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1A3323]">
                Beurre de Murumuru
              </h4>
              <p className="text-xs text-[#2C3531]/80 leading-relaxed">
                Fond à la température de la peau pour réparer le film hydrolipidique et sceller l'hydratation sans obstruer les pores.
              </p>
            </div>

            {/* Plant 4: Résine de Copaïba */}
            <div className="bg-[#F8F3EE] p-5 rounded-3xl border border-[#E6D5B8] space-y-3 hover:border-[#C5A059] transition-all group">
              <div className="h-36 rounded-2xl overflow-hidden relative border border-[#C5A059]/30">
                <img
                  src="https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80"
                  alt="Baume de Copaïba"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  />
                <span className="absolute bottom-2 left-2 bg-[#0A1A10]/80 text-[#E6C875] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Apaisement & Pureté
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1A3323]">
                Baume de Copaïba
              </h4>
              <p className="text-xs text-[#2C3531]/80 leading-relaxed">
                Élixir apaisant anti-inflammatoire. Calme instantanément les rougeurs, les tiraillements et purifie le grain de peau.
              </p>
            </div>

          </div>
        </div>

        {/* Middle Call to Action Bar */}
        <div className="bg-[#1A3323] p-6 sm:p-8 rounded-3xl border-2 border-[#C5A059] text-[#FDFBF7] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#E6C875] font-bold">
              Protocole Digital Complet
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold">
              Apprenez où trouver ces actifs purs et comment les appliquer
            </h4>
            <p className="text-xs text-[#D4E5D7]/80">
              Inclus : Le carnet d'adresses d'approvisionnement en France/Europe à petit prix.
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] px-7 py-4 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 shrink-0 transform active:scale-95"
          >
            <span>Débloquer le protocole (9,90 €)</span>
            <ArrowRight className="w-4 h-4 text-[#0A1A10]" />
          </button>
        </div>

      </div>
    </section>
  );
};

