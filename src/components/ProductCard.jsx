import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Wrench } from 'lucide-react';
import './ProductCard.css';

/**
 * Reusable card for displaying a product or service in a grid.
 *
 * @param {object}  item          – product or service object
 * @param {string}  categorySlug  – parent category slug (for URL building)
 */
const ProductCard = ({ item, categorySlug }) => {
  const [imageError, setImageError] = useState(false);
  const isService = item.type === 'service';
  const url = `/products/${categorySlug || item.categorySlug}/${item.slug}`;

  return (
    <Link to={url} className="product-card">
      <div className="product-card__image">
        {item.image && !imageError ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="product-card__placeholder">
            {isService ? <Wrench size={36} /> : <Package size={36} />}
          </div>
        )}
        <span className={`product-card__badge product-card__badge--${item.type}`}>
          {isService ? 'Service' : 'Product'}
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{item.name}</h3>
        <p className="product-card__description">{item.description}</p>
        <span className="product-card__link">
          {isService ? 'View Service Scope' : 'View Details'}
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
