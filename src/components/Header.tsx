import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Ryongseong</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/projects" className="mr-5 hover:text-gray-900">
            Projects
          </Link>
          <Link
            href="https://open.kakao.com/o/sNeUE4Ah"
            target="_blank"
            className="mr-5 hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
