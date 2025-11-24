export const whereIsDrug = {
  id: "1",
  title: "어디약?",
  description:
    "약국, 병원 및 약 데이터를 활용하여 사용자 위치 기반 추천 서비스를 위한 Express.js 환경 웹 애플리케이션 개발",
  detailContent: `## 설명

  이 프로젝트는 프론트엔드와 백엔드가 분리된 웹 애플리케이션입니다. 백엔드는 의약품, 병원, 약국 및 상점과 관련된 데이터를 제공합니다. 프론트엔드는 검색 기능 및 지도에 정보 표시를 포함하여 이 데이터와 상호 작용하는 사용자 인터페이스를 제공합니다.
  
  ## 개요
  
  사용자가 의약품 정보, 주변 병원 및 약국, 그리고 안전상비의약품 판매점 위치를 쉽게 찾을 수 있도록 돕는 웹 서비스입니다. 사용자는 통합 검색 기능을 통해 원하는 정보를 신속하게 얻을 수 있으며, 지도 서비스를 통해 관련 시설의 위치를 시각적으로 확인할 수 있습니다. 또한, 챗봇 기능을 통해 사용자의 질문에 답변하고 필요한 정보를 안내합니다.
  
  ## 주요 기능
  
  - **통합 검색**: 의약품, 병원, 약국, 안전상비의약품 판매점 정보를 한 곳에서 검색할 수 있습니다.
  - **상세 정보 제공**: 검색 결과에 대한 상세 정보(예: 병원 진료 시간, 약국 운영 정보, 의약품 효능/효과, 판매점 재고 현황 등)를 제공합니다.
  - **지도 연동**: Naver Maps API를 활용하여 병원, 약국, 판매점의 위치를 지도에 표시하고, 사용자의 현재 위치 기반 검색 기능을 제공합니다.
  - **챗봇 상담**: 간단한 질문에 대한 답변 및 서비스 이용 안내를 위한 챗봇 기능을 제공합니다.
  - **안전상비의약품 정보**: 편의점 등 안전상비의약품 판매처 정보 및 현재 재고 현황을 제공합니다.
  
  ### 사전 요구 사항
  
  - Node.js 및 npm이 설치되어 있어야 합니다.
  - MongoDB 인스턴스가 실행 중이어야 합니다(로컬 데이터베이스를 사용하는 경우).
  
  ### 백엔드
  
  1. \`backend\` 디렉토리로 이동합니다. \`cd backend\`
  2. 종속성을 설치합니다. \`npm install\`
  3. \`backend\` 디렉토리에 필요한 환경 변수(예: 데이터베이스 연결 문자열, API 키)를 사용하여 \`.env\` 파일을 만듭니다.
  4. 개발 서버를 시작합니다. \`npm run dev\` 백엔드 서버는 일반적으로 \`http://localhost:PORT\`에서 실행됩니다(포트는 일반적으로 환경 변수 또는 \`server.js\`에 정의됨).
  
  ### 프론트엔드
  
  1. \`frontend\` 디렉토리로 이동합니다. \`cd frontend\`
  2. 종속성을 설치합니다. \`npm install\`
  3. 개발 서버를 시작합니다. \`npm start\` 프론트엔드 애플리케이션은 일반적으로 \`http://localhost:3000\`에서 실행됩니다.
  
  ## 주요 종속성
  
  ### Backend
  
  - **Node.js**: JavaScript 런타임 환경
  - **Express.js**: 웹 애플리케이션 프레임워크
  - **Mongoose**: MongoDB 객체 데이터 모델링(ODM) 라이브러리
  - **Axios**: Promise 기반 HTTP 클라이언트
  - **dotenv**: \`.env\` 파일의 환경 변수 로드 유틸리티
  - **Nodemon**: 개발 중 코드 변경 시 서버 자동 재시작 (개발 의존성)
  - **body-parser**: HTTP 요청 본문 파싱 미들웨어
  - **cors**: 교차 출처 리소스 공유(CORS) 활성화 미들웨어
  - **multer**: \`multipart/form-data\` (파일 업로드) 처리 미들웨어
  - **cheerio**: HTML 및 XML 파싱 및 조작 라이브러리
  - **puppeteer**: Headless Chrome 또는 Chromium 제어 라이브러리 (웹 크롤링 등에 사용)
  - **config**: 애플리케이션 설정 관리 라이브러리
  - **connect-flash**: 세션 기반 플래시 메시지 표시 미들웨어
  - **ejs**: 임베디드 JavaScript 템플릿 엔진
  - **fs-extra**: Node.js \`fs\` 모듈에 추가적인 파일 시스템 메서드 제공
  - **method-override**: HTTP 동사(PUT, DELETE 등) 사용 지원 미들웨어
  
  ### Frontend
  
  - **React**: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
  - **React Router DOM**: React 애플리케이션 내 페이지 라우팅 관리
  - **Axios**: Promise 기반 HTTP 클라이언트
  - **Styled-components**: 컴포넌트 기반 CSS-in-JS 스타일링 라이브러리
  - **React Naver Maps**: Naver Maps API를 사용하기 위한 React 컴포넌트
  - **React Icons**: 다양한 아이콘 세트를 React 컴포넌트로 제공
  - **Swiper**: 모바일 친화적인 터치 슬라이더 라이브러리
  - **React Scripts**: Create React App 프로젝트의 스크립트 및 설정 (빌드, 테스트, 실행 등)`,
  tags: ["node.js", "MongoDB", "HTML", "CSS", "React", "JavaScript", "Express"],
  image: "/images/projects/where-is-drug.png",
  github: "https://github.com/ryongseong/CapStone",
  workPeriod: {
    start: "2024-03-04",
    end: "2024-06-19",
  },
};

export default whereIsDrug;
