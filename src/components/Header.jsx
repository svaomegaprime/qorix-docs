import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logo from "../images/logo.png";

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 lg:hidden dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-50"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className="flex items-center gap-2">
            <div className="h-20 w-20 rounded-lg flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex ml-8">
            <Link
              to="/docs"
              className="text-stone-600 hover:text-brand dark:text-stone-400 dark:hover:text-brand"
            >
              Docs
            </Link>
            <Link
              to="/faqs"
              className="text-stone-600 hover:text-brand dark:text-stone-400 dark:hover:text-brand"
            >
              FAQs
            </Link>
            <Link
              to="/privacy-policy"
              className="text-stone-600 hover:text-brand dark:text-stone-400 dark:hover:text-brand"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-stone-600 hover:text-brand dark:text-stone-400 dark:hover:text-brand"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="mailto:svaomegaprime@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-50"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="h-6 w-px bg-stone-200 dark:bg-stone-800" />

          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-50"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
