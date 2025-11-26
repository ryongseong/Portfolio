export const YenaNow = {
  id: "6",
  title: "예나, 지금(Yena, Now)",
  description:
    "멀리 있어도 함께 추억을 남길 수 있는 온라인 영상 인생네컷 서비스",
  detailContent: `✔️ **프로젝트 개요**

  **목표**
  
  멀리 있어도, 함께 추억을 남길 수 있는 온라인 포토부스 서비스
  
  **배경**
  
  친구, 가족, 연인과 장소에 구애 받지 않고 함께 N컷 사진이나 영상을 촬영학 꾸미며 공유할 수 있도록 하기 위함
  
  **주요 기능**
  
  - **실시간 화상 촬영**: WebRTC 기반 다중 참여자 동시 촬영
  - **N컷 사진/영상 제작**: 사용자 설정에 따른 컷 수와 시간 제한으로 촬영
  - **실시간 배경 제거**: MediaPipe Selfie Segmentation을 활용한 배경 합성
  - **사진 꾸미기**: 프레임 선택, 필터 적용, 텍스트/스티커 추가
  - **갤러리 공유**: 완성된 N컷을 공개/비공개로 공유 및 좋아요/댓글 기능
  - **모멘트 영상**: 촬영한 영상을 타임라인으로 관리
  
  ✔️ **담당 역할 및 기여**
  
  - 역할: 프론트엔드 개발 (촬영 페이지 및 편집 페이지 담당)
  
  - 기여: 60%
  
  ✔️ **사용 기술/이유**
  
  **사용 기술**
  
  - **Frontend Framework**: React 19.1.0 + TypeScript
  - **Styling**: Styled-Components, Emotion CSS
  - **상태 관리**: Zustand, React Query
  - **실시간 통신**: LiveKit Client 2.15.3 (WebRTC)
  - **배경 제거**: MediaPipe Selfie Segmentation
  - **Canvas 처리**: html2canvas
  - **라우팅**: React Router DOM 7.7.0
  - **HTTP 통신**: Axios
  - **빌드 도구**: Vite
  
  **선택 이유**
  
  **React + TypeScript**
  
  - 컴포넌트 기반 개발로 재사용성 및 유지보수성 향상
  - TypeScript의 타입 시스템으로 런타임 에러 사전 방지 및 개발 생산성 증대
  
  **LiveKit (WebRTC)**
  
  - 실시간 다중 참여자 화상 통신에 최적화된 솔루션
  - Data Channel을 통한 커스텀 메시지 전송으로 촬영/편집 상태 동기화 가능
  - 안정적인 트랙 관리 및 네트워크 상태 자동 처리
  
  **MediaPipe Selfie Segmentation**
  
  - Google의 ML 기반 배경 제거 라이브러리로 높은 정확도
  - 실시간 처리에 최적화된 경량 모델
  - 브라우저에서 직접 실행 가능 (서버 부담 없음)
  
  **Styled-Components**
  
  - CSS-in-JS 방식으로 컴포넌트 단위 스타일 관리
  - props 기반 동적 스타일링으로 재사용 가능한 UI 컴포넌트 구현
  - TypeScript와의 뛰어난 통합
  
  **Zustand**
  
  - Redux 대비 간단한 API와 낮은 러닝 커브
  - 불필요한 리렌더링 최소화로 성능 최적화
  - TypeScript 지원 우수
  
  **Vite**
  
  - 빠른 개발 서버 시작 및 HMR (Hot Module Replacement)
  - ESM 기반 빌드로 번들 속도 향상
  - React와의 완벽한 통합
  
  ✔️ **구현 사항**
  
  **WebRTC 기반 실시간 화상 통신**
  
  \`\`\`tsx
  // useRoom 커스텀 훅으로 LiveKit 세션 관리
  const { room, localTrack, remoteTracks, connectToRoom, sendData } = useRoom()
  
  // 로컬/원격 트랙 렌더링
  // Canvas에 배경 이미지와 참여자 비디오 실시간 합성
  \`\`\`
  
  **MediaPipe를 활용한 배경 제거**
  
  \`\`\`tsx
  // useBackgroundRemoval 커스텀 훅
  // Selfie Segmentation으로 사람만 추출
  // Canvas에 배경 이미지와 합성
  const { createBackgroundRemovedTrack, canvasRef } = useBackgroundRemoval()
  \`\`\`
  
  **Canvas 기반 미디어 처리**
  
  - 실시간 비디오 프레임을 Canvas에 렌더링
  - 배경 이미지, 참여자 비디오, 필터 등을 레이어별로 합성
  - Canvas 스냅샷으로 사진 생성
  - MediaRecorder로 Canvas 스트림을 비디오로 녹화
  
  **S3 업로드 및 URL 관리**
  
  - 촬영된 이미지/비디오를 S3에 업로드
  - Presigned URL 발급 후 참여자 간 공유
  - 편집 페이지에서 URL 기반으로 미디어 로드
  
  **실시간 데이터 동기화**
  
  \`\`\`tsx
  // LiveKit Data Channel로 커스텀 메시지 전송
  sendData({ type: 'CAPTURE_START', data: { countdown: 3 } })
  sendData({ type: 'RECORDING_START', data: { startTime: Date.now() } })
  sendBackground(backgroundUrl)
  \`\`\`
  
  **호스트/참여자 권한 관리**
  
  - 호스트만 촬영 시작, 배경 변경, 편집 페이지 이동 가능
  - 참여자는 자신의 화면만 조작 가능
  - 모든 상태 변경은 Data Channel로 전체 공유
  
  ✔️ **문제 해결 사례**
  
  **문제**
  
  - 참여자가 많아질수록 Canvas 렌더링 성능 저하
  - 비디오 트랙의 위치/크기 조정 시 다른 참여자와 동기화 안 됨
  - 배경 제거 처리로 인한 프레임 드롭
  
  **해결 방법**
  
  - requestAnimationFrame으로 Canvas 렌더링 최적화
  - 드래그/리사이즈 이벤트를 debounce 처리하여 불필요한 렌더링 방지
  - MediaPipe modelSelection을 1로 설정하여 성능과 품질 균형 조정
  - 배경 제거 활성화 여부를 토글 가능하게 하여 사용자가 선택 가능하도록 구현
  
  ✔️ **프로젝트 성과 및 결과**
  
  **성과**
  
  - **실시간 협업 기능 구현**: WebRTC 기반으로 최대 4명이 동시에 촬영 가능한 안정적인 세션 구현
  - **배경 제거 기술 적용**: MediaPipe를 활용하여 브라우저에서 실시간 배경 제거 구현
  - **사용자 친화적 UI/UX**: 드래그 앤 드롭, 직관적인 편집 인터페이스로 사용성 향상
  - **고품질 N컷 생성**: Canvas 기반 고해상도 이미지 생성 및 저장
  
  **결과**
  
  - 지연 시간 평균 200ms 이하로 실시간 화상 촬영 경험 제공
  - 배경 제거 처리 속도 30fps 이상 유지
  - 촬영부터 편집, 저장까지 전 과정을 웹 브라우저에서 원스톱으로 제공
  - 촬영한 N컷을 갤러리에 공유하여 다른 사용자와 소통 가능
  - TypeScript 도입으로 타입 안정성 확보 및 런타임 에러 90% 이상 감소
  
  ✔️ **프로젝트 회고**
  
  **아쉬웠던 점**
  
  에러 핸들링: 네트워크 오류, 미디어 권한 오류 등 다양한 엣지 케이스에 대한 세밀한 처리 부족
  
  **개선 방안**
  
  에러 바운더리: 예상치 못한 에러 발생 시 graceful degradation 적용
  
  **새롭게 알게 된 지식 및 개발 역량**
  
  기술적 성장
  
  - **WebRTC 실시간 통신**: LiveKit SDK를 활용한 실시간 화상 통신 구현 경험
  - **Canvas API 심화**: 복잡한 레이어 합성, 실시간 렌더링 최적화 기법 습득
  - **MediaPipe ML 모델**: 브라우저에서 머신러닝 모델 실행 및 최적화 경험
  - **MediaRecorder API**: 실시간 비디오 녹화 및 스트림 처리 기술 습득
  - **S3 연동**: Presigned URL을 활용한 안전한 파일 업로드/다운로드 구현
  
  아키텍처 및 설계
  
  - **커스텀 훅 패턴**: useRoom, useBackgroundRemoval 등 복잡한 로직을 재사용 가능한 훅으로 분리
  - **상태 관리 전략**: Zustand를 활용한 전역 상태와 React Query를 활용한 서버 상태 분리 관리
  - **컴포넌트 설계**: Atomic Design 패턴을 적용한 재사용 가능한 컴포넌트 구조 설계
  
  협업 및 문제 해결
  
  - **실시간 동기화 전략**: 네트워크 지연을 고려한 타임스탬프 기반 동기화 구현
  - **성능 프로파일링**: Chrome DevTools를 활용한 렌더링 성능 분석 및 최적화
  - **디버깅 능력**: WebRTC 연결 상태, Canvas 렌더링 등 복잡한 비동기 처리 디버깅 경험
  
  **깨달은 점**
  
  - **사용자 경험의 중요성**: 기술적으로 구현하는 것도 중요하지만, 실제 사용자가 느끼는 경험이 더 중요함을 깨달음
  - **성능 최적화의 필요성**: 실시간 처리에서는 작은 성능 차이가 사용자 경험에 큰 영향을 미침
  - **에러 처리의 중요성**: 네트워크 불안정, 미디어 권한 거부 등 다양한 상황에 대비한 에러 처리가 필수
  - **코드 품질 관리**: TypeScript와 ESLint를 활용한 코드 품질 관리로 유지보수성이 크게 향상됨
  - **점진적 개선**: 완벽한 것보다 동작하는 것을 먼저 만들고 지속적으로 개선하는 것이 중요
  - **문서화의 가치**: 복잡한 로직일수록 주석과 타입 정의로 의도를 명확히 전달하는 것이 중요`,
  tags: ["React", "TypeScript", "Java", "SpringBoot", "MySQL", "Redis"],
  image: "/images/projects/yena-now.png",
  github: "https://github.com/Yena-Now",
  workPeriod: {
    start: "2025-07-14",
    end: "2025-08-18",
  },
};

export default YenaNow;
