import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonalLife from "./PersonalLife";
import Movies from "./Movies";
import Books from "./Books";
import Talk from "./Talk"
const sections = [
  { id: "Personal", label: "Personal", icon: "👤" },
  { id: "Books", label: "Books", icon: "📚" },
  { id: "Movies", label: "Movies", icon: "🎬" },
  { id: "LateNight", label: "LateNight", icon: "🦇" },
];

const contentMap = {
  Personal: <PersonalLife />,
  Books: <Books />,
  Movies: <Movies />,
  LateNight: <Talk/>,
};

export default function Blogs() {
  const [active, setActive] = useState("Personal");

  return (
    <div className="flex h-full bg-transparent text-slate-200 font-sans overflow-hidden">
      {/* Sidebar - Changed from fixed to relative for the Window flow */}
      <aside className="w-64 flex-col flex border-r border-white/10 bg-white/5 backdrop-blur-md h-full">
        <div className="p-6">
          <h2 className="text-xl instrument-serif-regular-italic font-bold tracking-widest uppercase text-white/90">
            Journal
          </h2>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`relative w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group ${
                active === item.id ? "text-white" : "text-white/50 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              {active === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-green-500/20 border border-green-500/30 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <span className="relative z-10">{item.icon}</span>
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
            <div className="bg-black/10 border border-white/20 rounded-lg p-4">
                <p className="text-[10px] text-indigo-100 uppercase font-bold mb-1">Status</p>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-indigo-100/70 font-medium">Adding Things still..</span>
                </div>
            </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar bg-black/40">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="pb-20">
                {contentMap[active]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}