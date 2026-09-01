import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Monitor,
  Cable,
  Network,
  Shield,
  Gamepad2,
  Send,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
} from 'lucide-react';
import Layout from '../components/Layout';
import { categories } from '../data/categories';
import comrackImg from '../assets/images/comrack.jpg';
import fiberImg from '../assets/images/fiber.jpg';
import './Home.css';

const categoryIcons = {
  comrack: <Server size={32} />,
  cctv: <Monitor size={32} />,
  'structured-cabling': <Cable size={32} />,
  'fiber-optics': <Shield size={32} />,
  antec: <Gamepad2 size={32} />,
  'networking-switches': <Network size={32} />,
};

const services = [
  'Computer & Networking Products',
  'CCTV Security Systems (HD Cameras & DVR/NVR)',
  'Wi-Fi Wireless Network Design & Deployment',
  'Biometric & RFID Access Control Systems',
  'EPABX Telecom & Voice Communication Systems',
  'LAN Networking & Fiber Optic Connectivity',
];

const bannerSlides = [
  {
    id: 'comrack-slide',
    badge: 'Authorised Eastern Distributor',
    title: 'COMRACK 19" NETWORKING CABINETS',
    subtitle: 'Wall Mount (4U-15U) & Floor Standing (18U-47U) Server Cabinets with all accessories. Constant availability for length and width requirements across East & North East.',
    image: comrackImg,
    link: '/products/comrack',
    linkText: 'Explore comRACK Racks',
    tags: ['Wall Mount', 'Floor Standing', 'Rack Accessories'],
  },
  {
    id: 'palcom-slide',
    badge: 'Business Partner: PALCOM® Network Connectivity',
    title: 'STRUCTURED CABLING & FIBER OPTIC SOLUTIONS',
    subtitle: 'High-performance Connectors, Patch Cords & Pigtails, Adaptors, LIUs, and Media Converters designed for enterprise networking and data backbones.',
    image: fiberImg,
    link: '/products/structured-cabling',
    linkText: 'Explore Cabling & Fiber',
    tags: ['Connectors', 'Patch Cords & Pigtails', 'Adaptors'],
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide timer (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg-shapes" aria-hidden="true">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>

        <div className="hero__content container">
          <span className="hero__badge">Eastern Distributor for comRACK &amp; Antec</span>
          <h1 className="hero__title">
            AlfaTech
            <span className="hero__title-accent"> — Networking &amp; IT Infrastructure</span>
          </h1>
          <p className="hero__subtitle">
            Eastern Distributor for <strong>comRACK 19&quot; NETWORKING RACK (ISO 9002)</strong> and regional distributor for <strong>Antec Chassis &amp; SMPS</strong>, offering complete computer networking, CCTV, fiber optics, and telecom solutions.
          </p>

          <div className="hero__actions">
            <Link to="/query" className="hero__btn hero__btn--primary">
              <Send size={18} />
              Send a Query
            </Link>
            <Link to="/products/comrack" className="hero__btn hero__btn--secondary">
              Browse Catalog
              <ArrowRight size={18} />
            </Link>

            {/* Highlights Bar Positioned Inline Beside Browse Catalog */}
            <div className="hero__inline-stats">
              <div className="hero__stat">
                <strong>comRACK</strong>
                <span>ISO 9002 Racks (4U - 47U)</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <strong>ANTEC</strong>
                <span>Chassis &amp; SMPS Leader</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <strong>PALCOM&reg;</strong>
                <span>Structured Cabling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner Carousel */}
      <section className="section section--banner-carousel">
        <div className="container">
          <div className="banner-carousel">
            <div className="banner-carousel__slides">
              {bannerSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`banner-slide ${index === currentSlide ? 'banner-slide--active' : ''}`}
                >
                  <div className="banner-slide__content">
                    <span className="banner-slide__badge">
                      <ShieldCheck size={14} /> {slide.badge}
                    </span>
                    <h2 className="banner-slide__title">{slide.title}</h2>
                    <p className="banner-slide__subtitle">{slide.subtitle}</p>

                    <div className="banner-slide__tags">
                      {slide.tags.map((tag) => (
                        <span key={tag} className="banner-slide__tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link to={slide.link} className="banner-slide__btn">
                      {slide.linkText}
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="banner-slide__image-wrapper">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="banner-slide__image"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              type="button"
              className="banner-carousel__arrow banner-carousel__arrow--prev"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="banner-carousel__arrow banner-carousel__arrow--next"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="banner-carousel__dots">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`banner-carousel__dot ${index === currentSlide ? 'banner-carousel__dot--active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Highlight Section */}
      <section className="section section--distributor">
        <div className="container">
          <div className="distributor-grid">
            {/* comRACK Card */}
            <div className="distributor-card">
              <div className="distributor-card__badge">Authorized Eastern Distributor</div>
              <h3 className="distributor-card__title">comRACK 19&quot; NETWORKING RACK (ISO 9002)</h3>

              <div className="distributor-card__content-body">
                <p>
                  AlfaTech is the Eastern Distributor for <strong>comRACK 19&quot; NETWORKING RACK (ISO 9002)</strong>. There are different sizes of wall mount (4U-15U) and floor mount (18U-47U) with all accessories.
                </p>
                <p>
                  One of the biggest advantages to our clients is that there is always availability of racks according to their requirements, which may differ in width and length. We have an extensive network of resellers and dealers across East and North East India.
                </p>

                <ul className="distributor-card__bullets">
                  <li><Check size={14} /> Wall Mount Cabinets (4U - 15U)</li>
                  <li><Check size={14} /> Floor Standing Server Racks (18U - 47U)</li>
                  <li><Check size={14} /> Complete Cable Trays &amp; Rack Accessories</li>
                </ul>
              </div>

              <Link to="/products/comrack" className="distributor-card__link">
                View comRACK Racks <ArrowRight size={14} />
              </Link>
            </div>

            {/* Antec Card */}
            <div className="distributor-card">
              <div className="distributor-card__badge">Regional Distribution Partner</div>
              <h3 className="distributor-card__title">Antec Chassis &amp; SMPS Solutions</h3>

              <div className="distributor-card__content-body">
                <p>
                  Antec, the leading manufacturer of Chassis and SMPS worldwide, has been awarded many times worldwide for its quality and is recommended and tested by INTEL and AMD, distributed by AlfaTech in the region.
                </p>
                <p>
                  Antec features a whole new series of chassis comprising Lifestyle &amp; Gaming series, Thermally Advanced Server series, and Solution series to cater to almost every consumer segment, enjoying a strong customer base among gamers and digital editing labs.
                </p>

                <ul className="distributor-card__bullets">
                  <li><Check size={14} /> Recommended &amp; Tested by INTEL and AMD</li>
                  <li><Check size={14} /> Lifestyle, Gaming &amp; Solution Series</li>
                  <li><Check size={14} /> Thermally Advanced Server Chassis</li>
                </ul>
              </div>

              <Link to="/products/antec" className="distributor-card__link">
                View Antec Chassis <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section section--categories" id="products">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Complete Catalog</span>
            <h2 className="section__title">Explore Product Categories</h2>
            <p className="section__description">
              Browse our comprehensive range of server cabinets, cabling, surveillance,
              and networking hardware.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.slug}`}
                className="category-card"
              >
                <div className="category-card__icon">
                  {categoryIcons[cat.slug] || <Server size={32} />}
                </div>
                <h3 className="category-card__title">{cat.name}</h3>
                <p className="category-card__description">{cat.description}</p>
                <span className="category-card__count-badge">
                  {cat.children.length} {cat.children.length === 1 ? 'Item' : 'Sub-items'}
                </span>
                <span className="category-card__link">
                  View Category <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--services">
        <div className="container">
          <div className="services__wrapper">
            <div className="services__info">
              <span className="section__label">Our Expertise</span>
              <h2 className="section__title">Core Technology Domains</h2>
              <p className="section__description">
                From structured cabling and LAN setup to CCTV surveillance, Wi-Fi deployment, and access control, AlfaTech delivers turnkey technology solutions.
              </p>
              <Link to="/contact" className="services__cta">
                Discuss Your Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <ul className="services__list">
              {services.map((service) => (
                <li key={service} className="services__item">
                  <CheckCircle2 size={20} className="services__check" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Query CTA */}
      <section className="section section--cta">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__content">
              <h2 className="cta-banner__title">Let&apos;s Build a Secure &amp; Connected Future Together</h2>
              <p className="cta-banner__description">
                Reach out to us today for product inquiries, project consultations, or technical support.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/query" className="cta-banner__btn cta-banner__btn--primary">
                <Send size={18} />
                Send a Query
              </Link>
              <Link to="/contact" className="cta-banner__btn cta-banner__btn--secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
