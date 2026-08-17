import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { AmazonInteractiveQuiz } from './AmazonInteractiveQuiz';

interface SkinQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const SkinQuizModal: React.FC<SkinQuizModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#0A1A10] rounded-3xl max-w-4xl w-full border border-[#C5A059]/60 shadow-2xl overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="bg-[#122A1B] text-[#FDFBF7] p-4 sm:p-5 flex items-center justify-between border-b border-[#C5A059]/30 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1A3E28] border border-[#C5A059]/50 flex items-center justify-center text-[#E6C875]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-bold text-[#FDFBF7] block leading-tight">
                Diagnostic Botanique & Faune d'Amazonie
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#E6C875]">
                Sagesse des Tribus & Totem Cutané
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1A3E28] flex items-center justify-center text-[#FDFBF7] hover:bg-[#C5A059] hover:text-[#0A1A10] transition-colors border border-[#C5A059]/30"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-2 sm:p-6 overflow-y-auto flex-1">
          <AmazonInteractiveQuiz 
            onOpenCheckout={() => {
              onClose();
              onOpenCheckout();
            }}
            standalone={false}
          />
        </div>

      </div>
    </div>
  );
};
