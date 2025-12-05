"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: "landing", title: "Home" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
];

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>("landing");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col items-end space-y-4">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`group flex items-center justify-end gap-3 transition-all duration-300 ${
                activeSection === id ? "scale-110" : ""
              }`}
              aria-label={`Navigate to ${title}`}
            >
              <span
                className={`text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                } text-muted-foreground`}
              >
                {title}
              </span>
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
                  activeSection === id
                    ? "border-primary bg-primary scale-125"
                    : "border-muted-foreground/30 bg-transparent group-hover:border-primary/50 group-hover:scale-110"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

