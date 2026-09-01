import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import './PageStyles.css';

const NotFound = () => {
  return (
    <Layout>
      <div className="page page--centered">
        <div className="not-found">
          <span className="not-found__code">404</span>
          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__description">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="not-found__btn not-found__btn--primary">
              <Home size={18} />
              Go Home
            </Link>
            <button
              className="not-found__btn not-found__btn--secondary"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
