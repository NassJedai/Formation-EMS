import { BookOpen, Settings, Dumbbell, Briefcase, Laptop } from 'lucide-react';

export const NAV_ITEMS = [
    { id: 'daniel', label: 'Le Formateur' },
    { id: 'programme', label: 'Programme' },
    { id: 'temoignages', label: 'Avis' },
    { id: 'faq', label: 'FAQ' }
];

export const PROGRAMME = [
    { day: 1, title: "Bases Scientifiques & Légales", icon: BookOpen, details: ["Principes physiologiques EMS", "Sécurité et contre-indications", "Cadre légal du coach"], goal: "Sécurité & Théorie", time: "Théorie" },
    { day: 2, title: "Maîtrise Technique EMS", icon: Settings, details: ["Réglages fréquences/impulsions", "Protocoles d'entraînement", "Positionnement électrodes"], goal: "Technique Pure", time: "Pratique I" },
    { day: 3, title: "Coaching & Pédagogie", icon: Dumbbell, details: ["Orientation résultat client", "Scénario spécifique", "Organisation studio"], goal: "Pédagogie", time: "Pratique II" },
    { day: 4, title: "Business & Rentabilité", icon: Briefcase, details: ["Vente de contrat", "Marketing digital local", "Fidélisation client"], goal: "Business Model", time: "Gestion" },
    { day: 5, title: "Certification & Logiciels", icon: Laptop, details: ["Test pratique final", "Utilisation CRM Body Training", "Remise des diplômes"], goal: "Certification", time: "Examen" }
];

export const STATS = [
    { val: '5 Jours', label: 'Formation Intensive' },
    { val: '+300%', label: 'Croissance Marché' },
    { val: 'Certifié', label: 'Diplôme Européen' },
    { val: 'Expert', label: 'Daniel Camus' }
];
