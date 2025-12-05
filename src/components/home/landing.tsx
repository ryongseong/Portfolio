"use client";

import { useEffect, useState } from "react";
import Animation from "./animation";

export default function Landing() {
  const [text, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const fullText = `풀스택 개발자 임성룡입니다.`;

  useEffect(() => {
    if (characterCount < fullText.length) {
      const typeTimeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(characterCount));
        setCharacterCount((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(typeTimeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setText("");
        setCharacterCount(0);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [characterCount, fullText]);

  return (
    <div className="flex lg:flex-row flex-col items-center mx-auto gap-8 lg:my-4 px-4">
      <div className="lg:w-1/3 flex justify-center w-full mb-20 lg:mb-0">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Animation />
        </div>
      </div>
      <div className="lg:w-2/3 flex flex-col lg:items-start items-center lg:text-left text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 h-20 lg:h-24">
          {text}
          {characterCount < fullText.length && (
            <span className="inline-block w-3 ml-1 bg-black lg:h-8 h-6 lg:align-middle align-bottom animate-typing"></span>
          )}
        </h2>
        <p className="lg:text-lg text-base mb-4 max-w-2xl">
          저는 웹과 모바일 애플리케이션 개발에 열정을 가진
        </p>
        <p className="lg:text-lg text-base mb-4 max-w-2xl">
          풀스택 개발자입니다. 다양한 기술 스택을 활용하여
        </p>
        <p className="lg:text-lg text-base mb-4 max-w-2xl">
          사용자 친화적이고 효율적인 솔루션을 제공하려고 노력합니다.
        </p>
      </div>
    </div>
  );
}
