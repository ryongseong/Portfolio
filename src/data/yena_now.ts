export const YenaNow = {
  id: "6",
  title: "예나, 지금(Yena, Now)",
  description:
    "멀리 있어도 함께 추억을 남길 수 있는 온라인 영상 인생네컷 서비스",
  summary: `WebRTC와 MediaPipe 기반으로 최대 4명이 동시에 참여해 실시간 배경 제거 N컷 사진·영상을 촬영·편집·공유할 수 있는 온라인 포토부스 웹 서비스를 구현한 프로젝트입니다.​
  React + TypeScript, LiveKit, Canvas, S3, Zustand 등을 사용해 촬영·배경 합성·편집·업로드까지 전 과정을 브라우저에서 처리하는 프론트엔드 핵심 기능을 담당하며 약 60%를 기여했습니다.​
  Canvas 렌더링 최적화, WebRTC 동기화, MediaPipe 성능 튜닝 등을 통해 평균 지연 200ms 이하, 30fps 배경 제거, 타입 안정성을 확보하며 실시간 협업과 고품질 N컷 생성 경험을 제공했습니다.`,
  detailContent: `💡 **Topic**

- WebRTC 기반 비대면 실시간 포토부스 플랫폼
- 물리적 거리의 제약 없이 친구, 가족, 연인과 함께 실시간으로 화상 대화를 나누며 N컷 사진과 영상을 촬영하고 꾸밀 수 있는 웹 서비스

📝 **Summary**

소중한 사람들과 물리적으로 떨어져 있어도 함께 추억을 남길 수 있도록, 오프라인 포토부스의 경험을 온라인으로 옮겨온 서비스입니다. WebRTC 기술을 활용해 최대 4명이 동시에 접속하여 끊김 없는 화상 대화와 촬영이 가능하며, AI 기반 실시간 배경 제거 기술을 적용해 몰입감을 높였습니다. 촬영부터 프레임 꾸미기, 갤러리 공유까지의 전 과정을 웹 브라우저 상에서 원스톱으로 제공하여 사용자의 접근성을 극대화했습니다.

⭐️ **Key Function**

- **다중 참여자 실시간 촬영**
    - LiveKit(WebRTC)을 활용하여 최대 4인의 참여자가 200ms 이하의 저지연 환경에서 동시에 얼굴을 보며 촬영할 수 있습니다.
    - 호스트가 촬영 시작, 카운트다운 등을 제어하면 Data Channel을 통해 모든 참여자의 상태가 실시간으로 동기화됩니다.
- **AI 실시간 배경 제거 (Virtual Background)**
    - MediaPipe Selfie Segmentation 모델을 브라우저 단에 적용하여 서버 부하 없이 실시간으로 인물과 배경을 분리합니다.
    - 이를 통해 사용자는 원하는 배경 이미지나 영상을 합성하여 촬영할 수 있습니다.
- **Canvas 기반 커스텀 꾸미기**
    - 촬영된 사진에 다양한 프레임, 스티커, 텍스트를 추가할 수 있는 편집 기능을 제공합니다.
    - 모든 편집 요소는 Canvas API를 통해 레이어별로 합성되며, 고해상도 이미지 및 영상으로 추출 가능합니다.
- **모멘트 영상 및 갤러리 공유**
    - 단순한 사진뿐만 아니라 촬영 과정이 담긴 타임라인 영상을 제공합니다.
    - 완성된 결과물은 AWS S3를 통해 Presigned URL로 안전하게 저장 및 공유되며, 갤러리 기능을 통해 좋아요와 댓글로 소통할 수 있습니다.

🛠 **Tech Stack**

\`React\`, \`TypeScript\`, \`LiveKit (WebRTC)\`, \`MediaPipe\`, \`Styled-Components\`, \`Vite\`, \`HTML5 Canvas\`, \`AWS S3\`

🧑🏻‍💻 **Team**

- 프론트엔드 개발자 3명 (본인 포함)
- 백엔드 개발자 3명

🤚🏻 **Part**

- 팀장
- 촬영 및 편집 코어 로직 구현
- 실시간 통신 최적화
- AI 모델 최적화

🤔 **Learned**

- \`requestAnimationFrame\`을 활용한 렌더링 루프 제어와 이벤트 디바운싱(Debouncing)을 통해, 다수의 참여자가 동시에 상호작용하는 Canvas 환경에서의 성능 저하 문제를 해결하며 브라우저 렌더링 원리를 깊이 이해했습니다.
- LiveKit의 Data Channel을 활용해 단순 화상 통화를 넘어선 '상호작용형 실시간 애플리케이션'을 구축하며, 네트워크 지연을 고려한 상태 동기화 전략의 중요성을 배웠습니다.
- 서버를 거치지 않고 클라이언트(브라우저) 리소스를 활용하는 Edge AI(MediaPipe) 기술을 적용해보며, 서비스의 성격에 맞는 리소스 활용 전략과 최적화 기법을 익혔습니다.
- TypeScript와 ESLint를 엄격하게 적용하여 런타임 에러를 90% 이상 줄이는 경험을 통해, 복잡한 프론트엔드 로직일수록 정적 타이핑과 코드 품질 관리가 필수적임을 깨달았습니다.`,
  tags: ["React", "TypeScript", "Java", "SpringBoot", "MySQL", "Redis"],
  image: "/images/projects/yena-now.png",
  github: "https://github.com/Yena-Now",
  workPeriod: {
    start: "2025-07-14",
    end: "2025-08-18",
  },
  featured: true,
};

export default YenaNow;
