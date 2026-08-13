export interface AncestralPlant {
  id: string;
  name: string;
  botanicalName: string;
  subtitle: string;
  origin: string;
  image: string;
  ancestralStory: string;
  skinBenefit: string;
  keyActives: string[];
  traditionBadge: string;
  iconName: string;
}

export const ANCESTRAL_PLANTS: AncestralPlant[] = [
  {
    id: "buriti",
    name: "L'Huile de Buriti",
    botanicalName: "Mauritia flexuosa",
    subtitle: "L'Or Ambré du Palmier de Vie",
    origin: "Bassin de l'Amazone & Zones Humides",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    ancestralStory: "Surnommé 'l'Arbre de Vie' par les tribus indigènes, le palmier Buriti produit un fruit à la pulpe d'un orange ardent. Pressée artisanalement, son huile ambrée sacrée protégeait les femmes amazoniennes du soleil équatorial tout en ravivant la beauté naturelle de leur peau.",
    skinBenefit: "Protection antioxydante intense, réhydratation profonde et teint naturellement ensoleillé sans maquillage.",
    keyActives: ["50x plus de Pro-Vitamine A que la carotte", "Acide Oléique (Oméga 9)", "Tocophérols (Vitamine E)"],
    traditionBadge: "Sagesse Rituelle Indigène",
    iconName: "Sun"
  },
  {
    id: "pracaxi",
    name: "L'Huile de Pracaxi",
    botanicalName: "Pentaclethra macroloba",
    subtitle: "Le Miracle de Lissage & Éclat",
    origin: "Forêt Tropicale Humide d'Amazonie",
    image: "https://images.unsplash.com/photo-1608248597262-8382390f7f36?auto=format&fit=crop&w=800&q=80",
    ancestralStory: "Récoltées dans les zones inondables le long des rivières, les graines de l'arbre Pracaxi sont traditionnellement broyées pour extraire une huile précieuse surnommée 'le lisseur végétal'. Elle apaisait les peaux abîmées et préservait la fermeté cutanée.",
    skinBenefit: "Uniformise le grain de peau, régénère les tissus fatigués et illumine les teints ternes dés la première semaine.",
    keyActives: ["Acide Béhénique haute concentration (19%)", "Lignocérique", "Acides gras insaturés Oméga 6 & 9"],
    traditionBadge: "Nectar de Régénération",
    iconName: "Sparkles"
  },
  {
    id: "murumuru",
    name: "Le Beurre de Murumuru",
    botanicalName: "Astrocaryum murumuru",
    subtitle: "Le Cocon de Nutrition Suprême",
    origin: "Région du Pará & Haut-Amazone",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    ancestralStory: "Issu des noix du palmier épineux Murumuru, ce beurre riche et crémeux était appliqué lors des rituels nocturnes. Il fond instantanément à la température de la peau pour créer un voile protecteur sans laisser de film gras.",
    skinBenefit: "Restaure la barrière lipidique, comble les ridules de déshydratation et apporte une douceur de velours durable.",
    keyActives: ["Acide Laurique (47%)", "Acide Myristique", "Pro-Vitamine A restaureuse"],
    traditionBadge: "Baume Botanique Sacré",
    iconName: "Feather"
  },
  {
    id: "sang-de-dragon",
    name: "Sangre de Drago (Sang de Dragon)",
    botanicalName: "Croton lechleri",
    subtitle: "La Résine Écarlate Tenseur",
    origin: "Haute Amazonie Péruvienne & Brésilienne",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    ancestralStory: "Lorsque l'écorce du Croton est délicatement entaillée par les guérisseurs traditionnels, l'arbre laisse couler une sève rouge rubis. Ce véritable 'pansement végétal' est vénéré depuis des siècles pour cicatriser et raffermir la peau.",
    skinBenefit: "Stimule le renouvellement cellulaire, repulpe les épidermes fatigués et protège des agressions extérieures.",
    keyActives: ["Taspine (Alcaloïde cicatrisant)", "Proanthocyanidines (90% de la sève)", "Polyphénols tenseurs"],
    traditionBadge: "Sève Écarlate Ancestrale",
    iconName: "Shield"
  },
  {
    id: "argile-verte",
    name: "L'Argile Amazonienne Purifiante",
    botanicalName: "Kaolin enrichi aux Minéraux Fluviaux",
    origin: "Berges du Fleuve Amazone",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    ancestralStory: "Déposée naturellement par les crues annuelles du grand fleuve, cette terre sacrée regorge de minéraux volcaniques et de micro-nutriments végétaux. Les femmes s'en enduisaient le visage pour détoxifier et rafraîchir leur peau.",
    skinBenefit: "Absorbe le surplus de sébum, désincruste les pores délicatement et rééquilibre le microbiote cutané.",
    keyActives: ["Silice pure reminéralisante", "Oligo-éléments rares", "Magnésium & Fer apaisants"],
    traditionBadge: "Terre Purifiante des Rivières",
    iconName: "Leaf"
  },
  {
    id: "andiroba",
    name: "L'Huile d'Andiroba",
    botanicalName: "Carapa guianensis",
    subtitle: "L'Apaisement & Anti-Rougeurs",
    origin: "Forêts Inondées du Delta de l'Amazone",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    ancestralStory: "Extraite des grosses noix tombées des arbres séculaires d'Andiroba, cette huile dorée est le remède traditionnel contre les irritations cutanées, les rougeurs et l'inconfort lié aux changements de saison.",
    skinBenefit: "Calme immédiatement les rougeurs, atténue les réactivités cutanées et procure une sensation de fraîcheur profonde.",
    keyActives: ["Limonoïdes anti-inflammatoires", "Acide Stéarique", "Acide Palmitique protecteur"],
    traditionBadge: "Remède Végétal Apaisant",
    iconName: "Heart"
  }
];

export const AMAZON_FOREST_IMAGES = {
  canopy: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80",
  mistRiver: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  leavesCloseUp: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80",
  botanicalOil: "https://images.unsplash.com/photo-1608248597262-8382390f7f36?auto=format&fit=crop&w=1000&q=80",
  indigenousRitual: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
  glowingSkinWoman: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
};
