import React from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    title: "Medical Illustration",
    subtitle: "Studio",
    desc: "We work with researchers to craft precise and beautiful medical illustrations, communicating clearly through collaboration."
  },
  ko: {
    title: "메디컬 일러스트레이션",
    subtitle: "스튜디오",
    desc: "보다 정확하고 아름다운 메디컬일러스트를 위해\n연구자와 함께 고민하며 커뮤니케이션을 통해 작업합니다."
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
  // 한글일 때 폰트 사이즈 줄임 (글자 수가 많아서)
  // 영문은 모바일에서 더 작게, md 이상에서만 크게
  // clamp로 최소~최대 폰트 크기 제한, 줄바꿈 방지
  const fontSize = 'text-[clamp(2.5rem,8vw,7rem)]';

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-white text-black pt-20">
      <div className="w-full px-4 text-center">
        <h1
          className={`${fontSize} leading-none font-bold tracking-tighter mb-4 select-none flex justify-center overflow-hidden py-[2vw] whitespace-nowrap`}
          style={{width:'100%',overflow:'hidden',textOverflow:'ellipsis'}}
        >
          <motion.div
            variants={containerAnim}
            initial="initial"
            animate="animate"
            className="flex justify-center w-full"
            style={{whiteSpace:'nowrap'}}
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
          className={
            `text-base md:text-2xl text-neutral-600 font-medium tracking-tight mt-8 max-w-2xl mx-auto whitespace-pre-line leading-relaxed md:leading-[2.5] ` +
            (lang === 'ko' ? 'break-keep' : '')
          }
          style={{wordBreak:'keep-all', lineHeight:'1.7'}}
        >
          {t.desc}
        </motion.p>
      </div>
    </section>
  );
}
