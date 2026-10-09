export interface KulikuliProduct {
  id: string;
  name: string;
  weight: string;
  priceNaira: number;
  tag: string;
  description: string;
  image: string;
  isPopular?: boolean;
  type: 'single' | 'bundle';
  packCount?: number;
}

export const KULIKULI_PRODUCTS: KulikuliProduct[] = [
  {
    id: 'size-l-150g',
    name: 'Size L Snack Pouch',
    weight: '150g',
    priceNaira: 500,
    tag: 'QUICK CRUNCH',
    description: 'Perfect personal on-the-go snack size. Wafer-thin, spicy, and satisfying.',
    image: '/src/assets/images/yadah_pack_sizes_1791573376568.jpg',
    type: 'single'
  },
  {
    id: 'size-xl-250g',
    name: 'Size XL Signature Pouch',
    weight: '250g',
    priceNaira: 1000,
    tag: 'SIGNATURE BESTSELLER',
    description: 'The iconic 250g pouch. Generously packed with golden crispy flat kulikuli crisps.',
    image: '/src/assets/images/yadah_hero_pouch_1791573345495.jpg',
    isPopular: true,
    type: 'single'
  },
  {
    id: 'size-xxl-400g',
    name: 'Size XXL Mega Pouch',
    weight: '400g',
    priceNaira: 1500,
    tag: 'SNACKER JUMBO',
    description: 'For serious kulikuli connoisseurs and household sharing. Maximum crunch value.',
    image: '/src/assets/images/yadah_pack_sizes_1791573376568.jpg',
    type: 'single'
  },
  {
    id: 'family-bundle-5x',
    name: '5x Pack Family Bundle',
    weight: '1,250g (5 × 250g)',
    priceNaira: 4750,
    tag: 'BUNDLE & SAVE ₦250',
    description: 'Five signature 250g pouches of Yadah Crunchies. Stock up for home, office, and travels.',
    image: '/src/assets/images/yadah_hero_pouch_1791573345495.jpg',
    type: 'bundle',
    packCount: 5
  },
  {
    id: 'sampler-variety-pack',
    name: 'Sampler Variety Pack',
    weight: '1,200g (2x L, 2x XL, 1x XXL)',
    priceNaira: 4250,
    tag: 'TASTING BUNDLE',
    description: 'The ultimate pantry collection: 2x 150g, 2x 250g, and 1x 400g resealable pouches.',
    image: '/src/assets/images/yadah_pack_sizes_1791573376568.jpg',
    type: 'bundle',
    packCount: 5
  }
];

export interface WholesaleTier {
  id: string;
  title: string;
  packSize: string;
  packCount: number;
  cartonPrice: number;
  unitCost: number;
  retailPrice: number;
  estimatedMargin: number;
  badge: string;
}

export const WHOLESALE_TIERS: WholesaleTier[] = [
  {
    id: 'carton-l',
    title: 'Carton of Size L',
    packSize: '150g Packs',
    packCount: 40,
    cartonPrice: 17000,
    unitCost: 425,
    retailPrice: 500,
    estimatedMargin: 3000,
    badge: 'High Turnover'
  },
  {
    id: 'carton-xl',
    title: 'Carton of Size XL',
    packSize: '250g Packs',
    packCount: 24,
    cartonPrice: 20400,
    unitCost: 850,
    retailPrice: 1000,
    estimatedMargin: 3600,
    badge: 'Most Popular'
  },
  {
    id: 'carton-xxl',
    title: 'Carton of Size XXL',
    packSize: '400g Packs',
    packCount: 16,
    cartonPrice: 20000,
    unitCost: 1250,
    retailPrice: 1500,
    estimatedMargin: 4000,
    badge: 'Maximum Profit'
  }
];

export interface Review {
  id: string;
  author: string;
  location: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Amina Bello',
    location: 'Abuja, FCT',
    quote:
      'The flat shape is a total game changer! Traditional kulikuli is usually too hard and hurts your teeth, but Yadah Crunchies is crisp like potato chips and packed with rich peanut spice.',
    rating: 5,
    verified: true
  },
  {
    id: '2',
    author: 'Chinedu Eze',
    location: 'Lekki Phase 1, Lagos',
    quote:
      'Paired with ice-cold soaked Ijebu garri, groundnuts, and peak milk on a Sunday afternoon... pure heaven! Ordered 3 cartons to Lagos and waybill arrived in under 48 hours.',
    rating: 5,
    verified: true
  },
  {
    id: '3',
    author: 'Halima Idris',
    location: 'Zone 8, Lokoja',
    quote:
      'Zero stones, zero sand grit! Clean, hygienic, and perfectly spiced. Everyone in my office in Lokoja now keeps a pouch of the 250g on their desk.',
    rating: 5,
    verified: true
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How is flat kulikuli different from traditional hard kulikuli?',
    answer:
      'Traditional kulikuli is hand-rolled into dense balls or sticks that are often tooth-shatteringly hard. Yadah Crunchies uses precision wafer-thin hydraulic pressing before gentle deep roasting. This creates airy, wafer-thin crisps that shatter delicately with every bite while retaining the deep savory peanut flavor.'
  },
  {
    question: 'Do you deliver across all 36 Nigerian states?',
    answer:
      'Yes! We dispatch daily from our Lokoja production facility via interstate motor park waybills (such as Peace Mass Transit, God Is Good Logistics, ABC Transport) and courier doorstep services directly to Lagos, Abuja, Port Harcourt, Ibadan, Kano, and beyond.'
  },
  {
    question: 'How long does a sealed pouch stay fresh and crunchy?',
    answer:
      'Each pouch comes equipped with a heat-sealed airtight zip-lock barrier. Kept in a cool, dry place away from direct sunlight, Yadah Crunchies maintains full peak crispness for up to 6 months.'
  },
  {
    question: 'What is the classic garri pairing recommendation?',
    answer:
      'Pour crisp white or yellow cassava garri into a chilled ceramic bowl, add ice-cold spring water, evaporated milk, and a handful of Yadah Crunchies flat crisps. The savory chili spice of the kulikuli cuts through the tangy creaminess of the milk for Nigeria’s greatest comfort food.'
  },
  {
    question: 'How can I become a wholesale distributor or supermarket stockist?',
    answer:
      'You can order standard wholesale cartons directly on our website or contact our WhatsApp wholesale desk at +234 816 209 5850. We provide promotional posters, branded display cartons, and tiered wholesale pricing.'
  }
];
