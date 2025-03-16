export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'desserts' | 'drinks';
  dietary: ('vegetarian' | 'gluten-free' | 'vegan')[];
  image: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
  image?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  image: string;
}

export interface ReservationTime {
  id: string;
  time: string;
  available: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}