import { useState, useRef, useEffect } from "react";

export function Terminals() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const terminalRef = useRef(null);

  const runCommand = (cmd) => {
    const clean = cmd.trim().toLowerCase();

    const commands = {
      help: (
        <>
          <div>Available Commands:</div>
          <div>
            - <b>ls</b>
          </div>
          <div>
            - <b>cls</b>
          </div>
          <div>
            - <b>tanish</b>
          </div>
          <div>
            - <b>help</b>
          </div>
        </>
      ),

      ls: (
        <>
          <div>apps/</div>
          <div>projects/</div>
          <div>notes.txt</div>
          <div>portfolio.json</div>
        </>
      ),

      cls: "CLEAR_SCREEN",
      tanish: (
        <>
          <div className="text-red-500 font-bold">
            Tanish Tripathi — Software Engineer
          </div>

          <div className="mt-2 text-green-400 font-semibold">About Me:</div>
          <div className="pl-4 text-white/80">
            Full-stack dev who loves clean UI, smooth UX and building smart
            systems.
          </div>

          <div className="mt-2 text-blue-400 font-semibold">Skills:</div>
          <ul className="pl-6 list-disc text-white/80">
            <li>React / Next.js / Node.js</li>
            <li>TypeScript, UI/UX, Tailwind</li>
            <li>API & System Design</li>
          </ul>

          <div className="mt-2 text-yellow-500 font-semibold">
            Fav Movies & Anime:
          </div>
          <ul className="pl-6 list-disc text-white/80">
            <li>Interstellar, Iron Man, The Dark Knight</li>
            <li>Attack on Titan, classroom of elite , death note </li>
          </ul>

          <div className="mt-2 text-white font-semibold">Inspirations:</div>
          <div className="flex gap-3 pl-4 mt-2">
            <img
              src="https://i.pinimg.com/1200x/56/5a/52/565a5243d7d19cb8481b26853ddc54f2.jpg"
              alt="Tony Stark"
              className="w-14 h-14 rounded-full border border-white/20 object-cover"
            />
            <img
              src="https://i.pinimg.com/1200x/6f/23/cd/6f23cdd4a62fa1db2c479b5eb1be7b78.jpg"
              alt="Arjun"
              className="w-14 h-14 rounded-full border border-white/20 object-cover"
            />
            <img
              src="https://i.pinimg.com/1200x/4f/3b/ba/4f3bba2b973a4b522c1a2ad144006970.jpg"
              alt="SRK"
              className="w-14 h-14 rounded-full border border-white/20 object-cover"
            />
          </div>
        </>
      ),
    };

    if (commands[clean]) return commands[clean];
    return <div>command not found: {clean}</div>;
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
    <div className="w-full h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-b-md flex flex-col text-green-400 font-mono">
      {/* Top Border (fake terminal top, AppWindow has its own title bar) */}
      <div className=" border-white/10 px-4 py-2 text-xs text-blue-300 opacity-80">
        Type <b className="text-white font-bold font-serif">help</b>
      </div>
      <div ref={terminalRef} className="p-4 flex-1 overflow-y-auto space-y-2">
        {history.map((line, i) => (
          <div key={i}>
            <div className="text-white/50">
              <span className="text-blue-400">Tirpathi@tanish-os</span>:${" "}
              {line.command}
            </div>
            <div className="pl-4 text-white/90">{line.result}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-4 py-3  border-white/10"
      >
        <span className="text-white/50 mr-2">
          <span className="text-blue-400">@tanish-os</span>:$
        </span>

        <input
          autoFocus
          value={input}
          placeholder="write here any command....."
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent flex-1 outline-none text-white/50"
        />
      </form>
    </div>
  );
}
