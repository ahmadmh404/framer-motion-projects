import { useState } from "react";
import { motion, useScroll } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1516905041604-7935af78f572?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516906571665-49af58989c4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1515704089429-fd06e6668458?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1525548002014-e18135d814d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const moveSlide = (action: "plus" | "minus") => {
    setCurrentIndex((prev) =>
      action === "plus"
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    );

    setShowThumbnails(true);

    setTimeout(() => {
      setShowThumbnails(false);
    }, 5000);
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);

    setShowThumbnails(true);

    setTimeout(() => {
      setShowThumbnails(false);
    }, 5000);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-3xl">
        <div className="relative w-full shadow-lg overflow-hidden mb-10">
          {/* Clickable thumbnails */}
          <motion.div
            className={`flex w-full mb-4 transition-opacity duration-200 ${
              showThumbnails ? "opacity-100" : "opacity-0"
            }`}
          >
            {images.map((image, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setShowThumbnails(true)}
                onMouseLeave={() => setShowThumbnails(false)}
                onClick={() => selectSlide(idx)}
                className={`flex-1 mt-8 cursor-pointer rounded-lg overflow-hidden border-2 ${
                  currentIndex === idx
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`iamge-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Actual images */}
        <div className="flex items-center gap-5 overflow-x-auto">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              style={{ x: scrollX }}
              initial={{
                x: "-100%",
              }}
              animate={{
                x: `${-currentIndex * 100}%`,
              }}
              className="min-w-full"
            >
              <img src={img} alt={`Slide-${idx + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-10 top-1/2 -translate-x-1/2 p-2 opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => moveSlide("minus")}
      >
        &#10094;
      </button>

      <button
        className="absolute right-10 top-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => moveSlide("plus")}
      >
        &#10095;
      </button>
    </div>
  );
};
