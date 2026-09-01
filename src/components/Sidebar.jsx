import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { categories } from '../data/categories';
import './Sidebar.css';

/**
 * Product/service sidebar.
 * Reads categories from src/data/categories.js.
 * Auto-expands the active category based on the current URL.
 */
const Sidebar = () => {
  const location = useLocation();

  // Derive the active category slug from the URL
  const pathParts = location.pathname.split('/');
  const activeCategorySlug =
    pathParts[1] === 'products' ? pathParts[2] : null;

  const [expanded, setExpanded] = useState(() => {
    // Auto-expand the active category on mount
    if (activeCategorySlug) return { [activeCategorySlug]: true };
    return {};
  });

  // Re-expand when navigating to a different category
  useEffect(() => {
    if (activeCategorySlug) {
      setExpanded((prev) => ({ ...prev, [activeCategorySlug]: true }));
    }
  }, [activeCategorySlug]);

  const toggleCategory = (slug) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Product Categories</h3>

      <ul className="sidebar__list">
        {categories.map((category) => {
          const isExpanded = expanded[category.slug] || false;
          const isCategoryActive = activeCategorySlug === category.slug;

          return (
            <li key={category.id} className="sidebar__item">
              {/* Category header: link + toggle */}
              <div className="sidebar__category-row">
                <NavLink
                  to={`/products/${category.slug}`}
                  end
                  className={({ isActive }) =>
                    `sidebar__category-link ${isActive ? 'sidebar__category-link--active' : ''}`
                  }
                >
                  {category.name}
                </NavLink>

                <button
                  className={`sidebar__toggle ${isExpanded ? 'sidebar__toggle--open' : ''}`}
                  onClick={() => toggleCategory(category.slug)}
                  aria-expanded={isExpanded}
                  aria-label={`Toggle ${category.name}`}
                >
                  {isExpanded ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              </div>

              {/* Children */}
              {isExpanded && category.children.length > 0 && (
                <ul className="sidebar__subitems">
                  {category.children.map((child) => (
                    <li key={child.id} className="sidebar__subitem">
                      <NavLink
                        to={`/products/${category.slug}/${child.slug}`}
                        className={({ isActive }) =>
                          `sidebar__subitem-link ${isActive ? 'sidebar__subitem-link--active' : ''}`
                        }
                      >
                        {child.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
