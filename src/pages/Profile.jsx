import { Link } from 'react-router-dom';
import {
  Building2,
  Eye,
  Target,
  Monitor,
  Wifi,
  Lock,
  PhoneCall,
  Network,
  Users2,
  CheckCircle2,
  Send,
  ArrowRight,
  Server,
  ShieldCheck,
  Award,
  Layers,
  Cpu,
} from 'lucide-react';
import Layout from '../components/Layout';
import './PageStyles.css';

const Profile = () => {
  return (
    <Layout>
      <div className="page">
        <div className="page__container container">
          {/* Page Header */}
          <div className="page__header">
            <span className="page__label">About Alfatech</span>
            <h1 className="page__title">Company Profile</h1>
            <p className="page__description">
              Leading distributor and turnkey solution provider for IT infrastructure, networking, and security systems.
            </p>
          </div>

          {/* Welcome Intro Section */}
          <div className="highlight-card profile-hero-card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <div className="profile-hero-card__header">
              <div className="profile-hero-card__icon">
                <Building2 size={32} />
              </div>
              <span className="profile-hero-card__tag">Regional Technology Partner</span>
            </div>
            <h2 className="highlight-card__title" style={{ fontSize: 'var(--font-size-xl)', margin: 'var(--spacing-md) 0' }}>
              Welcome to Alfatech — Empowering Your Digital World with Innovation and Excellence
            </h2>
            <p className="highlight-card__text" style={{ fontSize: 'var(--font-size-base)', lineHeight: 1.8 }}>
              In today’s fast-paced digital landscape, businesses and individuals need technology solutions that are not only reliable but also innovative and scalable. At <strong>Alfatech</strong>, we are committed to providing premium <strong>computer and networking products</strong>, as well as expert services in areas such as <strong>CCTV security, Wi-Fi wireless solutions, access control, EPABX telecom systems, LAN networking, and fiber connectivity</strong>. Our comprehensive range of products and services is designed to meet the evolving demands of the modern world—whether you’re securing your premises, improving connectivity, or building a robust IT infrastructure.
            </p>

            {/* Key Distributor Highlights Bar */}
            <div className="profile-metrics-bar">
              <div className="profile-metric">
                <ShieldCheck size={18} />
                <div>
                  <strong>comRACK Racks</strong>
                  <span>ISO 9002 Eastern Distributor</span>
                </div>
              </div>
              <div className="profile-metric-divider" />
              <div className="profile-metric">
                <Award size={18} />
                <div>
                  <strong>Antec Partner</strong>
                  <span>Chassis &amp; Gaming Series</span>
                </div>
              </div>
              <div className="profile-metric-divider" />
              <div className="profile-metric">
                <Layers size={18} />
                <div>
                  <strong>PALCOM&reg; Cabling</strong>
                  <span>Structured Network Systems</span>
                </div>
              </div>
              <div className="profile-metric-divider" />
              <div className="profile-metric">
                <Cpu size={18} />
                <div>
                  <strong>Turnkey Integration</strong>
                  <span>Planning, Setup &amp; Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="page__highlights page__highlights--2col" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div className="highlight-card">
              <div className="highlight-card__header-row">
                <Eye size={28} className="highlight-card__icon" />
                <span className="profile-card-badge">Our Outlook</span>
              </div>
              <h3 className="highlight-card__title">Our Vision</h3>
              <p className="highlight-card__text" style={{ lineHeight: 1.7 }}>
                To be the most trusted provider of technology solutions, empowering businesses and individuals with the tools and support they need to thrive in a connected world.
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-card__header-row">
                <Target size={28} className="highlight-card__icon" />
                <span className="profile-card-badge">Our Commitment</span>
              </div>
              <h3 className="highlight-card__title">Our Mission</h3>
              <p className="highlight-card__text" style={{ lineHeight: 1.7 }}>
                We are committed to providing industry-leading products and services that meet the unique needs of our customers. By offering innovative, scalable, and cost-effective solutions, we help our clients stay ahead of the curve in an ever-evolving technological landscape.
              </p>
            </div>
          </div>

          {/* Our Core Services and Solutions */}
          <div className="profile-capabilities" style={{ marginTop: 0 }}>
            <div className="profile-capabilities__header">
              <span className="page__label">Technology Portfolio</span>
              <h2>Our Core Services and Solutions</h2>
              <p>
                At Alfatech, we offer an extensive range of high-quality products and services across several key technology domains designed to enhance how you work, communicate, and secure your premises.
              </p>
            </div>

            <div className="profile-domains-grid">
              {/* 1. Computer & Networking Products */}
              <div className="profile-domain-card">
                <div className="profile-domain-card__icon">
                  <Server size={24} />
                </div>
                <h3>1. Computer &amp; Networking Products</h3>
                <p>
                  Your IT infrastructure is the backbone of your business, and we understand the importance of having reliable, high-performance systems in place. Our comprehensive selection of computer and networking products includes server racks, switches, routers, and essential hardware components.
                </p>
                <Link to="/products/comrack" className="profile-domain-card__cta">
                  Browse Networking Racks &amp; Products <ArrowRight size={14} />
                </Link>
              </div>

              {/* 2. CCTV Security Systems */}
              <div className="profile-domain-card">
                <div className="profile-domain-card__icon">
                  <Monitor size={24} />
                </div>
                <h3>2. CCTV Security Systems</h3>
                <p>
                  Security is no longer optional—it&apos;s a necessity. At Alfatech, we provide state-of-the-art CCTV security systems designed to safeguard your home, office, or industrial facility:
                </p>
                <ul>
                  <li><strong>High-Definition Surveillance Cameras:</strong> Features like remote viewing, motion detection, and infrared night vision for round-the-clock clarity.</li>
                  <li><strong>Advanced DVR/NVR Systems:</strong> Equipped with secure storage options and intuitive interfaces for easy footage management.</li>
                </ul>
                <Link to="/products/cctv" className="profile-domain-card__cta">
                  Explore CCTV Systems <ArrowRight size={14} />
                </Link>
              </div>

              {/* 3. Wi-Fi Wireless Solutions */}
              <div className="profile-domain-card">
                <div className="profile-domain-card__icon">
                  <Wifi size={24} />
                </div>
                <h3>3. Wi-Fi Wireless Solutions</h3>
                <p>
                  A reliable and high-performance wireless network is essential for modern businesses and homes. We specialize in providing comprehensive Wi-Fi wireless solutions:
                </p>
                <ul>
                  <li><strong>Wi-Fi Network Design &amp; Deployment:</strong> Tailored coverage and speed for small offices or large-scale enterprise spaces.</li>
                </ul>
                <p style={{ marginTop: '8px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
                  Our wireless solutions are scalable, cost-effective, and designed to grow with your business.
                </p>
                <Link to="/products/cctv/wifi-wireless-solutions" className="profile-domain-card__cta">
                  View Wi-Fi Solutions <ArrowRight size={14} />
                </Link>
              </div>

              {/* 4. Access Control Systems */}
              <div className="profile-domain-card">
                <div className="profile-domain-card__icon">
                  <Lock size={24} />
                </div>
                <h3>4. Access Control Systems</h3>
                <p>
                  Control who enters your premises with our cutting-edge access control systems that improve security while making management simple and efficient:
                </p>
                <ul>
                  <li><strong>Biometric Access:</strong> Fingerprint and facial recognition technology for employees, visitors, and contractors.</li>
                  <li><strong>Smart Card &amp; RFID Access:</strong> Proximity-based entry eliminating the need for physical keys or passwords.</li>
                </ul>
                <Link to="/products/cctv/access-control-biometric" className="profile-domain-card__cta">
                  View Biometric &amp; Access Control <ArrowRight size={14} />
                </Link>
              </div>

              {/* 5. EPABX Telecom Systems */}
              <div className="profile-domain-card">
                <div className="profile-domain-card__icon">
                  <PhoneCall size={24} />
                </div>
                <h3>5. EPABX Telecom Systems</h3>
                <p>
                  In a world where communication is key to success, we offer advanced EPABX telecom systems that provide seamless voice communication across businesses:
                </p>
                <ul>
                  <li><strong>EPABX Systems:</strong> Reliable, scalable systems to efficiently manage internal calls, customer service lines, and multi-location communications.</li>
                </ul>
                <Link to="/query" state={{ subject: 'EPABX Telecom Solutions Inquiry' }} className="profile-domain-card__cta">
                  Inquire EPABX Telecom Systems <ArrowRight size={14} />
                </Link>
              </div>

              {/* 6. LAN Networking & Fiber Connectivity */}
              <div className="profile-domain-card">
                <div className="profile-domain-card__icon">
                  <Network size={24} />
                </div>
                <h3>6. LAN Networking &amp; Fiber Connectivity Solutions</h3>
                <p>
                  We specialize in setting up and maintaining LAN networks and fiber connectivity solutions providing high-speed data transfer, scalability, and reliability:
                </p>
                <ul>
                  <li><strong>LAN Networking:</strong> Structured cabling systems and reliable LAN infrastructures for businesses of all sizes.</li>
                  <li><strong>Fiber Optic Solutions:</strong> Ultra-fast internet and seamless communication for enterprises demanding peak speed.</li>
                </ul>
                <Link to="/products/structured-cabling" className="profile-domain-card__cta">
                  Explore Structured Cabling &amp; Fiber <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Client Partnerships */}
          <div className="profile-section-box">
            <div className="profile-section-box__icon">
              <Users2 size={32} />
            </div>
            <div className="profile-section-box__body">
              <h2>Our Client Partnerships: Tailored Solutions for Every Industry</h2>
              <p>
                At Alfatech, we understand that each industry has its unique challenges and requirements. That&apos;s why we collaborate with a diverse range of professionals, including <strong>Interior designers, Architects, Hotel and Restaurant owners, and Builders</strong>, to provide accurate, bespoke solutions that seamlessly integrate technology into their projects. Whether it&apos;s creating smart office spaces, optimizing Wi-Fi connectivity in hospitality settings, or securing building premises, we offer solutions that complement and enhance the overall design and functionality.
              </p>

              {/* Partner Industry Badges */}
              <div className="profile-partner-tags">
                <span className="profile-partner-tag">Interior Designers</span>
                <span className="profile-partner-tag">Architects</span>
                <span className="profile-partner-tag">Hotels &amp; Hospitality</span>
                <span className="profile-partner-tag">Builders &amp; Developers</span>
                <span className="profile-partner-tag">Corporate Offices</span>
                <span className="profile-partner-tag">Commercial Facilities</span>
              </div>
            </div>
          </div>

          {/* Why Choose Alfatech? */}
          <div className="profile-why-choose">
            <h2 className="profile-why-choose__title">Why Choose Alfatech?</h2>
            <div className="profile-why-choose__grid">
              <div className="profile-why-card">
                <CheckCircle2 size={24} className="profile-why-card__icon" />
                <h4>Expertise You Can Trust</h4>
                <p>Our team of professionals brings years of experience in the technology field, ensuring that we deliver only the best products and services.</p>
              </div>

              <div className="profile-why-card">
                <CheckCircle2 size={24} className="profile-why-card__icon" />
                <h4>Customer-Focused Solutions</h4>
                <p>We tailor each solution to meet your specific needs, offering guidance and support to ensure that your investment delivers lasting value.</p>
              </div>

              <div className="profile-why-card">
                <CheckCircle2 size={24} className="profile-why-card__icon" />
                <h4>High-Quality, Reliable Products</h4>
                <p>We partner with global leaders in technology to provide products that stand the test of time.</p>
              </div>

              <div className="profile-why-card">
                <CheckCircle2 size={24} className="profile-why-card__icon" />
                <h4>Comprehensive Support</h4>
                <p>From installation to after-sales service, our team is always here to assist with ongoing support, ensuring your systems continue to run smoothly.</p>
              </div>
            </div>
          </div>

          {/* Closing Call to Action */}
          <div className="contact-cta-box" style={{ marginTop: 'var(--spacing-3xl)' }}>
            <div className="contact-cta-box__content">
              <h3>Let’s Build a Secure, Efficient, and Connected Future Together</h3>
              <p>
                Whether you&apos;re looking to upgrade your security, enhance your network, or streamline your communications, we&apos;re here to provide the solutions that make your life easier and your business more successful.
              </p>
            </div>
            <Link to="/contact" className="contact-cta-box__btn">
              <PhoneCall size={18} />
              Reach Out To Us Today
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
