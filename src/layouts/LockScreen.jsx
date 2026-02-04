import React, { useState, useEffect } from "react";
import {User} from "lucide-react";

export default function LockScreen({ goNext }) {
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlock = () => {
    setIsUnlocking(true);
    setTimeout(() => goNext(), 500);
  };

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white font-sans select-none">
      {/* Background */}
      <div
        className={`absolute inset-0 bg-[url('/bglock.jpg')] bg-cover bg-center bg-no-repeat
          transition-all duration-700 ease-in-out
          ${
            isUnlocking
              ? "scale-110 blur-xl brightness-125"
              : "scale-100 blur-0 brightness-90"
          }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-700 ${
          isUnlocking ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 w-full h-full flex flex-col items-center justify-between py-20
          transition-all duration-500
          ${
            isUnlocking
              ? "opacity-0 translate-y-[-20px]"
              : "opacity-100 translate-y-0"
          }`}
      >
        {/* Date + Time */}
        <div className="flex flex-col items-center justify-center mt-16 drop-shadow-lg">
          <span className="text-[15px] font-bold  instrument-serif-regular-italic leading-none tracking-wide text-white/90">
            {formattedDate}
          </span>

          <span className="text-[90px] font-syne  font-bold leading-none tracking-tight text-white/80">
            {formattedTime}
          </span>
        </div>

        {/* Avatar + Button */}
        <div className="flex flex-col items-center justify-center mb-26 gap-6">
          {/* ⭐ HOVER EFFECT ADDED HERE ⭐ */}
          <div className="relative group">
            {/* Glass Glow Circle */}

            {/* Avatar */}
            <img
              src="./user.jpg"
              alt="user"
              className="
                relative z-10
                w-28 h-28 rounded-full object-cover
                border border-white
                transition-all duration-500
                group-hover:scale-120
              "
            />
          </div>

          {/* Unlock Button */}
          <button
            onClick={handleUnlock}
            className="
              group relative px-8 py-1 rounded
              bg-transparent 
              border-0 border-transparent
              flex items-center gap-4
              text-lg font-semibold tracking-[0.2em] uppercase
              text-white
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              transition-all duration-300 ease-out
              hover:bg-white/5 hover:border-white/30
      
            "
          >
            <span className="font-syne">
              <p className="font-medium text-[12px] shadow-lg instrument-serif-regular-italic">
                Tanish Tirpathi
              </p>
              <p className="font-light font-syne text-white/50 text-[13px] shadow-xl">
                click here to unlock..
              </p>
            </span>

            {/* Shine */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div
                className="
                  absolute top-0 -left-[120%] w-full h-full
                  bg-gradient-to-r from-transparent via-white/25 to-transparent
                  skew-x-12
                  transition-all duration-700
                  group-hover:left-[120%]
                "
              />
            </div>
          </button>
        </div>

        {/* Bottom */}
        <div className="mb-4 flex flex-col items-center gap-2 opacity-60">
          <div className="w-10 h-1 rounded-full bg-white/50" />
        </div>
      </div>

      <div className="fixed top-5 right-10 text-white font-syne font-bold">
        <span ><h4 className="flex justify-center items-center gap-1">In <User className="w-5 h-5 font-bold"/> </h4></span>
      </div>
    </div>  
  );
}
