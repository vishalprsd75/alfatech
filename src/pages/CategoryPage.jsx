import { useParams, Link } from 'react-router-dom';
import { Grid3X3, Send } from 'lucide-react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { getCategoryBySlug } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { getServicesByCategory } from '../data/services';
import { getCategoryImage } from '../data/categoryImages';
import NotFound from './NotFound';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) return <NotFound />;

  const products = getProductsByCategory(categorySlug);
  const services = getServicesByCategory(categorySlug);
  const allItems = [...products, ...services];
  const categoryImg = getCategoryImage(categorySlug);

  return (
    <Layout showSidebar>
      <div className="category-page">
        {/* Category Hero Banner */}
        <div className="category-page__hero">
          {categoryImg && (
            <div className="category-page__hero-image">
              <img src={categoryImg} alt={category.name} />
              <div className="category-page__hero-overlay" />
            </div>
          )}
          <div className="category-page__header">
            <div className="category-page__icon">
              <Grid3X3 size={28} />
            </div>
            <div>
              <h1 className="category-page__title">{category.name}</h1>
              <p className="category-page__description">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Item counts */}
        <div className="category-page__meta">
          {products.length > 0 && (
            <span className="category-page__count category-page__count--product">
              {products.length} {products.length === 1 ? 'Product' : 'Products'}
            </span>
          )}
          {services.length > 0 && (
            <span className="category-page__count category-page__count--service">
              {services.length} {services.length === 1 ? 'Service' : 'Services'}
            </span>
          )}
        </div>

        {/* Grid */}
        <ProductGrid items={allItems} categorySlug={categorySlug} />

        {/* Query CTA */}
        <div className="category-page__cta">
          <p>Need help choosing the right {category.name.toLowerCase()} solution?</p>
          <Link
            to="/query"
            state={{ categoryName: category.name }}
            className="category-page__cta-btn"
          >
            <Send size={16} />
            Send a Query
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
