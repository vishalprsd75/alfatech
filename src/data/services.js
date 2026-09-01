import { getCategoryImage } from './categoryImages';

/**
 * Service catalog.
 * Services represent professional services and solution offerings from the original site.
 * URL structure: /products/:categorySlug/:serviceSlug
 */

export const services = [
  {
    id: 'cctv-surveillance-services',
    name: 'CCTV Security Surveillance Services',
    slug: 'cctv-surveillance-services',
    categorySlug: 'cctv',
    type: 'service',
    description:
      'A CCTV camera system makes use of video cameras, also called surveillance cameras to keep track of the interior and exterior of a property, transmit the signal to a monitor or set of monitors, and give real-time 24/7 viewing access.',
    paragraphs: [
      'A CCTV camera system makes use of video cameras, also called surveillance cameras to keep track of the interior and exterior of a property, transmit the signal to a monitor or set of monitors, and give real-time 24/7 viewing access.',
      'CCTV is designed to help prevent and detect crime. It can reassure the public about community safety. It is located in public places to: provide evidence to relevant enforcement agencies.',
    ],
    image: getCategoryImage('cctv'),
    features: [
      'Comprehensive site survey & blind-spot assessment',
      'Custom IP/Analog camera system layout',
      'DVR/NVR installation, cabling & storage setup',
      'Mobile remote monitoring & alerts configuration',
      'Preventive maintenance and technical support',
    ],
  },
  {
    id: 'display-signage',
    name: 'Display Signage Solutions (Indoor / Outdoor)',
    slug: 'display-signage',
    categorySlug: 'cctv',
    type: 'service',
    description:
      'Digital displays are a type of flat panel screen that uses different technologies to present multimedia content. The most common types of digital displays are LCD screens and LED screens.',
    paragraphs: [
      'Digital displays are a type of flat panel screen that uses different technologies to present multimedia content. The most common types of digital displays are LCD screens and LED screens. Digital information displays cannot do much without a media player and software.',
      'Digital signage displays offer several benefits, including capturing attention, communicating information effectively, and providing real-time updates. They are also cost-effective, customisable, and environmentally friendly.',
    ],
    image: getCategoryImage('cctv'),
    features: [
      'Indoor & outdoor digital LED/LCD display setup',
      'Commercial video wall configuration',
      'Media player & digital signage software integration',
      'Real-time content scheduling & remote management',
      'Mounting hardware & enclosure installation',
    ],
  },
  {
    id: 'laptop-computer-services',
    name: 'Laptop / Computer Services (All Brands)',
    slug: 'laptop-computer-services',
    categorySlug: 'cctv',
    type: 'service',
    description:
      'Improving your laptop\'s hardware can be an affordable way to give it a power boost. Upgrading a laptop can improve its performance without breaking the bank.',
    paragraphs: [
      'Improving your laptop\'s hardware can be an affordable way to give it a power boost. Upgrading a laptop can improve its performance without breaking the bank. A few hundred dollars in hardware can give your Mac or PC a boost in power, buying you more time until you need to fork out for a brand new model.',
      'Some common upgrades made on laptops include replacing existing hard drives with higher capacity ones, adding solid state drive (SSD) storage, increasing memory capacities using RAM chips and improving wireless connectivity using advanced Wi-Fi adapters etc.',
      'The easiest way to upgrade your computer is upgrading the memory and storage drives. Other updates are a little more complicated and have more dependencies. However, it is generally possible to update the processor (CPU), video cards, fans, and even the motherboard of your computer.',
    ],
    image: getCategoryImage('cctv'),
    features: [
      'Hardware troubleshooting and component replacement',
      'RAM memory expansion & SSD storage upgrade',
      'Operating system installation & software optimization',
      'Malware cleanup & data security hardening',
      'On-site technical support for office fleets',
    ],
  },
  {
    id: 'audio-conference-solutions',
    name: 'Audio & Conference Room Solutions',
    slug: 'audio-conference-solutions',
    categorySlug: 'cctv',
    type: 'service',
    description:
      'Professional acoustics planning, microphone array integration, display wall mounting, and digital audio processor tuning for corporate boardroom setups.',
    paragraphs: [
      'Professional acoustics planning, microphone array integration, display wall mounting, and digital audio processor tuning for corporate boardroom setups.',
    ],
    image: getCategoryImage('cctv'),
    features: [
      'Boardroom acoustic assessment & system design',
      'Ceiling and table microphone array installation',
      'Commercial display & video bar integration',
      'Audio DSP tuning for echo cancellation and clarity',
      'User training & ongoing meeting room support',
    ],
  },
  {
    id: 'data-lan-services',
    name: 'Data & LAN Services',
    slug: 'data-lan-services',
    categorySlug: 'cctv',
    type: 'service',
    description:
      'A LAN comprises cables, access points, switches, routers, and other components that enable devices to connect to internal servers, web servers, and other LANs via wide area networks.',
    paragraphs: [
      'A LAN comprises cables, access points, switches, routers, and other components that enable devices to connect to internal servers, web servers, and other LANs via wide area networks.',
      'For example, in an office with multiple departments, such as accounting, IT support, and administration, each department\'s computers could be logically connected to the same switch but segmented to behave as if they are separate.',
    ],
    image: getCategoryImage('structured-cabling'),
    features: [
      'LAN topology design and rack space planning',
      'Structured cable dressing and port labeling',
      'VLAN segmentation and switch configuration',
      'Cable testing, fluke certification & auditing',
      'Network troubleshooting and speed optimization',
    ],
  },
  {
    id: 'wifi-wireless-solutions',
    name: 'Wifi Wireless Solutions',
    slug: 'wifi-wireless-solutions',
    categorySlug: 'cctv',
    type: 'service',
    description:
      'Enterprise wireless site survey, access point heat-mapping, seamless roaming setup, and guest network isolation for offices and facilities.',
    paragraphs: [
      'A reliable and high-performance wireless network is essential for modern businesses and homes. We specialize in providing comprehensive Wi-Fi wireless solutions.',
    ],
    image: getCategoryImage('switches'),
    features: [
      'RF site survey and wireless heat-mapping',
      'PoE Access Point mounting and cable drop',
      'SSID creation, WPA3 security & guest portal',
      'Seamless roaming and channel optimization',
      'Bandwidth management and network auditing',
    ],
  },
  {
    id: 'access-control-biometric',
    name: 'Access Control & Bio Metric Solutions',
    slug: 'access-control-biometric',
    categorySlug: 'cctv',
    type: 'service',
    description:
      'Biometric authentication involves using some part of your physical makeup to authenticate you. This could be a fingerprint, an iris scan, a retina scan, or some other physical characteristic.',
    paragraphs: [
      'Biometric authentication involves using some part of your physical makeup to authenticate you. This could be a fingerprint, an iris scan, a retina scan, or some other physical characteristic.',
      'Unlike regular access control systems that use access cards and/or codes, a biometric access control system uses a person\'s physical traits such as their fingerprints, face, palm veins and iris. These traits cannot be copied, thus improving the accuracy of identification and authentication.',
    ],
    image: getCategoryImage('cctv'),
    features: [
      'Facility security access planning',
      'Biometric terminal & RFID reader installation',
      'Electromagnetic lock & door sensor wiring',
      'Time-attendance software setup and user enrollment',
      'Integration with security alarm controllers',
    ],
  },
];

/* ───── Helper functions ───── */

export const getServiceBySlug = (categorySlug, itemSlug) =>
  services.find((s) => s.categorySlug === categorySlug && s.slug === itemSlug);

export const getServicesByCategory = (categorySlug) =>
  services.filter((s) => s.categorySlug === categorySlug);

export const getServiceById = (id) => services.find((s) => s.id === id);
