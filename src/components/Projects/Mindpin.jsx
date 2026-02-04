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

export function Mindpin({ goBack }) {
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
          src="/projects/mind.png"
          alt="MindPin"
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
        <h1 className="text-3xl font-bold mb-2">MindPin:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          Desktop Sticky Notes App
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
        MindPin is a desktop sticky notes app built using Electron. It allows
        users to create notes that stay on their screen, and when not in use,
        the notes automatically become invisible. Data is stored locally, making
        it lightweight and fast. This project combines productivity and
        minimalism with unique visibility features.
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
          { title: "Frontend", content: "Electron, HTML, CSS, JS" },
          { title: "Backend", content: "None (Local Storage)" },
          { title: "Database", content: "Local Storage" },
          { title: "Status", content: "completed 🟢" },
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
          onClick={() => window.open("https://mindpin.vercel.app/")}
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Live Demo
        </motion.button>
        <motion.button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/First-desktop-app-")
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
          "completed 🟢",
          "Desktop App",
          "Electron",
          "Frontend",
          "Productivity",
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
            MindPin is a desktop sticky notes app designed to boost productivity
            while staying minimalistic. Notes stay on the screen and become
            invisible when not in use. The app is fully frontend, using Electron
            with local storage, making it lightweight and easy to use. It’s
            designed for users who want a simple yet powerful note-taking
            experience without clutter.
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
              <strong>Sticky Notes:</strong> Notes stay on screen for quick
              access.
            </li>
            <li>
              <strong>Auto-Invisibility:</strong> Notes become invisible when
              not actively used.
            </li>
            <li>
              <strong>Local Storage:</strong> All data is stored locally for
              privacy and speed.
            </li>
            <li>
              <strong>Desktop App:</strong> Built using Electron for
              cross-platform support.
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
            I built MindPin to explore desktop app development for the first
            time and create a productivity tool with a unique twist. I wanted to
            challenge myself with Electron and learn how to manage local storage
            efficiently while keeping the app lightweight and responsive.
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
              <strong>Electron:</strong> Desktop app framework.
            </li>
            <li>
              <strong>HTML, CSS, JS:</strong> Frontend development and UI
              design.
            </li>
            <li>
              <strong>Local Storage:</strong> Store notes data persistently on
              the user’s device.
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
              <strong>Challenge:</strong> First-time desktop app development
              with Electron.
              <br />
              <strong>Solution:</strong> Learned from documentation, community
              forums, and Twitter developer community for guidance.
            </li>
            <li>
              <strong>Challenge:</strong> Making notes auto-hide when not in
              use.
              <br />
              <strong>Solution:</strong> Used focus/blur and visibility events
              in JS to control note opacity dynamically.
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
              Successfully reached <strong>140+ active users</strong>.
            </li>
            <li>
              Users loved the auto-invisibility feature for minimal distraction.
            </li>
            <li>
              App received positive feedback for simplicity and productivity
              enhancement.
            </li>
            <li>
              Validated the potential of turning this app into a SaaS product.
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
            Plan to convert MindPin into a SaaS product with cloud syncing,
            cross-device access, and enhanced note management features.
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