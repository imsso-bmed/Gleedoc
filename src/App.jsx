import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSlider from './components/ProjectSlider';
import ProjectGrid from './components/ProjectGrid';
import AboutTabVersion from './components/About-TabVersion';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');
  const [aboutLayout, setAboutLayout] = useState('tab'); // 'original' | 'tab' | 'twoColumn'
  const [artistFilter, setArtistFilter] = useState(null); // selected illustrator id for projects

  const handleSelectArtist = (artistId) => {
    setArtistFilter(artistId);
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white cursor-none">
      <Cursor />
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ProjectSlider />
        <section id="about">
          {aboutLayout === 'tab' && <AboutTabVersion lang={lang} onSelectArtist={handleSelectArtist} />}
          {aboutLayout === 'original' && <About lang={lang} />}
        </section>
        <section id="works">
          <ProjectGrid lang={lang} artistFilter={artistFilter} />
        </section>
        <section id="faq">
          <FAQ lang={lang} />
        </section>
        <section id="contact">
          <Contact lang={lang} />
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
