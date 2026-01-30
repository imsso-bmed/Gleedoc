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
    setStartX(e.touches[0].pageX - (sliderRef.current?.scrollLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
    // marquee 애니메이션 일시정지
    if (sliderRef.current) {
      sliderRef.current.classList.remove('animate-marquee');
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x); // 드래그 방향 반영
    sliderRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // marquee 애니메이션 재시작 (모바일에서 자동 재시작은 UX에 따라 조정 가능)
    if (sliderRef.current) {
      sliderRef.current.classList.add('animate-marquee');
    }
  };

  return (
    <section className="py-12 bg-white overflow-hidden cursor-scale">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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

      <div className="marquee-group w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-2 md:gap-8 animate-marquee w-full md:w-max touch-pan-x"
          style={{ touchAction: 'pan-x', WebkitOverflowScrolling: 'touch', overflowX: 'auto' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {[...images, ...images, ...images, ...images].map((src, i) => (
            <div
              key={i}
              className={
                `relative flex-shrink-0 w-[90vw] h-[90vw] max-w-[400px] max-h-[400px] md:w-[400px] md:h-[400px] overflow-hidden transition-all duration-500 hover:opacity-90 ` +
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

