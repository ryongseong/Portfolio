export const MediX = {
  id: "3",
  title: "ChatGPT 기반 한의학 시뮬레이션 교육 플랫폼 개발 및 적용",
  description:
    "생성형AI을 환자 역할로 설정하여 학생들이 모의진료를 하게 할 수 있는 Express.js 환경 웹 애플리케이션 개발",
  detailContent: `**프로젝트 개요:**

  - **목표:** 이 프로젝트는 교수와 학생을 위한 챗봇 기반 교육 플랫폼입니다. 교수는 강의, 시나리오(환자), 과제를 생성하고 학생의 수강 신청을 승인하며 과제에 대한 피드백을 제공할 수 있습니다. 학생은 강의를 신청하고, 과제를 수행하며, 진단 시뮬레이션을 진행할 수 있습니다. 관리자는 교수 계정 승인 등의 관리 기능을 수행합니다.
  - **주요 기능:**
      - 사용자 인증 (회원가입, 로그인, 로그아웃, 비밀번호 초기화, 토큰 검증)
      - 교수 기능: 강의 관리, 시나리오(환자 페르소나) 관리, 과제 관리, 수강생 관리, 피드백 제공
      - 학생 기능: 수강 신청, 학생 정보 수정, 과제 수행 (진단 시작, 질문 추가, 진단 내용 추가/수정, 진단 종료, 중단)
      - 관리자 기능: 교수 승인
  
  **기술 스택:**
  
  **백엔드:**
  
  - Node.js
  - Express.js (웹 프레임워크)
  - MongoDB (데이터베이스, \`mongoose\` ODM 사용)
  - PM2 (프로세스 매니저, ecosystem.config.js 설정)
  - JSON Web Tokens (JWT) (인증, \`jsonwebtoken\` 라이브러리)
  - \`bcryptjs\` (비밀번호 해싱)
  - \`nodemailer\` (이메일 발송)
  - \`multer\`, \`express-fileupload\` (파일 업로드 처리)
  - \`sharp\`, \`resize-img\` (이미지 처리)
  - \`dotenv\` (환경 변수 관리)
  - \`cors\` (Cross-Origin Resource Sharing)
  - \`body-parser\`, \`cookie-parser\`, \`cookie-session\` (미들웨어)
  
  **프론트엔드:**
  
  - React (UI 라이브러리, \`App.js\`, \`index.js\` 등)
  - \`axios\` (HTTP 클라이언트)
  - React Router (라우팅, 추정)
  - CSS (스타일링)
  
  **개발 도구 및 환경:**
  
  - \`nodemon\` (개발 중 서버 자동 재시작)
  - \`cross-env\` (환경 변수 설정 호환성)`,
  tags: ["node.js", "MongoDB", "JavaScript", "React", "OpenAI", "Express"],
  image: "/images/projects/medi-x.png",
  github: "",
  workPeriod: {
    start: "2024-06-11",
    end: "2024-08-31",
  },
};

export default MediX;
