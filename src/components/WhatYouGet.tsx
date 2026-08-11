import React, { useState } from 'react';
import { MODULES, IMAGES } from '../data/protocolData';
import { Search, Sun, Moon, Smile, Leaf, Check, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { trackCustomEvent } from '../lib/fbPixel';

interface WhatYouGetProps {
  onOpenCheckout: () => void;
  onOpenPortal: () => void;
}

export const WhatYouGet: React.FC<WhatYouGetProps> = ({ onOpenCheckout, onOpenPortal }) => {
  const [activeModuleId, setActiveModuleId] = useState(MODULES[0].id);

  const activeModule = MODULES.find(m => m.id === activeModuleId) || MODULES[0];

  const handleSelectModule = (id: string, title: string, number: number) => {
    setActiveModuleId(id);
    trackCustomEvent('ViewModuleDetails', { moduleTitle: title, moduleNumber: number });
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#B89753]" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-[#264A35]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#B89753]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#264A35]" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="programme" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2F5F1] border border-[#879883]/30 text-[#1A3323] text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-[#B89753]" />
            <span>Contenu du Programme Digital</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3323] font-semibold leading-tight">
            Ce que vous allez trouver dans <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#264A35]">Rituel Amazônia</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed">
            Une architecture claire et intuitive divisée en 5 modules complémentaires pour maîtriser la synergie de votre peau, du matin au soir.
          </p>
        </div>

        {/* Modules Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Module Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#B89753] font-bold mb-2">
              Les 5 Modules du Protocole :
            </h3>

            {MODULES.map((mod) => {
              const isActive = mod.id === activeModuleId;
              return (
                <button
                  key={mod.id}
                  onClick={() => handleSelectModule(mod.id, mod.title, mod.number)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#1A3323] text-[#FDFBF7] border-[#1A3323] shadow-md scale-[1.01]'
                      : 'bg-[#F8F3EE]/60 text-[#1A3323] border-[#E6D5B8]/40 hover:bg-[#F8F3EE]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-serif text-lg font-bold w-8 h-8 rounded-xl flex items-center justify-center border text-xs ${
                        isActive
                          ? 'bg-[#264A35] text-[#E6C875] border-[#E6C875]/30'
                          : 'bg-[#FDFBF7] text-[#1A3323] border-[#E6D5B8]'
                      }`}
                    >
                      {mod.number}
                    </span>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-semibold leading-snug">
                        {mod.title}
                      </h4>
                      <p className={`text-[11px] ${isActive ? 'text-[#E6C875]' : 'text-[#2C3531]/60'}`}>
                        {mod.duration}
                      </p>
                    </div>
                  </div>

                  {mod.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-[#E6C875] text-[#1A3323]' : 'bg-[#E6D5B8]/50 text-[#1A3323]'
                    }`}>
                      {mod.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Quick Demo Button */}
            <div className="pt-3">
              <button
                onClick={onOpenPortal}
                className="w-full bg-[#F2F5F1] hover:bg-[#879883]/20 text-[#1A3323] p-3.5 rounded-2xl border border-[#879883]/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#B89753]" />
                <span>Tester la démo de l'Espace Membre Digital</span>
              </button>
            </div>
          </div>

          {/* Right Column: Active Module Focus Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F3EE] p-6 sm:p-8 rounded-3xl border border-[#E6D5B8] gold-card-border shadow-sm space-y-6">
              
              {/* Module Header */}
              <div className="flex items-center justify-between border-b border-[#E6D5B8]/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A3323] text-[#E6C875] flex items-center justify-center">
                    {getModuleIcon(activeModule.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B89753]">
                      Module {activeModule.number}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1A3323] font-bold">
                      {activeModule.title}
                    </h3>
                  </div>
                </div>

                <span className="bg-[#FDFBF7] text-[#1A3323] px-3 py-1 rounded-full text-xs font-medium border border-[#E6D5B8]">
                  {activeModule.duration}
                </span>
              </div>

              {/* Module Description */}
              <p className="text-sm text-[#2C3531]/80 leading-relaxed font-normal">
                {activeModule.description}
              </p>

              {/* What you will learn / Checklists */}
              <div className="space-y-3 bg-[#FDFBF7] p-5 rounded-2xl border border-[#E6D5B8]/60">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1A3323]">
                  Ce que vous découvrez dans ce module :
                </p>

                <ul className="space-y-2.5">
                  {activeModule.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3531]">
                      <span className="w-4 h-4 rounded-full bg-[#1A3323] text-[#E6C875] flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included Digital Tools Box */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F2F5F1] border border-[#879883]/30">
                  <p className="font-bold text-[#1A3323]">📋 Checklists Pratiques</p>
                  <p className="text-[11px] text-[#2C3531]/70 mt-0.5">À cocher au quotidien sur mobile</p>
                </div>

                <div className="p-3 rounded-xl bg-[#F2F5F1] border border-[#879883]/30">
                  <p className="font-bold text-[#1A3323]">📥 Ebook PDF HD</p>
                  <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Imprimable ou lisible hors-ligne</p>
                </div>
              </div>

              {/* CTA for this module */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6D5B8]/50">
                <div>
                  <span className="text-xs text-[#2C3531]/70">Accès immédiat à l'ensemble du programme pour</span>
                  <p className="font-serif text-2xl font-bold text-[#1A3323]">9,90 €</p>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Obtenir mon accès immédiat</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C875]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
