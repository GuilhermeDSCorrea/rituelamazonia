import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/protocolData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F3EE]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FDFBF7] border border-[#E6D5B8] text-xs font-semibold text-[#B89753]">
            <div className="flex text-[#C5A059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="ml-1 text-[#1A3323]">Note moyenne 4.9/5</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3323] font-semibold leading-tight">
            Ce que les femmes pensent de leur nouveau rituel
          </h2>

          <p className="text-xs sm:text-sm text-[#2C3531]/80">
            Témoignages vérifiés de clientes ayant adopté le protocole Rituel Amazônia au quotidien.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#E6D5B8]/80 shadow-sm flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#E6C875]/40 absolute top-4 right-4" />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#2C3531]/85 italic leading-relaxed">
                  « {t.comment} »
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6D5B8]/40 flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-base text-[#1A3323]">
                    {t.name}, {t.age} ans
                  </p>
                  <p className="text-[11px] text-[#2C3531]/60">
                    {t.location} • <span className="text-[#264A35]">{t.skinType}</span>
                  </p>
                </div>

                {t.verified && (
                  <span className="flex items-center gap-1 text-[10px] bg-[#F2F5F1] text-[#264A35] px-2 py-1 rounded-full font-medium border border-[#879883]/30">
                    <CheckCircle className="w-3 h-3 text-[#264A35]" />
                    Achat vérifié
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
