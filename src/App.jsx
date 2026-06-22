import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import StudioPage from './pages/StudioPage';
import GamesPage from './pages/GamesPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import OrdersPage from './pages/OrdersPage';
import CrazyDealsPage from './pages/CrazyDealsPage';
import CheckoutPage from './pages/CheckoutPage';
import ReviewOrderPage from './pages/ReviewOrderPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import TopSelectionPage from './pages/TopSelectionPage';
import SimilarProductsPage from './pages/SimilarProductsPage';
import HelpSupportPage from './pages/HelpSupportPage';
import AccountInfoPage from './pages/AccountInfoPage';
import SecurityPage from './pages/SecurityPage';
import SettingsPage from './pages/SettingsPage';
import WalletPage from './pages/WalletPage';
import CouponsPage from './pages/CouponsPage';
import ReferEarnPage from './pages/ReferEarnPage';
import SavedAddressesPage from './pages/SavedAddressesPage';
import TrackOrderPage from './pages/TrackOrderPage';
import OrderDetailsPage from './pages/OrderDetailsPage';

import './App.css';

function AppContent() {
  const { user } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Run hierarchical route matching
    const protectedRoutes = ['/wishlist', '/orders'];
    const isProtectedRoute = protectedRoutes.some(route => location.pathname.startsWith(route));

    if (!user && isProtectedRoute) {
      navigate('/login');
    } else if (user && location.pathname === '/login') {
      navigate('/');
    }
  }, [user, location.pathname, navigate]);

  return (
    <>
      
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/crazy-deals" element={<CrazyDealsPage />} />
        <Route path="/review-order" element={<ReviewOrderPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/similar-products" element={<SimilarProductsPage />} />
        <Route path="/top-selection" element={<TopSelectionPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/help" element={<HelpSupportPage />} />
        <Route path="/account" element={<AccountInfoPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/coupons" element={<CouponsPage />} />
        <Route path="/refer" element={<ReferEarnPage />} />
        <Route path="/saved-addresses" element={<SavedAddressesPage />} />
        <Route path="/track-order/:orderId" element={<TrackOrderPage />} />
        <Route path="/order-details/:orderId" element={<OrderDetailsPage />} />
      </Routes>
    </Layout>
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
