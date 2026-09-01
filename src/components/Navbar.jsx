import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Send } from 'lucide-react';
import Logo from './Logo';
import { categories } from '../data/categories';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/profile', label: 'Profile' },
  { to: '/query', label: 'Query' },
  { to: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const productsRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  // Track scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close products dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <Logo />

        <nav className="navbar__nav" aria-label="Main navigation">
          {/* Home & Profile */}
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Products dropdown */}
          <div
            className="navbar__products-wrapper"
            ref={productsRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className={`navbar__link navbar__products-trigger ${isProductsActive ? 'navbar__link--active' : ''}`}
              onClick={() => setProductsOpen((prev) => !prev)}
              aria-expanded={productsOpen}
              type="button"
            >
              Products
              <ChevronDown
                size={14}
                className={`navbar__chevron ${productsOpen ? 'navbar__chevron--open' : ''}`}
              />
            </button>

            <div className={`navbar__dropdown ${productsOpen ? 'navbar__dropdown--open' : ''}`}>
              <div className="navbar__dropdown-inner">
                <span className="navbar__dropdown-label">Categories</span>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/products/${cat.slug}`}
                    className="navbar__dropdown-link"
                    onClick={() => setProductsOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Query & Contact */}
          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/query" className="navbar__cta">
          <Send size={16} />
          <span>Send a Query</span>
        </Link>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`navbar__overlay ${mobileMenuOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <nav
        className={`navbar__mobile ${mobileMenuOpen ? 'navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-nav">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile products expandable */}
          <button
            className={`navbar__mobile-link navbar__mobile-products-trigger ${isProductsActive ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => setMobileProductsOpen((prev) => !prev)}
            type="button"
          >
            Products
            <ChevronDown
              size={16}
              className={`navbar__chevron ${mobileProductsOpen ? 'navbar__chevron--open' : ''}`}
            />
          </button>

          {mobileProductsOpen && (
            <div className="navbar__mobile-products-list">
              {categories.map((cat) => (
                <NavLink
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="navbar__mobile-products-link"
                >
                  {cat.name}
                </NavLink>
              ))}
            </div>
          )}

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/query" className="navbar__mobile-cta">
            <Send size={16} />
            Send a Query
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
