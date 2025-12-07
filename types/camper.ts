export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryImage[];
  reviews: Review[];
}

export interface GalleryImage {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface CamperCard {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  location: string;
  transmission: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  gallery: {
    thumb: string;
    original: string;
  };
}

export interface CategoriesFilters {
  AC?: string;
  kitchen?: string;
  TV?: string;
  bathroom?: string;
  water?: string;
  gas?: string;
  radio?: string;
}

export interface CampersFilters {
  categories?: string[];
  location?: string;
  transmission?: "automatic";
  form?: "alcove" | "fullyIntegrated" | "panelTruck";
}
