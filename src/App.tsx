import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { WholesalePage } from './components/pages/WholesalePage';
import { ContactPage } from './components/pages/ContactPage';
import { Footer } from './components/Footer';
import { CrunchBagDrawer } from './components/CrunchBagDrawer';
import { Sparkles } from 'lucide-react';

const MainApp: React.FC = () => {
  const { activePage, setActivePage, toastMessage } = useCart();

  return (
    <div className="min-h-screen bg-[#08080a] text-stone-200 selection:bg-[#cca578] selection:text-black font-sans antialiased">
      {/* Royal Header with Crown + Cursive Logo, Primary Nav & WhatsApp Hotline */}
      <Navbar />

      {/* Pages Container with Seamless Switching */}
      <main>
        {activePage === 'home' && <HomePage onNavigate={setActivePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'wholesale' && <WholesalePage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Crunch Bag Slide-out Drawer */}
      <CrunchBagDrawer />

      {/* Luxury Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 max-w-md bg-[#141418]/98 border border-[#cca578] text-amber-100 text-sm sm:text-base py-3.5 px-5 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <Sparkles className="w-5 h-5 text-[#e5b95b] shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
