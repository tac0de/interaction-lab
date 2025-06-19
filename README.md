# 🧪 interaction-lab

인터랙션 마스터를 위한 실습 중심 프로젝트입니다.  
스크롤을 시작으로, 클릭, 드래그, 마우스, 애니메이션 등 **모든 웹 인터랙션의 핵심 로직**을 컴포넌트화하여 배웁니다.

---

## 🚀 실습 시작 방법

```bash
git clone https://github.com/your-org/interaction-lab.git
cd interaction-lab
npm install
npm run dev
실습 화면: http://localhost:5173/?lesson=01.fade-in

🧭 실습 구조
src/lessons/01.fade-in/ ← 실습별 UI와 연결 코드

src/scripts/interaction-kit/ ← 공용 인터랙션 유닛

src/styles/ ← 디자인 토큰 및 공용 CSS

main.ts ← URL 파라미터로 레슨 전환 가능

🛠 레슨 전환
// http://localhost:5173/?lesson=02.sticky-pin

✅ 간단 설명
과제는 없습니다

실습은 2시간 기준으로 구성되어 있습니다

모든 코드 구성은 바닐라 JavaScript 문법으로 시작합니다 (확장 가능)

📁 레슨 구조 예시
lessons/
└── 01.fade-in/
    ├── App.ts
    └── style.css (선택)