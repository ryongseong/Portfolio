import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 align-items-center">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-5/12 flex justify-center">
          <div className="relative w-128 h-128 md:w-96 md:h-96">
            <Image
              src="/images/profile.png"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <p className="mb-6">
            어제보다 더 나은 결과를 위해 끊임없이 질문하고 탐구합니다. 빠르게
            변화하는 트렌드 속에서도 흔들리지 않는 기초를 다지며, 새로운 기술을
            두려움 없이 받아들입니다. 실패를 단순한 오류가 아닌 성장의 데이터로
            삼아, 매 프로젝트마다 한 단계 도약하는 것을 목표로 합니다. 개인의
            기술적 성장이 조직의 발전과 사용자의 만족으로 이어질 수 있도록,
            배우는 자세를 잃지 않고 꾸준히 정진하고 있습니다.
          </p>
          <h3 className="mb-3 text-xl font-bold">풀스택 개발자</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="py-2">
              <h6 className="font-semibold">
                이름:{" "}
                <span className="text-gray-500 dark:text-gray-400">임성룡</span>
              </h6>
            </div>
            <div className="py-2">
              <h6 className="font-semibold">
                생년월일:{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  2000년 6월 14일
                </span>
              </h6>
            </div>
            <div className="py-2">
              <h6 className="font-semibold">
                학위:{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  동의대학교 산업ICT기술공학 학사
                </span>
              </h6>
            </div>
            <div className="py-2">
              <h6 className="font-semibold">
                이메일:{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  ryongseong.dev@email.com
                </span>
              </h6>
            </div>
            <div className="py-2">
              <h6 className="font-semibold">
                전화번호:{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  +82 10-2275-2119
                </span>
              </h6>
            </div>
            <div className="py-2">
              <h6 className="font-semibold">
                위치:{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  부산, 대한민국
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
