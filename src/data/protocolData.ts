import { ModuleItem, BenefitItem, TestimonialItem, FAQItem, ValueStackItem } from '../types';

import heroImg from '../assets/images/amazonia_hero_skincare_1786380592840.jpg';
import tabletImg from '../assets/images/digital_protocol_mockup_1786380605934.jpg';
import womanImg from '../assets/images/woman_radiant_skin_1786380617574.jpg';

export const IMAGES = {
  hero: heroImg,
  tablet: tabletImg,
  woman: womanImg,
};

export const PROGRAM_INFO = {
  name: "Rituel Amazônia",
  subtitle: "Le secret d'un rituel de beauté inspiré de l'Amazonie",
  tagline: "Une routine de skincare simple, élégante et guidée pour révéler l'éclat naturel de votre peau au quotidien.",
  price: "9,90 €",
  regularPrice: "47,00 €",
  format: "Protocole Digital Interactif + Ebook PDF à télécharger",
  rating: 4.9,
  reviewsCount: 2480,
};

export const BENEFITS: BenefitItem[] = [
  {
    id: "simplicite",
    title: "Simplicité Absolue",
    subtitle: "Moins de produits, plus de résultats",
    description: "Fini les routines à 10 étapes complexes. Un protocole épuré et compréhensible qui s'intègre naturellement dans vos journées.",
    iconName: "Feather"
  },
  {
    id: "clarte",
    title: "Clarté & Guidance",
    subtitle: "Chaque geste expliqué pas à pas",
    description: "Des explications limpides sur le rôle de chaque ingrédient et l'ordre idéal d'application pour maximiser l'efficacité.",
    iconName: "Compass"
  },
  {
    id: "regularite",
    title: "Régularité Sans Effort",
    subtitle: "Un rendez-vous quotidien apaisant",
    description: "Un calendrier visuel et des checklists pratiques pour inscrire votre rituel dans la durée avec plaisir et sérénité.",
    iconName: "Calendar"
  },
  {
    id: "elegance",
    title: "Élégance Sensorielles",
    subtitle: "L'art du soin comme un spa à la maison",
    description: "Inspiré de la richesse botanique de l'Amazonie, transformez votre routine en un véritable instant de reconnexion féminine.",
    iconName: "Sparkles"
  },
  {
    id: "confort",
    title: "Confort & Douceur",
    subtitle: "Adapté aux peaux sensibles",
    description: "Des formulations douces et naturelles qui respectent le microbiote cutané et calment les sensations d'inconfort.",
    iconName: "Heart"
  },
  {
    id: "coherence",
    title: "Cohérence Globale",
    subtitle: "Harmonie entre matin et soir",
    description: "Une synergie parfaite entre l'éveil protecteur du matin et la régénération réparatrice de la nuit.",
    iconName: "RefreshCw"
  }
];

export const MODULES: ModuleItem[] = [
  {
    id: "mod-1",
    number: "01",
    title: "Diagnostic & Fondations Botaniques",
    duration: "Module d'Analyse",
    description: "Comprenez les véritables besoins de votre peau sans jargon médical et apprenez à identifier votre profil cutané unique.",
    details: [
      "Guide d'auto-diagnostic simple en 3 minutes",
      "Les piliers de la barrière cutanée selon la sagesse botanique",
      "Élimination des erreurs fréquentes qui étouffent l'éclat"
    ],
    iconName: "Search",
    badge: "Essentiel"
  },
  {
    id: "mod-2",
    number: "02",
    title: "Le Rituel du Matin : Éveil Amazônia",
    duration: "Protocole 5 min",
    description: "Une séquence fluide pour réveiller le teint, hydrater en profondeur et protéger votre peau des agressions extérieures.",
    details: [
      "Ordre d'application optimal des actifs hydratants",
      "Geste de réveil lymphatique du visage pour dégonfler le regard",
      "Bouclier naturel contre l'oxydation et le stress urbain"
    ],
    iconName: "Sun"
  },
  {
    id: "mod-3",
    number: "03",
    title: "Le Rituel du Soir : Régénération Profonde",
    duration: "Protocole 8 min",
    description: "Un moment de détente absolue pour libérer les toxines de la journée et stimuler le renouvellement cellulaire nocturne.",
    details: [
      "Technique de nettoyage doux respectant le film hydrolipidique",
      "Application stratégique des huiles de massage botaniques",
      "Préparation de la peau pour une absorption nocturne maximale"
    ],
    iconName: "Moon"
  },
  {
    id: "mod-4",
    number: "04",
    title: "Gestuelle de Massage & Drainage Relaxant",
    duration: "Guide Visuel",
    description: "Les mouvements ancestraux d'auto-massage inspirés des rituels amazoniens pour lisser les traits et tonifier les tissus.",
    details: [
      "Schéma précis des points d'acupression et de drainage",
      "Technique de lissage du front, des pommettes et du cou",
      "Exercices express de détente des tensions faciales"
    ],
    iconName: "Smile",
    badge: "Offert"
  },
  {
    id: "mod-5",
    number: "05",
    title: "Fiches Recettes & Ingrédients Amazoniens",
    duration: "Guide Pratique",
    description: "Découvrez les trésors naturels (Huile de Buriti, Beurre de Murumuru, Argile Amazonienne) et comment les intégrer facilement.",
    details: [
      "Fiches décryptage des superfruits et huiles précieuses",
      "Masques minute maison à préparer soi-même en 2 minutes",
      "Guide d'achat éthique et accessible"
    ],
    iconName: "Leaf",
    badge: "Bonus"
  }
];

export const COMPARISON_TABLE = [
  {
    aspect: "Approche globale",
    before: "Routines trop complexes, 8 à 12 produits superposés sans logique",
    after: "Rituel épuré en 3 à 4 gestes ciblés et cohérents"
  },
  {
    aspect: "Sensation au quotidien",
    before: "Impression de perdre du temps, charge mentale et confusion",
    after: "Un moment de calme, de douceur et de reconnexion à soi"
  },
  {
    aspect: "Résultats cutanés",
    before: "Peau parfois irritée, teint terne ou réactions imprévisibles",
    after: "Peau apaisée, grain lissé et éclat naturel ravivé"
  },
  {
    aspect: "Budget & Achats",
    before: "Achats impulsifs coûteux pour des produits inutilisés",
    after: "Investissement unique de 9,90 € pour une méthode durable"
  },
  {
    aspect: "Clarté du suivi",
    before: "Changements constants de produits sans savoir ce qui fonctionne",
    after: "Feuille de route claire avec checklists et calendrier guidé"
  }
];

export const VALUE_STACK: ValueStackItem[] = [
  {
    title: "Protocole Complet Rituel Amazônia (PDF & Digital)",
    description: "Les 5 modules détaillés avec étapes illustrées et conseils pratiques",
    realValue: "39,00 €"
  },
  {
    title: "Guide d'Auto-Diagnostic Skincare & Profil Cutané",
    description: "Pour identifier la combinaison idéale adaptée à vos besoins",
    realValue: "19,00 €"
  },
  {
    title: "Calendrier d'Accompagnement 30 Jours & Checklists",
    description: "Pour suivre votre routine avec régularité et plaisir au quotidien",
    realValue: "15,00 €"
  },
  {
    title: "Guide Interactif des Gestes de Massage & Drainage Visage",
    description: "L'art du lissage manuel pour un effet de réveil et de fraîcheur",
    realValue: "24,00 €"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Clara M.",
    age: 34,
    location: "Bordeaux",
    rating: 5,
    comment: "J'accumulais des dizaines de sérums sans vraiment comprendre ce que je faisais. Rituel Amazônia m'a apporté une clarté incroyable. Ma peau est apaisée, et ces 5 minutes le matin sont devenues ma bulle de douceur.",
    skinType: "Peau mixte à sensible",
    date: "Il y a 3 jours",
    verified: true
  },
  {
    id: "t2",
    name: "Élodie D.",
    age: 41,
    location: "Lyon",
    rating: 5,
    comment: "Pour 9,90 €, je ne m'attendais pas à un guide aussi soigné et complet ! Les fiches sur les ingrédients amazoniens et la gestuelle du soir sont fantastiques. Je ressens un vrai confort cutané.",
    skinType: "Peau sèche & déshydratée",
    date: "Il y a 1 semaine",
    verified: true
  },
  {
    id: "t3",
    name: "Sophie T.",
    age: 29,
    location: "Paris",
    rating: 5,
    comment: "Le calendrier interactif et la simplicité du protocole m'ont enfin permis d'être régulière ! Fini la surcharge de produits, mon teint n'a jamais été aussi lumineux.",
    skinType: "Peau sujette aux rougeurs",
    date: "Il y a 2 semaines",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "S'agit-il d'un produit cosmétique physique reçu par la poste ?",
    answer: "Non, Rituel Amazônia est un protocole de skincare entièrement digital (Ebook PDF enrichi + Espace membre interactif). Vous recevez votre accès immédiat par email dès la validation de votre commande pour le consulter sur votre téléphone, tablette ou ordinateur."
  },
  {
    id: "faq-2",
    question: "Dois-je acheter des produits coûteux pour suivre le protocole ?",
    answer: "Absolument pas ! Le protocole est conçu pour s'adapter aux soins que vous possédez déjà ou à des ingrédients naturels simples et très accessibles (huiles végétales pures, eaux florales, etc.). L'accent est mis sur la justesse des gestes et la synergie de la routine."
  },
  {
    id: "faq-3",
    question: "Combien de temps prend la routine au quotidien ?",
    answer: "Seulement 5 minutes le matin et 8 minutes le soir. Le protocole a été spécialement pensé pour s'intégrer facilement dans la vie active de chaque femme sans créer de contrainte."
  },
  {
    id: "faq-4",
    question: "Le protocole convient-il aux peaux très sensibles ?",
    answer: "Oui. L'approche est douce, apaisante et axée sur le respect de la barrière cutanée. Nous expliquons précisément comment adapter les gestes en cas d'inconfort ou de rougeurs."
  },
  {
    id: "faq-5",
    question: "Comment se déroule la livraison après les 9,90 € ?",
    answer: "La livraison est instantanée ! Immédiatement après votre règlement sécurisé de 9,90 €, vous êtes redirigée vers votre espace membre et recevez un lien de téléchargement direct dans votre boîte mail."
  },
  {
    id: "faq-6",
    question: "Existe-t-il une garantie de satisfaction ?",
    answer: "Oui, vous bénéficiez de notre garantie 'Sérénité 14 Jours'. Si le protocole ne répond pas à vos attentes, un simple email à notre support francophone suffit pour obtenir un remboursement rapide."
  }
];
