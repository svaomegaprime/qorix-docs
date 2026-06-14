import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 py-12 dark:border-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            © {new Date().getFullYear()} Qorix All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
