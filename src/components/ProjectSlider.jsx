import React, { useMemo } from 'react';
import { projects } from './ProjectGrid';

export default function ProjectSlider() {
  const images = useMemo(() => projects.map((p) => p.image), []);

  return (
    <section className="py-12 bg-white overflow-hidden cursor-scale">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .marquee-group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="marquee-group w-full overflow-hidden">
        <div 
          className="flex gap-4 md:gap-8 animate-marquee w-max"
        >
          {[...images, ...images, ...images, ...images].map((src, i) => (
            <div 
              key={i} 
              className={`
                relative flex-shrink-0 w-[280px] h-[400px] md:w-[400px] md:h-[560px] overflow-hidden transition-all duration-500 hover:opacity-90
                ${i % 3 === 0 ? 'rounded-tl-[100px]' : ''}
                ${i % 3 === 1 ? 'rounded-tr-[100px] rounded-bl-[40px]' : ''}
                ${i % 3 === 2 ? 'rounded-[40px]' : ''}
              `}
            >
              <img 
                src={src} 
                alt={`Project ${i}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
