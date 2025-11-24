export const DxLab = {
  id: "2",
  title: "생성형 AI로 취업 준비 : 자격증 및 자기소개서 준비 웹 사이트 개발",
  description:
    "FastAPI, Svelte 이용한 자격증 및 자기소개서 보조도구를 위한 웹 사이트 개발",
  detailContent: `## 개요

  DxLab은 사용자, 질문, 시험 및 Gemini 관련 데이터를 관리하기 위한 다중 서비스 애플리케이션입니다. FastAPI를 백엔드 서비스로 사용하고, PostgreSQL을 데이터베이스로 관리하며, Svelte를 프론트엔드로 활용합니다. 이 프로젝트는 Docker를 사용하여 컨테이너화되었으며 Alembic을 통해 데이터베이스 마이그레이션을 지원합니다.
  
  ## 주요 기능
  
  - **사용자 관리**: 사용자 계정 생성, 업데이트 및 관리.
  - **질문 관리**: 질문에 대한 CRUD 작업.
  - **시험 관리**: 시험 및 관련 질문 생성 및 관리.
  - **Gemini 통합**: Gemini 관련 데이터 처리.
  - **AI 통합**: Ollama LLM을 활용한 프롬프트 생성 및 분석.
  - **프론트엔드**: Svelte를 사용한 반응형 UI.
  
  ## 사용 기술
  
  ### 백엔드
  
  - **FastAPI**: RESTful API 구축.
  - **SQLAlchemy**: 데이터베이스 상호작용을 위한 ORM.
  - **Alembic**: 데이터베이스 마이그레이션.
  - **Ollama LLM**: AI 모델 통합.
  
  ### 프론트엔드
  
  - **Svelte**: UI 구축을 위한 프레임워크.
  - **Vite**: 프론트엔드 개발을 위한 빌드 도구.
  
  ### 데이터베이스
  
  - **PostgreSQL**: 관계형 데이터베이스.
  
  ### 컨테이너화
  
  - **Docker**: 백엔드, 프론트엔드 및 데이터베이스를 위한 컨테이너화된 서비스.
  
  ## 설치 방법
  
  ### 사전 준비
  
  - Docker
  - Python 3.10+
  
  ### 설치
  
  1. 레포지토리 클론:
  
  \`git clone <repository-url>; cd DxLab\`
  
  1. Docker Compose를 사용하여 서비스 빌드 및 시작:
  
  \`docker-compose up --build\`
  
  1. 서비스 접근:
  - 백엔드: \`http://localhost:8000\`
  - 프론트엔드: \`http://localhost:3000\`
  
  ### 데이터베이스 마이그레이션
  
  Alembic 마이그레이션 실행:
  
  \`alembic upgrade head\`
  
  ## 주요 파일
  
  - **\`main.py\`**: FastAPI 애플리케이션의 진입점.
  - **\`model_server.py\`**: AI 모델 통합 처리.
  - **\`models.py\`**: 데이터베이스 테이블을 위한 SQLAlchemy 모델.
  - **\`Dockerfile\`**: 백엔드의 Docker 설정.
  - **\`docker-compose.yml\`**: 다중 서비스 Docker 설정.
  - **\`frontend/\`**: Svelte 기반 프론트엔드.`,
  tags: ["Python", "FastAPI", "PostgreSQL", "Llama 3.1", "Gemma 2.0", "Docker"],
  image: "/images/projects/dxlab.png",
  github: "https://github.com/ryongseong/DxLab",
  workPeriod: {
    start: "2024-03-04",
    end: "2024-10-16",
  },
};

export default DxLab;
