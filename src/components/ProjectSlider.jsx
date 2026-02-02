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

  // 모바일 터치 드래그 핸들러

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX); // 터치 시작 위치만 저장
    setScrollLeft(sliderRef.current?.scrollLeft || 0); // 터치 시작 시점의 스크롤 위치 저장
    // marquee 애니메이션 일시정지
    if (sliderRef.current) {
      sliderRef.current.classList.remove('animate-marquee');
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX;
    const walk = x - startX; // 현재 위치 - 시작 위치
    sliderRef.current.scrollLeft = scrollLeft - walk; // 기존 스크롤 위치에서 이동량만큼 더함
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // marquee 애니메이션 재시작 (모바일에서 자동 재시작은 UX에 따라 조정 가능)
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
            animation-duration: 170s !important;
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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

