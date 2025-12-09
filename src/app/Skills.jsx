import React from "react";
import NowPlaying from "../components/song";
import { GitHubCalendar } from "react-github-calendar";

export default function AboutSection() {
  const skills = [
    { name: "React", icon: "🎀" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🟦" },
    { name: "Tailwind", icon: "⬛" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
  ];

  return (
    <section className="min-h-full w-full bg-black/86 text-white px-8 py-10  gap-12">
      {/* Avatar */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 mb-29">
          <div className="w-40 h-40 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
            <img
              src="icons/Tanish.png"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-white/90">Tanish</span> —
            <span className="text-red-400">
              {" "}
              A Full Stack Software Engineer.
            </span>
          </h1>

          <p className="text-neutral-200 leading-relaxed mb-6 text-lg font-[Inter] whitespace-pre-line">
            I build interactive and modern web apps using technologies like{" "}
            <span className="skill-tag border-blue-400/40">
              <img src="icons/rc.jpg" className="skill-icon" /> React
            </span>
            ,{" "}
            <span className="skill-tag border-blue-300/40">
              <img src="icons/ts.jpg" className="skill-icon" /> TypeScript
            </span>
            , and
            <span className="skill-tag border-yellow-300/40 mr-2 ml-2">
              <img src="icons/JS.jpg" className="skill-icon" /> Javascript{" "}
            </span>
            <span className="skill-tag text-white border-white/40">
              <img src="icons/ns.jpg" className="skill-icon rounded-full" />
              Next.js
            </span>
            .{"\n"}I focus heavily on{" "}
            <span className="highlight-tag border-red-300/40">UI design</span>
            and creating smooth efficient webapps.
          </p>

          {/* Core Skills */}
          <h2 className="font-semibold mb-3 text-neutral-400 flex">
            Core Skills
            <img
              src="icons/github.jpg"
              className="rounded-full skill-icon mx-2"
            />
          </h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-sm hover:bg-neutral-800 transition"
              >
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/e/2PACX-1vSvmlZaSpYs7Z7JWNe2o1VddGUWKsqNUGaQmWqGMDRT-lMaMF5QwWDXeVDqat9EQFwf5Ec_BDmSXWTE/pub"
                )
              }
              className="px-5 cursor-pointer py-2 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
            >
              Resume / CV
            </button>

            <button
              onClick={() =>
                window.open("https://www.instagram.com/techwithtanish")
              }
              className="px-5 py-2 border border-neutral-700 rounded-xl font-medium hover:border-white transition"
            >
              Get in touch
            </button>
          </div>

          {/* Now Playing */}
          <NowPlaying
            title="Die with Smile"
            artist="Lady Gaga"
            audio="/music/DIE.mp3"
            cover="/icons/SpotifyThree.jpg"
          />
        </div>
      </div>
      {/* --- GitHub Activity Section --- */}
      <div className="mt-10 px-6 py-2 rounded-2xl bg-black/20 border border-black/10 shadow-lg backdrop-blur-md">
        <span className="flex justify-between items-center ">
          {" "}
          <h2 className="text-xl font-semibold mb-4 text-neutral-300">
            <h3 className="text-xl font-light text-white/30 ">Featured</h3>
            GitHub Activity
          </h2>
          <div className=" flex items-center justify-center gap-1 text-white/40">
            <p className="font-bold"> Offline</p>{" "}
            <img src="icons/vs.png" className="w-8 h-8" alt="" />{" "}
            <p className="font-light "> Yesterday worked 8hrs</p>
          </div>
        </span>

        <GitHubCalendar
          username="tanishtirpathi" // <<< your GitHub username here
          colorScheme="dark"
          blockSize={10}
          blockMargin={3.5}
          fontSize={10}
        />
      </div>
      <div className="mt-10 px-6 py-6 rounded-xl bg-black/10 border border-white/10 shadow-md backdrop-blur-md">
        <p className="text-white/70 italic text-sm leading-relaxed">
          "You have a right to perform your prescribed duty, but you are not
          entitled to the fruits of actions."
        </p>

        <div className="mt-4">
          <p className="text-white/50 font-serif text-xs text-right">
            — Bhagavad Gita
          </p>
        </div>
      </div>
      <div className="font-light text-white/40 text-xs mt-10 flex-col flex items-center justify-center">
        <h4>Design & Developed by Tanish TIrpathi © 2025.</h4>
        <p>All rights reserved</p>
      </div>
    </section>
  );
}
