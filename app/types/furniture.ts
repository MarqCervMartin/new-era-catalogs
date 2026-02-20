export interface FurnitureItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  images: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
    unit: string;
  };
}

export type FurnitureCategory =
  | 'Sofas'
  | 'Tables'
  | 'Chairs'
  | 'Beds'
  | 'Storage'
  | 'Lighting'
  | 'Office'
  | 'Outdoor'
  | 'Decor';
