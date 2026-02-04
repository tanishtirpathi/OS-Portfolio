import React, { useState } from "react";
import { RiShutDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function PowerScreen({ goNext }) {
  const [isPoweringOn, setIsPoweringOn] = useState(false);

  const handleClick = () => {
    // Trigger the exit sequence (which starts the animation)
    setIsPoweringOn(true); 
  };

  // Variants for the main screen exit animation (blur and zoom)
  const screenVariants = {
    initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: {
      opacity: 0,
      scale: 1.15,          // Professional zoom
      filter: "blur(25px)", // Professional blur strength
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
      },
    },
  };

  // Variants for the power button interaction (immediate response)
  const buttonVariants = {
    initial: { scale: 1, opacity: 1 },
    pressed: { 
      scale: 0.85, 
      opacity: 0, 
      // This transition needs to be fast and simultaneous with the screen exit
      transition: { duration: 0.3, ease: "easeIn" } 
    },
  };

  return (
    // AnimatePresence handles mounting/unmounting transitions
    <AnimatePresence 
      // This ensures goNext() is only called after the screenVariants.exit animation finishes
      onExitComplete={goNext}
    >
      { !isPoweringOn && (
        <motion.div
          className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden"
          variants={screenVariants}
          initial="initial"
          // We use the exit prop to define the animation when isPoweringOn becomes true
          exit="exit"
          key="power-screen"
        >
          {/* Outer Ring & Power Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-900 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <motion.div
              onClick={handleClick}
              className="
                relative w-22 h-22
                rounded-full border border-white/5
                bg-gradient-to-b from-[#2a2a2a] to-[#161616]
                flex items-center justify-center text-gray-400
                shadow-[0_10px_20px_rgba(0,0,0,0.5),_inset_0_1px_1px_rgba(255,255,255,0.1)]
                cursor-pointer
                transition-all duration-500 ease-out
                hover:text-white hover:shadow-[0_0_20px_rgba(38,220,38,0.4),_inset_0_1px_1px_rgba(255,255,255,0.2)]
                hover:scale-105 active:scale-95 active:shadow-inner
              "
              variants={buttonVariants}
              initial="initial"
              // When isPoweringOn is true, the button quickly animates to 'pressed'
              animate={isPoweringOn ? "pressed" : "initial"}
            >
              <RiShutDownLine 
                className="text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-colors duration-300 group-hover:text-green-500 group-hover:drop-shadow-[0_0_8px_rgba(38,220,38,0.8)]"
              />
              
              {/* LED Indicator */}
              <div className="absolute top-6 right-6 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 shadow-[0_0_8px_2px_rgba(0,255,0,0.6)] animate-pulse" />
                <span className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Optional Text (Subtle entrance) */}
          <motion.div
            className="absolute bottom-10 text-white/20 text-sm tracking-[0.2em] font-light uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          >
            Tap to Start
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}