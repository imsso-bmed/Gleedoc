import React, { useState } from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "How do I request a project?",
        a: "Please contact us via the form, and we will respond within 1-2 days."
      },
      {
        q: "How long does a project take?",
        a: "It depends on complexity and scope, but typically 2-4 weeks."
      },
      {
        q: "Who owns the copyright?",
        a: "Copyright is held by the studio by default, but can be negotiated."
      }
    ]
  },
  ko: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "의뢰는 어떻게 진행되나요?",
        a: "Contact 폼을 통해 문의해주시면, 담당자가 1~2일 내 연락드립니다."
      },
      {
        q: "작업 기간은 얼마나 걸리나요?",
        a: "작업 난이도와 범위에 따라 다르며, 평균 2~4주 소요됩니다."
      },
      {
        q: "저작권은 어떻게 되나요?",
        a: "완성물의 저작권은 기본적으로 스튜디오에 있으며, 별도 협의 가능합니다."
      }
    ]
  }
};

export default function FAQ({ lang }) {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-50 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-16">
          {t.title}
        </h2>

        <div className="space-y-4">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 md:px-8 py-5 text-left font-medium text-lg hover:bg-neutral-50 transition-colors flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span className="text-2xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 py-4 bg-neutral-50 text-neutral-600 border-t border-neutral-200">
                  {item.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
