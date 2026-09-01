/**
 * Product/Service category definitions.
 * The sidebar and navigation consume this data.
 * Each child's `slug` is used in routing: /products/:categorySlug/:itemSlug
 */

export const categories = [
  {
    id: 'comrack',
    name: 'COMRACK 19" CABINET',
    slug: 'comrack',
    description:
      'Professional 19-inch server cabinets and rack enclosures for IT infrastructure.',
    children: [
      { id: 'wall-mount', name: 'Wall Mount', slug: 'wall-mount' },
      { id: 'floor-standing', name: 'Floor Standing', slug: 'floor-standing' },
      { id: 'accessories', name: 'Accessories', slug: 'accessories' },
    ],
  },
  {
    id: 'cctv',
    name: 'CCTV, LAPTOP & OTHERS',
    slug: 'cctv',
    description:
      'Surveillance systems, computing equipment, and related IT solutions and services.',
    children: [
      { id: 'cameras', name: 'Cameras - Analog and IP', slug: 'cameras' },
      { id: 'dvr-nvr', name: 'DVR / NVR 4-32 Channels', slug: 'dvr-nvr' },
      { id: 'bnc-connectors', name: 'BNC Connectors', slug: 'bnc-connectors' },
      { id: 'balun-adaptors', name: 'Balun Adaptors', slug: 'balun-adaptors' },
      { id: 'power-supply', name: 'Power Supply : 1 - 20 AMP', slug: 'power-supply' },
      { id: 'cctv-surveillance-services', name: 'CCTV Security Surveillance Services', slug: 'cctv-surveillance-services' },
      { id: 'display-signage', name: 'Display Signage Solutions', slug: 'display-signage' },
      { id: 'laptop-computer-services', name: 'Laptop/Computer Services', slug: 'laptop-computer-services' },
      { id: 'audio-conference-solutions', name: 'Audio & Conference Room Solutions', slug: 'audio-conference-solutions' },
      { id: 'data-lan-services', name: 'Data & LAN Services', slug: 'data-lan-services' },
      { id: 'wifi-wireless-solutions', name: 'Wifi Wireless Solutions', slug: 'wifi-wireless-solutions' },
      { id: 'access-control-biometric', name: 'Access Control / Biometric Solutions', slug: 'access-control-biometric' },
    ],
  },
  {
    id: 'structured-cabling',
    name: 'CAT6, CAT5e & FIBER OPTICS / STRUCTURED CABLING SOLUTIONS',
    slug: 'structured-cabling',
    description:
      'Complete structured cabling solutions including cables, connectors, and distribution frames.',
    children: [
      { id: 'cable-305m', name: 'Cable - 305 Meters', slug: 'cable' },
      { id: 'patch-cords-sc', name: 'Patch Cords', slug: 'patch-cords' },
      { id: 'information-outlets', name: 'Information Outlets', slug: 'information-outlets' },
      { id: 'face-plates', name: 'Face Plates', slug: 'face-plates' },
      { id: 'patch-panels', name: 'Patch Panels - 24 Port', slug: 'patch-panels' },
      { id: 'rj45-connectors', name: 'RJ 45 Connectors', slug: 'rj45-connectors' },
      { id: 'back-box', name: 'Back Box', slug: 'back-box' },
      { id: 'mdf-box-modules', name: 'MDF Box & Modules - Indoor / Outdoor', slug: 'mdf-box-modules' },
    ],
  },
  {
    id: 'fiber-optics',
    name: 'FIBER OPTICS',
    slug: 'fiber-optics',
    description:
      'Fiber optic cables, connectors, patch cords, and termination equipment.',
    children: [
      { id: 'fiber-cable', name: 'Cable - Indoor & Outdoor', slug: 'cable' },
      { id: 'fiber-connectors', name: 'Connectors', slug: 'connectors' },
      { id: 'fiber-adaptors', name: 'Adaptors', slug: 'adaptors' },
      { id: 'fiber-patch-cords', name: 'Patch Cords - Cable Assemblies', slug: 'patch-cords' },
      { id: 'liu', name: 'LIU - Wall / Rack', slug: 'liu' },
      { id: 'media-convertors', name: 'Media Convertors / Extenders / SFP Modules', slug: 'media-convertors' },
      { id: 'fibre-enclosure', name: 'Fibre Enclosure / Termination Box', slug: 'fibre-enclosure' },
    ],
  },
  {
    id: 'antec',
    name: 'ANTEC',
    slug: 'antec',
    description: 'ANTEC gaming cabinets and computer chassis solutions.',
    children: [
      { id: 'gaming-cabinets', name: 'Gaming Cabinets', slug: 'gaming-cabinets' },
    ],
  },
  {
    id: 'networking-switches',
    name: 'NETWORKING SWITCHES',
    slug: 'networking-switches',
    description:
      'Unmanaged and gigabit networking switches for enterprise and home networking.',
    children: [
      { id: 'unmanaged-giga', name: '8 / 16 / 24 Unmanaged / Giga', slug: 'unmanaged-giga-switches' },
    ],
  },
];

/* ───── Helper functions ───── */

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);

export const getChildBySlug = (categorySlug, childSlug) => {
  const category = getCategoryBySlug(categorySlug);
  return category?.children.find((child) => child.slug === childSlug);
};
