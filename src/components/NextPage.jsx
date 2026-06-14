import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { navigation } from "../constants/navigation";

export default function NextPage() {
  const location = useLocation();
  const allLinks = navigation.flatMap((section) => section.links);
  const currentIndex = allLinks.findIndex(
    (link) => link.href === location.pathname,
  );

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < allLinks.length - 1;

  if (!hasPrev && !hasNext) {
    return null;
  }

  const prevLink = hasPrev ? allLinks[currentIndex - 1] : null;
  const nextLink = hasNext ? allLinks[currentIndex + 1] : null;

  return (
    <div className="mt-16 flex items-center justify-between border-t border-stone-200 pt-8 dark:border-stone-800">
      {prevLink ? (
        <Link to={prevLink.href} className="group flex flex-col items-start gap-1">
          <span className="text-sm font-medium text-stone-500 dark:text-stone-400">
            Previous Page
          </span>
          <div className="flex items-center gap-1 text-lg font-bold text-stone-900 group-hover:text-brand dark:text-white dark:group-hover:text-brand">
            <ChevronLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            {prevLink.title}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextLink ? (
        <Link to={nextLink.href} className="group flex flex-col items-end gap-1">
          <span className="text-sm font-medium text-stone-500 dark:text-stone-400">
            Next Page
          </span>
          <div className="flex items-center gap-1 text-lg font-bold text-stone-900 group-hover:text-brand dark:text-white dark:group-hover:text-brand">
            {nextLink.title}
            <ChevronRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
