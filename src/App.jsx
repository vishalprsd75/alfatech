import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Query from './pages/Query';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
import ItemRouter from './pages/ItemRouter';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/query" element={<Query />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product & Service Catalog Routes */}
        <Route path="/products/:categorySlug" element={<CategoryPage />} />
        <Route path="/products/:categorySlug/:itemSlug" element={<ItemRouter />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
