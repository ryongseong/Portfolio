"use client";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/NotFound.json";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="mb-8">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{
            maxWidth: 800,
            maxHeight: 800,
          }}
        />
      </div>

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
          홈으로
        </button>
      </div>
    </div>
  );
}
