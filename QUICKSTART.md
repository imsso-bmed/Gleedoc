# 🚀 React 버전 빠른 시작 가이드

## 단계별 실행 방법

### 1단계: 의존성 설치
```bash
cd /workspaces/Gleedoc/react-app
npm install
```

**설치 예상 시간**: 2-3분

### 2단계: 개발 서버 시작
```bash
npm run dev
```

**출력 예시**:
```
  VITE v5.0.7  ready in 123 ms

  ➜  Local:   http://localhost:5173/Gleedoc/
  ➜  press h to show help
```

### 3단계: 브라우저에서 확인
- 로컬: http://localhost:5173/Gleedoc/
- 또는 VS Code의 Simple Browser로 열기

---

## ✅ 문제 해결

### ❌ "react-router-dom not found" 오류
**해결됨**: App.jsx에서 미사용 import 제거했습니다.

### ❌ npm install 실패
```bash
# 캐시 초기화 후 재설치
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### ❌ 포트 5173 이미 사용 중
```bash
npm run dev -- --port 5174
```

---

## 📊 두 버전 비교

### 같은 창에서 동시 실행
```bash
# 터미널 1: 바닐라 JS (포트 5500)
cd /workspaces/Gleedoc/medical-illustration-portfolio
python3 -m http.server 5500

# 터미널 2: React 버전 (포트 5173)
cd /workspaces/Gleedoc/react-app
npm install
npm run dev
```

그 다음 두 탭에서 각각 열어서 비교:
- http://localhost:5500 (바닐라 JS)
- http://localhost:5173/Gleedoc/ (React)

---

## 🔑 주요 기능

✨ **React 버전의 특징**
- 마그네틱 커서
- Letter-by-letter 텍스트 애니메이션
- 부드러운 호버 효과
- 마퀴 슬라이더
- 아코디언 FAQ
- 다국어 지원 (EN/KO)

---

## 📈 성능 확인

### Lighthouse 점수
```bash
npm run build  # 프로덕션 빌드
npm run preview  # 빌드된 버전 미리보기
```

그 다음 Chrome DevTools → Lighthouse에서 분석

---

## 🔧 개발 팁

### 핫 리로드 (수정하면 자동 새로고침)
- Vite가 자동으로 처리됨
- 파일 저장 → 브라우저 즉시 업데이트

### 컴포넌트 수정
```
src/components/ 폴더의 .jsx 파일 수정
→ 자동으로 새로고침
```

### 스타일 수정
```
Tailwind 클래스명 변경 → 자동 반영
또는 src/App.css 수정
```

---

## 💾 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
```

**결과**: `dist/` 폴더 생성
- HTML, CSS, JS 최적화
- 번들 크기 약 60KB (gzip)

### GitHub Pages에 배포
```bash
npm run build
git add dist/
git commit -m "build: react version production build"
git push origin feature/react-redesign
```

---

## 📞 다음 단계

1. **npm install 실행**
2. **npm run dev로 로컬 확인**
3. **두 버전 비교 분석**
4. **최종 선택 후 배포 결정**

**Happy developing! 🎉**
