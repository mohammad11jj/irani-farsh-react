import React, { useState } from "react";

function ImageStack({ images = [] }) {
  const [isRotated, setIsRotated] = useState(false);

  const defaultImages = [
    { src: "/assets/images/1.png", alt: "Image 1" },
    { src: "/assets/images/2.png", alt: "Image 2" },
    { src: "/assets/images/3.png", alt: "Image 3" },
    { src: "/assets/images/4.png", alt: "Image 4" },
    { src: "/assets/images/5.png", alt: "Image 5" },
  ];

  const finalImages = images.length > 0 ? images : defaultImages;

  const handleToggle = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="relative flex justify-start">
      <div className="relative md:w-45 md:h-70  lg:w-60 lg:h-90 w-40 h-100 mx-5 mt-25 ">
        {/* عکس 5 - پایین‌ترین لایه */}
        <img
          src={finalImages[4]?.src}
          alt={finalImages[4]?.alt}
          className="absolute top-0 left-0 w-45 h-80 md:w-45 md:h-70 lg:w-60 lg:h-90 hover:z-50! hover:opacity-100!"
          style={{
            transform: isRotated ? "rotate(0deg)" : "rotate(-46deg)",
            opacity: isRotated ? 1 : 0.5,
            transition: "transform 1.3s ease, opacity 1s ease",
            transformOrigin: "bottom left",
          }}
        />

        {/* عکس 4 */}
        <img
          src={finalImages[3]?.src}
          alt={finalImages[3]?.alt}
          className="absolute top-0 left-0 w-45 h-80 md:w-45 md:h-70 lg:w-60 lg:h-90 hover:z-50! hover:opacity-100!"
          style={{
            transform: isRotated ? "rotate(0deg)" : "rotate(-34deg)",
            opacity: isRotated ? 1 : 0.63,
            transition: "transform 1.3s ease, opacity 1s ease",
            transformOrigin: "bottom left",
          }}
        />

        {/* عکس 3 */}
        <img
          src={finalImages[2]?.src}
          alt={finalImages[2]?.alt}
          className="absolute top-0 left-0 w-45 h-80 md:w-45 md:h-70 lg:w-60 lg:h-90 hover:z-50! hover:opacity-100!"
          style={{
            transform: isRotated ? "rotate(0deg)" : "rotate(-23deg)",
            opacity: isRotated ? 1 : 0.75,
            transition: "transform 1.3s ease, opacity 1s ease",
            transformOrigin: "bottom left",
          }}
        />

        {/* عکس 2 */}
        <img
          src={finalImages[1]?.src}
          alt={finalImages[1]?.alt}
          className="absolute top-0 left-0 w-45 h-80 md:w-45 md:h-70 lg:w-60 lg:h-90 hover:z-50! hover:opacity-100!"
          style={{
            transform: isRotated ? "rotate(0deg)" : "rotate(-12deg)",
            opacity: isRotated ? 1 : 0.8,
            transition: "transform 1.3s ease, opacity 1s ease",
            transformOrigin: "bottom left",
          }}
        />

        {/* عکس 1 - بالاترین لایه */}
        <img
          src={finalImages[0]?.src}
          alt={finalImages[0]?.alt}
          className="absolute top-0 left-0 w-45 h-80 md:w-45 md:h-70 lg:w-60 lg:h-90 hover:z-50! hover:opacity-100!"
          style={{
            transform: isRotated ? "rotate(0deg)" : "rotate(0deg)",
            opacity: isRotated ? 1 : 1,
            transition: "transform 1.3s ease, opacity 1s ease",
            transformOrigin: "bottom left",
          }}
        />
      </div>

      <svg
        className={`absolute -left-50 bottom-10 cursor-pointer transition-transform duration-[1.3s] ease-in-out ${
          isRotated ? "rotate-180" : "rotate-0"
        }`}
        onClick={handleToggle}
        width="87"
        height="20"
        viewBox="0 0 87 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M87 2L69.6848 1.5728L77.9724 16.7818L87 2ZM0.147184 3.23398C14.968 13.4768 27.1127 18.616 39.0251 19.3951C50.9422 20.1745 62.4057 16.575 75.8182 9.80056L74.4657 7.12274C61.2595 13.793 50.364 17.1303 39.2209 16.4015C28.0729 15.6724 16.456 10.8584 1.85282 0.76602L0.147184 3.23398Z"
          fill="#CB1B1B"
        />
      </svg>
    </div>
  );
}

export default ImageStack;