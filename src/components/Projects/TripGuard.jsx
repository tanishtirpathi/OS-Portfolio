import { motion } from "framer-motion";

// Define animation variants for entrance/scroll
// This provides a consistent, staggered fade-up effect for elements as they enter the viewport
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Define animation variants for the main container's exit transition
const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
};

// Custom Hook to manage the goBack and apply exit animation
// Note: To use the 'exit' animation, this component needs to be wrapped in a <AnimatePresence> component
// in the parent file where it's being rendered.

export function TripGuard({ goBack }) {
  // A function to wrap the goBack logic and ensure the exit animation can play
  const handleGoBack = () => {
    // You might want to introduce a small delay here if <AnimatePresence> is used
    // to allow the exit animation to finish before unmounting the component.
    // However, for a simple 'slide-out' effect, triggering goBack directly works.
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
          src="/projects/trip.png"
          alt="TripGuard"
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
        <h1 className="text-3xl font-bold mb-2">TripGuard:- </h1>
        <h3 className="text-3xl text-white/50 font-normal mb-2">
          Tourist Travel safty website{" "}
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
        TripGuard is a tourist-safety web platform designed to help travelers
        explore unfamiliar locations with confidence. It features real-time
        safety alerts, geo-fencing warnings, AI-powered recommendations, a
        complaint system, and emergency-ready tools built for safe navigation.
      </motion.p>

      {/* Info Boxes (Scroll/In-View Animation) */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Child elements in the grid can also be motion components for a stagger effect */}
        {[
          { title: "Frontend", content: "React, TailwindCSS" },
          { title: "Backend", content: "Node.js, Express" },
          { title: "Database", content: "MongoDB" },
          { title: "Status", content: "Completed 🟢" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="p-4 bg-black/30 border border-white/10 rounded-xl"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
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
          onClick={() => window.open("https://trip-guard.vercel.app/")}
          className="px-5 py-2 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Live Demo
        </motion.button>
        <motion.button
          onClick={() =>
            window.open("https://github.com/tanishtirpathi/TripGuard")
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
          "Web",
          "Frontend",
          "Fullstack",
          "Geo-fencing",
          "AI",
        ].map((tag) => (
          <motion.span
            key={tag}
            className="px-3 py-1 text-white/70 bg-black/50 border border-white/60 text-sm rounded-md"
            variants={itemVariants} // Each tag uses the simple fade-up
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
            TripGuard is a smart travel-safety assistant that provides travelers
            with live safety insights of their surroundings. The platform uses
            geo-fencing to detect when a user enters a risky zone, sends alerts,
            suggests safer alternative routes, and gives highly accurate safety
            insights using AI-powered analysis. It also includes a complaint
            submission module for reporting incidents during travel.
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
            {/* ... other feature list items ... */}
            <li>
              <strong>Real-Time Safety Alerts:</strong> Receive instant
              notifications based on area safety level.
            </li>
            <li>
              <strong>Geo-fencing System:</strong> Detects unsafe zones and
              warns before entry.
            </li>
            <li>
              <strong>Complaint/Incident Reporting:</strong> Tourists can file
              reports that local authorities can view.
            </li>
            <li>
              <strong>AI-Powered Recommendations:</strong> Safe routes,
              recommended areas, and travel tips generated by AI.
            </li>
            <li>
              <strong>Heatmap Visualization:</strong> Shows crime-risk intensity
              for different regions.
            </li>
            <li>
              <strong>Emergency Mode:</strong> One-tap actions like SOS, call
              local help, share live location.
            </li>
            <li>
              <strong>Local Safety Guides:</strong> Area-specific advice for
              tourists.
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
            Traveling to new places is exciting—but also unpredictable. Many
            tourists don’t know which areas are safe, how to get help, or where
            incidents are likely to happen. I built TripGuard to create a smart,
            accessible platform that makes travel safer for everyone, especially
            solo travelers, international visitors, and first-time explorers.
          </p>
        </motion.div>

        {/* Tech Stack Details */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-2">Tech Stack (Detailed)</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            {/* ... other tech stack list items ... */}
            <li>
              <strong>React + TailwindCSS:</strong> For building a scalable and
              responsive UI.
            </li>
            <li>
              <strong>Node.js + Express:</strong> Backend APIs for alerts,
              complaint handling, and user authentication.
            </li>
            <li>
              <strong>MongoDB:</strong> Stores user data, complaints,
              location-based metadata, and safety scores.
            </li>
            <li>
              <strong>Geo-Fencing APIs:</strong> Custom algorithms to detect
              boundary intersection of user location.
            </li>
            <li>
              <strong>AI Integration:</strong> Used for safety recommendations,
              risk evaluation, and summarizing complaints.
            </li>
            <li>
              <strong>Maps + Heatmaps:</strong> Integrated using map APIs for
              visual crime-risk representation.
            </li>
          </ul>
        </motion.div>

        {/* Challenges + Solutions */}
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
              <strong>Challenge:</strong> Real-time location safety detection.
              <br />
              <strong>Solution:</strong> Implemented optimized geo-fencing
              checks and caching to reduce API calls.
            </li>
            <li>
              <strong>Challenge:</strong> Handling large safety datasets.
              <br />
              <strong>Solution:</strong> Used MongoDB indexing + backend
              filtering to serve only relevant area data.
            </li>
            <li>
              <strong>Challenge:</strong> Making alerts accurate.
              <br />
              <strong>Solution:</strong> Added AI scoring logic + metadata
              aggregation for precise safety ratings.
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
            {/* ... other future plan list items ... */}
            <li>Mobile App (Android + iOS)</li>
            <li>Connection with Local Police / Admin portals</li>
            <li>Offline Mode for remote areas</li>
            <li>AI-generated travel itineraries based on safety</li>
            <li>Advanced risk prediction using real-world data</li>
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
            {/* ... other impact list items ... */}
            <li>
              Successfully reached <strong>25+ active users</strong> within the
              first launch phase.
            </li>
            <li>
              Early testers included college travelers, solo explorers, and
              domestic tourists.
            </li>
            <li>
              Users reported improved confidence while exploring new or
              unfamiliar locations.
            </li>
            <li>
              The geo-fencing alerts helped travelers avoid unsafe or high-risk
              areas in real time.
            </li>
            <li>
              The complaint system enabled users to report incidents quickly and
              efficiently.
            </li>
            <li>
              Overall, the platform contributed to creating a safer and more
              informed travel experience.
            </li>
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
            View all projects{" "}
          </motion.button>
        </div>
      </motion.section>

      <br />
      <br />
    </motion.div>
  );
}
