import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/Wallpaper/one.jpg",
  "/Wallpaper/two.png",
  "/Wallpaper/three.jpg",
  "/Wallpaper/four.jpg",
  "/Wallpaper/fie.jpg",
  "/Wallpaper/six.jpg",
  "/Wallpaper/seven.png",
  "/Wallpaper/eight.jpg",
  "/Wallpaper/nine.jpg",
  "/Wallpaper/ten.jpg",
  "/Wallpaper/eleven.jpg",
  "/Wallpaper/twelev.jpg",
  "/Wallpaper/thirteen.jpg",
  "/Wallpaper/fourteen.jpg",
];

// Staggered animation variant for the entrance
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.04, // Slightly faster stagger delay
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
};

// Component for each grid item to handle the entrance animation
const StaggeredGridItem = ({ img, i, setSelected }) => {
  // Logic to define the image height for the asymmetrical grid
  const getHeight = (index) => {
    switch (index % 5) {
      case 0:
        return "320px";
      case 1:
        return "200px";
      case 2:
        return "260px";
      case 3:
        return "180px";
      default:
        return "350px";
    }
  };

  return (
    <motion.div
      key={i}
      layoutId={img}
      custom={i}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      whileHover={{ scale: 1.05, filter: "brightness(1.15)" }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      onClick={() => setSelected(img)}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl shadow-black/70 border border-white/10 break-inside-avoid"
    >
      <img
        src={img}
        alt={`Wallpaper ${i + 1}`}
        className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          height: getHeight(i),
        }}
      />
      {/* Subtle overlay for visual effect */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 backdrop-blur-[1px] transition-all"></div>
    </motion.div>
  );
};

export default function MacGallery() {
  const [selected, setSelected] = useState(null);

  const setWallpaper = () => {
    localStorage.setItem("desktop_wallpaper", selected);
    setSelected(null);
    alert("Wallpaper set successfully!");
    window.location.reload();
  };

  return (
    <div className="w-full min-h-screen py-10 bg-neutral-950 text-white px-6 overflow-hidden">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="text-4xl font-extrabold mb-10 text-center tracking-tight"
      >
        <span className="block text-white/70 font-light text-xl mb-1">
           Wallpaper Gallery
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Captured moments
        </span>
      </motion.h1>

      {/* ASYMMETRICAL GRID - using columns utilities for the Pinterest effect */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {IMAGES.map((img, i) => (
          <StaggeredGridItem key={img} img={img} i={i} setSelected={setSelected} />
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            // Make backdrop fade in faster
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }} // Faster backdrop transition
            onClick={() => setSelected(null)} // Close on backdrop click
          >
            <motion.div
              layoutId={selected}
              className="relative"
              // Prevent closing when clicking on the image content itself
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.75, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              // Faster and snappier spring transition for the image
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src={selected}
                alt="Selected Wallpaper Preview"
                className="max-w-full lg:max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl shadow-black/90 border border-white/30"
              />

              {/* ACTION BUTTONS: Directly on the image */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                
                {/* SET WALLPAPER BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-cyan-500/90 hover:bg-cyan-500 text-white font-semibold backdrop-blur-md shadow-lg transition-all border border-white/20"
                  onClick={setWallpaper}
                >
                  🚀 Set as Wallpaper
                </motion.button>

                {/* CLOSE BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold backdrop-blur-md shadow-lg transition-all border border-white/20"
                  onClick={() => setSelected(null)}
                >
                  ❌ Close
                </motion.button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}