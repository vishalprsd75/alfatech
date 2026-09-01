import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { getCategoryBySlug, getChildBySlug } from '../data/categories';
import './Breadcrumbs.css';

const staticLabels = {
  profile: 'Profile',
  query: 'Query',
  contact: 'Contact Us',
  products: 'Products',
};

/**
 * Resolves a URL segment to a human-readable label.
 * For product paths it looks up category/item names from the data.
 */
const getLabel = (segment, allSegments, index) => {
  if (staticLabels[segment]) return staticLabels[segment];

  // Category slug (e.g. /products/comrack)
  if (index === 1 && allSegments[0] === 'products') {
    const cat = getCategoryBySlug(segment);
    if (cat) return cat.name;
  }

  // Item slug (e.g. /products/comrack/wall-mount)
  if (index === 2 && allSegments[0] === 'products') {
    const child = getChildBySlug(allSegments[1], segment);
    if (child) return child.name;
  }

  // Fallback: capitalise dashed slug
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on the home page
  if (pathnames.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="breadcrumbs__container container">
        <ol className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to="/" className="breadcrumbs__link">
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>
          {pathnames.map((segment, index) => {
            const path = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const label = getLabel(segment, pathnames, index);

            return (
              <li key={path} className="breadcrumbs__item">
                <ChevronRight size={14} className="breadcrumbs__separator" />
                {isLast ? (
                  <span className="breadcrumbs__current" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link to={path} className="breadcrumbs__link">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
