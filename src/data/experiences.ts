export interface Experience {
  id: string;
  title: string;
  description: string;
  period: string;
  responsibilities: {
    title: string;
    content: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: "3",
    title: "(주)크리스틴컴퍼니 인턴",
    description: "백엔드, 데이터 수집/관리 직무",
    period: "2024.09 - 2024.12",
    responsibilities: [
      {
        title: "데이터 수집 및 전처리",
        content:
          "웹 크롤링을 통해 다양한 소스에서 데이터를 수집하고, 이를 분석에 적합한 형태로 전처리하는 작업을 수행",
      },
      {
        title: "Kibana 대시보드 제작",
        content:
          "수집된 데이터를 시각화하기 위해 Kibana를 활용하여 대시보드를 설계 및 구현",
      },
    ],
  },
  {
    id: "2",
    title: "인공지능그랜드ICT연구센터 학부연구생",
    description:
      "다양한 인공지능 관련 연구 프로젝트에 참여하고 경험을 쌓았습니다.\n기업 과제 진행, 한의대 과제를 진행하였습니다.",
    period: "2023.07 - 2024.08",
    responsibilities: [
      {
        title: "기업 과제 진행",
        content:
          "데이터를 수집, 전처리하는 작업 진행 및 기업과 소통하며 데이터에 대한 수집 방법 공유",
      },
      {
        title: "한의대 과제 진행",
        content:
          "OpenAI Assistant Model을 환자로 지정하여 한의학과 학생들이 모의 진료를 할 수 있는 플랫폼 개발",
      },
    ],
  },
  {
    id: "1",
    title: "창업동아리 인사이트",
    description:
      "다른 학과들과 함께 개발에 대해 서로 토론하고 같이 프로젝트를 하기 위해 만들어진 동아리입니다.\n파이썬 스터디장을 맡아 개발하는 과정을 서로 공유하며 역량을 키웠습니다.",
    period: "2023.03 - 2024.08",
    responsibilities: [
      {
        title: "파이썬 스터디장",
        content:
          "매주 수요일마다 파이썬에 대한 기초부터 입출력, 알고리즘, 자료구조에 대한 학습 자료를 만들고 후배들에게 공유",
      },
      {
        title: "코테 스터디 진행",
        content:
          "매주 목요일마다 백준, 프로그래머스에서 문제를 선정하여 해결한 이후 부원들과 함께 문제에 대한 접근 방식, 해결 방법에 대해 토론",
      },
    ],
  },
];

