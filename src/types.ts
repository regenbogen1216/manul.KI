export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  difficulty: 'Leicht' | 'Mittel' | 'Anspruchsvoll';
  image: string;
  ingredients: string[];
  instructions: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
