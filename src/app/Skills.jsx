import React from "react";
import NowPlaying from "../components/song";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- Animation Variants ---

// 1. Staggered Text Variants (For main intro text)
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5, // Start after 0.5s
      staggerChildren: 0.02, // delay between each child (word/letter)
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// 2. Element/Section Fade-up Variants (For all other blocks)
const sectionFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// 3. Skill Tags Stagger (A unique 'pop-in' effect)
const skillContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8, // Start slightly later
      staggerChildren: 0.08,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

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
  const [waka, setWaka] = useState(null);

  useEffect(() => {
   fetch("https://portfolio-backend-1-f82j.onrender.com/")
      .then((res) => res.json())
      .then((data) => setWaka(data))
      .catch(() => setWaka(null));
  }, []);

  // Helper function to split text for character/word animation
  const splitText = (text) =>
    text.split(" ").map((wordText, index) => (
      <motion.span key={index} variants={word} className="inline-block mr-1">
        {wordText}
      </motion.span>
    ));

  return (
    <motion.section
      className="min-h-full w-full bg-black/86 text-white px-8 py-10 gap-12"
      initial="hidden"
      animate="visible"
      // Use the sectionFadeUp for the entire section's initial entry
      variants={sectionFadeUp}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      {/* Avatar & Main Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Avatar with Hover Effect */}
        <motion.div
          className="flex-shrink-0 mb-29"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(255, 255, 255, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-40 h-40 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
            <img
              src="icons/Tanish.png"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="max-w-2xl">
          {/* Staggered Heading Reveal */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={sentence}
          >
            {splitText("Hi, I'm ")}
            <motion.span className="text-white/90" variants={word}>
              <span className="instrument-serif-regular-italic">Tanish</span>
            </motion.span>
            <motion.span variants={word}> —</motion.span>
            <motion.span
              className="text-red-500 font-instrument italic"
              variants={word}
            >
              {" "}
              A Full Stack Software Engineer.
            </motion.span>
          </motion.h1>

          {/* Staggered Paragraph Reveal */}
          <motion.p
            className="text-neutral-200 leading-relaxed instrument-serif-regular-italic mb-6 text-lg font-[Inter] whitespace-pre-line"
            variants={sectionFadeUp}
            transition={{ delay: 1.5 }} // Delay after the main header animation
          >
            I build interactive and{" "}
            <span className="instrument-serif-regular-italic">modern</span> web
            apps using technologies like{" "}
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
          </motion.p>

          {/* Core Skills Header */}
          <motion.h2
            className="font-semibold mb-3 text-neutral-400 flex"
            variants={sectionFadeUp}
            transition={{ delay: 1.8 }}
          >
            Core Skills
            <img
              src="icons/github.jpg"
              className="rounded-full skill-icon mx-2"
            />
          </motion.h2>

          {/* Unique Skill Tags Pop-in Animation */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            variants={skillContainer}
          >
            {skills.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-sm hover:bg-neutral-800 transition"
                variants={skillItem} // Apply the unique pop-in variant
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons with Interactive Effects */}
          <motion.div
            className="flex gap-4 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Resume Button */}
            <motion.button
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/e/2PACX-1vSvmlZaSpYs7Z7JWNe2o1VddGUWKsqNUGaQmWqGMDRT-lMaMF5QwWDXeVDqat9EQFwf5Ec_BDmSXWTE/pub",
                )
              }
              className="px-5 py-2 flex items-center gap-2 cursor-pointer 
                bg-white/10 backdrop-blur-sm text-white rounded-xl 
                font-medium border border-white/20 
                hover:bg-white/20 hover:scale-[1.03] transition-all duration-300"
              variants={sectionFadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-pink-300 text-xl">📄</span>
              Resume / CV
            </motion.button>

            {/* Contact Button */}
            <motion.button
              onClick={() =>
                window.open("https://www.instagram.com/tanish.speaks/")
              }
              className="px-5 py-2 flex items-center gap-2 
                border border-white/20 rounded-xl 
                font-medium text-white 
                hover:bg-white/10 hover:border-white/40 
                hover:scale-[1.03] transition-all duration-300"
              variants={sectionFadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-green-300 text-xl">💬</span>
              <span>Get in touch</span>
              {/* Cute Send Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12l14-7.5-4 7.5 4 7.5-14-7.5z"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Now Playing (Scroll Reveal) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionFadeUp}
          >
            <NowPlaying
              title="Die with Smile"
              artist="Lady Gaga"
              audio="/music/DIE.mp3"
              cover="/icons/SpotifyThree.jpg"
            />
          </motion.div>
        </div>
      </div>
      {/* --- GitHub Activity Section (Scroll Reveal) --- */}
      <motion.div
        className="mt-10 px-6 py-2 rounded-2xl bg-black/20 border border-black/10 shadow-lg backdrop-blur-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeUp}
      >
        <span className="flex justify-between items-center ">
          {" "}
          <h2 className="text-xl font-semibold mb-4 text-neutral-300">
            <h3 className="text-xl font-light text-white/30 ">Featured</h3>
            GitHub Activity
          </h2>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <img src="icons/vs.png" className="w-7 h-7" alt="VS Code" />

            {waka?.languages?.length >0 && (
  <div className=" flex flex-wrap gap-3">
    {waka.languages.map((lang, i) => (
      <div
        key={i}
        className="text-sm text-white/80  "
      ><span className="font-bold pr-1">coded:</span>
        <span className="font-light instrument-serif-regular-italic text-yellow-400">{lang.name}</span>
        <span className="text-white/40 ml-2">
          {lang.total_seconds}Min
        </span>
      </div>
    ))}
  </div>
)}

          </div>
        </span>

        <GitHubCalendar
          username="tanishtirpathi" // <<< your GitHub username here
          colorScheme="dark"
          blockSize={10}
          blockMargin={3.5}
          fontSize={10}
        />
      </motion.div>
      {/* Quote Section (Scroll Reveal) */}
      {/* {bro this is the other thing which is code timer shwo } */}

      <motion.div
        className="mt-10 px-6 py-6 rounded-xl bg-black/10 border border-white/10 shadow-md backdrop-blur-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
      >
        <p className="text-white/70 italic text-sm leading-relaxed">
          "You have a right to perform your prescribed duty, but you are not
          entitled to the fruits of actions."
        </p>

        <div className="mt-4">
          <p className="text-white/50 font-serif text-xs text-right">
            — Bhagavad Gita
          </p>
        </div>
      </motion.div>
      {/* Footer Section (Scroll Reveal) */}
      <motion.div
        className="font-light text-white/40 text-xs mt-10 flex-col flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionFadeUp}
      >
        <h4>Design & Developed by Tanish TIrpathi © 2025.</h4>
        <p>All rights reserved</p>
      </motion.div>
    </motion.section>
  );
}
