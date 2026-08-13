import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Trees, Leaf } from 'lucide-react';
import { COMPARISON_TABLE } from '../data/protocolData';

interface TransformationComparisonProps {
  onOpenCheckout: () => void;
}

export const TransformationComparison: React.FC<TransformationComparisonProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-[#F8F3EE]/80 relative overflow-hidden">
      
      {/* Rainforest Leaf Background Accent */}
      <div className="absolute -top-10 -right-10 w-72 h-72 text-[#1A3323]/5 pointer-events-none">
        <Trees className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A3323]/10 border border-[#1A3323]/20 text-[#1A3323] text-xs font-semibold tracking-wider uppercase">
            <Leaf className="w-3.5 h-3.5 text-[#B89753]" />
            <span>Votre Métamorphose Botanique</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3323] font-semibold leading-tight">
            Pourquoi adopter le rituel inspiré de l'Amazonie ?
          </h2>

          <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed">
            Passez de l'incertitude et de la surcharge à un rituel clair, fluide et harmonieux.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-[#FDFBF7] rounded-3xl border border-[#E6D5B8] shadow-md overflow-hidden gold-card-border">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#1A3323] text-[#FDFBF7] p-4 sm:p-6 items-center">
            <div className="md:col-span-4 font-serif text-lg font-semibold text-[#E6C875] hidden md:block">
              Aspect de votre routine
            </div>
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-[#E2D4C3] flex items-center gap-2 mb-2 md:mb-0">
              <XCircle className="w-4 h-4 text-red-300" />
              <span>Sans Rituel Amazônia (Routine Classique)</span>
            </div>
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-[#E6C875] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E6C875]" />
              <span>Avec le Protocole Rituel Amazônia</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E6D5B8]/40">
            {COMPARISON_TABLE.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-center hover:bg-[#F8F3EE]/40 transition-colors">
                
                {/* Aspect label */}
                <div className="md:col-span-4 font-serif text-base font-bold text-[#1A3323]">
                  {row.aspect}
                </div>

                {/* Before / Without */}
                <div className="md:col-span-4 bg-red-50/50 p-3.5 rounded-xl border border-red-100 text-xs text-red-900 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.before}</span>
                </div>

                {/* After / With Rituel Amazônia */}
                <div className="md:col-span-4 bg-[#F2F5F1] p-3.5 rounded-xl border border-[#879883]/30 text-xs text-[#1A3323] font-medium flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#264A35] shrink-0 mt-0.5" />
                  <span>{row.after}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* CTA Card */}
        <div className="mt-12 bg-[#1A3323] text-[#FDFBF7] p-6 sm:p-8 rounded-3xl text-center max-w-3xl mx-auto space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6C875]/10 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FDFBF7]">
            Offrez-vous la sérénité d'une routine parfaitement guidée
          </h3>

          <p className="text-xs sm:text-sm text-[#E2D4C3] max-w-xl mx-auto">
            Rejoignez plus de 2 400 femmes qui ont déjà simplifié leur skincare et ravivé leur éclat naturel pour seulement 9,90 €.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenCheckout}
              className="bg-[#E6C875] hover:bg-[#D4B562] text-[#1A3323] px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg inline-flex items-center gap-2 transform active:scale-98"
            >
              <span>Accéder au protocole (9,90 €)</span>
              <ArrowRight className="w-4 h-4 text-[#1A3323]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
