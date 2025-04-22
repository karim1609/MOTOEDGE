import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import MotorcycleDetailsPage from './pages/MotorcycleDetailsPage';
import PartsPage from './pages/PartsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartProvider from './contexts/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
          <Header />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/inventory/:id" element={<MotorcycleDetailsPage />} />
              <Route path="/parts" element={<PartsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;