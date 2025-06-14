"use client";

import Link from "next/link";
import { useState } from "react";
import DarkModeToggleButton from "./DarkModeToggleButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="flex font-medium items-center text-slate-800 dark:text-white"
        >
          <span className="text-md md:text-xl tracking-tight">Ryongseong</span>
        </Link>

        <button
          className="block md:hidden text-slate-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-xs md:text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-xs md:text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="https://open.kakao.com/o/sNeUE4Ah"
              target="_blank"
              className="text-xs md:text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-900 px-6 pb-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link
                href="/"
                className="block text-sm font-medium hover:text-slate-900 dark:hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block text-sm font-medium hover:text-slate-900 dark:hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="https://open.kakao.com/o/sNeUE4Ah"
                target="_blank"
                className="block text-sm font-medium hover:text-slate-900 dark:hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
