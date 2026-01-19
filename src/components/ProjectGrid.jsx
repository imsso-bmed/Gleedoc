import React, { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ceo, medicalIllustrators as artists, alumniIllustrators } from '../data/team';

function WatermarkedImage({ src, alt, watermarkText }) {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      // Draw the original image
      ctx.drawImage(img, 0, 0);

      // Set up watermark styling
      ctx.font = 'bold 48px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.lineWidth = 2;

      // Measure text
      const metrics = ctx.measureText(watermarkText);
      const textX = (img.width - metrics.width) / 2;
      const textY = img.height / 2;

      // Draw watermark with outline
      ctx.strokeText(watermarkText, textX, textY);
      ctx.fillText(watermarkText, textX, textY);

      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src, watermarkText]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-cover"
      style={{ display: imageLoaded ? 'block' : 'none' }}
    />
  );
}

export const projects = [
  { 
    title: "Heart Surgery Illustration", 
    titleKo: "심장 수술 일러스트",
    category: "Surgical Illustration", 
    categoryKo: "수술 일러스트",
    tags: ["surgical-illustration"],
    artists: ["haeun-kim", "jinsoo-rhu"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160575-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631217314831-6975d3a4a2ff?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584308666744-24d5f400f6f5?q=80&w=2670&auto=format&fit=crop"
    ],
    video: null,
    descEn: "An illustration visualizing a heart surgery procedure for patient education.",
    descKo: "환자 교육을 위해 심장 수술 과정을 시각화한 일러스트입니다.",
    client: "Seoul National University Hospital",
  },
  { 
    title: "Orthopedic Poster", 
    titleKo: "정형외과 포스터",
    category: "Scientific Illustration", 
    categoryKo: "과학 일러스트",
    tags: ["scientific-illustration", "infographic"],
    artists: ["soyoung-lim", "hyejeong-hong"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160575-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160575-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631217314831-6975d3a4a2ff?q=80&w=2670&auto=format&fit=crop"
    ],
    video: null,
    descEn: "Infographic poster explaining orthopedic conditions and treatments.",
    descKo: "정형외과 질환과 치료를 설명하는 인포그래픽 포스터입니다.",
    client: "Orthopedic Association",
  },
  { 
    title: "3D Kidney Animation", 
    titleKo: "3D 신장 애니메이션",
    category: "2D/3D Animation", 
    categoryKo: "2D/3D 애니메이션",
    tags: ["2d-3d-animation"],
    artists: ["hyejeong-hong", "jinsoo-rhu", "jehoon-oh"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160575-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=2670&auto=format&fit=crop"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    descEn: "3D animation showcasing kidney structure and function.",
    descKo: "신장의 구조와 기능을 보여주는 3D 애니메이션입니다.",
    client: "Medical Media",
  },
  { 
    title: "Anatomy Textbook", 
    titleKo: "해부학 교재 일러스트",
    category: "Anatomical Illustration", 
    categoryKo: "해부학 일러스트",
    tags: ["editorial"],
    artists: ["haeun-kim", "jungin-choi", "nari-kim"],
    year: "2022",
    image: "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160575-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631217314831-6975d3a4a2ff?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584308666744-24d5f400f6f5?q=80&w=2670&auto=format&fit=crop"
    ],
    video: null,
    descEn: "Detailed anatomical illustrations for a medical textbook.",
    descKo: "의학 교재를 위한 상세 해부학 일러스트입니다.",
    client: "Medical Publishing House",
  },
  {
    title: "Figure Design",
    titleKo: "논문 Figure 디자인",
    category: "Figure",
    categoryKo: "Figure",
    tags: ["figure"],
    artists: ["haeun-kim", "soyoung-lim"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop"
    ],
    video: null,
    descEn: "High-quality research figure for scientific publications.",
    descKo: "학술지 게재를 위한 고품질 연구 figure입니다.",
    client: "Nature Research",
  },
  {
    title: "Motion Graphics Medical",
    titleKo: "의료 모션 그래픽",
    category: "2D/3D Animation",
    categoryKo: "2D/3D 애니메이션",
    tags: ["2d-3d-animation"],
    artists: ["soyoung-lim", "jehoon-oh"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1631217314831-6975d3a4a2ff?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1631217314831-6975d3a4a2ff?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584308666744-24d5f400f6f5?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    descEn: "Dynamic motion graphics animation for medical education and marketing.",
    descKo: "의료 교육 및 마케팅을 위한 동적 모션 그래픽 애니메이션입니다.",
    client: "Medical Tech Startup",
  },
  {
    title: "Surgical Diagram",
    titleKo: "외과 수술 다이어그램",
    category: "Surgical Illustration",
    categoryKo: "수술 일러스트",
    tags: ["surgical-illustration", "diagrams"],
    artists: ["haeun-kim", "jungin-choi"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1584308666744-24d5f400f6f5?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5f400f6f5?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160575-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop"
    ],
    video: null,
    descEn: "Detailed surgical procedure diagram for medical training materials.",
    descKo: "의료 교육 자료를 위한 상세 수술 절차 다이어그램입니다.",
    client: "Medical Training Institute",
  },
  {
    title: "Anatomical Poster",
    titleKo: "해부학 포스터",
    category: "Anatomical Illustration",
    categoryKo: "해부학 일러스트",
    tags: ["poster"],
    artists: ["hyejeong-hong", "nari-kim"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=2670&auto=format&fit=crop"
    ],
    video: null,
    descEn: "Educational anatomical poster for classroom and clinic display.",
    descKo: "강의실 및 클리닉 전시용 교육 해부학 포스터입니다.",
    client: "Hospital Education Department",
  },
  {
    title: "Medical Brand Logo",
    titleKo: "의료 브랜드 로고",
    category: "Logo Design",
    categoryKo: "로고 디자인",
    tags: ["logo-design"],
    artists: ["soyoung-lim", "hyejeong-hong"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1579154204601-01d6cc01a125?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631217314831-6975d3a4a2ff?q=80&w=2670&auto=format&fit=crop"
    ],
    video: null,
    descEn: "Custom logo design for medical and healthcare organizations.",
    descKo: "의료 및 헬스케어 조직을 위한 맞춤 로고 디자인입니다.",
    client: "Clinic Branding Group",
  }
];
 
export default function ProjectGrid({ lang, artistFilter = null }) {
  const isKo = lang === 'ko';
  const [selected, setSelected] = useState(null);
  const [activeTag, setActiveTag] = useState('all');
  const [activeArtist, setActiveArtist] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setActiveArtist(artistFilter || null);
    // Reset tag filter when a specific artist is selected from outside
    if (artistFilter) {
      setActiveTag('all');
    }
  }, [artistFilter]);

  const closeModal = () => {
    setSelected(null);
    setImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selected && selected.images && selected.images.length > 0) {
      setImageIndex((prev) => (prev === 0 ? selected.images.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (selected && selected.images && selected.images.length > 0) {
      setImageIndex((prev) => (prev === selected.images.length - 1 ? 0 : prev + 1));
    }
  };

  const tagLabels = useMemo(() => ({
    en: {
      all: 'All',
      'surgical-illustration': 'Surgical Illustration',
      'scientific-illustration': 'Scientific Illustration',
      '2d-3d-animation': '2D/3D Animation',
      'figure': 'Figure',
      'logo-design': 'Logo Design',
      poster: 'Poster',
      infographic: 'Infographic',
      diagrams: 'Diagrams',
      editorial: 'Editorial'
    },
    ko: {
      all: '전체',
      'surgical-illustration': '수술 일러스트',
      'scientific-illustration': '과학 일러스트',
      '2d-3d-animation': '2D/3D 애니메이션',
      'figure': 'Figure',
      'logo-design': '로고 디자인',
      poster: '포스터',
      infographic: '인포그래픽',
      diagrams: '다이어그램',
      editorial: '에디토리얼'
    }
  }), []);

  const filteredByTag = activeTag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  const alumniIds = useMemo(() => alumniIllustrators.map((a) => a.id), []);

  const visibleProjects = activeArtist === 'alumni-group'
    ? filteredByTag.filter((p) => p.artists && p.artists.some((id) => alumniIds.includes(id)))
    : activeArtist
      ? filteredByTag.filter((p) => p.artists && p.artists.includes(activeArtist))
      : filteredByTag;

  const artistOptions = useMemo(() => {
    const list = [ceo, ...artists];
    return [...list].sort((a, b) =>
      isKo
        ? a.nameKo.localeCompare(b.nameKo, 'ko')
        : a.name.localeCompare(b.name, 'en')
    );
  }, [isKo]);

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-12 md:mb-16">
          <div className="flex items-end justify-between border-b border-black/10 pb-6">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter">
              Projects.
            </h2>
            <span className="hidden md:block font-mono text-sm">( {visibleProjects.length.toString().padStart(2, '0')} )</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['all', ...Array.from(new Set(projects.flatMap((p) => p.tags)))].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                  activeTag === tag
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-neutral-200 hover:border-black'
                }`}
              >
                {tagLabels[isKo ? 'ko' : 'en'][tag] || tag}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm text-neutral-500 font-medium">{isKo ? '일러스트레이터' : 'Illustrators'}</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveArtist(null)}
                className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                  !activeArtist
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-neutral-200 hover:border-black'
                }`}
              >
                {isKo ? '전체' : 'All'}
              </button>
              <button
                onClick={() => setActiveArtist('alumni-group')}
                className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                  activeArtist === 'alumni-group'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-neutral-200 hover:border-black'
                }`}
              >
                Alumni
              </button>
              {artistOptions.map((artist) => (
                <button
                  key={artist.id}
                  onClick={() => setActiveArtist(artist.id)}
                  className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                    activeArtist === artist.id
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-neutral-200 hover:border-black'
                  }`}
                >
                  {isKo ? artist.nameKo : artist.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {visibleProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer cursor-scale"
              onClick={() => setSelected(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 rounded-sm mb-6">
                <img 
                  src={project.image} 
                  alt={isKo ? project.titleKo : project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-black/10 pt-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-1">
                    {isKo ? project.titleKo : project.title}
                  </h3>
                  <p className="text-neutral-500">
                    {isKo ? project.categoryKo : project.category}
                  </p>
                </div>
                <span className="font-mono text-sm text-neutral-400">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white text-black max-w-6xl w-[95vw] md:w-[90vw] rounded-2xl shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
                onClick={closeModal}
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-full min-h-[500px] md:min-h-[700px] bg-neutral-100 flex items-center justify-center overflow-hidden">
                  {selected.video ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={selected.video}
                      title={isKo ? selected.titleKo : selected.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : selected.images && selected.images.length > 0 ? (
                    <div className="relative w-full h-full">
                      <WatermarkedImage
                        src={selected.images[imageIndex]}
                        alt={`${isKo ? selected.titleKo : selected.title} ${imageIndex + 1}`}
                        watermarkText="© Gleedoc Studio"
                      />
                      {selected.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-10"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-10"
                            aria-label="Next image"
                          >
                            <ChevronRight size={20} />
                          </button>
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                            {selected.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setImageIndex(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  i === imageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <WatermarkedImage
                      src={selected.image}
                      alt={isKo ? selected.titleKo : selected.title}
                      watermarkText="© Gleedoc Studio"
                    />
                  )}
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {isKo ? selected.titleKo : selected.title}
                    </h3>
                    <p className="text-neutral-500">
                      {isKo ? selected.categoryKo : selected.category} · {selected.year}
                    </p>
                    <p className="text-sm text-neutral-500">{selected.client}</p>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {isKo ? selected.descKo : selected.descEn}
                  </p>

                  {/* Artists Section */}
                  {selected.artists && selected.artists.length > 0 && (
                    <div className="pt-4 border-t border-neutral-200 space-y-2">
                      <p className="text-sm font-medium text-neutral-600">
                        {isKo ? '담당 일러스트레이터' : 'Medical Illustrators'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selected.artists.map((artistId) => {
                          const artist = artists.find(a => a.id === artistId);
                          return artist ? (
                            <span
                              key={artistId}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                              {isKo ? artist.nameKo : artist.name}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
