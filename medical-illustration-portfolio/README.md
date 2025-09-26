# 메디컬 일러스트레이션 스튜디오 포트폴리오

## 소개
이 프로젝트는 메디컬 일러스트레이션 스튜디오를 위한 반응형 원페이지 포트폴리오 웹사이트입니다. About, Our Works, FAQ, Contact 섹션과 En/Ko 언어 전환, Masonry 스타일 포트폴리오, 태그 필터, 모달 팝업, FAQ 아코디언, Contact 폼 등 다양한 기능을 제공합니다.

## 주요 기능
- **반응형 원페이지 디자인**: 모바일/데스크톱 모두 최적화
- **상단 고정 내비게이션**: 섹션별 부드러운 스크롤, 언어 전환
- **포트폴리오 Masonry 레이아웃**: 태그별 필터, 썸네일, 상세 모달
- **FAQ 아코디언**: 자주 묻는 질문/답변
- **Contact 폼**: 이름, 이메일, 메시지 입력 및 제출(알림)
- **i18n**: 페이지 새로고침 없이 한/영 전환
- **접근성/SEO/최신 브라우저 호환**

## 폴더 구조
```
medical-illustration-portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── translations.js
├── images/
│   └── (포트폴리오/히어로 이미지)
└── README.md
```

## 시작 방법
1. 이 폴더를 웹 서버 루트 또는 GitHub Pages에 업로드
2. `index.html`을 브라우저에서 열면 바로 사용 가능

## 포트폴리오 항목 추가 방법
- `js/script.js`의 `portfolioData` 배열에 새 객체를 추가하세요.
  - `id`, `title`, `tags`, `thumb`, `images`, `client`, `year`, `artists`, `desc` 필드 필요
  - 썸네일/이미지는 `images/` 폴더에 저장 후 경로 지정

## 주요 기술/모범 사례
- HTML5, CSS3(SCSS 변환 가능), 바닐라 JS
- CSS columns로 Masonry 구현, 커스텀 모달/FAQ
- 시맨틱 마크업, ARIA, alt 텍스트, 메타 태그
- 코드 인라인 주석, 유지보수성 고려

## 수동 테스트 가이드
- **반응형**: 브라우저 크기 조정, 모바일/PC에서 확인
- **필터/모달**: 포트폴리오 태그 필터, 썸네일 클릭 시 상세 팝업 동작 확인
- **FAQ**: 질문 클릭 시 아코디언 열림/닫힘 확인
- **Contact**: 폼 입력 후 제출 시 알림 표시
- **언어 전환**: Ko/En 버튼 클릭 시 모든 텍스트가 즉시 변경되는지 확인

## 이미지/데이터
- Unsplash 등 무료 이미지 사용(샘플 이미지는 `images/portfolio*.jpg` 등으로 경로 지정)
- 실제 배포 시 저작권 유의

## 라이선스
- MIT (원하는 대로 수정/배포 가능)

---
문의: contact@yourstudio.com
