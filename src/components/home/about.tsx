import Link from "next/link";
import Animation from "./animation";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Image
          src="/images/profile.png"
          alt="Profile Picture"
          className="w-32 h-32 mb-4 rounded-full object-cover shadow-lg"
          width={128}
          height={128}
        />
        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-light">
          안녕하세요
          <br className="hidden lg:inline-block" />
          <span className="font-semibold mt-2 block">풀스택 개발자</span>
          <span className="font-medium mt-2">임성룡</span>입니다.
        </h1>
        <p className="mb-8 leading-relaxed text-lg max-w-lg">
          저는 웹과 모바일 애플리케이션 개발에 열정을 가진
          <br className="hidden lg:inline-block" />
          풀스택 개발자입니다. 다양한 기술 스택을 활용하여
          <br className="hidden lg:inline-block" />
          사용자 친화적이고 효율적인 솔루션을 제공하려고 노력합니다.
          <br className="hidden lg:inline-block" />
        </p>
        <div className="flex">
          <Link href="/projects" className="btn-simple">
            프로젝트 보기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
