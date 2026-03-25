
export type View = 'home' | 'menu' | 'about' | 'contact' | 'locations' | 'location-skarholmen' | 'location-kista' | 'location-huddinge' | 'location-uppsala';

export interface Burger {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  category: 'beef' | 'chicken' | 'veggie';
}

export interface Feature {
  title: string;
  description: string;
  image: string;
  linkText: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  image: string;
  rating: number;
}

export interface LocationData {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  image: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  phone: string;
  mapUrl?: string;
}
