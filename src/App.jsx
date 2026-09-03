import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/kfp/Navbar';
import Hero from './components/kfp/Hero';
import About from './components/kfp/About';
import Chambers from './components/kfp/Chambers';
import TerangaConcierge from './components/kfp/TerangaConcierge';
import Dining from './components/kfp/Dining';
import Wellness from './components/kfp/Wellness';
import DiplomaticPulse from './components/kfp/DiplomaticPulse';
import InstagramFeed from './components/kfp/InstagramFeed';
import Footer from './components/kfp/Footer';
import RoomsPage from './pages/RoomsPage';
import DiningPage from './pages/DiningPage';
import TerangaPage from './pages/TerangaPage';
import DiplomacyPage from './pages/DiplomacyPage';
import NotFoundPage from './pages/NotFoundPage';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Chambers />
      <TerangaConcierge />
      <Dining />
      <Wellness />
      <DiplomaticPulse />
      <InstagramFeed />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chambres" element={<RoomsPage />} />
        <Route path="/restauration" element={<DiningPage />} />
        <Route path="/teranga" element={<TerangaPage />} />
        <Route path="/diplomatie" element={<DiplomacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;