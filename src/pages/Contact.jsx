import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Send, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import './PageStyles.css';

const Contact = () => {
  return (
    <Layout>
      <div className="page">
        <div className="page__container container">
          <div className="page__header">
            <span className="page__label">Reach Out</span>
            <h1 className="page__title">Contact Us</h1>
            <p className="page__description">
              Get in touch with AlfaTech for product inquiries, technical support,
              or project consultations.
            </p>
          </div>

          <div className="page__highlights page__highlights--2col">
            <div className="highlight-card">
              <Mail size={28} className="highlight-card__icon" />
              <h3 className="highlight-card__title">E-mail</h3>
              <p className="highlight-card__text">
                Send us an email for general inquiries, price lists, or support.
              </p>
              <span className="highlight-card__detail">alfatech1@gmail.com</span>
            </div>

            <div className="highlight-card">
              <Phone size={28} className="highlight-card__icon" />
              <h3 className="highlight-card__title">Mobile &amp; Phone</h3>
              <p className="highlight-card__text">
                Call our sales and technical assistance hotline during business hours.
              </p>
              <span className="highlight-card__detail">+91-98308-85322 / 98300 45322</span>
            </div>

            <div className="highlight-card">
              <MapPin size={28} className="highlight-card__icon" />
              <h3 className="highlight-card__title">Office Location</h3>
              <p className="highlight-card__text">
                G-48, Kamalalaya Centre, 156A, Lenin Sarani, Kolkata - 700 013, WB, India
              </p>
              <span className="highlight-card__detail">Kolkata, WB, India</span>
            </div>

            <div className="highlight-card">
              <Globe size={28} className="highlight-card__icon" />
              <h3 className="highlight-card__title">Website</h3>
              <p className="highlight-card__text">
                Explore our full product portfolio and structured cabling catalog.
              </p>
              <span className="highlight-card__detail">www.alfatech.org</span>
            </div>
          </div>

          <div className="contact-cta-box">
            <div className="contact-cta-box__content">
              <h3>Have a specific requirement or project query?</h3>
              <p>Submit your details online and our sales team will reach out to you directly.</p>
            </div>
            <Link to="/query" className="contact-cta-box__btn">
              <Send size={18} />
              Send a Query Form
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
