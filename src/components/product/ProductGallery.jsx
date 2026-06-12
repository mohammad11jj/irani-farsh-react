import { useState, useEffect, useCallback, useMemo } from "react";

function ProductGallery({ image, title, images }) {
  const defaultImage = images?.[0] || image;
  const [mainImage, setMainImage] = useState(defaultImage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const thumbnailImages = useMemo(() => {
    return images?.length > 0 ? images : [image];
  }, [images, image]);

  const currentIndex = thumbnailImages.findIndex((img) => img === mainImage);

  const nextImage = useCallback(() => {
    const nextIndex = (currentIndex + 1) % thumbnailImages.length;
    setMainImage(thumbnailImages[nextIndex]);
  }, [currentIndex, thumbnailImages]);

  const prevImage = useCallback(() => {
    const prevIndex =
      (currentIndex - 1 + thumbnailImages.length) % thumbnailImages.length;
    setMainImage(thumbnailImages[prevIndex]);
  }, [currentIndex, thumbnailImages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, currentIndex, nextImage, prevImage]);

  return (
    <>
      <div className="flex flex-col items-center gap-5 md:gap-7">
        {/* Main image */}
        <div className="w-full max-w-125 mx-auto">
          <div
            className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden cursor-zoom-in group"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Thumbnails grid */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-3 w-full max-w-125 mx-auto">
          {thumbnailImages.map((img, index) => (
            <div
              key={index}
              className={`aspect-square p-2 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:opacity-80 ${
                mainImage === img
                  ? "border-primary-500 ring-2 ring-primary-200"
                  : "border-neutral-300 hover:border-primary-300"
              }`}
              onClick={() => setMainImage(img)}
            >
              <img
                src={img}
                alt={`${title} - تصویر ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black"
          onClick={() => setIsModalOpen(false)}
        >
          {/* دکمه بستن */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 z-20 w-10 h-10 flex items-center justify-center cursor-pointer"
            aria-label="بستن"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* دکمه قبلی */}
          {thumbnailImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 z-20 w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transform"
              aria-label="قبلی"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* دکمه بعدی */}
          {thumbnailImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 z-20 w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transform"
              aria-label="بعدی"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* تصویر بزرگ */}
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={mainImage}
              alt={title}
              className="max-w-full max-h-full object-contain"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />

            {/* شمارنده تصاویر */}
            {thumbnailImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-20">
                {currentIndex + 1} / {thumbnailImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductGallery;
