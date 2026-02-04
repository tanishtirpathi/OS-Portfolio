import { useState, useEffect, useRef } from "react";
import { sendToGemini } from "./api";
import { gsap } from "gsap";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chat"));
    const savedTime = parseInt(localStorage.getItem("chat-time"), 10);
    const twoDays = 1000 * 60 * 60 * 24 * 2;

    if (saved && savedTime && Date.now() - savedTime < twoDays) {
      setMessages(saved);
    } else {
      localStorage.clear();
    }
  }, []);

  // Save chat on change
  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
    localStorage.setItem("chat-time", Date.now());
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Animations
  useEffect(() => {
    gsap.from(".msg", {
      opacity: 0,
      y: 12,
      duration: 0.25,
      stagger: 0.06,
    });
  }, [messages]);

  async function send() {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const botReply = await sendToGemini(input);
    const botMsg = { text: botReply, sender: "bot" };

    setMessages((prev) => [...prev, botMsg]);
  }

  // ENTER key should send the message
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <div className="h-screen w-full bg-black/60 flex flex-col text-white">
      <div className="flex flex-col justify-center items-center my-6 ">
        {" "}
        <h1 className="text-3xl font-bold text-center px-4">chatBot</h1>
        <h4 className="text-white/20">Jarvis</h4>
      </div>

      {/* CHAT AREA */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-4 space-y-2"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`msg max-w-[70%] p-3 rounded-xl ${
              msg.sender === "user"
                ? "bg-white/10 text-white ml-auto"
                : "bg-black/40 text-white mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* FIXED INPUT BAR */}
      <div className=" fixed bottom-1 w-full p-4  flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-3 rounded-l-xl outline-none text-white"
          placeholder="Type message…"
        />

        <button
          onClick={send}
          className="bg-white/10 px-6 rounded-r-md cursor-pointer hover:bg-black/30  transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
