import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";

export default function Header() {
  return (
    <header className="border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="flex font-medium items-center text-slate-800 dark:text-white"
        >
          <span className="text-xl tracking-tight">Ryongseong</span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/#aboutme"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              About Me
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="https://open.kakao.com/o/sNeUE4Ah"
              target="_blank"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </div>
    </header>
  );
}
