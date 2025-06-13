"use client";

import Link from "next/link";

export default function ScrollToTopBtn() {
  return (
    <Link
      href="/"
      className="
      fixed
      bottom-20 right-4 z-50 flex h-12 w-12 
      items-center justify-center rounded-full 
      bg-gray-200 dark:bg-gray-800
      text-white shadow-lg
      hover:bg-gray-700 dark:hover:bg-gray-300
      focus:outline-none focus:ring-2 focus:ring-gray-500"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
        />
      </svg>
    </Link>
  );
}
