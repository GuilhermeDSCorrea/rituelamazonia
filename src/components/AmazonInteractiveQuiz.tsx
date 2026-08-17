import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowRight, ArrowLeft, CheckCircle2, RotateCcw, 
  Shield, Sun, Droplets, Heart, Feather, Leaf, Zap, ShoppingBag, 
  Lock, Check, Compass, Eye, Trees, Volume2, VolumeX, Award
} from 'lucide-react';
import { 
  QUIZ_QUESTIONS, ARCHETYPES, INDIGENOUS_TRIBES, AMAZON_ANIMALS, 
  ANCESTRAL_PLANTS, AMAZON_FOREST_IMAGES, SkinArchetypeResult 
} from '../data/ancestralData';
import { PROGRAM_INFO } from '../data/protocolData';
import { trackLead, trackCustomEvent, trackInitiateCheckout, HOTMART_CHECKOUT_URL } from '../lib/fbPixel';

interface AmazonInteractiveQuizProps {
  onOpenCheckout?: () => void;
  standalone?: boolean;
}

export const AmazonInteractiveQuiz: React.FC<AmazonInteractiveQuizProps> = ({ 
  onOpenCheckout,
  standalone = false 
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisProgress, setAnalysisProgress] = useState<number>(0);
  const [resultArchetype, setResultArchetype] = useState<SkinArchetypeResult | null>(null);
  const [activeTab, setActiveTab] = useState<'archetype' | 'routine' | 'plants' | 'tribe'>('archetype');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Simple ambient nature sound synthesizer using Web Audio API
  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    let oscillator: OscillatorNode | null = null;
    let gainNode: GainNode | null = null;

    if (isAudioPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
        
        // Gentle warm harmonic chord to simulate forest serenity
        oscillator = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(174, audioCtx.currentTime); // 174 Hz - Solfeggio frequency for healing and tension release
        
        gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 3);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
      } catch (e) {
        console.warn("Audio synthesis not available", e);
      }
    }

    return () => {
      if (oscillator) {
        try { oscillator.stop(); } catch {}
      }
      if (audioCtx) {
        try { audioCtx.close(); } catch {}
      }
    };
  }, [isAudioPlaying]);

  const handleSelectOption = (questionIndex: number, optionId: string) => {
    const newAnswers = { ...selectedAnswers, [questionIndex]: optionId };
    setSelectedAnswers(newAnswers);
    trackCustomEvent(`Quiz_Step_${questionIndex + 1}_Answer`, { optionId });

    // If not last question, move to next
    if (questionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(questionIndex + 1);
    } else {
      // Last question completed -> trigger analysis animation
      startAnalysis(newAnswers);
    }
  };

  const startAnalysis = (answers: Record<number, string>) => {
    setIsAnalyzing(true);
    setAnalysisProgress(10);
    trackCustomEvent('Quiz_Analysis_Started');

    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          determineArchetype(answers);
          setIsAnalyzing(false);
          return 100;
        }
        return prev + 18;
      });
    }, 350);
  };

  const determineArchetype = (answers: Record<number, string>) => {
    // Scoring logic based on choices
    let araraScore = 0;
    let jaguarScore = 0;
    let botoScore = 0;
    let morphoScore = 0;

    const values = Object.values(answers);
    values.forEach((ans) => {
      if (ans.includes('arara') || ans.includes('eclat') || ans.includes('buriti') || ans.includes('yawanawa')) {
        araraScore += 3;
      }
      if (ans.includes('jaguar') || ans.includes('mature') || ans.includes('fermete') || ans.includes('ashaninka') || ans.includes('sang-de-dragon')) {
        jaguarScore += 3;
      }
      if (ans.includes('boto') || ans.includes('seche') || ans.includes('nutrition') || ans.includes('kayapo') || ans.includes('murumuru')) {
        botoScore += 3;
      }
      if (ans.includes('morpho') || ans.includes('mixte') || ans.includes('sensible') || ans.includes('purete') || ans.includes('yanomami') || ans.includes('argile')) {
        morphoScore += 3;
      }
    });

    let chosen = ARCHETYPES.arara;
    const maxScore = Math.max(araraScore, jaguarScore, botoScore, morphoScore);

    if (maxScore === jaguarScore) chosen = ARCHETYPES.jaguar;
    else if (maxScore === botoScore) chosen = ARCHETYPES.boto;
    else if (maxScore === morphoScore) chosen = ARCHETYPES.morpho;
    else chosen = ARCHETYPES.arara;

    setResultArchetype(chosen);
    setCurrentStep(QUIZ_QUESTIONS.length); // Results step
    
    // Pixel event for lead / quiz completion
    trackLead(chosen.title, 100);
    trackCustomEvent('Quiz_Completed', { archetype: chosen.id, title: chosen.title });
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setResultArchetype(null);
    setIsAnalyzing(false);
    setAnalysisProgress(0);
    trackCustomEvent('Quiz_Reset');
  };

  const handleCheckoutClick = () => {
    trackInitiateCheckout(`Quiz Result CTA - ${resultArchetype?.title || 'Archetype'}`, 9.90, 'EUR');
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      window.open(HOTMART_CHECKOUT_URL, '_blank');
    }
  };

  const getOptionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5 text-[#E6C875]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-[#7FB5FF]" />;
      case 'Droplet': return <Droplets className="w-5 h-5 text-[#C5A059]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E6C875]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#E5989B]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#52B788]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#E6C875]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#C5A059]" />;
      default: return <Feather className="w-5 h-5 text-[#E6C875]" />;
    }
  };

  return (
    <section 
      id="quiz-amazonien" 
      className={`relative overflow-hidden transition-all duration-500 ${
        standalone 
          ? 'min-h-screen bg-[#07130A] py-12 px-4 flex items-center justify-center' 
          : 'py-20 bg-gradient-to-b from-[#0A1A10] via-[#0F2618] to-[#0A1A10] text-[#FDFBF7]'
      }`}
    >
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src={AMAZON_FOREST_IMAGES.canopy} 
          alt="Canopée Amazonie" 
          className="w-full h-full object-cover filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A10]/95 via-[#0A1A10]/80 to-[#0A1A10]/95" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#264A35] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Floating Controls Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C5A059]/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1A3323] border border-[#C5A059]/50 flex items-center justify-center text-[#E6C875]">
              <Trees className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E6C875] block">
                Diagnostic Botanique Interactif
              </span>
              <p className="text-[11px] text-[#D4E5D7]/70 hidden sm:block">
                Sagesse des Tribus & Faune Sacrée d'Amazonie
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Ambience Toggle */}
            <button
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              title="Ambiance sonore de la forêt amazonienne (174Hz)"
              className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-all border ${
                isAudioPlaying 
                  ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#E6C875]' 
                  : 'bg-[#1A3323]/60 border-[#C5A059]/30 text-[#D4E5D7]/70 hover:text-[#FDFBF7]'
              }`}
            >
              {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#E6C875]" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isAudioPlaying ? 'Ambiance Forêt Active' : 'Sons de la Forêt'}</span>
            </button>

            {currentStep > 0 && !isAnalyzing && (
              <button
                onClick={handleReset}
                className="text-xs text-[#D4E5D7]/70 hover:text-[#E6C875] flex items-center gap-1 transition-colors px-2 py-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Recommencer</span>
              </button>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* STATE 1: ACTIVE QUIZ QUESTIONS */}
        {/* ======================================================== */}
        {currentStep < QUIZ_QUESTIONS.length && !isAnalyzing && (
          <div className="bg-[#122A1B]/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C5A059]/40 shadow-2xl space-y-8">
            
            {/* Progress Bar & Indicators */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#D4E5D7]/80">
                <span className="font-semibold text-[#E6C875] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {QUIZ_QUESTIONS[currentStep].badge}
                </span>
                <span className="text-[11px] font-mono">
                  {currentStep + 1} / {QUIZ_QUESTIONS.length}
                </span>
              </div>

              <div className="w-full bg-[#0A1A10] h-2.5 rounded-full overflow-hidden border border-[#C5A059]/30">
                <div 
                  className="bg-gradient-to-r from-[#C5A059] to-[#E6C875] h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_rgba(197,160,89,0.5)]"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Heading */}
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FDFBF7] font-bold leading-tight">
                {QUIZ_QUESTIONS[currentStep].title}
              </h2>
              <p className="text-sm sm:text-base text-[#D4E5D7]/80 font-light">
                {QUIZ_QUESTIONS[currentStep].subtitle}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {QUIZ_QUESTIONS[currentStep].options.map((opt) => {
                const isSelected = selectedAnswers[currentStep] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(currentStep, opt.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#1A3E28] border-[#E6C875] shadow-[0_0_20px_rgba(230,200,117,0.25)] scale-[1.02]'
                        : 'bg-[#163321]/80 hover:bg-[#1C412B] border-[#C5A059]/30 hover:border-[#C5A059] shadow-md hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#0A1A10]/70 border border-[#C5A059]/40 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                        {getOptionIcon(opt.icon)}
                      </div>

                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-[#C5A059] border-[#E6C875] text-[#0A1A10]' 
                          : 'border-[#C5A059]/40 group-hover:border-[#E6C875]'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#FDFBF7] group-hover:text-[#E6C875] transition-colors leading-snug">
                        {opt.label}
                      </h4>
                      <p className="text-xs text-[#D4E5D7]/80 leading-relaxed font-light">
                        {opt.sublabel}
                      </p>
                    </div>

                    {/* Subtle corner botanical accent on hover */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#C5A059]/5 rounded-tl-full pointer-events-none group-hover:bg-[#C5A059]/15 transition-all" />
                  </button>
                );
              })}
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <div className="pt-4 flex items-center justify-between border-t border-[#C5A059]/20">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4E5D7]/80 hover:text-[#E6C875] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Question précédente</span>
                </button>
                <span className="text-[11px] text-[#D4E5D7]/50 italic">
                  Sélectionnez votre réponse pour avancer
                </span>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* STATE 2: LIVE ANALYSIS & BIO-ACTIVE MATCHING SCREEN */}
        {/* ======================================================== */}
        {isAnalyzing && (
          <div className="bg-[#122A1B]/95 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-[#C5A059]/50 shadow-2xl text-center space-y-8 animate-fadeIn">
            
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-[#C5A059]/20 border-t-[#E6C875] animate-spin" />
              <div className="w-20 h-20 rounded-full bg-[#1A3323] border border-[#C5A059] flex items-center justify-center text-[#E6C875] shadow-lg">
                <Trees className="w-10 h-10 animate-pulse text-[#C5A059]" />
              </div>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E6C875] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Interrogation des Savoirs Ancestraux
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDFBF7] font-bold">
                Harmonisation Botanique en cours...
              </h3>
              <p className="text-xs sm:text-sm text-[#D4E5D7]/80 font-light">
                Analyse croisée de votre signature cutanée avec 200+ bio-actifs de la forêt, les secrets des tribus et votre guide animalier.
              </p>
            </div>

            {/* Dynamic Live Step checklist */}
            <div className="max-w-sm mx-auto space-y-2.5 text-left text-xs text-[#D4E5D7]/90 bg-[#0A1A10]/60 p-4 rounded-2xl border border-[#C5A059]/30">
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${analysisProgress > 20 ? 'text-[#E6C875]' : 'text-gray-600'}`} />
                <span>Identification de votre élément d'Amazonie...</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${analysisProgress > 50 ? 'text-[#E6C875]' : 'text-gray-600'}`} />
                <span>Sélection de votre trio d'huiles et résines pures...</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${analysisProgress > 80 ? 'text-[#E6C875]' : 'text-gray-600'}`} />
                <span>Connexion avec votre Animal Totem & Tribu Gardienne...</span>
              </div>
            </div>

            <div className="w-full bg-[#0A1A10] h-3 rounded-full overflow-hidden border border-[#C5A059]/40 max-w-md mx-auto">
              <div 
                className="bg-gradient-to-r from-[#C5A059] to-[#E6C875] h-full rounded-full transition-all duration-300"
                style={{ width: `${analysisProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* STATE 3: PERSONALIZED DIAGNOSIS & ARCHETYPE REVELATION */}
        {/* ======================================================== */}
        {currentStep === QUIZ_QUESTIONS.length && resultArchetype && !isAnalyzing && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Main Result Card */}
            <div className="bg-[#122A1B]/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-[#C5A059] shadow-2xl space-y-8 relative overflow-hidden">
              
              {/* Top Golden Banner */}
              <div className="text-center space-y-3 pb-6 border-b border-[#C5A059]/30">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#E6C875]/60 text-[#E6C875] text-xs font-bold uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>Votre Diagnostic Rituel Amazônia Dévoilé</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7] font-bold leading-tight">
                  {resultArchetype.title}
                </h2>

                <p className="text-base text-[#E6C875] font-serif italic max-w-xl mx-auto">
                  « {resultArchetype.subtitle} »
                </p>
              </div>

              {/* Archetype Hero Duo: Animal Totem + Indigenous Tribe Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Animal Totem Card */}
                <div className="bg-[#0A1A10]/90 rounded-2xl p-5 border border-[#C5A059]/40 space-y-4 hover:border-[#E6C875] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#C5A059] relative">
                      <img 
                        src={resultArchetype.animalTotem.image} 
                        alt={resultArchetype.animalTotem.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#E6C875] block">
                        Votre Animal Totem d'Amazonie
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#FDFBF7]">
                        {resultArchetype.animalTotem.name}
                      </h4>
                      <p className="text-[11px] text-[#D4E5D7]/70 italic">
                        {resultArchetype.animalTotem.symbol}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#D4E5D7]/90 leading-relaxed font-light">
                    {resultArchetype.animalTotem.totemMeaning}
                  </p>

                  <div className="p-3 bg-[#1A3323]/60 rounded-xl border border-[#C5A059]/20 text-[11px] text-[#E6C875]">
                    <strong>Résonance Cutanée :</strong> {resultArchetype.animalTotem.skinResonance}
                  </div>
                </div>

                {/* 2. Indigenous Tribe Guardian Card */}
                <div className="bg-[#0A1A10]/90 rounded-2xl p-5 border border-[#C5A059]/40 space-y-4 hover:border-[#E6C875] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#C5A059] relative">
                      <img 
                        src={resultArchetype.tribe.image} 
                        alt={resultArchetype.tribe.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#E6C875] block">
                        La Tribu Gardienne Liée à Votre Soin
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#FDFBF7]">
                        {resultArchetype.tribe.name}
                      </h4>
                      <p className="text-[11px] text-[#D4E5D7]/70">
                        {resultArchetype.tribe.region}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#D4E5D7]/90 leading-relaxed font-light">
                    {resultArchetype.tribe.botanicalWisdom}
                  </p>

                  <div className="p-3 bg-[#1A3323]/60 rounded-xl border border-[#C5A059]/20 text-[11px] text-[#D4E5D7]/90 italic">
                    {resultArchetype.tribe.quote}
                  </div>
                </div>

              </div>

              {/* In-depth Interactive Tabs (Archetype Description, Custom Routine, Botanical Trio) */}
              <div className="space-y-4">
                
                <div className="flex flex-wrap gap-2 border-b border-[#C5A059]/30 pb-2">
                  {[
                    { id: 'archetype', label: '🌿 Signature & Besoins', icon: Leaf },
                    { id: 'routine', label: '☀️ Votre Rituel Matin/Soir', icon: Sun },
                    { id: 'plants', label: '💧 Trio Botanique Sacré', icon: Droplets },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as 'archetype' | 'routine' | 'plants')}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                          activeTab === tab.id
                            ? 'bg-[#C5A059] text-[#0A1A10] shadow-md font-bold'
                            : 'bg-[#0A1A10]/70 text-[#D4E5D7]/80 hover:bg-[#1A3323] hover:text-[#FDFBF7] border border-[#C5A059]/20'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: Signature & Description */}
                {activeTab === 'archetype' && (
                  <div className="bg-[#0A1A10]/70 p-6 rounded-2xl border border-[#C5A059]/30 space-y-4 animate-fadeIn">
                    <p className="text-sm sm:text-base text-[#D4E5D7] leading-relaxed">
                      {resultArchetype.description}
                    </p>
                    <div className="p-4 bg-[#1A3E28]/80 rounded-xl border border-[#E6C875]/40 text-xs text-[#FDFBF7] flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#E6C875] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#E6C875] block mb-1">Règle d'or pour votre peau :</strong>
                        <span>{resultArchetype.keyRecommendation}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Tailored Routine */}
                {activeTab === 'routine' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                    
                    <div className="bg-[#0A1A10]/80 p-5 rounded-2xl border border-[#C5A059]/30 space-y-3">
                      <div className="flex items-center gap-2 text-[#E6C875] font-serif font-bold text-base">
                        <Sun className="w-4 h-4 text-[#C5A059]" />
                        <span>Matin • Éveil & Bouclier (3 min)</span>
                      </div>
                      <p className="text-xs text-[#D4E5D7]/90 leading-relaxed font-light">
                        {resultArchetype.morningStep}
                      </p>
                    </div>

                    <div className="bg-[#0A1A10]/80 p-5 rounded-2xl border border-[#C5A059]/30 space-y-3">
                      <div className="flex items-center gap-2 text-[#E6C875] font-serif font-bold text-base">
                        <Droplets className="w-4 h-4 text-[#7FB5FF]" />
                        <span>Soir • Régénération Cellulaire (5 min)</span>
                      </div>
                      <p className="text-xs text-[#D4E5D7]/90 leading-relaxed font-light">
                        {resultArchetype.eveningStep}
                      </p>
                    </div>

                  </div>
                )}

                {/* Tab 3: Botanical Trio */}
                {activeTab === 'plants' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fadeIn">
                    {[resultArchetype.primaryPlant, ...resultArchetype.secondaryPlants].map((plant, idx) => (
                      <div key={plant.id} className="bg-[#0A1A10]/80 p-4 rounded-2xl border border-[#C5A059]/30 space-y-3 flex flex-col justify-between">
                        <div>
                          <div className="h-28 rounded-xl overflow-hidden mb-3 border border-[#C5A059]/40">
                            <img 
                              src={plant.image} 
                              alt={plant.name} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-[10px] text-[#E6C875] uppercase font-bold block">
                            {idx === 0 ? 'Actif Maître Primaire' : 'Actif Complémentaire'}
                          </span>
                          <h5 className="font-serif font-bold text-sm text-[#FDFBF7]">
                            {plant.name}
                          </h5>
                          <p className="text-[11px] text-[#D4E5D7]/80 mt-1 leading-snug">
                            {plant.skinBenefit}
                          </p>
                        </div>
                        <span className="text-[10px] text-[#C5A059] italic pt-2 border-t border-[#C5A059]/20">
                          {plant.traditionBadge}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Direct Hotmart Protocol Acquisition Callout */}
              <div className="bg-gradient-to-r from-[#173822] via-[#1F4D2F] to-[#173822] p-6 sm:p-8 rounded-3xl border-2 border-[#E6C875] shadow-2xl space-y-6 text-center">
                
                <div className="max-w-xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#E6C875] block">
                    Votre Protocole Complet Est Prêt
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FDFBF7] font-bold">
                    Recevez le guide « Rituel Amazônia » adapté à votre profil
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4E5D7]/90 leading-relaxed font-light">
                    Accédez immédiatement aux 5 modules numériques, aux fiches recettes botaniques pas à pas, aux vidéos de gestuelles de massage et à votre calendrier de suivi.
                  </p>
                </div>

                {/* Price & Guarantee Pill */}
                <div className="inline-flex items-center justify-center gap-4 bg-[#0A1A10]/80 px-6 py-3 rounded-full border border-[#C5A059]/50 text-xs text-[#FDFBF7]">
                  <span className="text-[#D4E5D7]/50 line-through text-sm">47,00 €</span>
                  <span className="font-serif text-2xl font-bold text-[#E6C875]">9,90 €</span>
                  <span className="bg-[#C5A059] text-[#0A1A10] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                    Paiement Unique
                  </span>
                </div>

                {/* Primary Purchase Button */}
                <div className="max-w-md mx-auto">
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] py-4 px-6 rounded-full font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(197,160,89,0.5)] hover:shadow-[0_0_35px_rgba(230,200,117,0.7)] flex items-center justify-center gap-2 transform active:scale-98 hover:scale-[1.02]"
                  >
                    <ShoppingBag className="w-5 h-5 text-[#0A1A10]" />
                    <span>Débloquer mon protocole complet (9,90 €)</span>
                  </button>
                  <p className="text-[11px] text-[#D4E5D7]/70 mt-2 flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#E6C875]" />
                    <span>Paiement sécurisé crypté SSL • Accès immédiat par email</span>
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
