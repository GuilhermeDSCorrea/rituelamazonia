import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DesireAwakening } from './components/DesireAwakening';
import { Benefits } from './components/Benefits';
import { WhatYouGet } from './components/WhatYouGet';
import { TransformationComparison } from './components/TransformationComparison';
import { ValueProof } from './components/ValueProof';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

import { SkinQuizModal } from './components/SkinQuizModal';
import { CheckoutModal } from './components/CheckoutModal';
import { DigitalPortalModal } from './components/DigitalPortalModal';
import { trackPageView, trackViewContent, trackCustomEvent, trackInitiateCheckout } from './lib/fbPixel';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Track initial page view & view content
  useEffect(() => {
    trackPageView();
    trackViewContent('Rituel Amazônia Landing Page', 'Sales Page', 9.90);
  }, []);

  // Web Audio Synth for Amazon Rain & Gentle Wind Ambience
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  const toggleAudio = () => {
    if (audioPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setAudioPlaying(false);
      trackCustomEvent('AudioAmbience', { status: 'paused' });
    } else {
      try {
        if (!audioCtxRef.current) {
          const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;

          // Create soothing white noise filtered for gentle rainforest breeze
          const bufferSize = ctx.sampleRate * 2;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          // Lowpass filter for soft rain/wind sound
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(400, ctx.currentTime);

          // Gain node for soft volume
          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.04, ctx.currentTime);

          whiteNoise.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          whiteNoise.start(0);
          noiseNodeRef.current = whiteNoise;
        } else {
          audioCtxRef.current.resume();
        }
        setAudioPlaying(true);
        trackCustomEvent('AudioAmbience', { status: 'playing' });
      } catch (err) {
        console.log("Audio play error:", err);
        setAudioPlaying(false);
      }
    }
  };

  const handleOpenCheckout = (source: string = 'CTA Button') => {
    trackInitiateCheckout(source, 9.90, 'EUR');
    setIsCheckoutOpen(true);
  };

  const handleOpenQuiz = (source: string = 'Header/Hero CTA') => {
    trackCustomEvent('StartQuiz', { source });
    setIsQuizOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setIsCheckoutOpen(false);
    setIsPortalOpen(true);
    trackViewContent('Digital Portal Access', 'Member Area', 9.90);
  };

  return (
    <div className="min-[#100vh] bg-[#FDFBF7] text-[#2C3531] font-sans relative flex flex-col selection:bg-[#E2D4C3] selection:text-[#1A3323]">
      {/* Top Header */}
      <Header
        onOpenCheckout={() => handleOpenCheckout('Header CTA')}
        onOpenQuiz={() => handleOpenQuiz('Header Quiz Button')}
        audioPlaying={audioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenCheckout={() => handleOpenCheckout('Hero Main CTA')}
          onOpenQuiz={() => handleOpenQuiz('Hero Quiz CTA')}
        />

        {/* Section 2: Desire Awakening */}
        <DesireAwakening
          onOpenCheckout={() => handleOpenCheckout('Desire Awakening CTA')}
        />

        {/* Section 3: Benefits */}
        <Benefits
          onOpenCheckout={() => handleOpenCheckout('Benefits Section CTA')}
        />

        {/* Section 4: What You Get (5 Modules) */}
        <WhatYouGet
          onOpenCheckout={() => handleOpenCheckout('Modules Section CTA')}
          onOpenPortal={() => {
            trackCustomEvent('PreviewDigitalPortal');
            setIsPortalOpen(true);
          }}
        />

        {/* Section 5: Transformation / Before vs After */}
        <TransformationComparison
          onOpenCheckout={() => handleOpenCheckout('Transformation Section CTA')}
        />

        {/* Section 6: Value Proof & Stack (9,90 €) */}
        <ValueProof
          onOpenCheckout={() => handleOpenCheckout('Value Stack Offer CTA')}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Section 7: Final CTA */}
        <CTASection
          onOpenCheckout={() => handleOpenCheckout('Bottom Final CTA')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCheckout={() => handleOpenCheckout('Footer CTA')}
        onOpenQuiz={() => handleOpenQuiz('Footer Quiz Link')}
      />

      {/* Modals */}
      <SkinQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenCheckout={() => handleOpenCheckout('Skin Quiz Result CTA')}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={handleCheckoutSuccess}
      />

      <DigitalPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
