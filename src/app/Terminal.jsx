import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Terminals() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const terminalRef = useRef(null);

  const runCommand = (cmd) => {
    const clean = cmd.trim().toLowerCase();

    const commands = {
      help: (
        <div className="space-y-1">
          <div className="text-purple-400 font-semibold">
            Available Commands:
          </div>
          <div>
            - <b className="text-yellow-400">ls</b>
          </div>
          <div>
            - <b className="text-yellow-400">cls</b>
          </div>
          <div>
            - <b className="text-yellow-400">tanish</b>
          </div>
          <div>
            - <b className="text-yellow-400">help</b>
          </div>
        </div>
      ),
      ls: (
        <div className="space-y-1 text-green-300">
          <div>apps/</div>
          <div>projects/</div>
          <div>notes.txt</div>
          <div>portfolio.json</div>
        </div>
      ),
      cls: "CLEAR_SCREEN",
      tanish: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 p-4 rounded-xl border border-white/10 "
        >
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/userAV.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full border border-white/20 object-cover"
            />
            <div>
              <div className="text-red-400 text-lg font-bold">
                Tanish Tripathi — Software Engineer
              </div>
              <div className="text-white/40 text-sm">Full-stack Developer</div>
            </div>
          </div>
          <div className="mt-2 text-green-400 font-semibold">About Me:</div>
          <div className="pl-4 text-white/80">
            Full-stack dev who loves clean UI, smooth UX and building smart
            systems.
          </div>
          <div className="mt-4 text-blue-400 font-semibold">Skills:</div>
          <ul className="pl-6 list-disc text-white/80">
            <li>React / Next.js / Node.js</li>
            <li>TypeScript, UI/UX, Tailwind</li>
            <li>API & System Design</li>
          </ul>
          <div className="mt-4 text-yellow-500 font-semibold">
            Fav Movies & Anime:
          </div>
          <ul className="pl-6 list-disc text-white/80">
            <li>Interstellar, Iron Man, The Dark Knight</li>
            <li>Attack on Titan, Classroom of Elite, Death Note</li>
          </ul>
        </motion.div>
      ),
    };

    if (commands[clean]) return commands[clean];
    return <div className="text-red-400">command not found: {clean}</div>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const output = runCommand(input);

    if (output === "CLEAR_SCREEN") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [...prev, { command: input, result: output }]);
    setInput("");
  };

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  return (
    <div className="w-full h-full bg-black/70 border border-white/10  flex flex-col font-mono text-white relative p-4">
      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-green-500/40 scrollbar-track-black/20"
      >
        <AnimatePresence>
          {history.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-green-500">@tanish-os</span>:${" "}
                {line.command}
              </div>
              <div className="pl-4">{line.result}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current Input */}
        <motion.div
          key="current-input"
          className="flex items-center gap-2 mt-1 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-green-500">@tanish-os</span>:$
          <input
            autoFocus
            value={input}
            placeholder="Type a command..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            className="bg-transparent flex-1 outline-none text-white/80 placeholder:text-white/40"
          />
        </motion.div>
      </div>
    </div>
  );
}
