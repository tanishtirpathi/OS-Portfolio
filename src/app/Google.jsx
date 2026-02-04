import { useState } from "react";
import { FiX, FiSearch } from "react-icons/fi";

export function Google() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  };

  const clearSearch = () => setQuery("");

  return (
    <div className="w-full h-full flex flex-col justify-start items-center bg-black/30 text-black">
      {/* Google Logo */}
      <div className="gap-7 flex items-center justify-center">
        <h1 className="text-[65px] font-semibold tracking-tight select-none mt-10 instrument-serif-regular-italic">
          <span className="text-blue-500">S</span>
          <span className="text-red-500">e</span>
          <span className="text-yellow-500">x</span>
          <span className="text-green-500">y</span>
        </h1>
        <h1 className="text-[65px] font-semibold tracking-tight select-none mt-10 instrument-serif-regular-italic ">
          <span className="text-blue-500">S</span>
          <span className="text-red-500">e</span>
          <span className="text-yellow-500">a</span>
          <span className="text-blue-500">r</span>
          <span className="text-green-500">c</span>
          <span className="text-red-500">h</span>
        </h1>
      </div>

      {/* Search Box */}
      <form
        onSubmit={handleSearch}
        className="mt-8 w-[550px] max-w-[92%] relative"
      >
        <div className="flex items-center gap-3 bg-white/80 border border-gray-300 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-all backdrop-blur-lg">
          {/* Search Icon */}
          <FiSearch className="text-gray-500 text-xl" />

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Google or type a URL"
            className="w-full outline-none text-lg bg-transparent"
          />

          {/* Clear Button */}
          {query.length > 0 && (
            <FiX
              onClick={clearSearch}
              className="text-gray-500 hover:text-black text-xl cursor-pointer transition"
            />
          )}
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() =>
            window.open(
              "https://i.pinimg.com/736x/11/2d/80/112d80669db231a6e3941e20e95dc7e6.jpg"
            )
          }
          className="px-5 py-2 bg-white/50 rounded-md hover:bg-gray-200 transition"
        >
          Motivation
        </button>

        <button
          onClick={() =>
            window.open("https://www.google.com/doodles", "_blank")
          }
          className="px-5 py-2 bg-white/50  rounded-md hover:bg-gray-200 transition"
        >
          I'm Feeling Lucky
        </button>
      </div>

      {/* Footer Suggestion */}
      <p className="absolute bottom-1 text-sm text-white/50 select-none tracking-wide">
        Pro tip: Press <span className="font-semibold">Enter</span> to search
        instantly.
      </p>
    </div>
  );
}
