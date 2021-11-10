import React from 'react';
import './css/App.css';
import './css/icons.css';
import './css/concepto.css';
import './css/header.css';
import Header from './components/Header';
import Concepto from './components/Concepto';
import Masterplan from './components/Masterplan';
import Amenidades from './components/Amenidades';
import BrochureCard from './components/BrochureCard';
import Beneficios from './components/Beneficios';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
      <div class="container max-w-full">
        <Header/>
        <Concepto/>
        <Masterplan/>
        <Amenidades/>
        <BrochureCard/>
        <Beneficios/>
        <Galeria/>
        <Footer/>
      </div>
  );
}

export default App;
