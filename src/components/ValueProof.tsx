import React from 'react';
import { VALUE_STACK, PROGRAM_INFO } from '../data/protocolData';
import { Check, ShieldCheck, Zap, Sparkles, Tag } from 'lucide-react';

interface ValueProofProps {
  onOpenCheckout: () => void;
}

export const ValueProof: React.FC<ValueProofProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F3EE] border border-[#E6D5B8] text-[#B89753] text-xs font-semibold uppercase">
            <Tag className="w-3.5 h-3.5" />
            <span>Offre Spéciale d'Accès Immédiat</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3323] font-semibold leading-tight">
            Une valeur exceptionnelle rendue délibérément accessible
          </h2>

          <p className="text-xs sm:text-sm text-[#2C3531]/80 leading-relaxed">
            Nous pensons que l'accès à un protocole de soin cohérent et respectueux ne devrait pas coûter une fortune. Voici ce qui est inclus dans votre accès :
          </p>
        </div>

        {/* Value Stack Card */}
        <div className="bg-[#F8F3EE] rounded-3xl p-6 sm:p-10 border border-[#E6D5B8] gold-card-border shadow-lg space-y-8">
          
          {/* Stack Items */}
          <div className="space-y-4 divide-y divide-[#E6D5B8]/50">
            {VALUE_STACK.map((item, idx) => (
              <div key={idx} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A3323] text-[#E6C875] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#1A3323]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#2C3531]/75">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="text-xs text-[#2C3531]/50 line-through block">Valeur réelle</span>
                  <span className="text-sm font-semibold text-[#1A3323]">{item.realValue}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value Summary Box */}
          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E6D5B8] flex flex-col sm:flex-row items-center justify-between gap-6 gold-glow">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B89753]">Valeur Totale Cumulée :</span>
                <span className="text-sm font-bold text-[#2C3531]/50 line-through">97,00 €</span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#1A3323] mt-1">
                Votre Tarif Aujourd'hui : <span className="text-[#264A35] underline decoration-[#E6C875]">{PROGRAM_INFO.price}</span>
              </p>
              <p className="text-xs text-[#2C3531]/70 mt-1">
                Achat unique • Aucun abonnement masqué • Accès numérique illimité
              </p>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-8 py-4 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-xl text-center shrink-0"
            >
              Obtenir Rituel Amazônia à 9,90 €
            </button>
          </div>

          {/* Guarantee Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left pt-2 text-xs text-[#2C3531]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#264A35]" />
              <span>Garantie Satisfaite ou Remboursée 14 Jours</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#B89753]" />
              <span>Envoi instantané de vos identifiants par email</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
