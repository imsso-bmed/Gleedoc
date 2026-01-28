import React from 'react';
import { Facebook, FileText, Linkedin } from 'lucide-react';
import { clients, socials } from '../data/clients';

const translations = {
  en: {
    copyright: `© ${new Date().getFullYear()} Gleedoc Studio. All rights reserved.`,
    socials: "Follow Us",
    contact: "Contact",
    partners: "Our Clients"
  },
  ko: {
    copyright: `© ${new Date().getFullYear()} Gleedoc 스튜디오`,
    socials: "팔로우",
    contact: "문의",
    partners: "클라이언트"
  }
};

const getSocialIcon = (name) => {
  switch (name) {
    case 'Facebook':
      return <Facebook size={18} />;
    case 'Linkedin':
      return <Linkedin size={18} />;
    case 'FileText':
      return <FileText size={18} />;
    default:
      return null;
  }
};

export default function Footer({ lang }) {
  const t = translations[lang];
  const isKo = lang === 'ko';

  return (
    <footer className="py-12 px-6 md:px-12 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Clients Section */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">
            {t.partners}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center gap-2 h-28 bg-white rounded-lg transition-colors px-3 text-center border border-neutral-200"
              >
                {client.logo ? (
                  <div className="w-full flex items-center justify-center h-16 py-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-10 w-auto object-contain"
                      style={{ backgroundColor: '#fff' }}
                    />
                  </div>
                ) : (
                  <p className="text-xs text-neutral-500 text-center px-2">{client.name}</p>
                )}
                <div className="leading-tight text-xs text-neutral-500">
                  <div>{isKo ? client.nameKo : client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-bold tracking-tighter mb-8">Gleedoc</h2>
            <p className="max-w-md text-neutral-400">
              {lang === 'en' 
                ? "Medical illustrations crafted together by physicians and medical illustrators."
                : "의사와 메디컬일러스트레이터가 함께 그리는 메디컬 일러스트."
              }
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-wider">
              {t.socials}
            </h4>
            <ul className="space-y-4">
              {socials.map((social, i) => (
                <li key={i}>
                  <a 
                    href={social.url} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-neutral-300 transition-colors"
                  >
                    {getSocialIcon(social.icon)}
                    <span>{isKo ? social.label.ko : social.label.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-neutral-500 mb-6 uppercase tracking-wider">
              {t.contact}
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
