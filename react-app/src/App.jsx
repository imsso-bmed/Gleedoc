import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSlider from './components/ProjectSlider';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white cursor-none">
      <Cursor />
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ProjectSlider lang={lang} />
        <About lang={lang} />
        <ProjectGrid lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
