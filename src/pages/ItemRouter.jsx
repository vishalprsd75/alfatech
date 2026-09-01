import { useParams } from 'react-router-dom';
import { getCategoryBySlug } from '../data/categories';
import { getProductBySlug } from '../data/products';
import { getServiceBySlug } from '../data/services';
import ProductDetails from './ProductDetails';
import ServiceDetails from './ServiceDetails';
import NotFound from './NotFound';

const ItemRouter = () => {
  const { categorySlug, itemSlug } = useParams();

  const category = getCategoryBySlug(categorySlug);
  if (!category) return <NotFound />;

  const product = getProductBySlug(categorySlug, itemSlug);
  if (product) {
    return <ProductDetails product={product} category={category} />;
  }

  const service = getServiceBySlug(categorySlug, itemSlug);
  if (service) {
    return <ServiceDetails service={service} category={category} />;
  }

  return <NotFound />;
};

export default ItemRouter;
