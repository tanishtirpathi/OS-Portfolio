import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export function TrendUp({ goBack }) {
  const handleGoBack = () => {
    goBack();
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-4xl mx-auto px-17 py-10 text-white bg-black/50"
    >
      <motion.button
        onClick={handleGoBack}
        className="text-sm text-white/70 hover:text-white bg-black/60 px-4 py-1 rounded-md shadow-2xl mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        ← Back to Projects
      </motion.button>

      <motion.div
        className="w-full h-70 rounded-xl overflow-hidden mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/projects/trendup.png"
          alt="TrendUp"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="gap-2 flex items-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold mb-2">TrendUp :-</h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          Chat + Video Calling Platform
        </h3>
      </motion.div>

      <motion.p
        className="text-white/60 leading-relaxed mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        TrendUp is a real-time communication platform focused on secure
        authentication, instant messaging, and upcoming video calling
        functionality. The project is being built with a strong MERN-based
        backend architecture, ensuring scalability, security, and real-time
        performance.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {[
          { title: "Frontend", content: "In Progress" },
          {
            title: "Backend",
            content: "Node.js, Express, MongoDB, Socket.IO",
          },
          { title: "Auth", content: "JWT + Secure Sessions" },
          { title: "Status", content: "Active Development 🟡" },
        ].map((item) => (
          <motion.div
            key={item.title}
            className="p-4 bg-black/30 border border-white/10 rounded-xl"
            variants={itemVariants}
          >
            <p className="text-xs text-white/50">{item.title}</p>
            <p className="font-medium">{item.content}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4 mb-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.button
         onClick={() =>
            window.open("https://trend-up.vercel.app/")
          }
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Live Demo
        </motion.button>

        <motion.button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/trend-Up-")
          }
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💻 Source Code
        </motion.button>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2 mt-4 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.05 }}
      >
        {[
          "Real-time Chat",
          "Authentication",
          "MERN Backend",
          "Socket.IO",
          "Video Call (Planned)",
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

      <motion.section className="space-y-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-5xl font-bold mb-2">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            TrendUp is designed as a modern communication platform where users
            can securely authenticate, chat in real time, and soon connect via
            video calls. The focus is on backend reliability, real-time data
            flow, and scalable system design.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>User Authentication:</strong> Secure login and signup using
              JWT-based authentication.
            </li>
            <li>
              <strong>Real-time Messaging:</strong> Instant messaging powered by
              Socket.IO.
            </li>
            <li>
              <strong>Scalable Backend:</strong> Built with Node.js, Express, and
              MongoDB.
            </li>
            <li>
              <strong>Upcoming Video Calls:</strong> Planned WebRTC-based video
              calling feature.
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-2xl font-bold mb-2">Why I Built This</h2>
          <p className="text-white/60">
            I built TrendUp to deeply understand real-time systems, authentication
            flows, and scalable backend architecture. This project reflects my
            focus on practical MERN development and production-ready features.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>
              <strong>Node.js & Express:</strong> REST APIs and backend logic.
            </li>
            <li>
              <strong>MongoDB:</strong> User data and message storage.
            </li>
            <li>
              <strong>Socket.IO:</strong> Real-time messaging layer.
            </li>
            <li>
              <strong>JWT:</strong> Authentication and authorization.
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-2xl font-bold mb-2">Challenges & Solutions</h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Challenge:</strong> Maintaining secure real-time sessions.
              <br />
              <strong>Solution:</strong> Combined JWT authentication with
              Socket.IO middleware validation.
            </li>
            <li>
              <strong>Challenge:</strong> Message delivery reliability.
              <br />
              <strong>Solution:</strong> Used event-based architecture and proper
              socket room management.
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Implement WebRTC-based video calling.</li>
            <li>Add typing indicators and read receipts.</li>
            <li>Improve UI with animations and dark-mode optimization.</li>
            <li>Deploy with scalable cloud infrastructure.</li>
          </ul>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.button
            onClick={handleGoBack}
            className="hover:bg-white/15 px-5 py-1 rounded-md bg-white/10 border border-white/70"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all projects
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
}
