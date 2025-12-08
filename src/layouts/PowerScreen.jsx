import React, { useState } from 'react';
import { RiShutDownLine } from "react-icons/ri";

export default function PowerScreen({ goNext }) {
  const [isPoweringOn, setIsPoweringOn] = useState(false);

  const handleClick = () => {
    setIsPoweringOn(true); // trigger animation
    setTimeout(() => goNext(), 500); // wait for animation before navigating
  };

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Outer Ring */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-900 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        <div
          onClick={handleClick}
          className={`
            relative
            w-22 h-22
            rounded-full
            border border-white/5
            bg-gradient-to-b from-[#2a2a2a] to-[#161616]
            flex items-center justify-center
            text-gray-400
            shadow-[0_10px_20px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.1)]
            transition-all duration-500 ease-out
            hover:text-white
            hover:shadow-[0_0_20px_rgba(38,220,38,0.4),_inset_0_1px_1px_rgba(255,255,255,0.2)]
            hover:scale-105
            active:scale-95
            active:shadow-inner
            ${isPoweringOn ? "scale-110 opacity-0 blur-sm" : ""}
          `}
          aria-label="Power On"
        >
          {/* Power Icon */}
          <RiShutDownLine 
            className={`
              text-3xl 
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
              transition-colors duration-300
              group-hover:text-green-500
              group-hover:drop-shadow-[0_0_8px_rgba(38,220,38,0.8)]
            `} 
          />

          {/* LED Indicator */}
          <div className="absolute top-6 right-6 flex items-center justify-center">
            <span
              className="
                w-2.5 h-2.5
                rounded-full
                bg-green-600
                shadow-[0_0_8px_2px_rgba(0,255,0,0.6)]
                animate-pulse
              "
            />
            <span className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Optional Text */}
      <div className="absolute bottom-10 text-white/20 text-sm tracking-[0.2em] font-light uppercase">
        Tap to Start
      </div>
    </div>
  );
}
