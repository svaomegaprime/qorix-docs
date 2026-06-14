import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

import { navigation } from "../constants/navigation";

export default function Sidebar({ isOpen, setIsOpen, headings, activeId }) {
  const location = useLocation();
  console.clear();
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-stone-200 bg-white transition-transform duration-300 ease-in-out lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 dark:border-stone-800 dark:bg-stone-950/50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex h-full flex-col justify-between overflow-y-auto px-6 py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <nav className="space-y-8 flex-1">
          {navigation.map((section) => (
            <div key={section.title}>
              <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-white">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const isPageActive = location.pathname === link.href;
                  return (
                    <li key={link.href} className="space-y-2">
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors",
                          isPageActive
                            ? " text-brand font-medium dark:text-brand"
                            : "text-stone-600 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-300",
                        )}
                      >
                        {link.title}
                      </Link>

                      {isPageActive && headings && headings.length > 0 && (
                        <ul className="ml-4 space-y-2 border-l border-stone-200 pl-4 dark:border-stone-800">
                          {headings.map((heading) => (
                            <li key={heading.id}>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsOpen(false);
                                  const element = document.getElementById(
                                    heading.id,
                                  );
                                  if (element) {
                                    element.scrollIntoView({
                                      behavior: "smooth",
                                    });
                                    window.history.pushState(
                                      null,
                                      "",
                                      "#" + heading.id,
                                    );
                                  }
                                }}
                                className={cn(
                                  "block w-full text-left font-medium text-sm transition-colors hover:text-brand dark:hover:text-brand mb-2",
                                  activeId === heading.id
                                    ? "text-brand dark:text-brand"
                                    : "text-stone-500 dark:text-stone-400",
                                )}
                                style={{
                                  paddingLeft: `${(heading.level - 2) * 0.75}rem`,
                                }}
                              >
                                {heading.text}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
