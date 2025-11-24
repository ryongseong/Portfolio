"use client";

export default function ScrollToBtn({ target }: { target: string }) {
  return (
    <button
      className="mt-10 mb-10 group flex h-12 w-12 items-center justify-center rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 animate-bounce"
      onClick={() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </button>
  );
}
