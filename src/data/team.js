// src/data/team.js

export const ceo = {
  id: 'jinsoo-rhu',
  name: 'Jinsoo Rhu',
  nameKo: '유진수',
  title: 'CEO',
  titleKo: 'CEO 겸 대표',
  image: '/images/team/ceo-jinsoo.jpg',
  bio: {
    en: 'Founder & CEO of Gleedoc. Associate Professor of Surgery at Samsung Medical Center and Sungkyunwon University School of Medicine. Medical illustrator and webtoon author with passion for medical education and visual storytelling.',
    ko: 'Gleedoc 대표이자 창업자. 삼성서울병원 성균관대학교 외과 부교수이며, 메디컬 일러스트레이션과 웹툰을 통해 의학 교육과 시각적 이야기 전달에 열정을 가지고 있습니다.'
  },
  credentials: [
    'Associate Professor, Department of Surgery, Samsung Medical Center & Sungkyunwon University',
    'Founder & Representative, Greendoc Medical Illustration Studio',
    'Webtoon Creator, "Dr. DanGam\'s Medical Stories"',
    'Education Director (Medical), Korean Medical Artists Association'
  ],
  credentialsKo: [
    '삼성서울병원 성균관대학교 외과 부교수',
    '메디컬일러스트 그리닥 대표',
    '메디컬웹툰 닥터단감 작가',
    '대한메디컬아티스트학회 교육이사(의학)'
  ],
  publications: [
    'Dr. DanGam\'s Medical Stories Vol. 1, 2',
    'Dr. DanGam\'s Comic Psychiatry',
    'Dr. DanGam\'s Liver Transplantation Comic'
  ],
  publicationsKo: [
    '닥터단감의 의학이야기 1권, 2권',
    '닥터단감의 만화정신의학',
    '닥터단감의 간이식만화'
  ],
  serializations: [
    'Dong-A Ilbo: \'Doctors Who Draw Comics\' series',
    'InterMD: \'DRDG\' (ongoing)',
    'Various medical comic serials'
  ],
  serializationsKo: [
    "동아일보 만화그리는 의사들 '닥터단감의 퓨처메디' '닥터단감의 도시서바이벌', '닥터단감의 캔서카툰' 연재 중",
    "인터엠디 'DRDG' 연재 중",
    '기타 다양한 의학 만화 연재 경험 및 연재 중'
  ],
  linkedin: 'https://www.linkedin.com/in/jinsoorhu/',
  projectIds: [1, 2, 3] // 참여한 프로젝트 IDs
};

export const medicalIllustrators = [
  {
    id: 'haeun-kim',
    name: 'Haeun Kim',
    nameKo: '김하은',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-kim.jpg',
    bio: {
      en: 'Specialist in surgical and anatomical illustrations with 8+ years of experience in medical visualization.',
      ko: '8년 이상의 경험을 가진 수술 및 해부학 일러스트 전문가입니다.'
    },
    website: 'https://portfolio.example.com/haeun-kim',
    experience: ['Surgical Illustrations', 'Anatomical Drawings', 'Educational Diagrams'],
    interests: ['Medical Education', 'Surgical Techniques', 'Anatomy'],
    projectIds: [1, 4]
  },
  {
    id: 'soyoung-lim',
    name: 'Soyoung Lim',
    nameKo: '임소영',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-lee.jpg',
    bio: {
      en: 'Expert in 3D medical animation and interactive health visualizations for patient education.',
      ko: '3D 메디컬 애니메이션과 환자 교육용 인터랙티브 시각화 전문가입니다.'
    },
    website: 'https://portfolio.example.com/soyoung-lim',
    experience: ['3D Animation', '3D Modeling', 'Motion Graphics'],
    interests: ['3D Technology', 'Animation', 'Patient Education'],
    projectIds: [2, 3]
  },
  {
    id: 'jungin-choi',
    name: 'Jungin Choi',
    nameKo: '최정인',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-park.jpg',
    bio: {
      en: 'Creative designer specializing in medical infographics and educational poster design.',
      ko: '의학 인포그래픽과 교육용 포스터 디자인을 전문으로 하는 창의적인 디자이너입니다.'
    },
    website: 'https://portfolio.example.com/jungin-choi',
    experience: ['Infographic Design', 'Poster Design', 'Visual Communication'],
    interests: ['Information Design', 'Typography', 'Visual Hierarchy'],
    projectIds: [2]
  },
  {
    id: 'hyejeong-hong',
    name: 'Hyejeong Hong',
    nameKo: '홍혜정',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-choi.jpg',
    bio: {
      en: 'Emerging talent in medical illustration with strong foundation in digital art and anatomical drawing.',
      ko: '디지털 아트와 해부학 드로잉에 탄탄한 기초를 가진 신진 일러스트레이터입니다.'
    },
    website: 'https://portfolio.example.com/hyejeong-hong',
    experience: ['Digital Illustration', 'Anatomy Drawing', 'Character Design'],
    interests: ['Medical Art', 'Digital Media', 'Character Illustration'],
    projectIds: [4]
  }
];

export const alumniIllustrators = [
  {
    id: 'nari-kim',
    name: 'Nari Kim',
    nameKo: '김나리',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-alumni-1.jpg',
    bio: {
      en: 'Former medical illustrator with experience across surgical and educational visuals.',
      ko: '수술 및 교육용 비주얼 작업을 수행했던 전 메디컬 일러스트레이터입니다.'
    },
    website: '',
    experience: ['Surgical Illustrations', 'Patient Education'],
    interests: ['Medical Art', 'Education'],
    projectIds: []
  },
  {
    id: 'jehoon-oh',
    name: 'Jehoon Oh',
    nameKo: '오제훈',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-alumni-2.jpg',
    bio: {
      en: 'Focused on 3D and motion graphics for medical communication.',
      ko: '메디컬 커뮤니케이션을 위한 3D와 모션 그래픽에 집중했습니다.'
    },
    website: '',
    experience: ['3D Animation', 'Motion Graphics'],
    interests: ['3D Technology', 'Animation'],
    projectIds: []
  },
  {
    id: 'miseung-kim',
    name: 'Miseung Kim',
    nameKo: '김미승',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-alumni-3.jpg',
    bio: {
      en: 'Experienced in infographic and editorial medical illustration.',
      ko: '인포그래픽과 에디토리얼 메디컬 일러스트 경험을 보유한 전 구성원입니다.'
    },
    website: '',
    experience: ['Infographic Design', 'Editorial Illustration'],
    interests: ['Information Design', 'Editorial'],
    projectIds: []
  },
  {
    id: 'cheolhee-han',
    name: 'Cheolhee Han',
    nameKo: '한철희',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-alumni-4.jpg',
    bio: {
      en: 'Background in anatomical drawing and educational materials.',
      ko: '해부학 드로잉과 교육 자료 제작 경험을 가진 전 메디컬 일러스트레이터입니다.'
    },
    website: '',
    experience: ['Anatomy Drawing', 'Educational Materials'],
    interests: ['Anatomy', 'Education'],
    projectIds: []
  }
];
