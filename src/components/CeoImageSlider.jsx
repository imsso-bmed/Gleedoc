import React, { useState } from 'react';

export default function CeoImageSlider({ ceo, isKo }) {
  const images = ceo.imageList || [ceo.image];
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative aspect-square bg-neutral-200 rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72 mx-auto md:mx-0 flex items-center justify-center">
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white"
        aria-label="이전 이미지"
        style={{ zIndex: 2 }}
      >
        <span className="text-2xl">&#8592;</span>
      </button>
      <img
        src={images[current]}
        alt={isKo ? ceo.nameKo : ceo.name}
        className="w-full h-full object-cover transition-all duration-300"
      />
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white"
        aria-label="다음 이미지"
        style={{ zIndex: 2 }}
      >
        <span className="text-2xl">&#8594;</span>
      </button>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-2 h-2 rounded-full ${i === current ? 'bg-black/80' : 'bg-white/60'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}