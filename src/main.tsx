import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NossaEssencia from './pages/NossaEssencia';
import Cases from './pages/Cases';
import Planos from './pages/Planos';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossa-essencia" element={<NossaEssencia />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
    </Router>
  </StrictMode>
);