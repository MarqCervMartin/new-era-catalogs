import { FurnitureItem } from '../types/furniture';

export const furnitureData: FurnitureItem[] = [
  {
    id: '1',
    name: 'Modern Velvet Sofa',
    category: 'Sofas',
    description: 'Luxurious velvet sofa with deep seating and brass legs. Perfect for contemporary living spaces.',
    price: 1299,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
    ],
    dimensions: { width: 220, height: 85, depth: 95, unit: 'cm' },
  },
  {
    id: '2',
    name: 'Scandinavian Dining Table',
    category: 'Tables',
    description: 'Solid oak dining table with clean lines and natural finish. Seats 6-8 people comfortably.',
    price: 899,
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    ],
    dimensions: { width: 200, height: 75, depth: 100, unit: 'cm' },
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    category: 'Chairs',
    description: 'Premium mesh office chair with lumbar support and adjustable armrests.',
    price: 449,
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&q=80',
    ],
    dimensions: { width: 65, height: 120, depth: 65, unit: 'cm' },
  },
  {
    id: '4',
    name: 'King Platform Bed',
    category: 'Beds',
    description: 'Minimalist platform bed with upholstered headboard in neutral linen fabric.',
    price: 1599,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    ],
    dimensions: { width: 193, height: 110, depth: 213, unit: 'cm' },
  },
  {
    id: '5',
    name: 'Mid-Century Sideboard',
    category: 'Storage',
    description: 'Walnut sideboard with sliding doors and adjustable shelving. Retro design meets modern functionality.',
    price: 1099,
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80',
    ],
    dimensions: { width: 180, height: 80, depth: 45, unit: 'cm' },
  },
  {
    id: '6',
    name: 'Arc Floor Lamp',
    category: 'Lighting',
    description: 'Elegant arc floor lamp with marble base and adjustable arm. Creates ambient lighting.',
    price: 349,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    ],
    dimensions: { width: 40, height: 200, depth: 40, unit: 'cm' },
  },
  {
    id: '7',
    name: 'Leather Accent Chair',
    category: 'Chairs',
    description: 'Cognac leather armchair with tufted back. Classic design that ages beautifully.',
    price: 799,
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    ],
    dimensions: { width: 80, height: 95, depth: 85, unit: 'cm' },
  },
  {
    id: '8',
    name: 'Marble Coffee Table',
    category: 'Tables',
    description: 'Round marble top coffee table with gold metal base. A statement piece for any living room.',
    price: 649,
    images: [
      'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    ],
    dimensions: { width: 90, height: 45, depth: 90, unit: 'cm' },
  },
  {
    id: '9',
    name: 'Sectional L-Shaped Sofa',
    category: 'Sofas',
    description: 'Spacious L-shaped sectional in soft gray fabric. Modular design for flexible arrangement.',
    price: 1899,
    images: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80',
    ],
    dimensions: { width: 280, height: 85, depth: 200, unit: 'cm' },
  },
  {
    id: '10',
    name: 'Industrial Bookshelf',
    category: 'Storage',
    description: 'Open bookshelf with metal frame and reclaimed wood shelves. Perfect for displaying books and decor.',
    price: 529,
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
      'https://images.unsplash.com/photo-1565181117715-92265bb5a988?w=800&q=80',
    ],
    dimensions: { width: 120, height: 200, depth: 35, unit: 'cm' },
  },
  {
    id: '11',
    name: 'Pendant Light Set',
    category: 'Lighting',
    description: 'Set of three glass pendant lights with brass fittings. Ideal for kitchen islands or dining areas.',
    price: 429,
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80',
    ],
    dimensions: { width: 25, height: 30, depth: 25, unit: 'cm' },
  },
  {
    id: '12',
    name: 'Queen Upholstered Bed',
    category: 'Beds',
    description: 'Elegant upholstered bed with button-tufted headboard in charcoal gray.',
    price: 1399,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    ],
    dimensions: { width: 163, height: 110, depth: 213, unit: 'cm' },
  },
  {
    id: '13',
    name: 'Rattan Lounge Chair',
    category: 'Chairs',
    description: 'Natural rattan lounge chair with cushion. Brings a bohemian touch to any space.',
    price: 399,
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      'https://images.unsplash.com/photo-1611967069999-5ece1d6e1a55?w=800&q=80',
    ],
    dimensions: { width: 75, height: 85, depth: 80, unit: 'cm' },
  },
  {
    id: '14',
    name: 'Console Table',
    category: 'Tables',
    description: 'Slim console table with drawer and shelf. Perfect for entryways or behind sofas.',
    price: 329,
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
      'https://images.unsplash.com/photo-1616627547584-bf28cfeea5e5?w=800&q=80',
    ],
    dimensions: { width: 120, height: 80, depth: 35, unit: 'cm' },
  },
  {
    id: '15',
    name: 'Wardrobe Armoire',
    category: 'Storage',
    description: 'Classic wardrobe with hanging rod, shelves, and drawers. Solid construction in white finish.',
    price: 899,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80',
    ],
    dimensions: { width: 120, height: 200, depth: 60, unit: 'cm' },
  },
  {
    id: '16',
    name: 'Table Lamp Pair',
    category: 'Lighting',
    description: 'Pair of ceramic table lamps with linen shades. Adds warm ambiance to bedrooms or living areas.',
    price: 189,
    images: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80',
      'https://images.unsplash.com/photo-1512558868595-19ef8c7d30cc?w=800&q=80',
    ],
    dimensions: { width: 30, height: 55, depth: 30, unit: 'cm' },
  },
  {
    id: '17',
    name: 'Executive Office Desk',
    category: 'Office',
    description: 'Spacious office desk with drawers and cable management. Perfect for home office setups.',
    price: 749,
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    ],
    dimensions: { width: 160, height: 75, depth: 80, unit: 'cm' },
  },
  {
    id: '18',
    name: 'Patio Dining Set',
    category: 'Outdoor',
    description: 'Weather-resistant outdoor dining set with table and 4 chairs. Ideal for gardens and patios.',
    price: 899,
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
    dimensions: { width: 150, height: 75, depth: 90, unit: 'cm' },
  },
  {
    id: '19',
    name: 'Decorative Wall Mirror',
    category: 'Decor',
    description: 'Large round mirror with gold frame. Adds depth and elegance to any room.',
    price: 279,
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    ],
    dimensions: { width: 80, height: 80, depth: 5, unit: 'cm' },
  },
];

export const getFurnitureById = (id: string): FurnitureItem | undefined => {
  return furnitureData.find((item) => item.id === id);
};

export const getFurnitureByCategory = (category: string): FurnitureItem[] => {
  return furnitureData.filter((item) => item.category === category);
};
