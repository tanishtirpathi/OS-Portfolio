import { Rnd } from "react-rnd";
import { useAppStore } from "../store/Appstore.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function AppWindow({ window }) {
  const close = useAppStore((s) => s.closeApp);
  const focus = useAppStore((s) => s.focusApp);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // triggers exit animation
  };

  const handleExitComplete = () => {
    close(window.id); // remove from store AFTER exit animation
  };

  return (
    <Rnd
      default={{ x: 280, y: 90, width: 850, height: 500 }}
      minWidth={400}
      minHeight={250}
      bounds="parent"
      style={{ zIndex: window.z }}
      onDragStart={() => focus(window.id)}
      onResizeStart={() => focus(window.id)}
    >
      <AnimatePresence onExitComplete={handleExitComplete}>
        {isVisible && (
          <motion.div
            key={window.id}
            initial={{ opacity: 0, scale: 0.2, y: 190 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.3,
              y: 200,
              transition: { duration: 0.25, ease: "easeInOut" },
            }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-blur-lg bg-black/30 rounded-md shadow-2xl h-full flex flex-col border border-white/10"
          >
            {/* Title Bar */}
            <div className="relative h-8 bg-black/60 rounded-t-md flex items-center">
              {/* Traffic Light Buttons */}
              <div className="absolute left-3 flex items-center gap-2">
                <div
                  className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                  onClick={handleClose}
                ></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
                  onClick={handleClose}
                ></div>
                <div
                  className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                  onClick={() => {}}
                ></div>
              </div>

              {/* Center Title */}
              <div className="absolute left-1/2 -translate-x-1/2 text-white font-medium text-sm tracking-wide">
                {window.appId}
              </div>
            </div>
            {/* App Content */}
            <div className="flex-1 overflow-auto text-white">
              {window.component}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Rnd>
  );
}
