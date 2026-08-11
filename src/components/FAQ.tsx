import React, { useState } from 'react';
import { FAQS } from '../data/protocolData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { trackCustomEvent } from '../lib/fbPixel';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string, question: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    if (isOpening) {
      trackCustomEvent('ViewFAQ', { question });
    }
  };

  return (
    <section id="faq" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F3EE] border border-[#E6D5B8] text-xs font-semibold text-[#B89753] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Foire aux Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3323] font-semibold">
            Des réponses claires à vos interrogations
          </h2>

          <p className="text-xs sm:text-sm text-[#2C3531]/80">
            Toutes les précisions pour commander votre accès en toute confiance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F8F3EE]/50 rounded-2xl border border-[#E6D5B8]/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(faq.id, faq.question)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#1A3323] hover:text-[#264A35] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FDFBF7] border border-[#E6D5B8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1A3323] text-[#FDFBF7]' : 'text-[#1A3323]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#E6D5B8]/30 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
