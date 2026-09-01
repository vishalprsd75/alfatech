import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Camera, Layers } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Credentials & Distributorship Badges Strip */}
        <div className="footer__credentials-strip">
          <div className="footer__credential-item">
            <Layers size={18} className="footer__credential-icon" />
            <div>
              <span className="footer__credential-label">Business Partner</span>
              <strong>PALCOM&reg; Structured Cabling</strong>
            </div>
          </div>

          <div className="footer__credential-divider" />

          <div className="footer__credential-item">
            <ShieldCheck size={18} className="footer__credential-icon" />
            <div>
              <span className="footer__credential-label">Authorised Distributor</span>
              <strong>comRACK 19&quot; Server Cabinets</strong>
            </div>
          </div>

          <div className="footer__credential-divider" />

          <div className="footer__credential-item">
            <Camera size={18} className="footer__credential-icon" />
            <div>
              <span className="footer__credential-label">Surveillance Products</span>
              <strong>Analog &amp; IP Cameras, DVR/NVR</strong>
            </div>
          </div>
        </div>

        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Logo />
            <p className="footer__description">
              Your trusted partner for IT infrastructure, networking solutions,
              and structured cabling systems in East and North East India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/query">Query</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__section">
            <h4 className="footer__heading">Categories</h4>
            <ul className="footer__links">
              <li><Link to="/products/comrack">COMRACK 19&quot; Cabinet</Link></li>
              <li><Link to="/products/cctv">CCTV &amp; Surveillance</Link></li>
              <li><Link to="/products/structured-cabling">Structured Cabling</Link></li>
              <li><Link to="/products/fiber-optics">Fiber Optics</Link></li>
              <li><Link to="/products/networking-switches">Networking Switches</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li>
                <Mail size={16} />
                <span>alfatech1@gmail.com</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+91-98308-85322 / 98300 45322</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Kolkata - 700 013, WB, India</span>
              </li>
            </ul>
            <Link to="/query" className="footer__query-link">
              Send a Query
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>&copy; {currentYear} AlfaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
