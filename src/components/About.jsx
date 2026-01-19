import React from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    title: "About",
    studioTitle: "Medical Illustration Studio",
    desc: "Where medical knowledge meets artistic vision. We provide visual solutions for both patients and professionals.",
    mission: [
      "Accurate medical information delivery",
      "Creative and effective visualization",
      "Tailored project management"
    ],
    teamTitle: "Our Team",
    teamDesc: "A team of professional illustrators and medical experts working together."
  },
  ko: {
    title: "About",
    studioTitle: "메디컬 일러스트레이션 스튜디오",
    desc: "의학적 지식과 예술적 감각이 만나는 곳, 환자와 전문가 모두를 위한 시각적 솔루션을 제공합니다.",
    mission: [
      "정확한 의학 정보 전달",
      "창의적이고 효과적인 시각화",
      "맞춤형 프로젝트 진행"
    ],
    teamTitle: "팀 소개",
    teamDesc: "전문 일러스트레이터와 의료 전문가로 구성된 팀이 함께합니다."
  }
};

export default function About({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tighter mb-8">
            {t.studioTitle}
          </h2>
          <p className="text-xl text-neutral-600 mb-6">
            {t.desc}
          </p>
          <ul className="space-y-3 text-lg">
            {t.mission.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-4 text-2xl">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-50 p-8 md:p-12 rounded-lg"
        >
          <h3 className="text-3xl font-medium mb-4">{t.teamTitle}</h3>
          <p className="text-neutral-600 text-lg">{t.teamDesc}</p>
        </motion.div>
      </div>
    </section>
  );
}
