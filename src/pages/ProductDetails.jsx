import { Link } from 'react-router-dom';
import { Package, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { getProductById } from '../data/products';
import './ProductDetails.css';

/**
 * Product detail page — receives the resolved `product` and `category` as props
 * from the ItemRouter in App.jsx.
 */
const ProductDetails = ({ product, category }) => {
  // Resolve related products
  const relatedProducts = (product.relatedProducts || [])
    .map((id) => getProductById(id))
    .filter(Boolean);

  const paragraphs = product.paragraphs && product.paragraphs.length > 0
    ? product.paragraphs
    : [product.description];

  return (
    <Layout showSidebar>
      <article className="detail-page">
        {/* Top Hero Grid: Image + Core Info */}
        <div className="detail-page__hero-grid">
          {/* Image */}
          <div className="detail-page__image-section">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="detail-page__image"
              />
            ) : (
              <div className="detail-page__image-placeholder">
                <Package size={48} />
                <span>Product image coming soon</span>
              </div>
            )}
          </div>

          {/* Core Info */}
          <div className="detail-page__info">
            <span className="detail-page__badge detail-page__badge--product">
              Product
            </span>
            <h1 className="detail-page__title">{product.name}</h1>
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
                <ShieldCheck size={14} /> Quality Hardware Assurance
              </span>
              <span className="detail-page__trust-pill">
                <CheckCircle2 size={14} /> Available for Quotation
              </span>
            </div>

            {/* Query CTA */}
            <Link
              to="/query"
              state={{
                productName: product.name,
                categoryName: category.name,
              }}
              className="detail-page__query-btn"
            >
              <Send size={18} />
              Send a Query About This Product
            </Link>
          </div>
        </div>

        {/* Specifications */}
        <div className="detail-page__section">
          <h2 className="detail-page__section-title">Technical Specifications</h2>
          {product.specifications && product.specifications.length > 0 ? (
            <table className="detail-page__specs-table">
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.label}>
                    <td className="detail-page__spec-label">{spec.label}</td>
                    <td className="detail-page__spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="detail-page__placeholder">
              <p>
                Exact manufacturer technical datasheets and model specifications are available upon request.
                Contact our sales engineering team for detailed sizing, dimensions, and bulk availability.
              </p>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="detail-page__related">
            <h2 className="detail-page__section-title">Related Products</h2>
            <ProductGrid items={relatedProducts} />
          </div>
        )}
      </article>
    </Layout>
  );
};

export default ProductDetails;
