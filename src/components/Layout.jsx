import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { navigation } from "../constants/navigation";

import NextPage from "./NextPage";

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headings, setHeadings] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const hasMountedRef = useRef(false);

  // Global Lightbox listener
  useEffect(() => {
    const handleImageClick = (e) => {
      // Check if clicked element is an image inside docs-content
      if (e.target.tagName === "IMG" && e.target.closest("#docs-content")) {
        setLightboxImage(e.target.src);
      }
    };

    document.addEventListener("click", handleImageClick);
    return () => document.removeEventListener("click", handleImageClick);
  }, []);

  // Flatten navigation for easier lookup
  const allLinks = useMemo(() => {
    return navigation.flatMap((section) => section.links);
  }, []);

  // Extract headings from children for Sidebar
  useEffect(() => {
    const timer = setTimeout(() => {
      const contentElement = document.getElementById("docs-content");
      if (contentElement) {
        const headingElements = contentElement.querySelectorAll("h2, h3");
        const extractedHeadings = Array.from(headingElements).map((el) => {
          if (!el.id) {
            el.id = el.textContent.toLowerCase().replace(/\s+/g, "-");
          }
          return {
            id: el.id,
            text: el.textContent,
            level: parseInt(el.tagName[1]),
          };
        });
        setHeadings(extractedHeadings);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [children, location.pathname]);

  const headingIds = useMemo(() => headings.map((h) => h.id), [headings]);
  const activeId = useScrollSpy(headingIds);



  // FIX: Force scroll up on navigation with layout animation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    setIsPageLoading(true);
    const timer = setTimeout(() => setIsPageLoading(false), 350);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isDocsPage = location.pathname.startsWith("/docs");

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-stone-900">
      {isPageLoading && (
        <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-white/65 backdrop-blur-[2px] dark:bg-stone-900/65">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-brand dark:border-stone-700 dark:border-t-brand" />
            <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
              Loading page...
            </p>
          </div>
        </div>
      )}

      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Mobile Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-30 bg-stone-900/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* {isDocsPage && ( */}
          <Sidebar
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
            headings={headings}
            activeId={activeId}
          />
          {/* // )} */}

          <main
            className={`flex-1 min-w-0 py-12 lg:px-12`}
          >
            <div
              id="docs-content"
              className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-brand dark:prose-a:text-brand prose-code:rounded prose-code:bg-stone-100 prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-stone-800"
            >
              {children}
            </div>
            {<NextPage />}
            <Footer />
          </main>
        </div>

        {/* Global Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <img
                src={lightboxImage}
                alt="Lightbox enlarged"
                className="max-h-full max-w-full rounded-lg shadow-2xl cursor-default object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-0 right-0 sm:top-4 sm:right-4 p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors backdrop-blur-md cursor-pointer"
                onClick={() => setLightboxImage(null)}
                aria-label="Close lightbox"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:rotate-90 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
