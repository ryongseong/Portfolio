export const OnWear = {
  id: "7",
  title: "On-Wear",
  description:
    "사진 한 장만으로 원하는 옷을 착용해볼 수 있고 개인화된 추천 시스템으로 맞춤형 코디 경험을 제공하는 가상 시착 서비스",
  detailContent: `**Stable Diffusion 모델로 시착을 제공**하고 **유사도 기반 검색 시스템**을 통해 맞춤형 아이템을 추천합니다.

  - **개발 기간** : 2025.08.25 ~ 2025.09.29 **(4주)**
  - **플랫폼** : Web Application
  - **개발 인원** : 6명
  
  **🛠️ 기술 스택**
  
  **🌕 Frontend**
  
  | **Category** | **Stack** |
  | --- | --- |
  | **Language** | TypeScript 5.9.2 |
  | **Runtime Environment** | Node.js 22.17.0 |
  | **Framework** | React 19.1.1, React Router DOM 7.8.2 |
  | **Library** | Zustand 5.0.8, Axios 1.11.0, Emotion 11.14.0, |
  | **Bundler / Tools** | Vite 7.1.2 |
  | **Styling & Animation** | Sass 1.92.1, Emotion Styled 11.14.1, GSAP 3.13.0 |
  | **Testing** | Playwright 1.55.0 |
  | **Code Quality** | ESLint 9.34.0, Prettier 3.6.2, Husky 9.1.7, lint-staged 16.1.5 |
  | **IDE** | Visual Studio Code 1.104.2 |
  
  **🌑 Backend**
  
  | **Category** | **Stack** |
  | --- | --- |
  | **Language** | Java 17 |
  | **Framework** | Spring Boot 3.4.9 |
  | **Library** | Spring Security, Spring Data JPA, Spring Data MongoDB, Spring Data Redis, Springdoc OpenAPI 2.8.7, Spring Cloud AWS S3 3.0.0-RC2, JWT (jjwt) 0.12.6, Lombok, Apache HttpComponents 4.5.14 |
  | **Database** | MySQL Connector, MongoDB Driver, Redis |
  | **IDE** | IntelliJ IDEA 2025.1.3 (Ultimate Edition) |
  | **Build Tool** | Gradle 8.14.3 |
  
  **🌑 Data Collection & Recommendation**
  
  | **Category** | **Stack** |
  | --- | --- |
  | **Language** | Python 3.10.14 |
  | **Framework** | FastAPI 0.116.1 |
  | **Library** | Requests, pydantic, uvicorn, starlette, numpy, Pillow, pymongo, aiomysql, redis, chromadb, PyJWT |
  | **Database** | MySQL, MongoDB, Redis, ChromaDB |
  | **IDE** | Visual Studio Code 1.104.2 |
  
  **🤖 AI**
  
  **📋 AI 모듈 설치 가이드**
  
  | **모듈** | **설명** | **설치 가이드** |
  | --- | --- | --- |
  | **embedding_db** | 이미지 임베딩 및 추천 시스템 | [📖 설치 가이드](https://github.com/On-Wear-SSAFY-13/.github/blob/main/profile/AI-LAB/embedding_db/README.md) |
  | **IDM-VTON** | 가상 피팅룸 시스템 | [📖 설치 가이드](https://github.com/On-Wear-SSAFY-13/.github/blob/main/profile/AI-LAB/IDM-VTON/README.md) |
  
  **⚙️ DevOps**
  
  | **Category** | **Spec** |
  | --- | --- |
  | **Instance Type** | T2.XLARGE |
  | **CPU** | 4 vCPUs |
  | **RAM** | 16 GB |
  | **Storage (Disk)** | SSD: 310 GB |
  | **OS** | Ubuntu 22.04.4 LTS |
  | **Kernel** | Linux 6.8.0-1031-aws x86_64 |
  | **Docker** | v28.4.0 |
  | **Docker Compose** | v2.39.2 |
  | **Jenkins** | 2.527 |
  | **Nginx** | nginx/1.29.1 |
  | **RunPod** | GPU Server (A100, Ada2000) |
  
  **🗄️ Database & Storage**
  
  | **Category** | **Stack** |
  | --- | --- |
  | **RDBMS** | MySQL 8.0.43 |
  | **NoSQL** | MongoDB 8.0.11 |
  | **Cache** | Redis 7.4.5 (jemalloc-5.3.0) |
  | **Vector DB** | - |
  | **Storage** | AWS S3 |
  
  **🎯 주요 기능**
  
  **1. 가상 시착 (Virtual Try-On)**
  
  사용자가 업로드한 사진과 선택한 의류 이미지를 합성해 실제로 착용한 것처럼 보여주는 기능.
  
  - **IDM-VTON 모델**을 사용하여 옷의 주름, 패턴, 로고까지 자연스럽게 보존
  - 이미지 윤곽 정보를 결합해 기존 한계였던 디테일 보존 문제를 해결
  - **GPU 병렬 처리**(ONNX, CUDA, MPS)를 통해 시착 이미지 생성 시간을 단축
  
  **활용 예시**: 사용자가 구매 전, 본인 사진으로 의상을 가상 착용해 확인
  
  **2. 상품 추천 (Personalized Recommendation)**
  
  사용자의 활동 데이터를 기반으로 취향을 분석하고, 맞춤형 상품을 제안.
  
  **행동 데이터 기반 가중치:**
  
  - 찜하기: 10점 → 강한 선호 표현
  - 상세보기: 3점 → 단순 탐색
  - 시간 가중치: 최근 행동에 높은 점수를 주는 방식으로 즉각적 선호 반영
  
  **효율성 지표**: NDCG 평가에서 상위 추천 결과가 실제 선호와 0.77까지 일치 **서비스 개선**: 벡터 DB 최적화로 추천 속도를 3초 → 0.1초(약 95.8%) 단축
  
  **활용 예시**: 사용자가 최근 본 옷이나 찜한 아이템을 기반으로 유사한 스타일 자동 추천
  
  **3. 이미지 기반 검색 (Image-based Search)**
  
  사용자가 의류 사진을 업로드하면, 해당 이미지를 분석해 유사한 아이템을 검색.
  
  - **Fashion-CLIP 모델**을 적용해 이미지 임베딩 후 벡터 공간에서 유사도 계산
  - 텍스트 입력 없이도, 단순히 사진만으로 비슷한 스타일을 탐색 가능
  
  **활용 예시**: 길거리에서 찍은 옷 사진을 업로드해 온라인 쇼핑몰에서 유사 상품 찾기

  **📦 프로젝트 산출물**
  
  **🎯 주요 모델**
  
  **CLIP (patrickjohncyh/fashion-clip)**
  
  - [huggingface](https://huggingface.co/patrickjohncyh/fashion-clip)
  - 패션 아이템 이미지 임베딩 및 유사도 검색
  
  **VTON (yisol/IDM-VTON)**
  
  - [huggingface](https://huggingface.co/spaces/yisol/IDM-VTON)
  - [github](https://github.com/yisol/IDM-VTON)
  - 가상 시착 이미지 생성
  
  **Image Captioning (Salesforce/blip-image-captioning-large)**
  
  - [huggingface](https://huggingface.co/Salesforce/blip-image-captioning-large)
  - 이미지 설명 생성 및 텍스트 기반 검색
  
  **📄 라이선스**
  
  이 프로젝트의 모든 소프트웨어, 라이브러리 및 AI 모델은 다음과 같은 라이선스를 따릅니다:
  
  **🎯 주요 AI 모델 라이선스**
  
  **IDM-VTON (가상 시착 모델)**
  
  - **라이선스**: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
  - **원본 소스**: [yisol/IDM-VTON](https://github.com/yisol/IDM-VTON)
  - **제약사항**: 비상업적 용도로만 사용 가능, 동일한 라이선스로 재배포 필요
  
  **Fashion-CLIP (패션 이미지 임베딩)**
  
  - **라이선스**: MIT License
  - **원본 소스**: [patrickjohncyh/fashion-clip](https://huggingface.co/patrickjohncyh/fashion-clip)
  - **제약사항**: 상업적 사용 가능, 저작권 표시 필요
  
  **BLIP Image Captioning**
  
  - **라이선스**: Apache 2.0 License
  - **원본 소스**: [Salesforce/blip-image-captioning-large](https://huggingface.co/Salesforce/blip-image-captioning-large)
  - **제약사항**: 상업적 사용 가능, 라이선스 사본 포함 필요
  
  **📋 라이선스 요약**
  
  **AI 모델**
  
  | **모델** | **라이선스** | **상업적 사용** | **저작권 표시** | **재배포 조건** |
  | --- | --- | --- | --- | --- |
  | IDM-VTON | CC BY-NC-SA 4.0 | ❌ | ✅ | 동일 라이선스 |
  | Fashion-CLIP | MIT | ✅ | ✅ | 자유 |
  | BLIP Captioning | Apache 2.0 | ✅ | ✅ | 라이선스 포함 |
  
  **⚠️ 주요 제약사항**
  
  **IDM-VTON 모델 사용 시:**
  
  - ✅ 연구 및 교육 목적으로 자유롭게 사용 가능
  - ✅ 개인적, 비상업적 용도로 사용 가능
  - ❌ 상업적 목적으로 사용 불가
  - ❌ 라이선스 조건 변경 불가
  
  **전체 프로젝트:**
  
  - 이 프로젝트는 비상업적 연구 및 교육 목적으로만 사용됩니다
  - 상업적 이용을 원하는 경우 각 모델의 원본 라이선스를 확인하시기 바랍니다
  
  **특별 주의사항:**
  
  - **MySQL Connector**: GPL 2.0 라이선스로 상업적 사용 시 주의 필요
  - **GSAP**: 상업적 프로젝트에서 사용 시 유료 라이선스 필요
  - **IDM-VTON**: 비상업적 용도로만 사용 가능
  
  **📝 사용 조건**
  
  이 소프트웨어를 사용함으로써 다음 조건에 동의하는 것으로 간주됩니다:
  
  1. 각 모델의 원작자에 대한 적절한 저작권 표시
  2. IDM-VTON 모델의 경우 비상업적 목적으로만 사용
  3. 2차 저작물 배포 시 해당 라이선스 조건 준수
  4. 라이선스 전문을 포함하여 배포
  
  **🛠️ 개발 도구**
  
  - **API 문서**: Swagger UI
  - **데이터베이스**: MySQL, MongoDB, Redis, Chroma
  - **스토리지**: AWS S3
  - **CI/CD**: Jenkins
  - **컨테이너**: Docker, Docker Compose`,
  tags: [
    "Python",
    "FastAPI",
    "MongoDB",
    "SpringBoot",
    "Java",
    "MySQL",
    "Redis",
    "TypeScript",
    "React",
  ],
  image: "/images/projects/on-wear.png",
  github: "https://github.com/On-Wear-SSAFY-13",
  workPeriod: {
    start: "2025-08-25",
    end: "2025-09-29",
  },
};

export default OnWear;
