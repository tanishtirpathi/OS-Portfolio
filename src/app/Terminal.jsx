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
          <div>- <b>ls</b></div>
          <div>- <b>cls</b></div>
          <div>- <b>tanish</b></div>
          <div>- <b>help</b></div>
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
          <div><b>Name:</b> Tanish Tripathi</div>
          <div><b>Role:</b>Software Engineeir</div>
          <div><b>Inspiration:</b> Tony Stark/Arjun/SRK</div>
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
      <div
        ref={terminalRef}
        className="p-4 flex-1 overflow-y-auto space-y-2"
      >
        {history.map((line, i) => (
          <div key={i}>
            <div className="text-white/50">
              <span className="text-blue-400">Tirpathi@tanish-os</span>:$ {line.command}
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
