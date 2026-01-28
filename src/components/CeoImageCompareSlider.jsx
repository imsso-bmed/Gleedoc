import React, { useRef, useState } from 'react';

export default function CeoImageCompareSlider({ ceo, isKo }) {
  const images = ceo.imageList || [ceo.image];
  if (images.length < 2) return (
    <img src={images[0]} alt={isKo ? ceo.nameKo : ceo.name} className="w-full h-full object-cover" />
  );

  const containerRef = useRef(null);
  const [pos, setPos] = useState(50); // percent
  const dragging = useRef(false);

  const onDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    setPos((x / rect.width) * 100);
  };

  const startDrag = (e) => {
    dragging.current = true;
    onDrag(e);
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('touchmove', onDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
  };
  const stopDrag = () => {
    dragging.current = false;
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('touchmove', onDrag);
    window.removeEventListener('mouseup', stopDrag);
    window.removeEventListener('touchend', stopDrag);
  };

  // tailwind primary: #309781
  const handleColor = '#309781';

  return (
    <div
      ref={containerRef}
      className="relative aspect-square bg-neutral-200 rounded-2xl overflow-hidden w-80 h-80 md:w-[28rem] md:h-[28rem] mx-auto md:mx-0 select-none"
      style={{ touchAction: 'none' }}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {/* 오른쪽 이미지 */}
      <img
        src={images[1]}
        alt={isKo ? ceo.nameKo : ceo.name}
        className="w-full h-full object-cover absolute inset-0"
        draggable={false}
        style={{ pointerEvents: 'none' }}
      />
      {/* 왼쪽 이미지 (마스킹) */}
      <div
        className="absolute inset-0 h-full"
        style={{ width: `${pos}%`, overflow: 'hidden', pointerEvents: 'none' }}
      >
        <img
          src={images[0]}
          alt={isKo ? ceo.nameKo : ceo.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      {/* 드래그 핸들 */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="w-2 h-full cursor-ew-resize rounded-full shadow"
          style={{ background: handleColor, opacity: 0.95 }}
        />
      </div>
    </div>
  );
}
