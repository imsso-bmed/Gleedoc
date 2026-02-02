import React, { useMemo, useRef, useState } from 'react';
import { projects } from './ProjectGrid';

export default function ProjectSlider() {
  // Fisher-Yates shuffle
  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 매번 렌더링마다 랜덤하게 섞인 이미지 배열 생성
  const images = useMemo(() => shuffle(projects.map((p) => p.image)), []);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 공통 드래그 시작 핸들러
  const handleDragStart = (e) => {
    const clientX = e.touches?.[0]?.pageX || e.pageX;
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('animate-marquee');
    }
  };

  // 공통 드래그 이동 핸들러
  const handleDragMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const clientX = e.touches?.[0]?.pageX || e.pageX;
    const walk = clientX - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // 공통 드래그 끝 핸들러
  const handleDragEnd = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.classList.add('animate-marquee');
    }
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-white cursor-scale">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-marquee {
            animation-duration: 70s !important;
          }
        }
        .marquee-group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-group -mx-6 md:-mx-12 overflow-x-hidden">
        <div
          ref={sliderRef}
          className="flex gap-2 md:gap-8 md:animate-marquee px-6 md:px-12 md:w-max touch-pan-x"
          style={{ touchAction: 'pan-x', WebkitOverflowScrolling: 'touch', overflowX: 'auto' }}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {[...images, ...images, ...images, ...images].map((src, i) => (
            <div
              key={i}
              className={
                `relative flex-shrink-0 w-[calc(100vw-3rem)] h-[calc(100vw-3rem)] max-w-[400px] max-h-[400px] md:w-[400px] md:h-[400px] overflow-hidden transition-all duration-500 hover:opacity-90 ` +
                (i % 3 === 0 ? 'rounded-tl-[100px]' : '') +
                (i % 3 === 1 ? 'rounded-tr-[100px] rounded-bl-[40px]' : '') +
                (i % 3 === 2 ? 'rounded-[40px]' : '')
              }
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

