import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Download, Sun, Moon, Play, Pause, BookOpen, Volume2, Calendar, Award } from 'lucide-react';
import { MODULES, PROGRAM_INFO } from '../data/protocolData';

interface DigitalPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalPortalModal: React.FC<DigitalPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'modules' | 'routine' | 'audio' | 'pdf'>('routine');
  const [morningSteps, setMorningSteps] = useState([
    { id: 1, text: "Réveil cutané : Rinçage à l'eau thermale tiède ou eau florale de rose", done: true },
    { id: 2, text: "Hydratation : Sérum à l'acide hyaluronique végétal sur peau encore humide", done: true },
    { id: 3, text: "Bouclier Amazonien : 3 gouttes d'Huile de Buriti ou jojoba bio tapotées délicatement", done: false },
    { id: 4, text: "Lissage lymphatique express des pommettes et du contour des yeux (1 min)", done: false },
    { id: 5, text: "Protection solaire minérale invisible", done: false }
  ]);

  const [eveningSteps, setEveningSteps] = useState([
    { id: 1, text: "Double nettoyage doux aux huiles botaniques", done: true },
    { id: 2, text: "Brumisation apaisante de fleurs sauvages", done: false },
    { id: 3, text: "Sérum régénérant ou élixir à la pulpe de Murumuru", done: false },
    { id: 4, text: "Massage du soir Rituel Amazônia (points d'acupression & lissage du front)", done: false }
  ]);

  const [audioPlaying, setAudioPlaying] = useState(false);

  if (!isOpen) return null;

  const toggleMorning = (id: number) => {
    setMorningSteps(morningSteps.map(s => s.id === id ? { ...s, done: !s.done } : s));
  };

  const toggleEvening = (id: number) => {
    setEveningSteps(eveningSteps.map(s => s.id === id ? { ...s, done: !s.done } : s));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-4xl w-full border border-[#E6D5B8] shadow-2xl overflow-hidden relative my-6">
        
        {/* Top Header Banner */}
        <div className="bg-[#1A3323] text-[#FDFBF7] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E6C875] text-[#1A3323] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#E6C875] font-semibold block">
                Espace Membre Digital
              </span>
              <h3 className="font-serif text-xl font-bold">
                {PROGRAM_INFO.name} • Bienvenue dans votre Rituel
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#264A35] flex items-center justify-center text-[#FDFBF7] hover:bg-[#325F45] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Bar inside portal */}
        <div className="bg-[#F8F3EE] border-b border-[#E6D5B8] px-4 py-2 flex overflow-x-auto gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('routine')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'routine'
                ? 'bg-[#1A3323] text-[#FDFBF7]'
                : 'bg-[#FDFBF7] text-[#1A3323] border border-[#E6D5B8]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Mon Rituel Quotidien</span>
          </button>

          <button
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'modules'
                ? 'bg-[#1A3323] text-[#FDFBF7]'
                : 'bg-[#FDFBF7] text-[#1A3323] border border-[#E6D5B8]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Les 5 Modules PDF</span>
          </button>

          <button
            onClick={() => setActiveTab('audio')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'audio'
                ? 'bg-[#1A3323] text-[#FDFBF7]'
                : 'bg-[#FDFBF7] text-[#1A3323] border border-[#E6D5B8]'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5 text-[#E6C875]" />
            <span>Audio Massage Guidé</span>
          </button>

          <button
            onClick={() => setActiveTab('pdf')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'pdf'
                ? 'bg-[#1A3323] text-[#FDFBF7]'
                : 'bg-[#FDFBF7] text-[#1A3323] border border-[#E6D5B8]'
            }`}
          >
            <Download className="w-3.5 h-3.5 text-[#B89753]" />
            <span>Télécharger l'Ebook</span>
          </button>
        </div>

        {/* Portal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          
          {/* TAB 1: Mon Rituel Quotidien */}
          {activeTab === 'routine' && (
            <div className="space-y-6">
              
              <div className="bg-[#F2F5F1] p-4 rounded-2xl border border-[#879883]/30 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1A3323]">
                    Votre Suivi du Jour
                  </h4>
                  <p className="text-xs text-[#2C3531]/75">
                    Cochez vos gestes au fur et à mesure pour ancrer votre habitude de douceur.
                  </p>
                </div>
                <div className="bg-[#1A3323] text-[#E6C875] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>3/9 gestes validés</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Morning Routine Card */}
                <div className="bg-[#F8F3EE] p-5 rounded-2xl border border-[#E6D5B8] space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E6D5B8] pb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E6C875] text-[#1A3323] flex items-center justify-center">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-base text-[#1A3323]">Rituel du Matin</h5>
                      <p className="text-[10px] text-[#2C3531]/60">Durée : 5 minutes d'éveil</p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {morningSteps.map(s => (
                      <button
                        key={s.id}
                        onClick={() => toggleMorning(s.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start gap-2.5 ${
                          s.done
                            ? 'bg-[#1A3323]/5 border-[#1A3323]/20 text-[#1A3323]'
                            : 'bg-[#FDFBF7] border-[#E6D5B8] text-[#2C3531]'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                          s.done ? 'bg-[#1A3323] text-[#E6C875] border-[#1A3323]' : 'border-[#E6D5B8] bg-[#FDFBF7]'
                        }`}>
                          {s.done && <CheckCircle className="w-3 h-3" />}
                        </div>
                        <span className={s.done ? 'line-through opacity-70' : ''}>{s.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Evening Routine Card */}
                <div className="bg-[#F8F3EE] p-5 rounded-2xl border border-[#E6D5B8] space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E6D5B8] pb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1A3323] text-[#E6C875] flex items-center justify-center">
                      <Moon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-base text-[#1A3323]">Rituel du Soir</h5>
                      <p className="text-[10px] text-[#2C3531]/60">Durée : 8 minutes de régénération</p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {eveningSteps.map(s => (
                      <button
                        key={s.id}
                        onClick={() => toggleEvening(s.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start gap-2.5 ${
                          s.done
                            ? 'bg-[#1A3323]/5 border-[#1A3323]/20 text-[#1A3323]'
                            : 'bg-[#FDFBF7] border-[#E6D5B8] text-[#2C3531]'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                          s.done ? 'bg-[#1A3323] text-[#E6C875] border-[#1A3323]' : 'border-[#E6D5B8] bg-[#FDFBF7]'
                        }`}>
                          {s.done && <CheckCircle className="w-3 h-3" />}
                        </div>
                        <span className={s.done ? 'line-through opacity-70' : ''}>{s.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: Modules PDF */}
          {activeTab === 'modules' && (
            <div className="space-y-4">
              <p className="text-xs text-[#2C3531]/80">
                Consultez directement le contenu de vos 5 modules ci-dessous :
              </p>

              <div className="space-y-3">
                {MODULES.map(m => (
                  <div key={m.id} className="bg-[#F8F3EE] p-4 rounded-2xl border border-[#E6D5B8] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#B89753] uppercase">Module {m.number}</span>
                      <h5 className="font-serif font-bold text-base text-[#1A3323]">{m.title}</h5>
                      <p className="text-xs text-[#2C3531]/70">{m.description}</p>
                    </div>
                    <button className="bg-[#1A3323] text-[#FDFBF7] px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 hover:bg-[#264A35]">
                      Lire
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Audio Massage Guidé */}
          {activeTab === 'audio' && (
            <div className="bg-[#1A3323] text-[#FDFBF7] p-6 rounded-3xl text-center space-y-4">
              <Volume2 className="w-10 h-10 text-[#E6C875] mx-auto animate-bounce" />
              <h4 className="font-serif text-2xl font-bold">Guide Audio : Massage & Drainage Amazonien</h4>
              <p className="text-xs text-[#E2D4C3] max-w-md mx-auto">
                Fermez les yeux, appliquez 2 gouttes d'huile végétale et laissez-vous guider par notre séance audio de 5 minutes pour lisser les traits et détendre les tensions faciale.
              </p>

              <button
                onClick={() => setAudioPlaying(!audioPlaying)}
                className="bg-[#E6C875] text-[#1A3323] px-6 py-3 rounded-full font-bold text-xs inline-flex items-center gap-2 hover:bg-[#D4B562] transition-colors"
              >
                {audioPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Mettre en pause l'Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Lancer la guidance vocale (5 min)</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* TAB 4: Télécharger PDF */}
          {activeTab === 'pdf' && (
            <div className="bg-[#F8F3EE] p-8 rounded-3xl border border-[#E6D5B8] text-center space-y-4">
              <Download className="w-10 h-10 text-[#1A3323] mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-[#1A3323]">Votre Ebook PDF HD "Rituel Amazônia"</h4>
              <p className="text-xs text-[#2C3531]/80 max-w-md mx-auto">
                Téléchargez l'intégralité du protocole illustré au format PDF haute définition pour le conserver à vie sur vos appareils ou l'imprimer.
              </p>

              <button
                onClick={() => alert("Le fichier PDF complet 'Rituel_Amazonia_Protocole.pdf' a été envoyé par email et est prêt pour votre téléchargement !")}
                className="bg-[#1A3323] text-[#FDFBF7] px-8 py-3.5 rounded-full text-xs font-bold hover:bg-[#264A35] transition-all shadow-md inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#E6C875]" />
                <span>Télécharger le fichier PDF (14.2 Mo)</span>
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-[#F8F3EE] p-4 border-t border-[#E6D5B8] text-center text-xs text-[#2C3531]/70">
          Besoin d'aide ? Notre support est à votre écoute : <strong className="text-[#1A3323]">contact@rituelamazonia.fr</strong>
        </div>

      </div>
    </div>
  );
};
