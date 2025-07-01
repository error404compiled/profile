import React, { useEffect, useState } from "react";

const navLinks = ["home", "projects", "blog", "contact"];

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode class on html tag
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900 backdrop-blur-md shadow-sm">
      <div className="w-full max-w-4xl mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          {/* Nav links left */}
          <ul className="flex gap-6 text-gray-600 dark:text-gray-300 text-lg">
            {navLinks.map((name, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-black dark:hover:text-white capitalize transition"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons right */}
          <div className="flex gap-4 text-xl">
            <button title="Chat Toggle">💬</button>
            <button
              title="Toggle Theme"
              onClick={() => setIsDark(!isDark)}
              className="transition-transform"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
