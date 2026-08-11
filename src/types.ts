export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
  iconName: string;
  badge?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  location: string;
  rating: number;
  comment: string;
  skinType: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ValueStackItem {
  title: string;
  description: string;
  realValue: string;
}

export interface QuizState {
  currentStep: number;
  skinType: string;
  primaryConcern: string;
  timeAvailable: string;
  completed: boolean;
}
