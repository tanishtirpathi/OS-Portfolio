import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Terminals() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [activeCommand, setActiveCommand] = useState(null);
  const terminalRef = useRef(null);

  const characters = [
    { name: "TONY STARK", src: "/Tony.jpg" },
    { name: "ARJUN", src: "/Arjun.jpg" },
    { name: "VASUDEV KRISHN", src: "/Krishna.jpg" },
    { name: "BRUCE WAYNE ", src: "/Bruce.jpg" },
    { name: "LEVI ACRMIN", src: "/Levi.jpg" },
  ];

  const runCommand = (cmd) => {
    const clean = cmd.trim().toLowerCase();

    const commands = {
      // --- CORE COMMANDS ---
      help: (
        <div className="space-y-1">
          <div className="text-white/70 font-semibold">Available Commands:</div>
          <div className="grid grid-cols-1 gap-x-4">
            <div>
              - <b className="text-yellow-400">ls</b>
            </div>
            <div>
              - <b className="text-yellow-400">cls</b>
            </div>
            <div>
              - <b className="text-yellow-400">help</b>
            </div>
            <div>
              - <b className="text-yellow-400">about</b>
            </div>
            <div>
              - <b className="text-yellow-400">skills</b>
            </div>

            <div>
              - <b className="text-yellow-400">contact</b>
            </div>
          </div>
        </div>
      ),
      ls: (
        <div className="space-y-1 text-green-300">
          <div>about.txt</div>
          <div>skills.sh</div>

          <div>contact.json</div>
          <div>arc.jpg</div>
        </div>
      ),
      cls: "CLEAR_SCREEN",

      // --- NEW PORTFOLIO COMMANDS ---
      about: (
        <div className="flex flex-col items-start justify-start mt-10 px-5">
          <div className="flex items-start gap-8">
            <img
              src="/linux.png"
              className="h-60 w-54 object-cover opacity-90"
              alt=""
            />

            <div className="flex flex-col gap-2">
              {/* Name Row */}
              <div className="flex items-end gap-1">
                <h1 className="text-red-600 text-4xl font-extrabold font-mono tracking-tight instrument-serif-regular-italic">
                  Tanish Tripathi
                </h1>
              </div>

              {/* Info Rows */}
              <div className="flex flex-col gap-1 text-base leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-red-500 font-semibold min-w-[90px]">
                    Name:
                  </span>
                  <span className="text-white/80">Tanish Tripathi</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-500 font-semibold min-w-[90px]">
                    Skills:
                  </span>
                  <span className="text-white">
                    TYPESCRIPT , JAVASCRIPT , REACT , NODE , NEXT-JS , NODE ,
                    DOCKER , MONGO , PRISMA , SQL , NON-SQL
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-500 font-semibold min-w-[90px]">
                    Role:
                  </span>
                  <span className="text-white/80">Building cool stuff</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-red-500 font-semibold min-w-[90px]">
                    Education:
                  </span>
                  <span className="text-white/80">
                    Enough to learn anything fast
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-red-500 font-semibold min-w-[90px] ">
                    Interests:
                  </span>
                  <span className="text-white/80">
                    Japan, Korea, Iron Man, Batman, Building things
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div>
              {" "}
              <h2 className="text-red-500 font-bold text-2xl mb-5 instrument-serif-regular-italic">
                Currently Doing things
              </h2>
            </div>
            <div className="flex flex-col gap-1 text-base leading-relaxed">
              <div className="flex gap-2">
                <span className="text-green-500 font-semibold min-w-[90px]">
                  Tech:
                </span>
                <span className="text-white/80">
                  Typescript , Next JS , Python
                </span>
              </div>

              <div className="flex gap-2">
                <span className="text-green-500 font-semibold min-w-[90px]">
                  Anime:
                </span>
                <span className="text-white/80">Attack on titan </span>
              </div>

              <div className="flex gap-2">
                <span className="text-green-500 font-semibold min-w-[90px]">
                  side things:
                </span>
                <span className="text-white/80">
                  Youtube , content creation
                </span>
              </div>

              <div className="flex gap-2">
                <span className="text-green-500 font-semibold min-w-[90px]">
                  Interests:
                </span>
                <span className="text-white/80">
                  Japan, Korea, Iron Man, Batman, Building things
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div>
              {" "}
              <h2 className="text-red-500 font-bold text-2xl mb-5 instrument-serif-regular-italic ">
                Inspiration for Me
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {characters.map((char, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-black/20 rounded-md px-2 py-1"
                >
                  <img
                    src={char.src}
                    alt={char.name}
                    className="border border-white/50 object-cover h-32 w-28 rounded-lg"
                  />
                  <h3 className="text-white/80 font-serif font-semibold text-xs mt-2">
                    {char.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      skills: (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-blue-400 font-semibold mb-2">
            Skills (./skills.sh):
          </div>
          <div className="grid grid-cols-1 gap-2 text-white/80">
            <div>
              <b className="text-red-400">Frontend:</b> React, Next.js, Tailwind
              CSS, Framer Motion
            </div>
            <div>
              <b className="text-red-400">Backend:</b> Node.js, Express,
              Serverless Functions
            </div>
            <div>
              <b className="text-red-400">Languages:</b> TypeScript, JavaScript,
              Python
            </div>
            <div>
              <b className="text-red-400">Databases:</b> PostgreSQL, MongoDB,
              Redis
            </div>
            <div>
              <b className="text-red-400">DevOps:</b> Git, Docker, CI/CD
            </div>
          </div>
        </motion.div>
      ),
      contact: (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-yellow-400 font-semibold mb-2">
            Contact Information (contact.json):
          </div>
          <div className="text-white/80 space-y-1 pl-4">
            <div>
              <b className="text-white">Email:</b>{" "}
              <span className="text-blue-300">tanishtirpathi0@gmail.com</span>
            </div>
            <div>
              <b className="text-white">LinkedIn:</b>{" "}
              <span
                className="text-blue-300 cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/tanishtirpathi/")
                }
              >
                In/tanishtirpahi/
              </span>
            </div>
            <div>
              <b className="text-white">GitHub:</b>{" "}
              <span
                className="text-blue-300 cursor-pointer"
                onClick={() =>
                  window.open("https://www.github.com/tanishtirpathi/")
                }
              >
                tanishtirpathi/github
              </span>
            </div>
            <div>
              <b className="text-white">X:</b>{" "}
              <span
                className="text-blue-300 cursor-pointer"
                onClick={() => window.open("https://www.x.com/tanishtirpathi/")}
              >
                X/tanishtirpathi
              </span>
            </div>
          </div>
        </motion.div>
      ),
    };

    if (commands[clean]) return commands[clean];
    // Check for "cat" command for any file not explicitly listed (optional)
    if (clean.startsWith("cat ") || clean.startsWith("show ")) {
      const filename = clean.substring(4).trim();
      return (
        <div className="text-yellow-400">
          Viewing file: {filename}. Try **cat arc.jpg** or **cat about.txt**
        </div>
      );
    }

    return <div className="text-red-400">command not found: {clean}</div>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanInput = input.trim();
    const output = runCommand(cleanInput);

    // Update the active command display
    setActiveCommand(cleanInput);

    if (output === "CLEAR_SCREEN") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [...prev, { command: cleanInput, result: output }]);
    setInput("");
  };

  useEffect(() => {
    // Scroll to the bottom of the terminal on new history update
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  return (
    <div className="w-full h-full bg-black/50 border border-white/10 flex flex-col font-mono text-white relative p-4">
      {/* Command Display (New Feature) */}
      <AnimatePresence>
        {activeCommand && (
          <motion.div
            key={activeCommand}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2 left-4 text-4xl md:text-6xl font-extrabold text-white/5 whitespace-nowrap overflow-hidden z-0 pointer-events-none"
            style={{ letterSpacing: "-0.05em" }}
          >
            {activeCommand}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-green-500/40 scrollbar-track-black/20 z-10"
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
                <span className="text-white/80">{line.command}</span>
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
            placeholder="Type 'help' to begin..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            className="bg-transparent flex-1 outline-none text-white/80 placeholder:text-white/40"
          />
        </motion.div>
      </div>
    </div>
  );
}
