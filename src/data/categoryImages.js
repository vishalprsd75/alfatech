import comrackImg from '../assets/images/comrack.jpg';
import cctvImg from '../assets/images/cctv.jpg';
import cablingImg from '../assets/images/cabling.jpg';
import fiberImg from '../assets/images/fiber.jpg';
import antecImg from '../assets/images/antec.jpg';
import switchesImg from '../assets/images/switches.jpg';

export const categoryImages = {
  comrack: comrackImg,
  cctv: cctvImg,
  'structured-cabling': cablingImg,
  'fiber-optics': fiberImg,
  antec: antecImg,
  'networking-switches': switchesImg,
};

export const getCategoryImage = (categorySlug) => categoryImages[categorySlug] || null;
