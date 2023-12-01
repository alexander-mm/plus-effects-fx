import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EspumaOne from './pages/EspumaOne';
import Maquinas from './pages/Maquinas';
import Insumos from './pages/Insumos';
import Bidon from './componentsItems/Bidon';
import Aditivo from './componentsItems/Aditivo';
import AditivoX6 from './componentsItems/AditivoX6';
import KitBombeo from './componentsItems/KitBombeo';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/maquinas" element={<Maquinas />} />
          <Route path="/insumos&accs" element={<Insumos />} />
          <Route path="/bidon" element={<Bidon />} />
          <Route path="/aditivo" element={<Aditivo />} />
          <Route path="/aditivox6" element={<AditivoX6 />} />
          <Route path="/kitbombeo" element={<KitBombeo />} />
        </Route>
        <Route path="/espumaone" element={<EspumaOne />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);