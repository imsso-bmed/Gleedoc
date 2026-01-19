import React from 'react';
import { Plus } from 'lucide-react';

const translations = {
  en: { menu: 'Menu' },
  ko: { menu: '메뉴' }
};

export default function Header({ lang, setLang }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white pointer-events-none">
      <div className="text-2xl font-bold tracking-tighter pointer-events-auto cursor-pointer">
        Gleedoc
      </div>
      <div className="flex gap-4 pointer-events-auto">
        <button 
          onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
          className="px-3 py-1 text-sm font-medium hover:opacity-70 transition-opacity"
        >
          {lang === 'en' ? 'KO' : 'EN'}
        </button>
        <button className="p-2 hover:opacity-70 transition-opacity cursor-pointer">
          <Plus size={32} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
