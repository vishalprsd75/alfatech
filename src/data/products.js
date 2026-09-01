import { getCategoryImage } from './categoryImages';

/**
 * Product catalog.
 * Each product has a unique `id`, a `slug` (used in URLs, unique within its category),
 * and a `categorySlug` linking it to a category in categories.js.
 *
 * `image` dynamically references category asset or null fallback.
 * `specifications` is kept empty for items without confirmed specs.
 */

export const products = [
  /* ────────────────────────────
     COMRACK 19" CABINET
     ──────────────────────────── */
  {
    id: 'wall-mount',
    name: 'Wall Mount',
    slug: 'wall-mount',
    categorySlug: 'comrack',
    type: 'product',
    description:
      'Space-efficient wall-mounted 19-inch rack enclosures designed for secure deployment of switches, patch panels, and small server components in offices and compact IT closets.',
    image: getCategoryImage('comrack'),
    specifications: [],
    relatedProducts: ['floor-standing', 'accessories'],
  },
  {
    id: 'floor-standing',
    name: 'Floor Standing',
    slug: 'floor-standing',
    categorySlug: 'comrack',
    type: 'product',
    description:
      'Heavy-duty floor standing 19-inch server racks engineered for full-size server setups, storage arrays, and high-density networking in data centers.',
    image: getCategoryImage('comrack'),
    specifications: [],
    relatedProducts: ['wall-mount', 'accessories'],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    categorySlug: 'comrack',
    type: 'product',
    description:
      'Essential rack accessories including vented shelves, blanking panels, cable management rings, and rack mounting hardware for 19-inch cabinets.',
    image: getCategoryImage('comrack'),
    specifications: [],
    relatedProducts: ['wall-mount', 'floor-standing'],
  },

  /* ────────────────────────────
     CCTV, LAPTOP & OTHERS (products)
     ──────────────────────────── */
  {
    id: 'cameras',
    name: 'Cameras - Analog and IP',
    slug: 'cameras',
    categorySlug: 'cctv',
    type: 'product',
    description:
      'High-definition analog and IP security cameras equipped with night vision, weatherproofing, and smart motion detection for commercial surveillance.',
    image: getCategoryImage('cctv'),
    specifications: [],
    relatedProducts: ['dvr-nvr', 'bnc-connectors', 'power-supply'],
  },
  {
    id: 'dvr-nvr',
    name: 'DVR / NVR 4-32 Channels',
    slug: 'dvr-nvr',
    categorySlug: 'cctv',
    type: 'product',
    description:
      'Standalone 4 to 32 channel Digital Video Recorders and Network Video Recorders supporting continuous multi-channel recording and remote access.',
    image: getCategoryImage('cctv'),
    specifications: [],
    relatedProducts: ['cameras', 'bnc-connectors', 'power-supply'],
  },
  {
    id: 'bnc-connectors',
    name: 'BNC Connectors',
    slug: 'bnc-connectors',
    categorySlug: 'cctv',
    type: 'product',
    description:
      'Precision BNC male and female coaxial connectors ensuring low-loss video signal transmission for CCTV camera installations.',
    image: getCategoryImage('cctv'),
    specifications: [],
    relatedProducts: ['cameras', 'balun-adaptors'],
  },
  {
    id: 'balun-adaptors',
    name: 'Balun Adaptors',
    slug: 'balun-adaptors',
    categorySlug: 'cctv',
    type: 'product',
    description:
      'Passive and active video balun adaptors enabling CCTV video transmission over twisted-pair UTP cable over extended distances.',
    image: getCategoryImage('cctv'),
    specifications: [],
    relatedProducts: ['bnc-connectors', 'cameras'],
  },
  {
    id: 'power-supply',
    name: 'Power Supply : 1 - 20 AMP',
    slug: 'power-supply',
    categorySlug: 'cctv',
    type: 'product',
    description:
      'Regulated multi-channel CCTV power supply boxes ranging from 1 to 20 AMP with surge protection and fuse isolation for camera arrays.',
    image: getCategoryImage('cctv'),
    specifications: [],
    relatedProducts: ['cameras', 'dvr-nvr'],
  },

  /* ────────────────────────────
     CAT6, CAT5e & STRUCTURED CABLING
     ──────────────────────────── */
  {
    id: 'cable-305m',
    name: 'Cable - 305 Meters',
    slug: 'cable',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      'Solid copper CAT6 and CAT5e network cable supplied in easy-pull 305-meter (1000ft) boxes for gigabit local area network installations.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['patch-cords-sc', 'rj45-connectors', 'patch-panels'],
  },
  {
    id: 'patch-cords-sc',
    name: 'Patch Cords',
    slug: 'patch-cords',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      'Factory-molded CAT6 ethernet patch leads in standard lengths for connecting workstations to wall outlets and patch panel ports.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['cable-305m', 'rj45-connectors'],
  },
  {
    id: 'information-outlets',
    name: 'Information Outlets',
    slug: 'information-outlets',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      'Toolless and punch-down CAT6 keystone information outlets for reliable high-speed data termination in modular faceplates.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['face-plates', 'back-box'],
  },
  {
    id: 'face-plates',
    name: 'Face Plates',
    slug: 'face-plates',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      'Single, double, and quad-gang flush mount faceplates for neat wall socket finishing in structured network deployments.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['information-outlets', 'back-box'],
  },
  {
    id: 'patch-panels',
    name: 'Patch Panels - 24 Port',
    slug: 'patch-panels',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      '1U 19-inch 24-port CAT6 patch panels with numerical port identification and rear cable management bars for organized rack termination.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['cable-305m', 'rj45-connectors'],
  },
  {
    id: 'rj45-connectors',
    name: 'RJ 45 Connectors',
    slug: 'rj45-connectors',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      'Gold-plated 8P8C RJ45 modular pass-through plugs designed for stranded and solid CAT6/CAT5e ethernet cable termination.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['cable-305m', 'patch-cords-sc'],
  },
  {
    id: 'back-box',
    name: 'Back Box',
    slug: 'back-box',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      'Surface mount PVC back boxes engineered to house faceplates and keystone jacks securely on solid wall installations.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['face-plates', 'information-outlets'],
  },
  {
    id: 'mdf-box-modules',
    name: 'MDF Box & Modules - Indoor / Outdoor',
    slug: 'mdf-box-modules',
    categorySlug: 'structured-cabling',
    type: 'product',
    description:
      'Weatherproof Main Distribution Frame enclosures and disconnect modules for telecommunication entry points and campus wiring.',
    image: getCategoryImage('structured-cabling'),
    specifications: [],
    relatedProducts: ['patch-panels', 'cable-305m'],
  },

  /* ────────────────────────────
     FIBER OPTICS
     ──────────────────────────── */
  {
    id: 'fiber-cable',
    name: 'Cable - Indoor & Outdoor',
    slug: 'cable',
    categorySlug: 'fiber-optics',
    type: 'product',
    description:
      'Armored outdoor loose-tube and tight-buffered indoor single-mode/multi-mode fiber optic cables for high-bandwidth backbone links.',
    image: getCategoryImage('fiber-optics'),
    specifications: [],
    relatedProducts: ['fiber-connectors', 'fibre-enclosure'],
  },
  {
    id: 'fiber-connectors',
    name: 'Connectors',
    slug: 'connectors',
    categorySlug: 'fiber-optics',
    type: 'product',
    description:
      'Precision optical fiber connectors including SC, LC, ST, and FC types with ceramic ferrules for minimal insertion loss.',
    image: getCategoryImage('fiber-optics'),
    specifications: [],
    relatedProducts: ['fiber-adaptors', 'fiber-cable'],
  },
  {
    id: 'fiber-adaptors',
    name: 'Adaptors',
    slug: 'adaptors',
    categorySlug: 'fiber-optics',
    type: 'product',
    description:
      'Simplex and duplex fiber optic couplers and mating adaptors for patch panels, LIUs, and optical distribution frames.',
    image: getCategoryImage('fiber-optics'),
    specifications: [],
    relatedProducts: ['fiber-connectors', 'fiber-patch-cords'],
  },
  {
    id: 'fiber-patch-cords',
    name: 'Patch Cords - Cable Assemblies',
    slug: 'patch-cords',
    categorySlug: 'fiber-optics',
    type: 'product',
    description:
      'Factory tested OS2 singlemode and OM3/OM4 multimode fiber patch cords with UPC/APC optical polishes.',
    image: getCategoryImage('fiber-optics'),
    specifications: [],
    relatedProducts: ['fiber-connectors', 'fiber-adaptors'],
  },
  {
    id: 'liu',
    name: 'LIU - Wall / Rack',
    slug: 'liu',
    categorySlug: 'fiber-optics',
    type: 'product',
    description:
      'Rack-mountable and wall-mountable Lightguide Interconnect Units complete with splice trays and connector adapter plates.',
    image: getCategoryImage('fiber-optics'),
    specifications: [],
    relatedProducts: ['fibre-enclosure', 'fiber-cable'],
  },
  {
    id: 'media-convertors',
    name: 'Media Convertors / Extenders / SFP Modules',
    slug: 'media-convertors',
    categorySlug: 'fiber-optics',
    type: 'product',
    description:
      'Gigabit Ethernet-to-Fiber media converters and hot-swappable SFP transceiver modules for long-distance link extension.',
    image: getCategoryImage('fiber-optics'),
    specifications: [],
    relatedProducts: ['fiber-cable', 'unmanaged-giga'],
  },
  {
    id: 'fibre-enclosure',
    name: 'Fibre Enclosure / Termination Box',
    slug: 'fibre-enclosure',
    categorySlug: 'fiber-optics',
    type: 'product',
    description:
      'Compact outdoor optical termination boxes designed for cable splicing, distribution, and drop cable management.',
    image: getCategoryImage('fiber-optics'),
    specifications: [],
    relatedProducts: ['liu', 'fiber-cable'],
  },

  /* ────────────────────────────
     ANTEC
     ──────────────────────────── */
  {
    id: 'gaming-cabinets',
    name: 'Gaming Cabinets',
    slug: 'gaming-cabinets',
    categorySlug: 'antec',
    type: 'product',
    description:
      'ANTEC high-airflow PC gaming chassis engineered with tempered glass side panels, mesh front ventilation, and optimized radiator mounting support.',
    image: getCategoryImage('antec'),
    specifications: [],
    relatedProducts: [],
  },

  /* ────────────────────────────
     NETWORKING SWITCHES
     ──────────────────────────── */
  {
    id: 'unmanaged-giga',
    name: '8 / 16 / 24 Unmanaged / Giga',
    slug: 'unmanaged-giga-switches',
    categorySlug: 'networking-switches',
    type: 'product',
    description:
      'Plug-and-play 8, 16, and 24 port Gigabit unmanaged desktop/rackmount ethernet switches for silent, high-bandwidth network expansion.',
    image: getCategoryImage('networking-switches'),
    specifications: [],
    relatedProducts: [],
  },
];

/* ───── Helper functions ───── */

export const getProductBySlug = (categorySlug, itemSlug) =>
  products.find((p) => p.categorySlug === categorySlug && p.slug === itemSlug);

export const getProductsByCategory = (categorySlug) =>
  products.filter((p) => p.categorySlug === categorySlug);

export const getProductById = (id) => products.find((p) => p.id === id);
