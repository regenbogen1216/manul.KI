import { BlogPost, Recipe, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'private-chef',
    title: 'Privatkoch',
    description: 'Exklusives Fine Dining direkt bei Ihnen zu Hause. Ich kümmere mich um alles – vom Einkauf bis zum Abwasch.',
    icon: 'Utensils',
  },
  {
    id: 'catering',
    title: 'Catering & Events',
    description: 'Ob Firmenfeier oder private Party – steirische Schmankerl und internationale Küche für Ihre Gäste.',
    icon: 'Users',
  },
  {
    id: 'consulting',
    title: 'Küchen-Consulting',
    description: 'Erfahrung aus Schulkantinen und À-la-carte-Betrieben. Optimierung von Abläufen und Speisekarten.',
    icon: 'ClipboardList',
  },
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    description: 'Gehobene Küche mit regionalem Fokus. Moderne Interpretationen steirischer Klassiker.',
    icon: 'Star',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Das Geheimnis des echten steirischen Kürbiskernöls',
    excerpt: 'Warum das grüne Gold aus der Steiermark in keiner Küche fehlen darf und worauf man beim Kauf achten sollte.',
    date: '15. Mai 2024',
    image: 'https://images.unsplash.com/photo-1470549813517-2fa741d25c92?auto=format&fit=crop&q=80&w=800',
    category: 'Warenkunde',
  },
  {
    id: '2',
    title: 'Vom Fine Dining zur Schulkantine',
    excerpt: 'Wie man Qualität und Regionalität auch in der Gemeinschaftsverpflegung hochhalten kann.',
    date: '02. Juni 2024',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    category: 'Hinter den Kulissen',
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Familie Gruber',
    text: 'Ein unvergesslicher Abend! Manul hat uns mit einem 5-Gänge-Menü verzaubert. Alles war perfekt abgestimmt und die Küche danach blitzblank.',
    role: 'Privat-Dinner Gast'
  },
  {
    id: '2',
    name: 'Tech Solutions GmbH',
    text: 'Das Catering für unsere Firmenfeier war hervorragend. Die steirischen Tapas waren der absolute Renner bei unseren internationalen Gästen.',
    role: 'Event-Kunde'
  },
  {
    id: '3',
    name: 'Mag. Steiner',
    text: 'Professionell, pünktlich und geschmacklich auf höchstem Niveau. Manul versteht sein Handwerk blind.',
    role: 'Stammkunde'
  }
];

export const FAQS = [
  {
    question: 'In welcher Region bist du tätig?',
    answer: 'Mein Schwerpunkt liegt in der Steiermark, ich bin jedoch für größere Events und exklusive Privatkoch-Einsätze in ganz Österreich und im angrenzenden Ausland buchbar.'
  },
  {
    question: 'Wie läuft die Planung für ein Privat-Dinner ab?',
    answer: 'Nach Ihrer Anfrage besprechen wir Ihre Vorlieben und eventuelle Allergien. Ich erstelle einen Menüvorschlag. Am Tag des Events kümmere ich mich um Einkauf, Zubereitung, Service und die Reinigung der Küche.'
  },
  {
    question: 'Bietest du auch vegetarische oder vegane Menüs an?',
    answer: 'Selbstverständlich! Die moderne steirische und internationale Küche bietet wunderbare Möglichkeiten für pflanzliche Genüsse auf höchstem Niveau.'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Steirisches Wurzelfleisch',
    description: 'Ein Klassiker der steirischen Küche, serviert mit frischem Kren und Salzerdäpfeln.',
    prepTime: '90 Min.',
    difficulty: 'Mittel',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '800g Schweineschulter',
      'Wurzelgemüse (Karotten, Gelbe Rüben, Sellerie)',
      'Frischer Kren',
      'Lorbeerblätter, Pfefferkörner',
      'Essig'
    ],
    instructions: [
      'Fleisch in siedendem Wasser mit Gewürzen weich kochen.',
      'Wurzelwerk in Streifen schneiden und bissfest garen.',
      'Fleisch aufschneiden, mit Gemüse und etwas Kochsud anrichten.',
      'Großzügig mit frisch geriebenem Kren bestreuen.'
    ]
  }
];
