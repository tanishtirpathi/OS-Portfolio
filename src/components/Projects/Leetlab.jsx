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

export function LeetLow({ goBack }) {
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
          src="/projects/Leet.png"
          alt="LeetLow"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="gap-2 flex items-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold mb-2">LeetLow:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          LeetCode Type but in my version{" "}
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
        LeetLow is a backend-first clone of LeetCode where users can solve
        actual coding questions, track their progress, and submit code for
        evaluation. The frontend is still under development, but the backend is
        powered by Express, Prisma, Redis, Judge0, and Docker.
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
          { title: "Frontend", content: "Not yet" },
          {
            title: "Backend",
            content: "Express, Prisma, Redis, Docker, Judge0",
          },
          { title: "Database", content: "PostgreSQL (via Prisma)" },
          { title: "Status", content: "In Progress 🔴" },
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
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Live Demo
        </motion.button>
        <motion.button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/Leetlow")
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
          "In Progress 🔴",
          "Backend",
          "Fullstack",
          "Docker",
          "Judge0",
          "Redis",
        ].map((tag) => (
          <motion.span
            key={tag}
            className="px-3 py-1 text-white/70 bg-black/50 border border-white/60 text-sm rounded-md"
            variants={itemVariants}
          >
            {tag}
          </motion.span>
        ))}
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
            LeetLow is a coding practice platform modeled after LeetCode. Users
            can solve real coding problems, submit code for evaluation via
            Judge0, and track progress. The platform aims to provide a complete
            algorithm and coding challenge experience with a fully functional
            backend.
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
              <strong>Problem Solving:</strong> Users can solve coding questions
              similar to LeetCode.
            </li>
            <li>
              <strong>Code Evaluation:</strong> Uses Judge0 API to compile and
              run code submissions.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Tracks solved problems and
              scores.
            </li>
            <li>
              <strong>Backend Infrastructure:</strong> Uses Redis caching,
              Prisma ORM, and Docker for containerized deployment.
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
            I built LeetLow to showcase my backend skills to my college and
            create a functional LeetCode-like platform. The focus was on backend
            architecture, code evaluation, and database management, while
            frontend will come later.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">Tech Stack (Detailed)</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Express:</strong> Backend framework for API and routing.
            </li>
            <li>
              <strong>Prisma:</strong> ORM for database management with
              PostgreSQL.
            </li>
            <li>
              <strong>Redis:</strong> Caching layer for fast data access and
              session management.
            </li>
            <li>
              <strong>Judge0:</strong> Code execution engine for compiling and
              running user submissions.
            </li>
            <li>
              <strong>Docker:</strong> Containerized backend environment for
              easier deployment.
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
              <strong>Challenge:</strong> Running Judge0 on Windows and
              integrating with backend.
              <br />
              <strong>Solution:</strong> Configured Docker to run Judge0
              container and connected it via API to Express backend.
            </li>
            <li>
              <strong>Challenge:</strong> Managing efficient code evaluation and
              submission handling.
              <br />
              <strong>Solution:</strong> Used Redis caching and async job
              handling for submissions to prevent bottlenecks.
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
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Build frontend using Next.js for a full SaaS experience.</li>
            <li>Enable real-time progress tracking and leaderboards.</li>
            <li>Add user authentication and subscription-based features.</li>
            <li>Deploy as a cloud-based coding practice platform.</li>
          </ul>
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