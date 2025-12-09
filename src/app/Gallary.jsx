import React, { useState } from "react";

const IMAGES = [
  "/Wallpaper/one.jpg",
  "/Wallpaper/two.jpg",
  "/Wallpaper/three.jpg",
  "/Wallpaper/four.jpg",
  "/Wallpaper/fie.jpg",
  "/Wallpaper/six.jpg",
  "/Wallpaper/seven.png",
];

export default function MacGallery() {
  const [selected, setSelected] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const setWallpaper = () => {
    localStorage.setItem("desktop_wallpaper", selected);
    setSelected(null);
    alert("Wallpaper set successfully!");
    window.location.reload();
  };

  return (
    <div className="w-full h-screen bg-neutral-900 text-white p-6 overflow-hidden">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        <span className="block text-white/50 font-light text-lg">
          Set wallpaper from here
        </span>
      </h1>

      {/* GRID */}
      <div className="columns-2 sm:columns-3 gap-4 space-y-4">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md shadow-black/40 border border-white/10 break-inside-avoid"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              className="w-full transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 rounded-xl"
              style={{
                height:
                  i % 5 === 0
                    ? "320px"
                    : i % 5 === 1
                    ? "200px"
                    : i % 5 === 2
                    ? "260px"
                    : i % 5 === 3
                    ? "180px"
                    : "350px",
                objectFit: "cover",
              }}
            />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 backdrop-blur-sm transition-all"></div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="relative">
            <img
              src={selected}
              className="max-w-4xl max-h-[80vh] rounded-xl shadow-xl border border-white/20 animate-zoomIn"
            />

            {/* Three-dot menu */}
            <div
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full px-3 py-1 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              ⋮
            </div>

            {/* Menu */}
            {showMenu && (
              <div className="absolute top-12 right-3 bg-neutral-800 border border-white/20 rounded-lg p-3 w-40 shadow-xl">
                <button
                  className="w-full text-left px-2 py-1 hover:bg-neutral-700 rounded"
                  onClick={setWallpaper}
                >
                  Set as wallpaper
                </button>

                <button
                  className="w-full text-left px-2 py-1 mt-1 hover:bg-neutral-700 rounded"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-zoomIn {
          animation: zoomIn 0.25s ease-out;
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
