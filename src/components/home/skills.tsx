"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillItem from "./SkillItem";

const skills = {
  JavaScript: {
    id: "javascript",
    description:
      "웹 개발의 핵심 언어로, 동적이고 상호작용이 가능한 웹사이트를 만드는 데 사용됩니다.",
  },
  TypeScript: {
    id: "typescript",
    description:
      "JavaScript의 슈퍼셋으로, 정적 타입을 지원하여 코드의 안정성과 가독성을 높입니다.",
  },
  React: {
    id: "react",
    description:
      "사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리로, 컴포넌트 기반 개발을 지원합니다.",
  },
  NodeJS: {
    id: "nodejs",
    description:
      "서버 측 JavaScript 실행 환경으로, 확장 가능한 네트워크 애플리케이션을 구축할 수 있습니다.",
  },
  Python: {
    id: "python",
    description:
      "간결하고 읽기 쉬운 구문을 가진 다목적 프로그래밍 언어로, 데이터 과학과 백엔드 개발에 널리 사용됩니다.",
  },
  Express: {
    id: "express",
    description:
      "Node.js를 위한 웹 프레임워크로, 웹 애플리케이션과 API를 쉽게 개발할 수 있게 해줍니다.",
  },
  MongoDB: {
    id: "mongodb",
    description:
      "문서 지향 NoSQL 데이터베이스로, JSON과 유사한 형식으로 데이터를 저장합니다.",
  },
  PostgreSQL: {
    id: "postgresql",
    description:
      "강력한 오픈 소스 관계형 데이터베이스로, 확장성과 표준 준수를 자랑합니다.",
  },
  Docker: {
    id: "docker",
    description:
      "애플리케이션을 컨테이너화하여 개발, 배포 및 실행을 간소화하는 플랫폼입니다.",
  },
  Elastic: {
    id: "elastic",
    description:
      "분산형 검색 및 분석 엔진으로, 대용량 데이터를 빠르게 검색하고 분석할 수 있습니다.",
  },
  "Next.js": {
    id: "nextjs",
    description:
      "React 기반 프레임워크로, 서버 사이드 렌더링과 정적 사이트 생성을 지원합니다.",
  },
  FastAPI: {
    id: "fastapi",
    description:
      "Python 기반의 현대적인 웹 프레임워크로, 빠른 API 개발을 위한 도구를 제공합니다.",
  },
};

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    className: "center skill-slider",
    centerMode: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    fade: false,
    cssEase: "ease",
    swipeToSlide: true,
    adaptiveHeight: false,
    arrows: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "-30px" }}>
        <ul className="slick-dots"> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          fade: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            기술 스택
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full"></div>
        </div>

        {mounted && (
          <div className="skill-carousel-container px-2 pb-8">
            <Slider {...settings}>
              {Object.entries(skills).map(([key, value]) => (
                <div key={key} className="px-2 py-2 h-full">
                  <div className="h-full w-full">
                    <SkillItem
                      skill={value.id}
                      description={value.description}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}
