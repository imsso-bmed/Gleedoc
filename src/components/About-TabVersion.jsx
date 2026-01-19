// src/components/About-TabVersion.jsx
// 탭 방식: CEO / Medical Illustrators 탭으로 전환

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ceo, medicalIllustrators, alumniIllustrators } from '../data/team';
import { Link } from 'lucide-react';

const translations = {
  en: {
    about: 'About',
    ceoTab: 'CEO',
    illustratorsTab: 'Medical Illustrators',
    credentials: 'Credentials',
    publications: 'Publications',
    serializations: 'Serializations',
    experience: 'Experience',
    interests: 'Interests',
    portfolio: 'View Portfolio',
    visitWebsite: 'Visit Website',
    viewProjects: 'View Projects',
    alumniTab: 'Alumni',
    alumniEmpty: 'No alumni listed yet'
  },
  ko: {
    about: 'About',
    ceoTab: 'CEO',
    illustratorsTab: 'Medical Illustrators',
    credentials: '경력',
    publications: '저서',
    serializations: '연재작',
    experience: '경험',
    interests: '관심사',
    portfolio: '포트폴리오 보기',
    visitWebsite: '웹사이트 방문',
    viewProjects: '해당 프로젝트 보기',
    alumniTab: 'Alumni',
    alumniEmpty: '등록된 Alumni가 없습니다'
  }
};

export default function AboutTabVersion({ lang, onSelectArtist = () => {} }) {
  const [activeTab, setActiveTab] = useState('ceo');
  const isKo = lang === 'ko';
  const t = translations[lang];

  const sortedIllustrators = useMemo(() => {
    const arr = [...medicalIllustrators];
    return arr.sort((a, b) =>
      isKo
        ? a.nameKo.localeCompare(b.nameKo, 'ko')
        : a.name.localeCompare(b.name, 'en')
    );
  }, [isKo]);

  const sortedAlumni = useMemo(() => {
    const arr = [...alumniIllustrators];
    return arr.sort((a, b) =>
      isKo
        ? a.nameKo.localeCompare(b.nameKo, 'ko')
        : a.name.localeCompare(b.name, 'en')
    );
  }, [isKo]);

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12">
          {t.about}
        </h2>

        {/* 탭 버튼 */}
        <div className="flex gap-4 mb-12 border-b border-black/10">
          <button
            onClick={() => setActiveTab('ceo')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'ceo'
                ? 'border-b-2 border-black text-black'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            {t.ceoTab}
          </button>
          <button
            onClick={() => setActiveTab('illustrators')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'illustrators'
                ? 'border-b-2 border-black text-black'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            {t.illustratorsTab}
          </button>
          <button
            onClick={() => setActiveTab('alumni')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'alumni'
                ? 'border-b-2 border-black text-black'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            {t.alumniTab}
          </button>
        </div>

        {/* CEO 탭 */}
        {activeTab === 'ceo' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative aspect-square bg-neutral-200 rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72 mx-auto md:mx-0">
                <img
                  src={ceo.image}
                  alt={isKo ? ceo.nameKo : ceo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-4xl font-bold">
                        {isKo ? ceo.nameKo : ceo.name}
                      </h3>
                      <p className="text-xl text-primary font-semibold">
                        {isKo ? ceo.titleKo : ceo.title}
                      </p>
                    </div>
                    <a
                      href={ceo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors whitespace-nowrap"
                    >
                      <Link size={14} />
                      LinkedIn
                    </a>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  {isKo ? ceo.bio.ko : ceo.bio.en}
                </p>

                {/* 자격 및 경력 */}
                <div>
                  <h4 className="font-bold mb-3">{t.credentials}</h4>
                  <ul className="space-y-2">
                    {(isKo ? ceo.credentialsKo : ceo.credentials).map((cred, i) => (
                      <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 저서 */}
                <div>
                  <h4 className="font-bold mb-3">{t.publications}</h4>
                  <ul className="space-y-2">
                    {(isKo && ceo.publicationsKo ? ceo.publicationsKo : ceo.publications).map((pub, i) => (
                      <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 연재 */}
                <div>
                  <h4 className="font-bold mb-3">{t.serializations}</h4>
                  <ul className="space-y-2">
                    {(isKo && ceo.serializationsKo ? ceo.serializationsKo : ceo.serializations).map((serial, i) => (
                      <li key={i} className="text-sm text-neutral-600 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{serial}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectArtist(ceo.id)}
                  className="w-full text-sm font-semibold px-4 py-3 bg-black text-white rounded-md hover:bg-primary transition-colors"
                >
                  {t.viewProjects}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Medical Illustrators 탭 */}
        {activeTab === 'illustrators' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {sortedIllustrators.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-neutral-200 overflow-hidden h-44 md:h-52">
                  <img
                    src={artist.image}
                    alt={isKo ? artist.nameKo : artist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {isKo ? artist.nameKo : artist.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {isKo ? artist.roleKo : artist.role}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-600">
                    {isKo ? artist.bio.ko : artist.bio.en}
                  </p>

                  {/* 경험 */}
                  <div>
                    <h4 className="font-bold text-sm mb-2">{t.experience}</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.experience.map((exp, i) => (
                        <span
                          key={i}
                          className="text-xs bg-neutral-100 px-2 py-1 rounded"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 관심사 */}
                  <div>
                    <h4 className="font-bold text-sm mb-2">{t.interests}</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.interests.map((interest, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 웹사이트 링크 */}
                  <a
                    href={artist.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                  >
                    <Link size={14} />
                    {t.visitWebsite}
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectArtist(artist.id)}
                    className="w-full text-sm font-semibold px-3 py-2 bg-black text-white rounded-md hover:bg-primary transition-colors"
                  >
                    {t.viewProjects}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Alumni 탭 */}
        {activeTab === 'alumni' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {sortedAlumni.length === 0 && (
              <div className="col-span-full text-neutral-500 text-sm text-center py-8">
                {t.alumniEmpty}
              </div>
            )}

            {sortedAlumni.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-neutral-200 overflow-hidden h-44 md:h-52">
                  <img
                    src={artist.image}
                    alt={isKo ? artist.nameKo : artist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {isKo ? artist.nameKo : artist.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {isKo ? artist.roleKo : artist.role}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-600">
                    {isKo ? artist.bio.ko : artist.bio.en}
                  </p>

                  <div>
                    <h4 className="font-bold text-sm mb-2">{t.experience}</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.experience.map((exp, i) => (
                        <span
                          key={i}
                          className="text-xs bg-neutral-100 px-2 py-1 rounded"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm mb-2">{t.interests}</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.interests.map((interest, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
