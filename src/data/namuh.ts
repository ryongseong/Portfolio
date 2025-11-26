export const Namuh = {
  id: "8",
  title: "NAMUH",
  description:
    "소아암 환아를 위한 휴머노이드 케어 로봇 개발을 통해 감염 위험으로 고립된 아이들을 세상과 다시 연결하고, Vision AI와 실시간 원격 제어 기술을 활용하여 신체적·정서적 건강을 지원하는 맞춤형 솔루션 제공",
  detailContent: `✔️ **프로젝트 개요**

  **목표**
  
  소아암 환아를 위한 휴머노이드 케어 로봇 개발을 통해 감염 위험으로 고립된 아이들을 세상과 다시 연결하고, Vision AI와 실시간 원격 제어 기술을 활용하여 신체적·정서적 건강을 지원하는 맞춤형 솔루션 제공
  
  **배경**
  
  - 소아암 환아들은 면역력 저하로 인해 감염 위험이 높아 격리 생활을 해야 함
  - 물리적 거리로 인한 사회적 고립과 정서적 어려움 경험
  - 단순한 원격 소통을 넘어 아이들의 소중한 순간을 기록하고 건강 관리를 지원하는 통합 솔루션의 필요성
  
  **주요 기능**
  
  1. **실시간 양방향 영상 스트리밍**: OpenVidu 기반 저지연 화상 통신
  2. **AI 기반 미소 자동 포착**: MediaPipe Face Landmarker를 활용한 Pre-buffering 기술로 웃음의 맥락까지 기록
  3. **AI 체조 인터랙션**: MediaPipe Pose Detection을 활용한 가위바위보 기반 양방향 체조
  4. **STT/TTS 음성 대화**: OpenAI Whisper(STT), OpenAI TTS, Porcupine 웨이크워드 인식을 통한 자연스러운 대화
  5. **3D Digital Twin 모니터링**: Three.js 기반 실시간 로봇 상태 동기화 대시보드
  6. **자동 영상/썸네일 저장**: AWS S3 연동을 통한 미디어 관리
  
  ✔️ **담당 역할 및 기여**
  
  - 역할: 백엔드, AI 개발
  
  - 기여: 40%
  
  ✔️ **사용 기술/이유**
  
  **사용 기술**
  
  AI & Computer Vision
  
  - Python 3.12
  - OpenCV (cv2)
  - MediaPipe (Face Landmarker, Pose Detection)
  - OpenAI Whisper (STT)
  - OpenAI TTS
  - Porcupine (Wake Word Detection)
  
  Backend
  
  - FastAPI 0.120.3
  - Uvicorn (ASGI Server)
  - aiortc (WebRTC)
  - PyAV (FFmpeg Binding)
  - aiomqtt (MQTT Client)
  - boto3 (AWS SDK)
  
  Embedded
  
  - Raspberry Pi
  - Picamera2
  - libcamera
  
  Infrastructure
  
  - AWS S3
  - OpenVidu
  - MQTT over TLS
  
  **선택 이유**
  
  1. **MediaPipe**: Google의 검증된 오픈소스 ML 솔루션으로, 실시간 얼굴/포즈 인식에 최적화되어 있으며 Raspberry Pi에서도 경량으로 동작
  2. **OpenVidu**: WebRTC 복잡성을 추상화한 프레임워크로 빠른 화상 스트리밍 구현 가능
  3. **aiortc**: Python 네이티브 WebRTC 구현체로 OpenVidu와의 원활한 통합 및 커스터마이징 가능
  4. **FastAPI**: 비동기 처리와 자동 문서화 지원으로 실시간 API 개발에 적합
  5. **MQTT**: 경량 메시징 프로토콜로 임베디드 환경에서 안정적인 통신 보장
  6. **AWS S3**: 확장 가능한 객체 스토리지로 영상 미디어 관리에 최적
  7. **OpenAI API**: 고품질의 STT/TTS 제공으로 자연스러운 음성 인터랙션 구현
  
  ✔️ **구현 사항**
  
  1. **Pre-buffering 기반 미소 자동 포착 시스템**
      - 실시간 스트리밍 프레임을 순환 버퍼에 저장
      - 미소 감지 시 이전 5초 + 이후 5초 자동 녹화
      - 썸네일 자동 생성 및 S3 업로드
  2. **AI 기반 양방향 체조 인터랙션**
      - MediaPipe Pose로 실시간 관절 추적
      - 각도 계산 알고리즘으로 정확한 동작 분류
      - MQTT 통신으로 로봇 동작 피드백 전달
  3. **저지연 실시간 스트리밍**
      - Raspberry Pi Camera → OpenVidu → Mobile/Web 파이프라인
      - WebRTC P2P 연결로 네트워크 지연 최소화
      - 30 FPS 안정적 송출
  4. **라즈베리파이 카메라 OpenVidu 연동**
      
      \`\`\`python
      # camera_server.py - HTTP JPEG 스트리밍 서버
      - Picamera2로 1920x1080 해상도 캡처
      - JPEG 인코딩 및 HTTP 엔드포인트 제공
      - 멀티스레드 구조로 안정적 프레임 공급
      
      # main.py - WebRTC 퍼블리셔
      - RaspberryPiVideoTrack 커스텀 MediaStreamTrack 구현
      - OpenVidu API를 통한 세션 참여 및 토큰 획득
      - ICE 후보 교환 및 SDP Offer/Answer 처리
      - aiortc RTCPeerConnection으로 영상 송출
      \`\`\`
      
  5. **미소 탐지 시스템**
      
      \`\`\`python
      # worker_server.py
      - MediaPipe Face Landmarker 초기화
      - deque 기반 Pre-buffer (150 프레임, 5초)
      - mouthSmileLeft/Right 카테고리 점수 임계값 검사
      - 미소 감지 시 mp4 인코딩 및 S3 업로드
      - 썸네일 JPEG 추출 및 별도 저장
      \`\`\`
      
  6. **체조 탐지 시스템**
      
      \`\`\`python
      # PoseClassifier 클래스
      - MediaPipe Pose Landmarker로 52개 관절 추적
      - calculate_angle(): 3D 벡터 기반 관절 각도 계산
      - classify_pose():
        * Rock: 어깨 각도 < 45도
        * Paper: 팔 펴고(팔꿈치 각도 > 90도) + 좌우 간격 넓음
        * Scissors: 팔 펴고 + 좌우 간격 좁음 + 앞으로 돌출
      \`\`\`
      
  
  ✔️ **문제 해결 사례**
  
  **문제**: 초기 구현 시 Picamera2를 직접 VideoTrack에서 호출할 경우 I/O 블로킹으로 프레임 드롭 발생
  
  **해결 방법**:
  
  - 카메라 캡처를 별도 HTTP 서버(\`camera_server.py\`)로 분리
  - 메인 WebRTC 프로세스는 HTTP GET으로 JPEG 프레임 수신
  - \`asyncio.to_thread()\`로 I/O 작업을 비동기 처리
  - 결과: 안정적 30 FPS 유지, CPU 사용률 30% 감소
  
  **문제**: 실시간으로만 녹화할 경우 미소가 시작된 시점을 이미 놓친 상태로 녹화 시작
  
  **해결 방법**:
  
  - Pre-buffering 개념 도입: \`collections.deque(maxlen=150)\`로 항상 최근 5초 보관
  - 미소 감지 시 버퍼의 모든 프레임 + 이후 5초 추가 녹화
  - 웃음의 '맥락'까지 포착 가능
  - 결과: 사용자 만족도 크게 향상, 자연스러운 순간 보존
  
  **문제**: Mediapipe 사용시 단순 손목 높이만으로 판단 시 중간 자세에서 오분류 발생
  
  **해결 방법**:
  
  - 다층 조건 분기 도입:
      1. 어깨 각도로 Rock 먼저 필터링
      2. 팔꿈치 각도로 팔이 펴졌는지 확인
      3. 좌우 간격(X축)과 앞뒤 깊이(Z축) 종합 판단
  - Threshold 튜닝: 실제 아이 동작 데이터로 보정
  - 결과: 분류 정확도 85% → 95% 향상
  
  ✔️ **프로젝트 성과 및 결과**
  
  **성과**
  
  - 실시간 미소 포착 시스템으로 **사용자 감동 피드백** 다수 획득
  - Pre-buffering 기술 적용으로 **기존 솔루션 대비 차별화된 UX** 구현
  - WebRTC 저지연 스트리밍으로 **평균 200ms 이하 지연** 달성
  - AI 체조 정확도 **95% 이상** 달성
  
  **결과**
  
  - **완성된 휴머노이드 로봇 프로토타입** 제작 (하드웨어 + 소프트웨어 통합)
  - **모바일 PWA 앱** + **웹 대시보드** 동시 제공
  - **실시간 3D Digital Twin** 모니터링 시스템 구현
  - **AWS 기반 확장 가능한 인프라** 구축 (Docker, Jenkins CI/CD)
  - **1000+ 미디어 파일** S3 저장 검증 완료
  - **영상 포트폴리오** 제작 및 공개 (https://youtu.be/FPSlSqnQyQE)
  
  ✔️ **프로젝트 회고**
  
  **아쉬웠던 점**
  
  1. **네트워크 환경 변화 대응 부족**: WiFi 끊김 시 자동 재연결 로직이 불완전
  2. **AI 모델 경량화 미흡**: Raspberry Pi 4 기준 CPU 사용률이 높아 발열 이슈 발생
  3. **테스트 커버리지 부족**: 실시간 시스템 특성상 자동화 테스트 구축 미비
  
  **개선 방안**
  
  1. **Edge AI 최적화**: TensorFlow Lite 또는 ONNX Runtime으로 모델 변환하여 성능 향상
  2. **재연결 로직 강화**: Exponential backoff, Health check 등 안정성 개선
  3. **로깅 및 모니터링**: Prometheus, Grafana 연동으로 시스템 상태 가시성 확보
  4. **E2E 테스트 도입**: Pytest + Mock을 활용한 통합 테스트 구축
  
  **새롭게 알게 된 지식 및 개발 역량**
  
  1. **WebRTC 심화 이해**: SDP Offer/Answer, ICE Candidate, STUN/TURN 서버 역할
  2. **MediaPipe 실전 활용**: Face Landmarker, Pose Detection의 내부 동작 원리 및 튜닝 방법
  3. **임베디드 Python 최적화**: asyncio, threading, subprocess를 활용한 리소스 관리
  4. **MQTT 프로토콜**: QoS 레벨, Topic 설계, TLS 보안 적용
  5. **FastAPI 비동기 프로그래밍**: ASGI, Uvicorn, Dependency Injection 패턴
  
  **깨달은 점**
  
  1. **사용자 중심 설계의 중요성**: 기술적 완성도보다 실제 사용자(소아암 환아)의 니즈를 충족하는 것이 우선
  2. **팀 협업의 시너지**: 각 파트(FE, BE, EMB, DevOps)가 유기적으로 연결되어야 완성도 높은 프로젝트 가능
  3. **프로토타입의 가치**: 완벽한 구현보다 빠른 검증과 피드백이 프로젝트 방향성 설정에 핵심
  4. **문서화의 중요성**: README, API 명세서, 아키텍처 다이어그램이 협업 효율을 크게 높임
  5. **실시간 시스템의 어려움**: 네트워크 지연, 리소스 제약, 동기화 문제 등 예상치 못한 변수 많음
  6. **AI는 도구, 사람이 주인**: 모델 정확도보다 실제 상황에 맞는 임계값 조정과 UX 설계가 더 중요
  7. **지속 가능한 개발**: CI/CD, 컨테이너화, 모니터링 등 DevOps 기반이 장기 운영에 필수`,
  tags: [
    "Python",
    "FastAPI",
    "Java",
    "SpringBoot",
    "OpenCV",
    "React",
    "TypeScript",
    "Mediapipe",
    "MQTT",
    "OpenAI",
    "MySQL",
    "Redis",
  ],
  image: "/images/projects/namuh.png",
  github: "",
  workPeriod: {
    start: "2025-10-14",
    end: "2025-11-23",
  },
};

export default Namuh;
