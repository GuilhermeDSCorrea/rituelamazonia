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

export interface IndigenousTribe {
  id: string;
  name: string;
  region: string;
  subtitle: string;
  sacredRitual: string;
  botanicalWisdom: string;
  bodyArtTradition: string;
  image: string;
  emblemIcon: string;
  quote: string;
}

export interface AmazonAnimalTotem {
  id: string;
  name: string;
  scientificName: string;
  symbol: string;
  totemMeaning: string;
  skinResonance: string;
  element: string;
  image: string;
  colorTone: string;
}

export interface QuizQuestionOption {
  id: string;
  label: string;
  sublabel: string;
  image?: string;
  icon: string;
  category: string;
  animalTotemId?: string;
  tribeId?: string;
  plantId?: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  options: QuizQuestionOption[];
}

export interface SkinArchetypeResult {
  id: string;
  title: string;
  subtitle: string;
  animalTotem: AmazonAnimalTotem;
  tribe: IndigenousTribe;
  primaryPlant: AncestralPlant;
  secondaryPlants: AncestralPlant[];
  description: string;
  morningStep: string;
  eveningStep: string;
  keyRecommendation: string;
}

export const INDIGENOUS_TRIBES: IndigenousTribe[] = [
  {
    id: "yawanawa",
    name: "Tribu Yawanawá",
    region: "Rio Gregório, Acre (Amazonie Occidentale)",
    subtitle: "Le Peuple du Sanglier & des Peintures Sacrées d'Urucum",
    sacredRitual: "Rituels de purification au bord de la rivière et onctions cérémonielles aux graines de Roucou (Urucum) pour protéger le visage des éléments.",
    botanicalWisdom: "Ils utilisent la pulpe rouge d'Urucum mélangée aux huiles ambrées pour former un bouclier antioxydant vivant contre les rayons intenses du soleil et la pollution naturelle.",
    bodyArtTradition: "Kene (motifs géométriques sacrés) peints sur les joues et le front pour harmoniser l'énergie corporelle et éveiller la beauté intérieure.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    emblemIcon: "Sun",
    quote: "« La peau est le parchemin vivant de notre esprit. La nourrir avec la forêt, c'est dialoguer avec la Terre. »"
  },
  {
    id: "ashaninka",
    name: "Tribu Asháninka",
    region: "Vallée du Haut-Juruá & Forêt des Nuages",
    subtitle: "Les Gardiens de la Canopée & de la Sève Écarlate",
    sacredRitual: "Récolte cérémonielle de la résine de Sangre de Drago lors des phases de lune ascendante pour maximiser son pouvoir cicatrisant et tenseur.",
    botanicalWisdom: "Les sages Asháninka appliquent les résines et décoctions d'écorces rares pour apaiser instantanément les irritations cutanées et accélérer le renouvellement des tissus.",
    bodyArtTradition: "Applications de pigments minéraux et de sucs végétaux pour fortifier la barrière cutanée lors des traversées de la jungle.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    emblemIcon: "Shield",
    quote: "« Ce que l'arbre met des siècles à concentrer en sa sève, notre peau l'absorbe en quelques respirations. »"
  },
  {
    id: "kayapo",
    name: "Tribu Kayapó",
    region: "Bassin du Xingu, Sud de l'Amazonie",
    subtitle: "Les Enfants des Étoiles & de l'Arbre de Vie",
    sacredRitual: "Pressage artisanal des noix de Murumuru et de Castanha dans les mortiers sacrés pour obtenir des baumes ultra-nourrissants.",
    botanicalWisdom: "Transmission matrilinéaire des formules de beurres végétaux qui fondent à la température de la peau pour combler la déshydratation et préserver l'élasticité.",
    bodyArtTradition: "Parures de plumes d'aras et peintures au jus de Genipapo créant une protection seconde-peau.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    emblemIcon: "Feather",
    quote: "« La douceur d'un beurre sauvage guérit ce que le temps et la sécheresse ont altéré. »"
  },
  {
    id: "yanomami",
    name: "Tribu Yanomami",
    region: "Haute Forêt Pluviale & Montagnes de l'Orénoque",
    subtitle: "Les Chamanes de la Brume Fluviale & de l'Argile Pure",
    sacredRitual: "Masques de boue minérale fluviale et de feuilles broyées au crépuscule pour débarrasser les pores de toute impureté.",
    botanicalWisdom: "Connaissance intime de plus de 500 plantes médicinales et des argiles sédimentaires riches en silice volcanique pour reminéraliser l'épiderme.",
    bodyArtTradition: "Points et lignes d'argile blanche purifiée dessinés autour des yeux pour décongestionner le regard.",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    emblemIcon: "Sparkles",
    quote: "« La terre fertile du grand fleuve emporte les fatigues et redonne l'éclat de la première aurore. »"
  },
  {
    id: "satere-mawe",
    name: "Tribu Sateré-Mawé",
    region: "Médio Amazonas (Andirá-Marau)",
    subtitle: "Les Pionniers du Guaraná Sauvage & de l'Énergie Végétale",
    sacredRitual: "Infusions concentrées de graines de Guaraná sauvage pour dynamiser la micro-circulation et réveiller les teints fatigués.",
    botanicalWisdom: "Utilisation de caféine et tanins naturels de la forêt pour tonifier le contour du visage et réduire les poches.",
    bodyArtTradition: "Massages faciaux aux galets de rivière tièdes imprégnés d'extraits tonifiants.",
    image: "https://images.unsplash.com/photo-1608248597262-8382390f7f36?auto=format&fit=crop&w=800&q=80",
    emblemIcon: "Zap",
    quote: "« Comme la forêt qui ne dort jamais, le regard s'illumine quand la sève circule sans entrave. »"
  }
];

export const AMAZON_ANIMALS: AmazonAnimalTotem[] = [
  {
    id: "jaguar",
    name: "L'Onça-Pintada (Le Jaguar)",
    scientificName: "Panthera onca",
    symbol: "Régénération Nocturne & Fermeté Suprême",
    totemMeaning: "Le souverain suprême de l'Amazonie incarne la force musculaire, la densité et le renouvellement cellulaire profond qui opère pendant le sommeil.",
    skinResonance: "Idéal pour les peaux matures ou fatiguées nécessitant un regain de tonus, de collagène végétal et de structure.",
    element: "Terre & Nuit Profonde",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    colorTone: "#C5A059"
  },
  {
    id: "arara",
    name: "L'Arara Rouge (Le Grand Ara)",
    scientificName: "Ara macao",
    symbol: "Éclat Solaire & Bouclier Antioxydant",
    totemMeaning: "Cet oiseau sacré aux plumes flamboyantes puise son éclat dans les fruits gorgés de caroténoïdes et d'orangerie sauvage.",
    skinResonance: "Idéal pour les teints ternes, asphyxiés par le stress urbain ou sujets aux taches, pour raviver la lumière naturelle sans maquillage.",
    element: "Feu & Canopée Lumineuse",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    colorTone: "#E67E22"
  },
  {
    id: "boto",
    name: "Le Boto Cor-de-Rosa (Dauphin Rose)",
    scientificName: "Inia geoffrensis",
    symbol: "Hydratation Fluviale & Douceur Soyeuse",
    totemMeaning: "Créature mythique des eaux chaudes de l'Amazone, il incarne la fluidité, la fraîcheur continue et l'équilibre hydrique parfait.",
    skinResonance: "Idéal pour les peaux déshydratées, sujettes aux tiraillements et aux ridules de surface, qui ont soif d'un cocon d'eau et de lipides purs.",
    element: "Eau Vivante & Rivières",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80",
    colorTone: "#E89BA8"
  },
  {
    id: "harpia",
    name: "L'Aigle Harpie (Gavião-Real)",
    scientificName: "Harpia harpyja",
    symbol: "Clarté du Regard & Précision Botanique",
    totemMeaning: "Le plus puissant rapace du monde surplombe la canopée avec une vision perçante et une noblesse inaltérable.",
    skinResonance: "Idéal pour lisser le contour des yeux, décongestionner les cernes et cibler les zones délicates avec exactitude.",
    element: "Air & Sommets de la Canopée",
    image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=800&q=80",
    colorTone: "#7F8C8D"
  },
  {
    id: "morpho",
    name: "Le Papillon Morpho Bleu",
    scientificName: "Morpho peleides",
    symbol: "Métamorphose Cutanée & Reflets Radieux",
    totemMeaning: "Ses ailes reflètent la lumière comme des prismes vivants grâce à des micro-structures nanoscopiques fascinantes.",
    skinResonance: "Idéal pour affiner le grain de peau, resserrer les pores et donner ce glow soyeux 'effet verre' sans brillance grasse.",
    element: "Lumière & Métamorphose",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    colorTone: "#2980B9"
  },
  {
    id: "toucan",
    name: "Le Toucan Toco",
    scientificName: "Ramphastos toco",
    symbol: "Vitalité Fruitée & Nutrition Équilibrée",
    totemMeaning: "Messager des trésors de la forêt, il se nourrit des baies les plus riches en vitamines et acides aminés essentiels.",
    skinResonance: "Idéal pour rééquilibrer le microbiote cutané, nourrir en légèreté et protéger la peau des variations climatiques.",
    element: "Flore & Fruits Sauvages",
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
    colorTone: "#F39C12"
  }
];

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
    subtitle: "La Terre Sacrée Détoxifiante",
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

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: "Comment votre peau réagit-elle au quotidien ?",
    subtitle: "Identifiez la signature élémentaire de votre épiderme",
    badge: "Étape 1 sur 5 • Sensation Cutanée",
    options: [
      {
        id: "seche-deshydratee",
        label: "Tiraillée, terne et soif d'hydratation",
        sublabel: "Sensations d'inconfort après le nettoyage, manque de souplesse",
        icon: "Droplets",
        category: "dry",
        animalTotemId: "boto",
        plantId: "murumuru"
      },
      {
        id: "mixte-brillante",
        label: "Brillante sur la zone T, pores visibles",
        sublabel: "Petites imperfections occasionnelles, besoin de purification légère",
        icon: "Leaf",
        category: "combination",
        animalTotemId: "morpho",
        plantId: "argile-verte"
      },
      {
        id: "sensible-rougeurs",
        label: "Réactive, sujette aux rougeurs et picotements",
        sublabel: "Intolérante aux produits chimiques conventionnels, barrière fragilisée",
        icon: "Heart",
        category: "sensitive",
        animalTotemId: "harpia",
        plantId: "andiroba"
      },
      {
        id: "mature-fatiguee",
        label: "Manque de tonus, ridules et perte d'éclat",
        sublabel: "Besoin de fermeté, de régénération cellulaire et d'effet repulpant",
        icon: "Sparkles",
        category: "mature",
        animalTotemId: "jaguar",
        plantId: "sang-de-dragon"
      }
    ]
  },
  {
    id: 2,
    title: "Quel est votre objectif prioritaire pour votre rituel ?",
    subtitle: "Ce que vous souhaitez voir dans le miroir d'ici 7 à 14 jours",
    badge: "Étape 2 sur 5 • Intention de Beauté",
    options: [
      {
        id: "eclat-lumineux",
        label: "Un teint éclatant, frais et naturellement doré",
        sublabel: "Effet bonne mine instantané sans fond de teint étouffant",
        icon: "Sun",
        category: "glow",
        animalTotemId: "arara",
        plantId: "buriti"
      },
      {
        id: "lissage-fermete",
        label: "Lisser les traits et raffermir l'ovale du visage",
        sublabel: "Stimulation de l'élasticité et comblement des ridules d'expression",
        icon: "Shield",
        category: "firming",
        animalTotemId: "jaguar",
        plantId: "sang-de-dragon"
      },
      {
        id: "apaisement-purete",
        label: "Calmer les rougeurs et uniformiser le grain de peau",
        sublabel: "Une peau douce comme du velours, saine et apaisée",
        icon: "Feather",
        category: "soothing",
        animalTotemId: "morpho",
        plantId: "pracaxi"
      },
      {
        id: "nutrition-profonde",
        label: "Une nutrition intense qui dure toute la journée",
        sublabel: "Stopper définitivement les tiraillements et la desquamation",
        icon: "Droplet",
        category: "nourishing",
        animalTotemId: "boto",
        plantId: "murumuru"
      }
    ]
  },
  {
    id: 3,
    title: "Quel animal totem de la forêt amazonienne vous inspire le plus ?",
    subtitle: "L'énergie faunique qui guidera votre métamorphose",
    badge: "Étape 3 sur 5 • Guide Animalier",
    options: [
      {
        id: "totem-jaguar",
        label: "L'Onça-Pintada (Le Jaguar)",
        sublabel: "Force noble, régénération puissante et résilience nocturne",
        icon: "Sparkles",
        category: "jaguar",
        animalTotemId: "jaguar",
        tribeId: "ashaninka"
      },
      {
        id: "totem-arara",
        label: "L'Arara Rouge (Le Grand Ara)",
        sublabel: "Éclat flamboyant, pigments solaires et joie de vivre",
        icon: "Sun",
        category: "arara",
        animalTotemId: "arara",
        tribeId: "yawanawa"
      },
      {
        id: "totem-boto",
        label: "Le Boto Cor-de-Rosa (Dauphin Rose)",
        sublabel: "Douceur des fleuves sacrés, hydratation pure et fluidité",
        icon: "Droplets",
        category: "boto",
        animalTotemId: "boto",
        tribeId: "kayapo"
      },
      {
        id: "totem-morpho",
        label: "Le Papillon Morpho Bleu",
        sublabel: "Métamorphose soyeuse, clarté lumineuse et raffinement",
        icon: "Feather",
        category: "morpho",
        animalTotemId: "morpho",
        tribeId: "yanomami"
      }
    ]
  },
  {
    id: 4,
    title: "Quelle tradition ancestrale résonne avec votre sensibilité ?",
    subtitle: "Le savoir indigène qui soutiendra votre protocole",
    badge: "Étape 4 sur 5 • Sagesse des Tribus",
    options: [
      {
        id: "tribu-yawanawa",
        label: "Yawanawá : Rituels d'Urucum & Huile de Buriti",
        sublabel: "Protection solaire naturelle, peintures sacrées et éclat solaire",
        icon: "Sun",
        category: "yawanawa",
        tribeId: "yawanawa",
        plantId: "buriti"
      },
      {
        id: "tribu-ashaninka",
        label: "Asháninka : Sève Sacrée de Sang de Dragon",
        sublabel: "Écorces cicatrisantes, régénération cellulaire et bouclier cutané",
        icon: "Shield",
        category: "ashaninka",
        tribeId: "ashaninka",
        plantId: "sang-de-dragon"
      },
      {
        id: "tribu-kayapo",
        label: "Kayapó : Beurres Purs de Murumuru & Noix",
        sublabel: "Nutrition royale, douceur de velours et transmission matrilinéaire",
        icon: "Heart",
        category: "kayapo",
        tribeId: "kayapo",
        plantId: "murumuru"
      },
      {
        id: "tribu-yanomami",
        label: "Yanomami : Argiles & Eaux Vivantes du Fleuve",
        sublabel: "Détoxification profonde, clarté des pores et minéraux rares",
        icon: "Leaf",
        category: "yanomami",
        tribeId: "yanomami",
        plantId: "argile-verte"
      }
    ]
  },
  {
    id: 5,
    title: "Combien de temps pouvez-vous consacrer à votre rituel quotidien ?",
    subtitle: "Votre protocole s'adapte à votre rythme sans jamais vous surcharger",
    badge: "Étape 5 sur 5 • Votre Rythme",
    options: [
      {
        id: "express-3min",
        label: "3 à 5 minutes chrono (Routine Express Essentielle)",
        sublabel: "Pour les matins pressés : 3 gestes ciblés ultra-efficaces",
        icon: "Zap",
        category: "express"
      },
      {
        id: "equilibre-7min",
        label: "5 à 8 minutes (Rituel Harmonieux avec Gestuelle)",
        sublabel: "Application guidée + auto-massage lymphatique relaxant",
        icon: "Compass",
        category: "balanced"
      },
      {
        id: "holistique-10min",
        label: "8 à 12 minutes (Expérience Spa Sacrée Complète)",
        sublabel: "Pour transformer le soin du soir en un véritable sanctuaire de paix",
        icon: "Sparkles",
        category: "holistic"
      }
    ]
  }
];

export const ARCHETYPES: Record<string, SkinArchetypeResult> = {
  arara: {
    id: "arara",
    title: "L'Archange Solaire de l'Amazonie",
    subtitle: "Profil Éclat Pur, Caroténoïdes & Vitalité Rayonnante",
    animalTotem: AMAZON_ANIMALS[1], // Arara
    tribe: INDIGENOUS_TRIBES[0], // Yawanawa
    primaryPlant: ANCESTRAL_PLANTS[0], // Buriti
    secondaryPlants: [ANCESTRAL_PLANTS[1], ANCESTRAL_PLANTS[4]], // Pracaxi, Argile
    description: "Votre peau aspire à révéler sa lumière intérieure. Telle l'Arara Rouge survolant la canopée baignée de soleil, votre teint a besoin d'actifs riches en provitamine A et en acides gras légers pour effacer la grisaille et rayonner naturellement.",
    morningStep: "3 gouttes d'Huile de Buriti ambrée chauffées dans le creux des mains, appliquées par légères pressions ascendantes sur peau encore tiède.",
    eveningStep: "Lissage fluide à l'Huile de Pracaxi pour unifier le grain de peau et dissiper les traces de fatigue de la journée.",
    keyRecommendation: "Évitez les fonds de teint occlusifs. Votre peau est programmée pour briller de son propre éclat végétal."
  },
  jaguar: {
    id: "jaguar",
    title: "La Gardienne du Jaguar & de la Sève Écarlate",
    subtitle: "Profil Fermeté, Régénération Cellulaire & Résilience",
    animalTotem: AMAZON_ANIMALS[0], // Jaguar
    tribe: INDIGENOUS_TRIBES[1], // Ashaninka
    primaryPlant: ANCESTRAL_PLANTS[3], // Sang de Dragon
    secondaryPlants: [ANCESTRAL_PLANTS[0], ANCESTRAL_PLANTS[2]], // Buriti, Murumuru
    description: "Comme le Jaguar régnant sur la nuit amazonienne, votre épiderme possède une force de renouvellement remarquable lorsqu'il reçoit les bons bio-actifs tenseurs. Votre priorité est de stimuler le collagène végétal et de tonifier les traits.",
    morningStep: "Sérum protecteur antioxydant et gestuelle tonifiante de pincements doux le long de la mâchoire et des pommettes.",
    eveningStep: "Application de la sève de Sang de Dragon combinée au beurre de Murumuru pour un effet repulpant nocturne immédiat.",
    keyRecommendation: "Les gestes de massage ascendants comptent pour 50% du résultat : suivez le guide vidéo inclus dans le protocole."
  },
  boto: {
    id: "boto",
    title: "La Nymphe du Fleuve Sacré & du Cocon Murumuru",
    subtitle: "Profil Hydratation Fluviale Profonde & Confort Soyeux",
    animalTotem: AMAZON_ANIMALS[2], // Boto
    tribe: INDIGENOUS_TRIBES[2], // Kayapó
    primaryPlant: ANCESTRAL_PLANTS[2], // Murumuru
    secondaryPlants: [ANCESTRAL_PLANTS[5], ANCESTRAL_PLANTS[1]], // Andiroba, Pracaxi
    description: "Votre peau est comme les eaux paisibles du Rio Negro : douce, sensible et ayant un besoin vital d'étancher sa soif en profondeur. Le beurre de Murumuru et les huiles douces restaurent votre barrière lipidique pour un toucher velouté instantané.",
    morningStep: "Brumisation d'eau florale suivie d'une noisette de baume fondant pour sceller l'hydratation pour 24 heures.",
    eveningStep: "Massage enveloppant à l'huile d'Andiroba pour apaiser les rougeurs et calmer toute sensation de tiraillement.",
    keyRecommendation: "Bannissez les nettoyants moussants décapants. Privilégiez le nettoyage à l'huile douce selon la méthode du protocole."
  },
  morpho: {
    id: "morpho",
    title: "La Tisseuse de Lumière & Pureté Botanique",
    subtitle: "Profil Équilibre Microbiotique, Pores Affinés & Douceur",
    animalTotem: AMAZON_ANIMALS[4], // Morpho
    tribe: INDIGENOUS_TRIBES[3], // Yanomami
    primaryPlant: ANCESTRAL_PLANTS[4], // Argile
    secondaryPlants: [ANCESTRAL_PLANTS[1], ANCESTRAL_PLANTS[5]], // Pracaxi, Andiroba
    description: "À l'image du Papillon Morpho dont les ailes captent la lumière sans artifice, votre peau recherche la pureté, la régulation délicate et la finesse de grain. Les minéraux fluviaux et l'huile de Pracaxi rééquilibrent la production de sébum sans jamais assécher.",
    morningStep: "Émulsion ultra-légère à l'huile de Pracaxi pour matifier subtilement tout en maintenant une hydratation fraîche.",
    eveningStep: "Nettoyage doux et masque hebdomadaire à l'argile fluviale enrichie aux oligo-éléments d'Amazonie.",
    keyRecommendation: "Moins vous agressez votre peau avec des exfoliants chimiques, plus vite ses pores se resserreront naturellement."
  }
};

export const AMAZON_FOREST_IMAGES = {
  canopy: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80",
  mistRiver: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
  leavesCloseUp: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80",
  botanicalOil: "https://images.unsplash.com/photo-1608248597262-8382390f7f36?auto=format&fit=crop&w=1000&q=80",
  indigenousRitual: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
  glowingSkinWoman: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
  jaguarClose: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
  macawFlight: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
  indigenousPortrait: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
  rainforestWaterfall: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
};

