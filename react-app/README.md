# Gleedoc React Redesign 🚀

## 📌 프로젝트 개요

이 브랜치는 **React + Framer Motion + Tailwind CSS**를 사용하여 Bold Editorial Studio 스타일로 Gleedoc 포트폴리오를 재설계한 버전입니다.

### 주요 특징
- ✨ **Bold Editorial Studio 디자인**: 매력적인 타이포그래피와 마이크로 인터랙션
- 🎨 **Framer Motion 애니메이션**: 부드러운 text reveal, 마그네틱 커서, 호버 효과
- 🌐 **다국어 지원**: 영어/한국어 완벽 지원
- ⚡ **Vite 기반**: 빠른 개발 환경 및 최적화된 빌드
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 완벽 호환

---

## 🗂️ 프로젝트 구조

```
react-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # 네비게이션 + 언어 전환
│   │   ├── Hero.jsx             # 메인 히어로 섹션
│   │   ├── ProjectSlider.jsx    # 마퀴 슬라이더
│   │   ├── About.jsx            # 스튜디오 소개
│   │   ├── ProjectGrid.jsx      # 포트폴리오 그리드
│   │   ├── FAQ.jsx              # 자주 묻는 질문
│   │   ├── Contact.jsx          # 문의 폼
│   │   ├── Cursor.jsx           # 마그네틱 커서
│   │   └── Footer.jsx           # 푸터
│   ├── App.jsx                  # 메인 앱 컴포넌트
│   ├── App.css                  # 커스텀 스타일
│   ├── index.css                # 글로벌 스타일
│   └── main.jsx                 # 엔트리 포인트
├── index.html
├── vite.config.js               # Vite 설정
├── tailwind.config.js           # Tailwind 설정
├── postcss.config.js
└── package.json
```

---

## 🚀 시작하기

### 설치
```bash
cd react-app
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 빌드
```bash
npm run build
```

최적화된 파일이 `dist/` 폴더에 생성됩니다.

---

## 📊 바닐라 JS vs React 비교

| 항목 | 바닐라 JS | React |
|------|----------|-------|
| **번들 크기** | ~50KB | ~200KB |
| **초기 로딩** | 매우 빠름 ⚡ | 느림 |
| **애니메이션** | CSS 기반 | Framer Motion으로 우아함 ✨ |
| **상태 관리** | 수동 | 자동 동기화 |
| **코드 재사용성** | 낮음 | 높음 |
| **유지보수** | 복잡 | 간편 |
| **SEO** | 우수 | Client-side 렌더링 |
| **모바일 성능** | 우수 | 중간 |

### 🎯 추천 선택
- **현재 버전 (바닐라)**: 빠른 로딩, SEO 중요한 경우
- **React 버전**: 고급 애니메이션, 복잡한 상호작용 필요 시

---

## 🔄 GitHub Pages에 배포

### 1. GitHub Actions 워크플로우 설정 필요
`.github/workflows/deploy.yml` 파일 생성 후 자동 배포 가능

### 2. 수동 배포
```bash
npm run build
git add dist/
git commit -m "build: deploy react version"
git push origin feature/react-redesign
```

---

## 💡 주요 개선사항

### vs 바닐라 JS 버전

✅ **개선된 점**
- 마그네틱 커서로 상호작용성 향상
- Framer Motion으로 더 부드러운 애니메이션
- 컴포넌트 기반 코드로 재사용성 증대
- 상태 관리 자동화
- 더 모던한 UI/UX

⚠️ **트레이드오프**
- 번들 크기 약 4배 증가 (50KB → 200KB)
- 초기 로딩 속도 약간 느림
- 클라이언트 렌더링으로 SEO 약간 약함

---

## 📝 다음 단계

### 우선순위
1. ✅ 기본 레이아웃 구현
2. ⏳ 실제 포트폴리오 이미지/데이터 추가
3. ⏳ EmailJS 통합 (Contact 폼)
4. ⏳ 성능 최적화 (Code Splitting, Lazy Loading)
5. ⏳ 구글 Analytics 추가

---

## 🔗 참고 자료

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Bold Editorial Studio Reference](https://superdesign.design/)

---

## 📞 개발 팀

이 프로젝트는 **Gleedoc** 팀이 유지보수합니다.

---

## 💬 피드백

이 React 버전과 현재 바닐라 버전의 성능/UX를 비교한 후, 최종 방향을 결정하세요!
