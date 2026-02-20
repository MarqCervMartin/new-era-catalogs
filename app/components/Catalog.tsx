'use client';

import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import FurnitureCard from './FurnitureCard';
import { FurnitureItem } from '../types/furniture';

interface CatalogProps {
  items: FurnitureItem[];
}

export default function Catalog({ items }: CatalogProps) {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevious = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handlePageChange = (e: any) => {
    setCurrentPage(e.data);
  };

  const totalPages = Math.ceil(items.length / 2) * 2; // Ensure even number of pages

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-950 py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Furniture Catalog
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Page {currentPage + 1} of {totalPages}
        </p>
      </div>

      <div className="relative">
        {/* Book Container - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:block">
          <HTMLFlipBook
            ref={bookRef}
            width={450}
            height={600}
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={handlePageChange}
            className="shadow-2xl"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            showPageCorners={true}
            disableFlipByClick={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            renderOnlyPageLengthChange={false}
          >
            {/* Cover Page */}
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black flex flex-col items-center justify-center p-8 shadow-xl">
              <h2 className="text-5xl font-bold text-white mb-4 text-center">
                New Era
              </h2>
              <p className="text-xl text-zinc-300 text-center">
                Furniture Collection
              </p>
              <p className="text-sm text-zinc-400 mt-8">2026 Edition</p>
            </div>

            {/* Furniture Pages */}
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800"
              >
                <FurnitureCard item={item} />
              </div>
            ))}

            {/* Back Cover */}
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-900 dark:to-black flex flex-col items-center justify-center p-8 shadow-xl">
              <p className="text-zinc-400 text-center text-sm">
                End of Catalog
              </p>
              <p className="text-zinc-500 text-center text-xs mt-4">
                © 2026 New Era Catalogs
              </p>
            </div>
          </HTMLFlipBook>
        </div>

        {/* Mobile Grid View - Shown only on mobile */}
        <div className="md:hidden grid grid-cols-1 gap-6 w-full max-w-md">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden"
            >
              <FurnitureCard item={item} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Hidden on mobile */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 2}
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
