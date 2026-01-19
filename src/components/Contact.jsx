import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, Info } from 'lucide-react';

const translations = {
  en: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you. Drop us a line.",
    email: "hello@gleedoc.com",
    kakao: "https://pf.kakao.com/_xjJpxbd",
    address: "Seoul, South Korea",
    name: "Full Name",
    emailLabel: "Email Address",
    message: "Message",
    submit: "Send Message",
    success: "Message sent successfully!",
    contactInfo: "Contact Information",
    directEmail: "Direct Email",
    kakao_label: "KakaoTalk Channel",
    address_label: "Address",
    briefTitle: "Helpful details for illustration / video requests",
    briefSubtitle: "Sharing these upfront helps us quote accurately and work faster.",
    briefItems: [
      "Purpose & audience (patient education / academic / conference / marketing)",
      "Format (illustration / 3D / motion / interactive web)",
      "Scope & timeline (frame count, runtime, deadline)",
      "Reference links or files available",
      "Brand guide or tone requirements",
      "Budget range (optional)"
    ]
  },
  ko: {
    title: "문의하기",
    subtitle: "언제든지 연락 주세요. 우리는 항상 준비되어 있습니다.",
    email: "hello@gleedoc.com",
    kakao: "https://pf.kakao.com/_xjJpxbd",
    address: "서울, 대한민국",
    name: "이름",
    emailLabel: "이메일",
    message: "메시지",
    submit: "보내기",
    success: "메시지가 성공적으로 전송되었습니다!",
    contactInfo: "연락처",
    directEmail: "직접 이메일",
    kakao_label: "카카오톡 채널",
    address_label: "주소",
    briefTitle: "의뢰 시 참고하면 좋은 체크리스트",
    briefSubtitle: "그림·영상 의뢰 전에 아래 항목을 적어주시면 더 빠르고 정확한 견적이 가능합니다.",
    briefItems: [
      "목적 및 대상 (환자 교육 / 학술 발표 / 학회 / 마케팅 등)",
      "형식 (일러스트 / 3D / 모션 / 웹 인터랙션 등)",
      "분량과 기한 (컷 수, 러닝타임, 마감일)",
      "참고 자료 링크 또는 파일 유무",
      "브랜드 가이드나 톤앤매너 요구사항",
      "예산 범위 (선택)"
    ]
  }
};

export default function Contact({ lang }) {
  const t = translations[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      alert(t.success);
      e.target.reset();
      setIsSubmitting(false);
    }, 800);
  };

  const contactItems = [
    { icon: Mail, label: t.directEmail, value: t.email, href: `mailto:${t.email}` },
    { icon: MessageCircle, label: t.kakao_label, value: t.kakao.replace('https://', ''), href: t.kakao },
    { icon: MapPin, label: t.address_label, value: t.address, href: null }
  ];

  const brief = t.briefItems
    ? {
        title: t.briefTitle,
        subtitle: t.briefSubtitle,
        items: t.briefItems
      }
    : null;

  return (
    <section className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Contact Info Cards */}
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-3"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block text-lg font-medium hover:text-primary transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium">
                    {item.value}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Brief checklist */}
        {brief && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Info size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-semibold">{brief.title}</h3>
                <p className="text-sm text-neutral-600">{brief.subtitle}</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-700">
              {brief.items.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-primary font-semibold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wider">
                {t.name}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300 placeholder-neutral-400"
                placeholder={t.name}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wider">
                {t.emailLabel}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300 placeholder-neutral-400"
                placeholder={t.emailLabel}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wider">
                {t.message}
              </label>
              <textarea
                required
                rows="6"
                className="w-full px-4 py-3 bg-transparent border-b-2 border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300 placeholder-neutral-400 resize-none"
                placeholder={t.message}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full md:w-auto px-8 py-4 bg-primary text-white font-medium flex items-center justify-center gap-2 hover:bg-secondary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{t.submit}</span>
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
