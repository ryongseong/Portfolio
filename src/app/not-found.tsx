"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-9xl font-extralight mb-6 opacity-20">404</div>

      <div className="relative mb-8 w-16 h-16">
        <div className="absolute inset-0 border-t-2 border-slate-300 dark:border-slate-600 rounded-full animate-spin"></div>
        <div className="absolute inset-[6px] border-t-2 border-slate-500 dark:border-slate-400 rounded-full animate-spin-slow"></div>
      </div>

      <h1 className="text-3xl font-light mb-3 text-center">
        페이지를 찾을 수 없습니다
      </h1>

      <p className="mb-8 text-slate-600 dark:text-slate-400 text-center max-w-md">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          이전 페이지
        </button>

        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-slate-800 text-white dark:bg-white dark:text-slate-800 rounded-md hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
        >
          홈으로 ({countdown}초)
        </button>
      </div>
    </div>
  );
}
