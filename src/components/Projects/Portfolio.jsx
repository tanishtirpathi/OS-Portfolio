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

export function Portfolio({ goBack }) {
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
      className="max-w-6xl mx-auto px-12 py-10 text-white bg-black/50 rounded-xl shadow-2xl"
    >
      {/* Back Button */}
      <motion.button
        onClick={handleGoBack}
        className="text-sm text-white/70 hover:text-white bg-gray-800/60 px-4 py-1 rounded-md shadow-lg mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      >
        ← Back to Projects
      </motion.button>

      {/* Banner */}
      <motion.div
        className="w-full h-80 rounded-xl overflow-hidden mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Stagger delay
      >
        <img
          src="/projects/OS.png"
          alt="MacOS Portfolio"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="flex items-center gap-2 mb-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold">MacOS Style Portfolio</h1>
        <h3 className="text-xl text-white/50 font-normal">
          Interactive & Functional
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
        A fully functional macOS-inspired portfolio built with React,
        TailwindCSS, and ShadCN UI. The portfolio features draggable windows,
        interactive workspaces, a dock, animations, and a working AI assistant
        that responds to user input. It showcases projects, skills, experiences,
        and allows live interactions with the AI assistant.
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
          { title: "Frontend", content: "React, TailwindCSS, ShadCN UI" },
          { title: "Backend", content: "Node.js / Optional APIs" },
          {
            title: "Integration",
            content: "AI Assistant, Draggable Components",
          },
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
          onClick={() => window.open("https://tanishtirpathi.vercel.app")}
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Live Portfolio
        </motion.button>
        <motion.button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/OS-portfolio")
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
        {[
          "React",
          "TailwindCSS",
          "ShadCN UI",
          "AI Assistant",
          "macOS UI",
          "Interactive",
        ].map((tag) => (
          <motion.span
            key={tag}
            className="px-3 py-1 text-white/70 bg-gray-800/50 border border-white/60 text-sm rounded-md"
            variants={itemVariants}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* MAIN ARTICLE (Scroll/In-View Animation for all sections) */}
      <section className="space-y-6">
        {/* Overview */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-4xl font-bold mb-2">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            This portfolio replicates macOS aesthetics with functional windows,
            draggable workspaces, a dock, animations, and interactive
            components. The highlight is the integrated AI assistant that
            responds to user queries in real-time, enhancing interactivity.
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
            <li>macOS-style UI with draggable windows and dock</li>
            <li>
              Functional workspaces for Projects, Skills, About, and Contact
            </li>
            <li>AI assistant integration for live interactions</li>
            <li>Responsive design with smooth animations and transitions</li>
            <li>Showcases multiple projects and skills interactively</li>
            <li>Fully frontend-based with optional API integration for AI</li>
          </ul>
        </motion.div>

        {/* Why I Built */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I wanted to showcase my projects in a fun and interactive way while
            demonstrating advanced frontend skills. This portfolio combines a
            macOS-inspired design with interactive AI elements to create a
            unique personal branding experience.
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
              <strong>React:</strong> For building interactive and stateful UI
              components.
            </li>
            <li>
              <strong>TailwindCSS:</strong> Styling and responsive layout.
            </li>
            <li>
              <strong>ShadCN UI:</strong> Prebuilt components for macOS-like UI.
            </li>
            <li>
              <strong>AI Assistant:</strong> Integrated using custom or
              API-powered logic.
            </li>
            <li>
              <strong>Framer Motion / Animations:</strong> Smooth transitions
              and draggable windows.
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
          <h2 className="text-2xl font-bold mb-2">Challenges & Solutions</h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Challenge:</strong> Creating a fully interactive
              macOS-like UI.
              <br />
              <strong>Solution:</strong> Used ShadCN UI + TailwindCSS for
              consistent design and draggable components.
            </li>
            <li>
              <strong>Challenge:</strong> Integrating a working AI assistant in
              frontend.
              <br />
              <strong>Solution:</strong> Connected AI logic via React state
              management and APIs.
            </li>
            <li>
              <strong>Challenge:</strong> Smooth animations with multiple
              draggable windows.
              <br />
              <strong>Solution:</strong> Used Framer Motion and custom z-index
              management for layering.
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
              Fully interactive portfolio received positive feedback for design
              and functionality.
            </li>
            <li>
              AI assistant added a unique interactive experience for visitors.
            </li>
            <li>
              Demonstrates advanced frontend skills and project showcase
              effectively.
            </li>
            <li>
              Encourages longer engagement due to interactivity and animations.
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
            Expand AI assistant capabilities, add more functional mini-apps
            inside the portfolio, and optimize for mobile while maintaining the
            macOS-style experience.
          </p>
        </motion.div>

        {/* Next Project (View all projects button) */}
        <div className="flex justify-center items-center mt-4">
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
      </section>

      <br />
      <br />
    </motion.div>
  );
}