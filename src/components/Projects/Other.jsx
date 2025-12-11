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

export function Jarvis({ goBack }) {
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
          src="/projects/jarvis.jpg"
          alt="Jarvis AI"
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
        <h1 className="text-3xl font-bold mb-2">Jarvis:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          Voice AI Assistant
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
        Jarvis AI is a personal voice assistant inspired by popular AI
        assistants, capable of performing tasks via voice commands. I built it
        by learning from tutorials and extended its functionality to integrate
        with my smart home, controlling devices and automating tasks. The
        assistant uses natural language processing and voice recognition for
        smooth interactions.
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
          { title: "Type", content: "Desktop / Smart Home AI" },
          {
            title: "Technology",
            content: "Python, SpeechRecognition, pyttsx3",
          },
          { title: "Integration", content: "Home Automation Devices" },
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
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Demo Video
        </motion.button>
        <motion.button
          onClick={() =>
            window.open(
              "https://github.com/tanishtirpathi/real-life-jarvis-from-iron-man-"
            )
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
          "Completed 🟢",
          "AI",
          "Voice Assistant",
          "Python",
          "Home Automation",
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
      <section className="space-y-6">
        {/* Overview */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-5xl font-bold mb-2">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            Jarvis AI is an advanced voice-controlled assistant capable of
            performing multiple tasks including information retrieval, media
            control, and smart home automation. Unlike beginner-level voice
            assistants, this AI can handle complex commands, execute automated
            sequences, and respond contextually to user queries.
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
              <strong>Voice Commands:</strong> Execute tasks using natural voice
              input.
            </li>
            <li>
              <strong>Home Automation:</strong> Control smart devices, lights,
              and appliances.
            </li>
            <li>
              <strong>Information Retrieval:</strong> Search online, fetch
              weather, news, and other data.
            </li>
            <li>
              <strong>Context Awareness:</strong> Handles multi-step commands
              and conversations.
            </li>
            <li>
              <strong>Custom Automation:</strong> Trigger personalized routines
              and sequences.
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
            I built Jarvis AI to explore voice-based AI development, integrate
            smart home automation, and create a functional assistant beyond
            beginner tutorials. The project helped me understand voice
            recognition, Python automation, and IoT device control in a
            practical way.
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
              <strong>Python:</strong> Core programming language for logic and
              integration.
            </li>
            <li>
              <strong>SpeechRecognition & pyttsx3:</strong> Voice input and
              output handling.
            </li>
            <li>
              <strong>IoT / Home Automation APIs:</strong> Device control and
              integration.
            </li>
            <li>
              <strong>Scheduler & Automation:</strong> Task management for
              multi-step commands.
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
              <strong>Challenge:</strong> Integrating voice commands with home
              automation devices.
              <br />
              <strong>Solution:</strong> Learned device APIs and created a
              modular command handler.
            </li>
            <li>
              <strong>Challenge:</strong> Handling multi-step or contextual
              voice queries.
              <br />
              <strong>Solution:</strong> Built a command parser and action queue
              to manage tasks sequentially.
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
              Successfully built a functional AI assistant capable of complex
              commands.
            </li>
            <li>Integrated smart home devices to automate daily tasks.</li>
            <li>
              Received positive feedback from peers for practical usability and
              advanced capabilities.
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
            Expand Jarvis AI with natural language learning, more device
            integrations, and potentially create a SaaS version for personal and
            home automation use.
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
      </section>

      <br />
      <br />
    </motion.div>
  );
}