import { Link } from 'react-router-dom';
import { Wrench, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';
import './ProductDetails.css';

/**
 * Service detail page — receives the resolved `service` and `category` as props
 * from the ItemRouter in App.jsx.
 */
const ServiceDetails = ({ service, category }) => {
  const paragraphs = service.paragraphs && service.paragraphs.length > 0
    ? service.paragraphs
    : [service.description];

  return (
    <Layout showSidebar>
      <article className="detail-page">
        {/* Top Hero Grid: Image + Core Info */}
        <div className="detail-page__hero-grid">
          {/* Image */}
          <div className="detail-page__image-section">
            {service.image ? (
              <img
                src={service.image}
                alt={service.name}
                className="detail-page__image"
              />
            ) : (
              <div className="detail-page__image-placeholder">
                <Wrench size={48} />
                <span>Service image coming soon</span>
              </div>
            )}
          </div>

          {/* Core Info */}
          <div className="detail-page__info">
            <span className="detail-page__badge detail-page__badge--service">
              Service / Solution
            </span>
            <h1 className="detail-page__title">{service.name}</h1>
            <p className="detail-page__category">
              Category:{' '}
              <Link to={`/products/${category.slug}`}>{category.name}</Link>
            </p>

            <div className="detail-page__paragraphs">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="detail-page__description">
                  {p}
                </p>
              ))}
            </div>

            <div className="detail-page__trust-pills">
              <span className="detail-page__trust-pill">
                <ShieldCheck size={14} /> Professional Turnkey Execution
              </span>
              <span className="detail-page__trust-pill">
                <CheckCircle2 size={14} /> Site Assessment Available
              </span>
            </div>

            {/* Query CTA */}
            <Link
              to="/query"
              state={{
                productName: service.name,
                categoryName: category.name,
                isService: true,
              }}
              className="detail-page__query-btn"
            >
              <Send size={18} />
              Inquire About This Service
            </Link>
          </div>
        </div>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <div className="detail-page__section">
            <h2 className="detail-page__section-title">Scope of Service &amp; Deliverables</h2>
            <ul className="detail-page__features">
              {service.features.map((feature) => (
                <li key={feature} className="detail-page__feature">
                  <CheckCircle2 size={20} className="detail-page__feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default ServiceDetails;
