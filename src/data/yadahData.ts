export interface ProductSize {
  id: string;
  sizeName: string;
  weight: string;
  priceNgn: number;
  image: string;
  description: string;
  idealFor: string;
  badge?: string;
}

export interface WholesaleTier {
  id: string;
  name: string;
  unitsPerCarton: number;
  packSize: string;
  cartonPriceNgn: number;
  unitEquivalentNgn: number;
  retailProfitMargin: string;
  recommendedFor: string;
}

export const YADAH_BRAND = {
  brandName: "Yadah’s Crunchies",
  productName: "Premium Crunchy Kulikuli (Spicy Peanut Snack)",
  shortName: "Peppered Flat Kulikuli",
  tagline: "Crunchy. Spicy. Irresistible.",
  frontHighlights: ["Fresh Crunchy Spicy", "100% Natural", "Rich in Protein", "Bold & Spicy", "Crunch You Can’t Resist"],
  manufacturer: "Produced by Yadah’s Crunchies",
  physicalAddress: "Off Hassan Katsina Road, Zone 8, Lokoja, Kogi State, Nigeria",
  phone: "+234 (0) 816 209 5850",
  whatsappNumber: "+2348162095850",
  socialMedia: "@YadahCrunchies",
  storageInstructions: "Store in a cool, dry place. Keep sealed after opening to maintain crunchiness.",
  allergenAdvice: "Contains Peanuts. Made in a facility that handles nuts.",
  ingredients: ["Selected Groundnuts (Peanuts)", "Chili Pepper", "Spices", "Salt", "Vegetable Oil (for frying)"]
};

export const PRODUCT_SIZES: ProductSize[] = [
  {
    id: "size-l",
    sizeName: "Size L",
    weight: "150g",
    priceNgn: 500,
    image: "/src/assets/images/yadah_three_sizes_lineup_1791568558953.jpg",
    description: "The perfect personal on-the-go pocket snack. Crispy, peppered, and ready for work, commutes, or quick study fuel.",
    idealFor: "Office desk snack, school bags, car rides",
    badge: "Popular Quick Grab"
  },
  {
    id: "size-xl",
    sizeName: "Size XL",
    weight: "250g",
    priceNgn: 1000,
    image: "/src/assets/images/yadah_signature_pouch_front_back_1791568597763.jpg",
    description: "Our signature flagship size. Generously packed with authentic flat kulikuli crisps, seasoned to a rich spicy crunch.",
    idealFor: "Movie nights, soaked garri companion, weekend sharing",
    badge: "Best Seller"
  },
  {
    id: "size-xxl",
    sizeName: "Size XXL",
    weight: "400g",
    priceNgn: 1500,
    image: "/src/assets/images/yadah_hero_banner_1791568533893.jpg",
    description: "Maximum crunch for true kulikuli lovers and family households. Resealable zip-lock ensures prolonged freshness.",
    idealFor: "Family gatherings, parties, hospitality trays",
    badge: "Best Value"
  }
];

export const KEY_ATTRIBUTES = [
  {
    icon: "Sprout",
    title: "100% Natural",
    marketingText: "No artificial additives, preservatives, or colorings.",
    benefit: "Pure, real goodness in every bite."
  },
  {
    icon: "Dumbbell",
    title: "Rich in Protein",
    marketingText: "Packed with plant-based peanut protein.",
    benefit: "A healthy snack and smart energy choice."
  },
  {
    icon: "Flame",
    title: "Bold & Spicy",
    marketingText: "Infused with a perfect blend of local spices.",
    benefit: "Peppered to perfection for an authentic Nigerian kick."
  },
  {
    icon: "Heart",
    title: "Crunch You Can Trust",
    marketingText: "Crafted using premium, carefully selected groundnuts.",
    benefit: "Delivers a dependable, satisfying crunch every single time."
  }
];

export const NUTRITION_FACTS = [
  { nutrient: "Energy", amount: "750 kcal", dailyRef: "High Energy Snack" },
  { nutrient: "Carbohydrate", amount: "10 g", dailyRef: "Natural Carbs" },
  { nutrient: "Sugar", amount: "5 g", dailyRef: "Naturally Occurring" },
  { nutrient: "Fat", amount: "3 g", dailyRef: "Healthy Peanut Oils" },
  { nutrient: "Saturates", amount: "1 g", dailyRef: "Low Saturates" },
  { nutrient: "Salt", amount: "30 mg", dailyRef: "Lightly Seasoned" },
  { nutrient: "Protein", amount: "5 g", dailyRef: "Plant-Based Protein" },
  { nutrient: "Vitamin B12", amount: "Source", dailyRef: "Supports Healthy Energy" }
];

export const WHOLESALE_TIERS: WholesaleTier[] = [
  {
    id: "carton-l",
    name: "Carton of Size L (40 Packs)",
    unitsPerCarton: 40,
    packSize: "Size L (150g)",
    cartonPriceNgn: 17000,
    unitEquivalentNgn: 425,
    retailProfitMargin: "15% - 20% Profit",
    recommendedFor: "Corner shops, kiosks, school canteens, kiosks"
  },
  {
    id: "carton-xl",
    name: "Carton of Size XL (24 Packs)",
    unitsPerCarton: 24,
    packSize: "Size XL (250g)",
    cartonPriceNgn: 20400,
    unitEquivalentNgn: 850,
    retailProfitMargin: "15% - 22% Profit",
    recommendedFor: "Supermarkets, mini-marts, fuel station marts"
  },
  {
    id: "carton-xxl",
    name: "Carton of Size XXL (16 Packs)",
    unitsPerCarton: 16,
    packSize: "Size XXL (400g)",
    cartonPriceNgn: 20000,
    unitEquivalentNgn: 1250,
    retailProfitMargin: "16% - 24% Profit",
    recommendedFor: "Gift shops, events, hamper vendors, major grocers"
  }
];

export const FAQS = [
  {
    q: "Where is Yadah's Crunchies produced?",
    a: "We are proudly produced in Lokoja, Kogi State, Nigeria (Off Hassan Katsina Road, Zone 8) using locally sourced, high-grade Nigerian groundnuts and authentic spices."
  },
  {
    q: "Do you deliver nationwide across Nigeria?",
    a: "Yes! We dispatch nationwide via reliable transport logistics and courier services to Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, and all states across Nigeria."
  },
  {
    q: "How long does Yadah's Kulikuli stay crunchy?",
    a: "Our Kulikuli has a 6-month shelf life when unopened. Because of our airtight zip-lock packaging, it retains its signature crunch as long as you reseal the pouch after enjoying."
  },
  {
    q: "Can I order for wholesale or supermarket retail?",
    a: "Absolutely! We supply supermarkets, school tuck shops, grocery stores, and corporate hampers with attractive retailer margins and carton packaging. Contact us on WhatsApp for distributor pricing."
  },
  {
    q: "How do people best enjoy Yadah's Kulikuli?",
    a: "It's fantastic as an everyday crunchy desk snack, the legendary pair with chilled soaked garri (Ijebu garri with ice water and milk!), or as a crispy topping for salads and finger foods."
  }
];
