import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RefreshCw, Leaf } from 'lucide-react';
import { trackLead, trackCustomEvent } from '../lib/fbPixel';

interface SkinQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const SkinQuizModal: React.FC<SkinQuizModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState('');
  const [concern, setConcern] = useState('');
  const [timeAvailable, setTimeAvailable] = useState('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setSkinType('');
    setConcern('');
    setTimeAvailable('');
    trackCustomEvent('QuizReset');
  };

  const handleStep1Select = (label: string) => {
    setSkinType(label);
    setStep(2);
    trackCustomEvent('QuizStep1', { answer: label });
  };

  const handleStep2Select = (label: string) => {
    setConcern(label);
    setStep(3);
    trackCustomEvent('QuizStep2', { answer: label });
  };

  const handleStep3Select = (label: string) => {
    setTimeAvailable(label);
    setStep(4); // Result
    trackCustomEvent('QuizStep3', { answer: label });
    // Fire Lead event when quiz completes!
    trackLead(skinType || label, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-lg w-full border border-[#E6D5B8] shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#1A3323] text-[#FDFBF7] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E6C875]" />
            <span className="font-serif text-lg font-semibold">Mon Diagnostic Amazônia</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#264A35] flex items-center justify-center text-[#FDFBF7] hover:bg-[#325F45] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-6">
          
          {step <= 3 && (
            <div className="space-y-6">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-[#2C3531]/70">
                <span>Étape {step} sur 3</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3].map(s => (
                    <span
                      key={s}
                      className={`w-6 h-1.5 rounded-full ${
                        s === step ? 'bg-[#1A3323]' : s < step ? 'bg-[#B89753]' : 'bg-[#E6D5B8]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1 Question */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#1A3323]">
                    Comment décririez-vous la sensation principale de votre peau en journée ?
                  </h3>

                  <div className="space-y-2.5">
                    {[
                      { id: 'seche', label: 'Tiraillée, inconfortable, manque de souplesse' },
                      { id: 'mixte', label: 'Brillances sur la zone T, joues parfois sèches' },
                      { id: 'sensible', label: 'Sujette aux rougeurs, réactive aux produits' },
                      { id: 'terne', label: 'Manque d’éclat, teint fatigué, grain irrégulier' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleStep1Select(opt.label)}
                        className="w-full text-left p-3.5 rounded-2xl border border-[#E6D5B8] bg-[#F8F3EE]/60 hover:bg-[#1A3323] hover:text-[#FDFBF7] transition-all text-xs font-medium flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 Question */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#1A3323]">
                    Quel est votre objectif prioritaire pour votre rituel ?
                  </h3>

                  <div className="space-y-2.5">
                    {[
                      { id: 'eclat', label: 'Retrouver un teint frais et lumineux sans fond de teint' },
                      { id: 'apaisement', label: 'Calmer l’inconfort et stabiliser la peau' },
                      { id: 'simplicite', label: 'Avoir une routine claire et structurée en quelques minutes' },
                      { id: 'antiage', label: 'Tonifier les traits et lisser les ridules d’expression' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleStep2Select(opt.label)}
                        className="w-full text-left p-3.5 rounded-2xl border border-[#E6D5B8] bg-[#F8F3EE]/60 hover:bg-[#1A3323] hover:text-[#FDFBF7] transition-all text-xs font-medium flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 Question */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#1A3323]">
                    Combien de temps souhaitez-vous accorder à votre rituel chaque jour ?
                  </h3>

                  <div className="space-y-2.5">
                    {[
                      { id: '5min', label: '5 minutes chrono le matin et le soir (routine express)' },
                      { id: '8min', label: '5 à 8 minutes avec gestuelle de massage relaxante' },
                      { id: '10min', label: 'Un vrai rituel spa holistique le soir' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleStep3Select(opt.label)}
                        className="w-full text-left p-3.5 rounded-2xl border border-[#E6D5B8] bg-[#F8F3EE]/60 hover:bg-[#1A3323] hover:text-[#FDFBF7] transition-all text-xs font-medium flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Results Step */}
          {step === 4 && (
            <div className="space-y-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1A3323] text-[#E6C875] flex items-center justify-center mx-auto">
                <Leaf className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B89753]">
                  Diagnostic Établi
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A3323]">
                  Rituel Amazônia est 100% adapté à votre profil !
                </h3>
              </div>

              <div className="bg-[#F8F3EE] p-4 rounded-2xl border border-[#E6D5B8] text-left text-xs space-y-2">
                <p><strong className="text-[#1A3323]">Votre profil :</strong> {skinType}</p>
                <p><strong className="text-[#1A3323]">Votre priorité :</strong> {concern}</p>
                <p><strong className="text-[#1A3323]">Recommandation :</strong> Le protocole digital Rituel Amazônia (notamment le Module 2 Éveil Matinal & le Module 4 Massage Drainage) vous apportera les clés exactes pour répondre à vos besoins.</p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenCheckout();
                  }}
                  className="w-full bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Obtenir mon accès au protocole (9,90 €)</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C875]" />
                </button>

                <button
                  onClick={handleReset}
                  className="text-[11px] text-[#2C3531]/60 underline hover:text-[#1A3323] inline-flex items-center gap-1 mt-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  Recommencer le diagnostic
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
