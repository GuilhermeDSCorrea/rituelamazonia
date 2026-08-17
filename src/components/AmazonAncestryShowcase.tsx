import React, { useState } from 'react';
import { Leaf, Sparkles, Sun, Shield, Heart, Feather, ArrowRight, Compass, Trees, Droplets } from 'lucide-react';
import { ANCESTRAL_PLANTS, AMAZON_FOREST_IMAGES, AncestralPlant } from '../data/ancestralData';
import { trackCustomEvent } from '../lib/fbPixel';

interface AmazonAncestryShowcaseProps {
  onOpenCheckout: () => void;
}

export const AmazonAncestryShowcase: React.FC<AmazonAncestryShowcaseProps> = ({ onOpenCheckout }) => {
  const [selectedPlantId, setSelectedPlantId] = useState<string>(ANCESTRAL_PLANTS[0].id);

  const selectedPlant = ANCESTRAL_PLANTS.find(p => p.id === selectedPlantId) || ANCESTRAL_PLANTS[0];

  const handleSelectPlant = (plant: AncestralPlant) => {
    setSelectedPlantId(plant.id);
    trackCustomEvent('SelectAncestralPlant', { plantName: plant.name });
  };

  const getPlantIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-4 h-4 text-[#C5A059]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#C5A059]" />;
      case 'Feather':
        return <Feather className="w-4 h-4 text-[#C5A059]" />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-[#C5A059]" />;
      case 'Heart':
        return <Heart className="w-4 h-4 text-[#C5A059]" />;
      case 'Leaf':
      default:
        return <Leaf className="w-4 h-4 text-[#C5A059]" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#0A1A10] text-[#FDFBF7] overflow-hidden">
      
      {/* Background Rainforest Canopy Wallpaper Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={AMAZON_FOREST_IMAGES.canopy}
          alt="Amazon Rainforest Canopy Background"
          className="w-full h-full object-cover filter brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A10] via-[#0A1A10]/90 to-[#0A1A10]" />
      </div>

      {/* Decorative Emerald & Gold Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#264A35]/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#173822] border border-[#C5A059]/30 text-[#E6C875] text-xs font-semibold tracking-wider uppercase shadow-inner">
            <Trees className="w-4 h-4 text-[#C5A059]" />
            <span>Sagesse Ancestrale & Botanique Amazonienne</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7] font-semibold leading-tight">
            Les Trésors de la Forêt Sacrée pour{' '}
            <span className="italic font-normal text-[#E6C875] underline decoration-[#C5A059]/40 underline-offset-8">
              Révéler Votre Éclat
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D4E5D7]/80 leading-relaxed font-light">
            Au cœur du plus grand poumon végétal de la Terre, les communautés autochtones transmettent depuis des siècles des secrets de beauté vivants. Découvrez les bio-actifs rares qui infusent le **Rituel Amazônia**.
          </p>
        </div>

        {/* Dynamic Botanical Interactive Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Plant Selection Tabs (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Cliquez sur une plante sacrée :</span>
            </div>

            <div className="space-y-2.5">
              {ANCESTRAL_PLANTS.map((plant) => {
                const isSelected = plant.id === selectedPlantId;
                return (
                  <button
                    key={plant.id}
                    onClick={() => handleSelectPlant(plant)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#163824] border-[#C5A059] text-[#FDFBF7] shadow-xl translate-x-1 ring-1 ring-[#C5A059]/50'
                        : 'bg-[#0E2417]/80 border-[#1E4A2F]/50 text-[#D4E5D7]/80 hover:bg-[#163824]/60 hover:border-[#C5A059]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-[#C5A059] text-[#0A1A10]' : 'bg-[#173822] text-[#C5A059] group-hover:bg-[#C5A059]/20'
                      }`}>
                        {getPlantIcon(plant.iconName)}
                      </div>
                      <div>
                        <h3 className={`font-serif text-base font-semibold transition-colors ${
                          isSelected ? 'text-[#FDFBF7]' : 'text-[#D4E5D7] group-hover:text-[#FDFBF7]'
                        }`}>
                          {plant.name}
                        </h3>
                        <p className="text-[11px] text-[#C5A059]/90 italic font-mono">
                          {plant.botanicalName}
                        </p>
                      </div>
                    </div>

                    <div className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      isSelected ? 'bg-[#C5A059]/20 text-[#E6C875] border border-[#C5A059]/40' : 'bg-[#173822]/40 text-[#D4E5D7]/50'
                    }`}>
                      {plant.traditionBadge}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-[#D4E5D7]/60 italic flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Chaque module explicatif du protocole vous guide dans l'usage optimal de ces actifs.</span>
            </div>
          </div>

          {/* Plant Spotlight Details Card (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#122E1D] to-[#0A1A10] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            
            {/* Subtle background plant leaf watermark */}
            <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
              <Leaf className="w-full h-full text-[#C5A059]" />
            </div>

            <div className="space-y-6 relative z-10">
              
              {/* Card Header & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1E4A2F]/80 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E6C875] font-semibold block">
                    {selectedPlant.origin}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDFBF7] mt-0.5">
                    {selectedPlant.name}
                  </h3>
                  <p className="text-xs italic text-[#C5A059]">
                    "{selectedPlant.subtitle}"
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#1A422B] border border-[#C5A059]/50 text-[#E6C875] text-xs font-semibold flex items-center gap-1.5">
                  <Trees className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{selectedPlant.traditionBadge}</span>
                </div>
              </div>

              {/* Main Plant Image & Ancestral Story */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Image Frame */}
                <div className="sm:col-span-5 relative group">
                  <div className="absolute inset-0 bg-[#C5A059] rounded-2xl transform rotate-2 opacity-30 group-hover:rotate-1 transition-transform" />
                  <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#C5A059]/40 shadow-lg">
                    <img
                      src={selectedPlant.image}
                      alt={selectedPlant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 text-[10px] text-center text-[#E6C875] font-mono bg-[#0A1A10]/80 py-1 rounded-lg border border-[#C5A059]/30">
                      {selectedPlant.botanicalName}
                    </span>
                  </div>
                </div>

                {/* Story & Wisdom */}
                <div className="sm:col-span-7 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-1">
                    <Feather className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Légende & Usage Ancestral</span>
                  </h4>

                  <p className="text-xs sm:text-sm text-[#D4E5D7] leading-relaxed font-light italic bg-[#0A1A10]/60 p-4 rounded-xl border border-[#1E4A2F]/60">
                    "{selectedPlant.ancestralStory}"
                  </p>

                  <div className="pt-1">
                    <h5 className="text-[11px] uppercase tracking-wider text-[#E6C875] font-bold mb-1">
                      Action Majeure sur la Peau :
                    </h5>
                    <p className="text-xs text-[#FDFBF7] font-medium leading-normal">
                      {selectedPlant.skinBenefit}
                    </p>
                  </div>
                </div>

              </div>

              {/* Key Active Molecules Pills */}
              <div className="bg-[#0A1A10]/80 p-4 rounded-2xl border border-[#1E4A2F] space-y-2">
                <p className="text-[11px] uppercase tracking-widest text-[#C5A059] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Composants Bio-Actifs Clés :</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedPlant.keyActives.map((active, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#173822] text-[#E6C875] px-3 py-1 rounded-full border border-[#C5A059]/30 font-medium"
                    >
                      ✓ {active}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Action inside card */}
            <div className="pt-6 mt-6 border-t border-[#1E4A2F] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#D4E5D7]/80">
                  Compris dans le <strong className="text-[#E6C875]">Protocole Rituel Amazônia</strong>
                </p>
                <p className="text-[11px] text-[#C5A059]">Accès digital instantané • 9,90 €</p>
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#D4B06A] text-[#0A1A10] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform active:scale-98"
              >
                <span>Obtenir le protocole (9,90 €)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Rainforest Gallery Strip - High Density Amazon Visuals */}
        <div className="pt-8 space-y-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-[#FDFBF7] font-semibold">
              L'Atmosphère Immersive de la Forêt Tropicale
            </h3>
            <p className="text-xs text-[#D4E5D7]/70 mt-1">
              Des paysages sacrés aux soins naturels : un voyage sensoriel au cœur de l'Amazonie
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Image 1: Forest Canopy */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-[#C5A059]/30 shadow-md">
              <img
                src={AMAZON_FOREST_IMAGES.canopy}
                alt="Forêt tropicale amazonienne"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-[#FDFBF7]">
                <p className="text-xs font-serif font-bold text-[#E6C875]">La Canopée Végétale</p>
                <p className="text-[10px] text-[#D4E5D7]/80">Pureté & biodiversité</p>
              </div>
            </div>

            {/* Image 2: Amazon River Mist */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-[#C5A059]/30 shadow-md">
              <img
                src={AMAZON_FOREST_IMAGES.mistRiver}
                alt="Brume sur le Fleuve Amazone"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-[#FDFBF7]">
                <p className="text-xs font-serif font-bold text-[#E6C875]">La Brume Botanique</p>
                <p className="text-[10px] text-[#D4E5D7]/80">L'éveil aquatique du matin</p>
              </div>
            </div>

            {/* Image 3: Botanical Oil Dropper */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-[#C5A059]/30 shadow-md">
              <img
                src={AMAZON_FOREST_IMAGES.botanicalOil}
                alt="Huile végétale sacrée de l'Amazonie"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-[#FDFBF7]">
                <p className="text-xs font-serif font-bold text-[#E6C875]">Huiles Éliminant la Secheresse</p>
                <p className="text-[10px] text-[#D4E5D7]/80">Extraction première pression</p>
              </div>
            </div>

            {/* Image 4: Glowing Skin Result */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-[#C5A059]/30 shadow-md">
              <img
                src={AMAZON_FOREST_IMAGES.glowingSkinWoman}
                alt="Femme au teint radieux et naturel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-[#FDFBF7]">
                <p className="text-xs font-serif font-bold text-[#E6C875]">L'Éclat Restauré</p>
                <p className="text-[10px] text-[#D4E5D7]/80">Une peau fraîche & sereine</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
