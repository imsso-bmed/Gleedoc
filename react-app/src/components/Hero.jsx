import React from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    title: "Medical Illustration",
    subtitle: "Studio",
    desc: "Where medical knowledge meets artistic vision. We provide visual solutions for both patients and professionals."
  },
  ko: {
    title: "메디컬 일러스트레이션",
    subtitle: "스튜디오",
    desc: "의학적 지식과 예술적 감각이 만나는 곳, 환자와 전문가 모두를 위한 시각적 솔루션을 제공합니다."
  }
};

const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const containerAnim = {
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    }
  }
};

export default function Hero({ lang }) {
  const t = translations[lang];
  const title = t.title;

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-white text-black pt-20">
      <div className="w-full px-4 text-center">
        <h1 className="text-[12vw] leading-none font-bold tracking-tighter mb-4 select-none flex justify-center overflow-hidden py-[2vw] flex-wrap justify-center">
          <motion.div 
            variants={containerAnim}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center"
          >
            {title.split('').map((char, i) => (
              <motion.span key={i} variants={letterAnim} className="inline-block relative">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-neutral-600 font-medium tracking-tight mt-8 max-w-2xl mx-auto"
        >
          {t.desc}
        </motion.p>
      </div>
    </section>
  );
}
