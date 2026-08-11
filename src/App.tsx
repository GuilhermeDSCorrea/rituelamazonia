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

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Web Audio Synth for Amazon Rain & Gentle Wind Ambience
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  const toggleAudio = () => {
    if (audioPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setAudioPlaying(false);
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
      } catch (err) {
        console.log("Audio play error:", err);
        setAudioPlaying(false);
      }
    }
  };

  const handleCheckoutSuccess = () => {
    setIsCheckoutOpen(false);
    setIsPortalOpen(true);
  };

  return (
    <div className="min-[#100vh] bg-[#FDFBF7] text-[#2C3531] font-sans relative flex flex-col selection:bg-[#E2D4C3] selection:text-[#1A3323]">
      {/* Top Header */}
      <Header
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        audioPlaying={audioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Section 2: Desire Awakening */}
        <DesireAwakening
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Section 3: Benefits */}
        <Benefits
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Section 4: What You Get (5 Modules) */}
        <WhatYouGet
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenPortal={() => setIsPortalOpen(true)}
        />

        {/* Section 5: Transformation / Before vs After */}
        <TransformationComparison
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Section 6: Value Proof & Stack (9,90 €) */}
        <ValueProof
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Section 7: Final CTA */}
        <CTASection
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Modals */}
      <SkinQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
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
