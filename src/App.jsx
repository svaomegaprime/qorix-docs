import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Introduction from './pages/Introduction';
import Installation from './pages/Installation';
import Campaigns from './pages/Campaigns';
import Editor from './pages/Editor';
import Subscribers from './pages/Subscribers';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import StoreFront from './pages/StoreFront';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/docs" replace />} />
        <Route path="/docs" element={<Introduction />} />
        <Route path="/docs/installation" element={<Installation />} />
        <Route path="/docs/campaigns" element={<Campaigns />} />
        <Route path="/docs/editor" element={<Editor />} />
        <Route path="/docs/subscribers" element={<Subscribers />} />
        <Route path="/docs/storefront" element={<StoreFront />} />
        <Route path="/docs/analytics" element={<Analytics />} />
        <Route path="/docs/settings" element={<Settings />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
