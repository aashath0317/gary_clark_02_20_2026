import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Hosts from './pages/Hosts';
import Watch from './pages/Watch';
import Rewards from './pages/Rewards';
import Membership from './pages/Membership';
import Partner from './pages/Partner';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hosts" element={<Hosts />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
