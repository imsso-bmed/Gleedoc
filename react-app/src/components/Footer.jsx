import React from 'react';

const translations = {
  en: {
    copyright: "© 2024 Gleedoc Studio. All rights reserved.",
    socials: "Follow Us"
  },
  ko: {
    copyright: "© 2024 Gleedoc 스튜디오. 모든 권리 보유.",
    socials: "팔로우하기"
  }
};

export default function Footer({ lang }) {
  const t = translations[lang];

  return (
    <footer className="py-12 px-6 md:px-12 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-bold tracking-tighter mb-8">Gleedoc</h2>
            <p className="max-w-md text-neutral-400">
              {lang === 'en' 
                ? "A medical illustration studio providing visual solutions for healthcare professionals and patients."
                : "의료 전문가와 환자를 위한 시각적 솔루션을 제공하는 메디컬 일러스트레이션 스튜디오입니다."
              }
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-wider">
              {lang === 'en' ? 'Socials' : '소셜'}
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-neutral-300 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-neutral-300 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-neutral-300 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-wider">
              {lang === 'en' ? 'Contact' : '문의'}
            </h4>
            <ul className="space-y-4">
              <li><a href="mailto:hello@gleedoc.com" className="hover:text-neutral-300 transition-colors">hello@gleedoc.com</a></li>
              <li><a href="tel:+82-2-1234-5678" className="hover:text-neutral-300 transition-colors">+82 (0)2 1234 5678</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-neutral-600">
          <p>{t.copyright}</p>
          <p className="mt-4 md:mt-0">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
