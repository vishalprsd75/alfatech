import { Link } from 'react-router-dom';
import './Logo.css';

/**
 * Reusable Logo component matching AlfaTech branding from original website:
 * - Blue badge circle with Greek 'α'
 * - ALFA TECH bold block lettering
 *
 * Supports optional image replacement if `logoImgSrc` is provided.
 */
const Logo = ({ className = '', logoImgSrc = null }) => {
  return (
    <Link to="/" className={`logo-brand ${className}`}>
      {logoImgSrc ? (
        <img src={logoImgSrc} alt="AlfaTech Logo" className="logo-brand__img" />
      ) : (
        <div className="logo-brand__box">
          <div className="logo-brand__alpha-circle">
            <span>&alpha;</span>
          </div>
          <div className="logo-brand__text-block">
            <span className="logo-brand__alfa">ALFA</span>
            <span className="logo-brand__tech">TECH</span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
