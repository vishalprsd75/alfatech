import ProductCard from './ProductCard';

/**
 * Renders a responsive grid of ProductCard components.
 *
 * @param {Array}  items         – array of product/service objects
 * @param {string} categorySlug  – parent category slug
 */
const ProductGrid = ({ items, categorySlug }) => {
  if (!items || items.length === 0) {
    return (
      <div className="product-grid__empty">
        <p>No items available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          categorySlug={categorySlug || item.categorySlug}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
