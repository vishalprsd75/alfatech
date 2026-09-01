import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LayoutList } from 'lucide-react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import './Layout.css';

/**
 * Reusable page layout.
 *
 * @param {boolean} showSidebar – Whether to render the product sidebar
 * @param {React.ReactNode} children – Page content
 */
const Layout = ({ children, showSidebar = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close mobile sidebar on navigation
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="layout">
      <Navbar />
      <Breadcrumbs />

      <div className={`layout__body ${showSidebar ? 'layout__body--with-sidebar' : ''}`}>
        <div className={`layout__content ${showSidebar ? 'container' : ''}`}>
          {showSidebar && (
            <>
              {/* Mobile sidebar toggle */}
              <button
                className="layout__sidebar-toggle"
                onClick={() => setSidebarOpen((prev) => !prev)}
                aria-expanded={sidebarOpen}
              >
                <LayoutList size={18} />
                {sidebarOpen ? 'Hide Categories' : 'Show Categories'}
              </button>

              <div className={`layout__sidebar ${sidebarOpen ? 'layout__sidebar--open' : ''}`}>
                <Sidebar />
              </div>
            </>
          )}

          <main className="layout__main">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
