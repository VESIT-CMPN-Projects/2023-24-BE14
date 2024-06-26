import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import CellSize from './pages/cellsize.jsx';
import NucleusSize from './pages/nucleussize.jsx';
import Hyperchromasia from './pages/hyperchromasia.jsx';
import Select from './pages/select.jsx';
import KeratinPearls from './pages/keratinpearls.jsx';
import Mitosis from './pages/mitosis.jsx';
import Result from './pages/result.jsx';
import IncreasedNuclei from './pages/increasednuclei.jsx'
import CellSizeDesc from './pages/cellsizedesc.jsx'
import NucleusSizeDesc from './pages/nucleussizedesc.jsx'
import NCRatio from './pages/ncratio.jsx';
import IrregStrat from './pages/irreg.jsx';
import Features from './pages/features.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/select" element={<Select/>} />
        <Route path="/cellsize" element={<CellSize/>} />
        <Route path="/nucleussize" element={<NucleusSize/>} />
        <Route path="/hyperchromasia" element={<Hyperchromasia/>} />
        <Route path="/keratinpearls" element={<KeratinPearls/>} />
        <Route path="/mitosis" element={<Mitosis/>} />
        <Route path="/increasednuclei" element={<IncreasedNuclei/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/cellsizedesc" element={<CellSizeDesc/>} />
        <Route path="/nucleussizedesc" element={<NucleusSizeDesc/>} />
        <Route path="/ncratio" element={<NCRatio/>} />
        <Route path="/irreg" element={<IrregStrat/>} />
        <Route path="/features" element={<Features/>} />

        </Routes>
    </Router>
  );
}

export default App;
