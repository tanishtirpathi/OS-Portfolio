import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Japans's Life",
    date: "December- 2025",
    content:
      "Life is good I think when U move in japan I know I live in India But still I am Obsessed with Japan and korea like not bcz of the tech or something else like I only love japan and korea bcz of nature , Air quality , and all bcz of just the silent life there they have ",
  },
  {
    id: 2,
    title: "Why I Chose Growth Over Comfort",
    date: "Dec 2024",
    content:
      "I realized comfort slowly kills ambition. Growth hurts, but it gives meaning. Every hard decision I make now is for my future self.",
  },
];

const loves = [
  "Writing late-night code and Building",
  "Learning New things Interestingly ",
  "drinking coffee",
  "Watching dark psychological shows",
  "Becoming the best version ",
  "spending weekend watching K drama",
  "Japan's culture and Korean things ",
  "Spending time in nature in silents  ",
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PersonalLife() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full space-y-10"
    >
      {/* Header */}
      <motion.div variants={item} className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2 instrument-serif-regular-italic">My Personal Life</h1>
        <p className="text-white/60 text-sm max-w-xl mx-auto">
          Thoughts, habits, and the things that shape who I’m becoming.
        </p>
      </motion.div>

      {/* Blogs Section */}
      <motion.div variants={item}>
        <h2 className="text-xl font-semibold text-white mb-4">My Blogs 📝</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -4 }}
              className="bg-white/5 border cursor-pointer border-white/10 rounded-lg p-5 backdrop-blur-sm hover:border-green-100/40 transition"
            >
              <h3 className="text-white font-semibold mb-1 instrument-serif-regular-italic">{blog.title}</h3>
              <p className="text-green-500/90 text-xs mb-3">{blog.date}</p>
              <p className="text-white/60 text-sm leading-relaxed">
                {blog.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Car Section */}
      <motion.div
        id="car"
        variants={item}
        whileHover={{ scale: 1.03 }}
        className="relative overflow-hidden rounded-xl border border-white/10"
      >
        <img src="./car.jpg" alt="Car" className="w-full h-64 object-cover" />

        <div className="absolute inset-0 bg-black/40 flex items-end p-4">
          <p className="text-white text-sm font-medium">
            Machines reflect mindset — precision, speed, control.
          </p>
        </div>
      </motion.div>
      {/* Things I Love */}
      <motion.div variants={item}>
        <h2 className="text-xl font-semibold text-white mb-4">
          Things I Love ❤️
        </h2>

        <div className="flex flex-wrap gap-2">
          {loves.map((love, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-lg cursor-pointer bg-white/15 border border-white/10 text-white/70 hover:bg-green-100/10 hover:text-green-100 transition"
            >
              {love}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Mindset */}
      <motion.div
        variants={item}
        className="bg-gradient-to-r from-black/40 to-black/20 border border-white/10 rounded-xl p-6"
      >
        <h2 className="text-xl instrument-serif-regular-italic font-semibold text-white mb-2">
          Current Mindset 🧠
        </h2>
        <p className="text-white/60 text-sm leading-relaxed">
          I’m not chasing validation. I’m chasing clarity, skill, and control
          over my life. I believe in silent progress, deep focus, and becoming
          undeniable over time.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default PersonalLife;
