import { motion } from "framer-motion";

const books = [
  {
    id: 1,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    rating: "9.5",
    image:
      "https://imgs.search.brave.com/YHsd61qkWhR_ZKp8U2ffw8YQdujU-oDDaEO4KMrE0Wg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vOS85ZC9H/cmVlbmVSb2JlcnQt/NDhMYXdzT2ZQb3dl/ci5qcGc",
    description:
      "A strategic guide to power, manipulation, and influence, drawn from history, philosophy, and real-world politics.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    rating: "9.4",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    description:
      "Explains how tiny daily habits compound into massive success using practical systems instead of motivation.",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    rating: "9.2",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    description:
      "Challenges traditional beliefs about money, teaching financial literacy, investing, and asset building.",
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    rating: "9.0",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
    description:
      "A mindset-focused classic that breaks down success principles used by the world’s most successful people.",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    rating: "8.9",
    image:
      "https://imgs.search.brave.com/PNloTjR7xoFEyZ370jInkfKmUa5hl7koxTv_gfmmNhI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFPRXhiSTVCVUwu/anBn",
    description:
      "Shows how intense focus and distraction-free work lead to elite performance in a noisy digital world.",
  },
  {
    id: 6,
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    rating: "8.8",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
    description:
      "Explores the Japanese philosophy of finding purpose, happiness, and long life through balance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Books() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {books.map((book) => (
          <motion.div
            key={book.id}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm hover:border-green-100/50 transition-colors duration-300"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Rating */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-xl">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-white text-[11px] font-bold">
                  {book.rating}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-green-100 transition-colors">
                {book.title}
              </h3>
              <p className="text-green-100/60 text-xs mb-2">
                by {book.author}
              </p>
              <p className="text-white/50 text-xs leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                {book.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
