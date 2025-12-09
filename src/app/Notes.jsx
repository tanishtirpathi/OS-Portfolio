import { useState, useEffect } from "react";

export default function Notes() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setText(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", text);
  }, [text]);

  return (
    <textarea
      className="w-full h-full border-none outline-none p-2"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Likhu tera nam death note pe kya ? bhag ja yaha se "
    />
  );
}
