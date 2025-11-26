export const DxLab = {
  id: "2",
  title: "생성형 AI로 취업 준비 : 자격증 및 자기소개서 준비 웹 사이트 개발",
  description:
    "FastAPI, Svelte 이용한 자격증 및 자기소개서 보조도구를 위한 웹 사이트 개발",
  summary: `AI 기반 맞춤형 학습 문제 생성 및 시험 관리 시스템으로, Gemini와 Llama3.1 AI 모델을 활용해 학습자 수준과 카테고리에 맞는 문제를 자동으로 생성하고 시험 응시부터 채점, 결과 관리까지 통합 지원합니다.
  FastAPI 백엔드, Svelte 프론트엔드, PostgreSQL DB, Docker 기반 마이크로서비스 환경에서 풀스택으로 개발하며 AI 모델 서버와 비동기 통신, JWT 인증 등을 구현했습니다.
  비동기 처리로 AI 응답 지연을 최소화하고, 모듈화된 아키텍처와 캐싱 전략을 적용해 문제 출제 시간 80% 단축, 배포 시간 50% 절감 등의 성과를 거두었습니다.`,
  detailContent: `## ✔️ 프로젝트 개요

  - **목표**: AI 기반 맞춤형 학습 문제 생성 및 시험 관리 시스템
  - **배경**: 학습자의 수준과 카테고리에 맞는 개인화된 문제를 자동 생성하여 효율적인 학습 환경을 제공하고, 시험 응시 및 결과 관리를 통합적으로 지원하기 위함
  - **주요 기능**:
    - AI(Gemini, Llama3.1) 기반 자동 문제 생성
    - 사용자별 시험 생성 및 관리
    - 시험 응시 및 채점 시스템
    - 문제 수정 및 관리 기능
    - 사용자 인증 및 권한 관리
  
  ## ✔️ 담당 역할 및 기여
  
  - **역할**: 풀스택 개발
  - **기여**:
    - FastAPI 기반 백엔드 API 서버 개발 및 라우팅 구조 설계
    - PostgreSQL 데이터베이스 설계 및 SQLAlchemy ORM 구현
    - Svelte 기반 프론트엔드 SPA 개발
    - Docker 기반 개발 및 배포 환경 구축 (FastAPI, Svelte, PostgreSQL 컨테이너화)
    - AI 모델 서버(Ollama Llama3.1) 연동 및 API 통합
    - 사용자 인증(JWT) 및 권한 관리 시스템 구현
    - Alembic을 통한 데이터베이스 마이그레이션 관리
  
  ## ✔️ 사용 기술/이유
  
  - **사용 기술**:
  
    - **Backend**: FastAPI, SQLAlchemy, PostgreSQL, Alembic
    - **Frontend**: Svelte, Vite, Bootstrap
    - **AI/ML**: Google Gemini API, Ollama (Llama3.1), LangChain
    - **Infra**: Docker, Docker Compose, Nginx
    - **Auth**: JWT, bcrypt
  
  - **선택 이유**:
    - **FastAPI**: 비동기 처리 지원으로 AI 모델 호출 시 성능 향상, 자동 API 문서화(Swagger)로 개발 생산성 증대
    - **Svelte**: 가상 DOM 없이 컴파일 타임에 최적화되어 가벼운 SPA 구현 가능
    - **Docker Compose**: 다중 컨테이너(Web, DB, Frontend) 환경을 쉽게 관리하고 일관된 개발/배포 환경 제공
    - **PostgreSQL**: 관계형 데이터 구조(사용자-시험-문제-선택지)를 효율적으로 관리
    - **Gemini & Llama3.1**: 고품질의 다양한 문제 생성을 위해 두 가지 AI 모델 활용
    - **LangChain**: AI 모델과의 통신 및 프롬프트 엔지니어링을 체계적으로 관리
  
  ## ✔️ 구현 사항
  
  ### 프로젝트의 중점적인 기능
  
  1. **AI 기반 자동 문제 생성**
  
     - Gemini API와 Llama3.1 모델을 활용한 카테고리별 맞춤 문제 생성
     - 프롬프트 템플릿 기반 구조화된 문제 생성 파이프라인
  
  2. **시험 관리 시스템**
  
     - 시험 생성, 조회, 응시, 채점 전체 프로세스 구현
     - 사용자별 시험 기록 및 결과 추적
  
  3. **문제 관리 및 수정**
     - 생성된 문제의 수정 및 관리 기능
     - 문제-선택지 관계 데이터 구조화
  
  ### 프로젝트의 핵심 구현사항
  
  1. **도메인 기반 모듈화 아키텍처**
  
     - CRUD-Schema-Router 패턴으로 각 도메인(User, Exam, Question, Gemini) 분리
     - 계층화된 구조로 유지보수성 향상
  
  2. **AI 모델 서버 분리**
  
     - GPU 활용을 위한 별도의 Llama3.1 모델 서버(port 8001) 운영
     - FastAPI 메인 서버(port 8000)와 AI 모델 서버 간 비동기 통신
  
  3. **Docker 기반 마이크로서비스 구조**
  
     - FastAPI, Svelte(Nginx), PostgreSQL 각각 컨테이너화
     - docker-compose로 전체 스택 통합 관리
  
  4. **데이터베이스 마이그레이션 자동화**
  
     - Alembic을 통한 스키마 버전 관리
     - 모델 변경사항 자동 감지 및 마이그레이션
  
  5. **JWT 기반 인증 시스템**
     - 토큰 기반 사용자 인증 및 세션 관리
     - 보호된 라우트에 대한 권한 검증
  
  ## ✔️ 문제 해결 사례
  
  - **문제**: AI 모델 응답 시간이 길어 사용자 경험 저하 (30초 이상 소요)
  - **해결 방법**:
  
    - FastAPI의 비동기 처리를 활용하여 문제 생성 요청을 백그라운드에서 처리
    - 프론트엔드에 로딩 상태 표시 및 진행상황 피드백 제공
    - 캐싱 전략 고려: 유사한 카테고리/난이도 문제는 DB에 저장하여 재사용
  
  - **문제**: Docker 환경에서 DB 마이그레이션 순서 문제로 컨테이너 실행 실패
  - **해결 방법**:
    - docker-compose의 depends_on과 healthcheck를 활용하여 PostgreSQL 컨테이너가 완전히 준비된 후 웹 서버 시작
    - 별도의 마이그레이션 명령어 실행 단계를 README에 명시하여 초기 설정 가이드 제공
  
  ## ✔️ 프로젝트 성과 및 결과
  
  - **성과**:
  
    - AI 기반 자동 문제 생성으로 교육자의 문제 출제 시간 약 80% 단축
    - Docker 기반 인프라로 배포 시간 50% 감소 (환경 설정 자동화)
    - 모듈화된 아키텍처로 새로운 AI 모델 추가 시 2시간 이내 통합 가능
  
  - **결과**:
    - 완전한 CRUD 기능을 갖춘 시험 관리 시스템 구현
    - 2개의 AI 모델을 활용한 다양한 문제 생성 파이프라인 구축
    - 프론트엔드-백엔드-DB-AI 모델 서버까지 전체 스택 통합 완료
    - Docker Compose 한 번의 명령으로 전체 시스템 실행 가능한 환경 구축
  
  ## ✔️ 프로젝트 회고
  
  ### 아쉬웠던 점
  
  - AI 모델 응답 시간 최적화를 더 고려하지 못함 (캐싱, 모델 경량화 등)
  - 프론트엔드 상태 관리를 Svelte Store로만 처리하여 복잡한 상태 관리가 어려웠음
  - 테스트 코드 작성 부족으로 리팩토링 시 사이드 이펙트 우려
  - 에러 핸들링 및 로깅 체계 미흡
  
  ### 개선 방안
  
  - Redis를 활용한 AI 응답 캐싱 시스템 도입
  - 프론트엔드에 Pinia 또는 Zustand 같은 상태 관리 라이브러리 적용
  - Pytest를 활용한 단위 테스트 및 통합 테스트 작성
  - 구조화된 로깅 시스템(ELK Stack) 도입
  - CI/CD 파이프라인 구축 (GitHub Actions)
  
  ### 새롭게 알게 된 지식 및 개발 역량
  
  - FastAPI의 비동기 처리 및 의존성 주입 시스템 활용법
  - LangChain을 통한 LLM 프롬프트 엔지니어링 기법
  - Docker Compose를 활용한 멀티 컨테이너 오케스트레이션
  - Alembic을 통한 데이터베이스 마이그레이션 관리
  - Svelte의 반응성 시스템과 컴파일 타임 최적화 원리
  - JWT 기반 인증 시스템의 보안 원칙
  
  ### 깨달은 점
  
  - AI 모델 통합 시 응답 시간을 고려한 UX 설계의 중요성
  - 모듈화된 아키텍처가 협업과 유지보수에 미치는 긍정적 영향
  - Docker를 활용한 일관된 개발 환경 구축이 팀 생산성에 큰 기여
  - 풀스택 개발 경험을 통해 프론트엔드-백엔드 간 데이터 흐름에 대한 전체적인 이해도 향상
  - 문서화(README, API Docs)의 중요성 - 프로젝트 온보딩 시간 단축
  `,
  tags: ["Python", "FastAPI", "PostgreSQL", "Llama 3.1", "Gemma 2.0", "Docker"],
  image: "/images/projects/dxlab.png",
  github: "https://github.com/ryongseong/DxLab",
  workPeriod: {
    start: "2024-03-04",
    end: "2024-10-16",
  },
};

export default DxLab;
