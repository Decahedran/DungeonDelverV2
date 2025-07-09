import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import DownloadsPage from './pages/DownloadsPage';
import FAQPage from './pages/FAQPage';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LorePage from './pages/LorePage';
import PrivacyPage from './pages/PrivacyPage';
import ShopPage from './pages/ShopPage';
import TermsPage from './pages/TermsPage';
import WorldPage from './pages/WorldPage';

function App() {
  return (
    <Routes>
      {/* Public-facing landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Internal site navigation */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/lore" element={<LorePage />} />
      <Route path="/world" element={<WorldPage />} />
      <Route path="/downloads" element={<DownloadsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/play" element={<GamePage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />

      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
