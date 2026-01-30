import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Suits review",
    date: "jan - 2026",
    content:
      "Actually I recently start watching suits and I have only watched the first episode but it was insane like how harvey shift the power dynamics and u know I also wanna speak english in american accent but lets see how it go and also the chat app got the fucked up bcz of the sockets I have post a tweet but lets see how it go ",
  }
];
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Talk() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full space-y-10"
    >
      {/* Header */}
      <motion.div variants={item} className="text-center">
        <h1 className="text-3xl font-bold text-white/60 mb-2 instrument-serif-regular-italic">My Late Night talk </h1>
      </motion.div>

      {/* Blogs Section */}
      <motion.div variants={item}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -4 }}
              className="bg-white/5 border cursor-pointer border-white/10 rounded-lg p-5 backdrop-blur-sm hover:border-green-100/40 transition"
            >
              <h3 className="text-white font-semibold mb-1">{blog.title}</h3>
              <p className="text-blue-500/90 text-xs mb-3">{blog.date}</p>
              <p className="text-white/60 text-sm leading-relaxed">
                {blog.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Talk;
