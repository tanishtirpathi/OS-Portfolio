import { motion } from "framer-motion";

// Define animation variants for entrance/scroll (Fade-up)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Define animation variants for the main container's entry and exit
const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
};

export function Crushsync({ goBack }) {
  // Function to handle the goBack action and trigger the exit animation
  const handleGoBack = () => {
    // This relies on the parent component using <AnimatePresence>
    goBack();
  };

  return (
    // Main container uses pageTransition for initial mount and exit animation
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-4xl mx-auto px-17 py-10 text-white bg-black/50"
    >
      {/* Back Button */}
      <motion.button
        onClick={handleGoBack}
        className="text-sm text-white/70 hover:text-white bg-black/60 px-4 py-1 rounded-md shadow-2xl mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      >
        ← Back to Projects
      </motion.button>

      {/* Banner Image */}
      <motion.div
        className="w-full h-70 rounded-xl overflow-hidden mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Stagger delay
      >
        <img
          src="/projects/crush.png"
          alt="CrushSync"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="gap-2 flex mb-2 items-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold mb-2">CrushSync:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          GitHub Relationship Analyzer
        </h3>
      </motion.div>

      {/* Short Intro */}
      <motion.p
        className="text-white/60 leading-relaxed mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        CrushSync is a fun, frontend-only website that checks your GitHub
        profile alongside your crush’s GitHub profile and analyzes compatibility
        or “relationship chances.” Inspired by Facebook’s early fun comparison
        websites, this project is purely experimental and built for enjoyment.
      </motion.p>

      {/* Info Boxes (Scroll/In-View Animation) */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Map through the info boxes for a staggered reveal effect */}
        {[
          { title: "Frontend", content: "React, TailwindCSS" },
          { title: "Backend", content: "None" },
          { title: "Database", content: "None" },
          { title: "Status", content: "Completed 🟢" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="p-4 bg-black/30 border border-white/10 rounded-xl"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs text-white/50">{item.title}</p>
            <p className="font-medium">{item.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 mb-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.button
          onClick={() => window.open("https://crushsync.vercel.app")}
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Live Demo
        </motion.button>
        <motion.button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/Crushsync")
          }
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💻 Source Code
        </motion.button>
      </motion.div>

      {/* Tags (Scroll/In-View Animation) */}
      <motion.div
        className="flex flex-wrap gap-2 mt-4 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.05 }}
      >
        {["Completed 🟢", "Web", "Frontend", "Fun Project", "GitHub"].map(
          (tag) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-white/70 bg-black/50 border border-white/60 text-sm rounded-md"
              variants={itemVariants} // Each tag uses the simple fade-up
            >
              {tag}
            </motion.span>
          )
        )}
      </motion.div>

      {/* MAIN ARTICLE (Scroll/In-View Animation for all sections) */}
      <motion.section className="space-y-6">
        {/* Overview */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-5xl font-bold mb-2">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            CrushSync is a frontend-only website that compares two GitHub
            profiles and calculates compatibility or “relationship chances.” It
            uses a custom algorithm to analyze contributions, activity,
            languages, and repositories of both users, giving a fun
            compatibility score. The project is purely experimental and built
            for fun, inspired by early Facebook comparison websites.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>GitHub Analysis:</strong> Compare your GitHub with your
              crush’s.
            </li>
            <li>
              <strong>Custom Algorithm:</strong> Calculates a compatibility
              score based on activity and repositories.
            </li>
            <li>
              <strong>Fun & Experimental:</strong> Built for enjoyment, inspired
              by old Facebook comparison tools.
            </li>
            <li>
              <strong>Frontend Only:</strong> No backend required—entirely in
              React and TailwindCSS.
            </li>
          </ul>
        </motion.div>

        {/* Why I Built This */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I built CrushSync for fun and learning. Inspired by playful
            comparison websites like Facebook’s old projects, I wanted to
            experiment with creating a frontend algorithm to analyze GitHub
            profiles and provide entertaining “relationship chances.” It was a
            personal challenge and a fun coding experiment.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>React:</strong> For building interactive UI and
              components.
            </li>
            <li>
              <strong>TailwindCSS:</strong> Styling and responsive layout.
            </li>
            <li>
              <strong>Custom Algorithm:</strong> JS-based scoring algorithm for
              GitHub analysis.
            </li>
          </ul>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            Challenges & How I Solved Them
          </h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Challenge:</strong> Creating a meaningful “relationship
              score” algorithm.
              <br />
              <strong>Solution:</strong> Developed a custom scoring algorithm
              considering repos, languages, and activity patterns.
            </li>
            <li>
              <strong>Challenge:</strong> Handling profile comparison entirely
              on frontend.
              <br />
              <strong>Solution:</strong> Optimized JS functions and caching to
              ensure smooth user experience.
            </li>
          </ul>
        </motion.div>

        {/* After Launch & Impact */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">After Launch & Impact</h2>
          <ul className="list-disc list-inside text-white/60 space-y-2">
            <li>
              Successfully reached <strong>150 active users</strong> on initial
              launch.
            </li>
            <li>
              Users enjoyed comparing their GitHub profiles with friends or
              crushes.
            </li>
            <li>
              The algorithm-based scoring was well-received and sparked fun
              discussions.
            </li>
            <li>
              Served as a fun project to experiment with frontend algorithm
              design.
            </li>
          </ul>
        </motion.div>

        {/* Future Plans */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
          <p className="text-white/60">
            No specific future plans yet; built purely for fun and learning.
          </p>
        </motion.div>

        {/* Next Project (View all projects button) */}
        <div className="flex justify-center items-center">
          <motion.button
            onClick={handleGoBack}
            className="hover:bg-white/15 cursor-pointer px-5 py-1 rounded-md bg-white/10 border border-white/70"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all projects
          </motion.button>
        </div>
      </motion.section>

      <br />
      <br />
    </motion.div>
  );
}