// script.js - 인터랙션 및 동적 렌더링

// 샘플 포트폴리오 데이터 (Unsplash 이미지 사용)
const portfolioData = [
  {
    id: 1,
    title: { ko: "심장 수술 일러스트", en: "Heart Surgery Illustration" },
    tags: ["surgical", "anatomy"],
    thumb: "images/portfolio1.jpg",
    images: ["images/portfolio1.jpg"],
    client: "서울대병원",
    year: "2024",
    artists: ["김아트", "이메디"],
    desc: {
      ko: "심장 수술 과정을 시각적으로 표현한 일러스트입니다.",
      en: "An illustration visualizing the process of heart surgery."
    }
  },
  {
    id: 2,
    title: { ko: "정형외과 포스터", en: "Orthopedic Poster" },
    tags: ["poster", "infographic"],
    thumb: "images/portfolio2.jpg",
    images: ["images/portfolio2.jpg"],
    client: "정형외과학회",
    year: "2023",
    artists: ["박포스터"],
    desc: {
      ko: "정형외과 질환을 쉽게 설명하는 인포그래픽 포스터.",
      en: "An infographic poster explaining orthopedic diseases."
    }
  },
  {
    id: 3,
    title: { ko: "3D 신장 애니메이션", en: "3D Kidney Animation" },
    tags: ["3d", "anatomy"],
    thumb: "images/portfolio3.jpg",
    images: ["images/portfolio3.jpg"],
    client: "메디컬미디어",
    year: "2024",
    artists: ["최3D", "김애니"],
    desc: {
      ko: "신장 구조와 기능을 3D로 표현한 애니메이션.",
      en: "A 3D animation showing kidney structure and function."
    }
  },
  {
    id: 4,
    title: { ko: "해부학 교재 일러스트", en: "Anatomy Textbook Illustration" },
    tags: ["anatomy", "editorial"],
    thumb: "images/portfolio4.jpg",
    images: ["images/portfolio4.jpg"],
    client: "의학출판사",
    year: "2022",
    artists: ["이해부"],
    desc: {
      ko: "해부학 교재용 상세 일러스트.",
      en: "Detailed illustration for anatomy textbooks."
    }
  },
  {
    id: 5,
    title: { ko: "수술 절차 인포그래픽", en: "Surgical Procedure Infographic" },
    tags: ["infographic", "surgical"],
    thumb: "images/portfolio5.jpg",
    images: ["images/portfolio5.jpg"],
    client: "헬스케어센터",
    year: "2023",
    artists: ["정인포"],
    desc: {
      ko: "수술 절차를 한눈에 볼 수 있는 인포그래픽.",
      en: "Infographic summarizing surgical procedures."
    }
  },
  {
    id: 6,
    title: { ko: "의학 저널 에디토리얼", en: "Medical Journal Editorial" },
    tags: ["editorial"],
    thumb: "images/portfolio6.jpg",
    images: ["images/portfolio6.jpg"],
    client: "메디컬저널",
    year: "2024",
    artists: ["한에디"],
    desc: {
      ko: "의학 저널에 게재된 에디토리얼 일러스트.",
      en: "Editorial illustration published in a medical journal."
    }
  },
  {
    id: 7,
    title: { ko: "3D 혈관 애니메이션", en: "3D Vessel Animation" },
    tags: ["3d"],
    thumb: "images/portfolio7.jpg",
    images: ["images/portfolio7.jpg"],
    client: "바이오비주얼",
    year: "2023",
    artists: ["최3D"],
    desc: {
      ko: "혈관 구조를 3D로 표현한 애니메이션.",
      en: "3D animation of vessel structure."
    }
  },
  {
    id: 8,
    title: { ko: "포스터: 감염 예방", en: "Poster: Infection Prevention" },
    tags: ["poster"],
    thumb: "images/portfolio8.jpg",
    images: ["images/portfolio8.jpg"],
    client: "감염관리협회",
    year: "2022",
    artists: ["박포스터"],
    desc: {
      ko: "감염 예방을 위한 교육용 포스터.",
      en: "Educational poster for infection prevention."
    }
  }
];

// FAQ 데이터는 translations.js에서 관리

// 현재 언어 상태
let currentLang = 'en';

// i18n 텍스트 적용 함수
function applyTranslations() {
  const t = translations[currentLang];
  // 내비게이션
  document.querySelectorAll('.nav-link').forEach((el) => {
    const sec = el.getAttribute('data-section');
    if (t.nav[sec]) el.textContent = t.nav[sec];
  });
  document.getElementById('lang-ko').textContent = t.lang.ko;
  document.getElementById('lang-en').textContent = t.lang.en;
  // About
  document.getElementById('about-title').textContent = t.about.title;
  document.getElementById('about-desc').textContent = t.about.desc;
  const mission = document.getElementById('about-mission');
  mission.innerHTML = t.about.mission.map(m => `<li>${m}</li>`).join('');
  document.getElementById('team-intro').querySelector('h2').textContent = t.about.teamTitle;
  document.getElementById('team-intro').querySelector('p').textContent = t.about.teamDesc;
  // Works
  document.getElementById('works-title').textContent = t.works.title;
  // FAQ
  document.getElementById('faq-title').textContent = t.faq.title;
  // Contact
  document.getElementById('contact-title').textContent = t.contact.title;
  document.getElementById('label-name').textContent = t.contact.name;
  document.getElementById('label-email').textContent = t.contact.email;
  document.getElementById('label-message').textContent = t.contact.message;
  document.getElementById('submit-btn').textContent = t.contact.submit;
}

// 언어 전환 이벤트
function setupLangSwitcher() {
  // 데스크톱
  const koBtn = document.getElementById('lang-ko');
  const enBtn = document.getElementById('lang-en');
  // 모바일
  const koBtnMobile = document.getElementById('lang-ko-mobile');
  const enBtnMobile = document.getElementById('lang-en-mobile');
  function updateActive() {
    if (currentLang === 'ko') {
      koBtn && koBtn.classList.add('active');
      koBtn && koBtn.setAttribute('aria-pressed', 'true');
      enBtn && enBtn.classList.remove('active');
      enBtn && enBtn.setAttribute('aria-pressed', 'false');
      koBtnMobile && koBtnMobile.classList.add('active');
      koBtnMobile && koBtnMobile.setAttribute('aria-pressed', 'true');
      enBtnMobile && enBtnMobile.classList.remove('active');
      enBtnMobile && enBtnMobile.setAttribute('aria-pressed', 'false');
    } else {
      enBtn && enBtn.classList.add('active');
      enBtn && enBtn.setAttribute('aria-pressed', 'true');
      koBtn && koBtn.classList.remove('active');
      koBtn && koBtn.setAttribute('aria-pressed', 'false');
      enBtnMobile && enBtnMobile.classList.add('active');
      enBtnMobile && enBtnMobile.setAttribute('aria-pressed', 'true');
      koBtnMobile && koBtnMobile.classList.remove('active');
      koBtnMobile && koBtnMobile.setAttribute('aria-pressed', 'false');
    }
  }
  function setLang(lang) {
    if (currentLang !== lang) {
      currentLang = lang;
      updateAll();
      updateActive();
    }
  }
  koBtn && koBtn.addEventListener('click', () => setLang('ko'));
  enBtn && enBtn.addEventListener('click', () => setLang('en'));
  koBtnMobile && koBtnMobile.addEventListener('click', () => setLang('ko'));
  enBtnMobile && enBtnMobile.addEventListener('click', () => setLang('en'));
  updateActive();
}

// 내비게이션 스크롤
function setupNavScroll() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById(this.getAttribute('href').substring(1));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Works 필터 버튼 생성 및 이벤트
function renderWorksFilter() {
  const t = translations[currentLang];
  const filterWrap = document.getElementById('works-filter');
  filterWrap.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = t.works.filterAll;
  allBtn.setAttribute('data-tag', 'all');
  filterWrap.appendChild(allBtn);
  // 모든 태그 추출
  const tags = Array.from(new Set(portfolioData.flatMap(item => item.tags)));
  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = t.works.tags[tag] || tag;
    btn.setAttribute('data-tag', tag);
    filterWrap.appendChild(btn);
  });
  // 이벤트
  filterWrap.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      filterWrap.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderWorksGallery(this.getAttribute('data-tag'));
    });
  });
}

// Works 갤러리 렌더링
function renderWorksGallery(filterTag = 'all') {
  const t = translations[currentLang];
  const gallery = document.getElementById('works-gallery');
  gallery.innerHTML = '';
  let items = portfolioData;
  if (filterTag !== 'all') {
    items = items.filter(item => item.tags.includes(filterTag));
  }
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.setAttribute('tabindex', '0');
    div.setAttribute('role', 'button');
    div.setAttribute('aria-label', item.title[currentLang]);
    div.addEventListener('click', () => openModal(item));
    div.addEventListener('keypress', e => { if (e.key === 'Enter') openModal(item); });
    div.innerHTML = `
      <img src="${item.thumb}" alt="${item.title[currentLang]}" class="portfolio-thumb" />
      <div class="portfolio-info">
        <div class="portfolio-title">${item.title[currentLang]}</div>
        <div class="portfolio-tags">
          ${item.tags.map(tag => `<span class="portfolio-tag">${t.works.tags[tag] || tag}</span>`).join(' ')}
        </div>
      </div>
    `;
    gallery.appendChild(div);
  });
}

// 모달 팝업
function openModal(item) {
  const t = translations[currentLang];
  const modal = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <h3 id="modal-title">${item.title[currentLang]}</h3>
    <div class="modal-meta">
      <strong>${t.modal.client}:</strong> ${item.client}<br>
      <strong>${t.modal.year}:</strong> ${item.year}<br>
      <strong>${t.modal.artists}:</strong> ${item.artists.join(', ')}
    </div>
    <div class="modal-images">
      ${item.images.map(img => `<img src="${img}" alt="${item.title[currentLang]}" style="width:100%;margin:1rem 0;border-radius:0.7rem;" />`).join('')}
    </div>
    <div class="modal-desc">
      <strong>${t.modal.desc}:</strong><br>
      <p>${item.desc[currentLang]}</p>
    </div>
  `;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// FAQ 렌더링
function renderFAQ() {
  const t = translations[currentLang];
  const faqList = document.getElementById('faq-list');
  faqList.innerHTML = '';
  t.faq.items.forEach((item, idx) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    const qBtn = document.createElement('button');
    qBtn.className = 'faq-question';
    qBtn.setAttribute('aria-expanded', 'false');
    qBtn.textContent = item.q;
    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.textContent = item.a;
    qBtn.addEventListener('click', function() {
      const open = faqItem.classList.toggle('open');
      qBtn.setAttribute('aria-expanded', open);
    });
    faqItem.appendChild(qBtn);
    faqItem.appendChild(answer);
    faqList.appendChild(faqItem);
  });
}

// Contact 폼
function setupContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const t = translations[currentLang];
    alert(t.contact.success);
    form.reset();
  });
}

// 모든 동적 렌더링/초기화
function updateAll() {
  applyTranslations();
  renderWorksFilter();
  renderWorksGallery();
  renderFAQ();
}

// 햄버거 메뉴 토글
function setupNavHamburger() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle.addEventListener('click', function() {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  // 메뉴 클릭 시 닫기 (모바일 UX)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  applyTranslations();
  setupLangSwitcher();
  setupNavScroll();
  setupNavHamburger();
  renderWorksFilter();
  renderWorksGallery();
  renderFAQ();
  setupContactForm();
});
