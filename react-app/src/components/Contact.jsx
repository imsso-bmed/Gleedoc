import React from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    title: "Contact",
    email: "hello@gleedoc.com",
    name: "Name",
    emailLabel: "Email",
    message: "Message",
    submit: "Send Message",
    success: "Message sent successfully!"
  },
  ko: {
    title: "문의",
    email: "hello@gleedoc.com",
    name: "이름",
    emailLabel: "이메일",
    message: "메시지",
    submit: "보내기",
    success: "메시지가 성공적으로 전송되었습니다!"
  }
};

export default function Contact({ lang }) {
  const t = translations[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.success);
    e.target.reset();
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">
          {t.title}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-primary font-medium"
        >
          <a href={`mailto:${t.email}`} className="hover:opacity-70 transition-opacity">
            {t.email}
          </a>
        </motion.div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-white border border-neutral-200 rounded-lg p-8 md:p-12"
      >
        <div className="mb-6">
          <label className="block font-medium mb-2">{t.name}</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            placeholder={t.name}
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">{t.emailLabel}</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            placeholder={t.emailLabel}
          />
        </div>

        <div className="mb-8">
          <label className="block font-medium mb-2">{t.message}</label>
          <textarea
            required
            rows="5"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            placeholder={t.message}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          {t.submit}
        </button>
      </motion.form>
    </section>
  );
}
