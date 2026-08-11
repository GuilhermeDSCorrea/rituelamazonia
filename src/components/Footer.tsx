import React from 'react';
import { Leaf, Lock, ShieldCheck, Heart, Download } from 'lucide-react';
import { PROGRAM_INFO } from '../data/protocolData';

interface FooterProps {
  onOpenCheckout: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout, onOpenQuiz }) => {
  return (
    <footer className="bg-[#122318] text-[#FDFBF7] pt-16 pb-12 border-t border-[#264A35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#264A35]/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#264A35] flex items-center justify-center text-[#E6C875]">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-[#FDFBF7]">
                Rituel Amazônia
              </span>
            </div>

            <p className="text-xs text-[#E2D4C3]/80 leading-relaxed max-w-sm">
              Un protocole de skincare digital pensé pour simplifier votre quotidien, harmoniser votre routine et vous reconnecter à la douceur d'un soin d'inspiration amazonienne.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#E6C875]">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantie Satisfaite ou Remboursée 14 jours</span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-serif text-base font-bold text-[#E6C875]">
              Le Programme
            </h4>

            <ul className="space-y-2 text-[#E2D4C3]/80">
              <li>
                <a href="#programme" className="hover:text-[#E6C875] transition-colors">
                  Les 5 Modules Détaillés
                </a>
              </li>
              <li>
                <button onClick={onOpenQuiz} className="hover:text-[#E6C875] transition-colors text-left">
                  Diagnostic Peau Gratuit
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E6C875] transition-colors">
                  Foire aux Questions
                </a>
              </li>
              <li>
                <button onClick={onOpenCheckout} className="hover:text-[#E6C875] transition-colors text-left">
                  Accéder au Protocole (9,90 €)
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 2 & Reassurance */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-serif text-base font-bold text-[#E6C875]">
              Informations & Sécurité
            </h4>

            <p className="text-[11px] text-[#E2D4C3]/70 leading-relaxed">
              * Rituel Amazônia est un produit d'information et d'accompagnement digital (PDF + Espace Membre). Il ne s'agit pas d'un traitement médical ni d'un produit cosmétique physique envoyé par voie postale.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-[#E2D4C3]/80">
              <span className="bg-[#264A35] px-2.5 py-1 rounded-full border border-[#E6C875]/20 flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#E6C875]" /> SSL 256-Bit
              </span>
              <span className="bg-[#264A35] px-2.5 py-1 rounded-full border border-[#E6C875]/20 flex items-center gap-1">
                <Download className="w-3 h-3 text-[#E6C875]" /> Envoi Téléchargement
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E2D4C3]/60">
          <p>© {new Date().getFullYear()} Rituel Amazônia. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#E6C875]">Mentions Légales</a>
            <span>•</span>
            <a href="#" className="hover:text-[#E6C875]">Politique de Confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-[#E6C875]">CGV</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
