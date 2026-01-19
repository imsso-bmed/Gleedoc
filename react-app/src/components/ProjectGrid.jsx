import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    title: "Heart Surgery Illustration", 
    titleKo: "심장 수술 일러스트",
    category: "Surgical", 
    categoryKo: "수술 일러스트",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Orthopedic Poster", 
    titleKo: "정형외과 포스터",
    category: "Poster", 
    categoryKo: "포스터",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160575-2173dba999ef?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "3D Kidney Animation", 
    titleKo: "3D 신장 애니메이션",
    category: "3D", 
    categoryKo: "3D",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160686-112722121049?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Anatomy Textbook", 
    titleKo: "해부학 교재 일러스트",
    category: "Editorial", 
    categoryKo: "에디토리얼",
    year: "2022",
    image: "https://images.unsplash.com/photo-1576091160797-112722121049?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function ProjectGrid({ lang }) {
  const isKo = lang === 'ko';

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-black/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter">
            Latest <br/> Projects.
          </h2>
          <span className="hidden md:block font-mono text-sm">( 04 )</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer cursor-scale"
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
    </section>
  );
}
