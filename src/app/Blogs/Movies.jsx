import { motion } from "framer-motion";

const movies = [
  {
    id: 1,
    title: "ALL OF US ARE DEAD",
    rating: "9.5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQWjqbpXxRgI_e5fgArgUjzYM7qHt_e1-Ig&s",
    description:
      "A deadly zombie virus spreads through a high school, forcing students to fight for survival while friendships, fear, and sacrifice collide.",
  },
  {
    id: 2,
    title: "VINCENZO",
    rating: "9.4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUg5h8JT79Y3bXVYQ6uaZ-8SlPReNzFvFvgg&s",
    description:
      "A Korean-Italian mafia lawyer returns to Korea and delivers brutal justice using crime, strategy, and dark humor.",
  },
  {
    id: 3,
    title: "ATTACK ON TITAN",
    rating: "9.9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7_0O78iKF3RkqwiKguOSVb2qxcJW_DnsAQ&s",
    description:
      "Humanity fights for survival against gigantic Titans as dark secrets about the world and freedom slowly unfold.",
  },
  {
    id: 4,
    title: "DEATH NOTE",
    rating: "9.0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_ykCTRLIBKvzviUMQs7cOikNWnSWD6aSmQ&s",
    description:
      "A genius student discovers a notebook that can kill anyone whose name is written in it, sparking a deadly battle of minds.",
  },
  {
    id: 5,
    title: "WEAK HERO",
    rating: "9.0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiT9EktRTLBkQbClZzdVIPgC3DSTE7LrtJg&s",
    description:
      "A quiet but intelligent student uses strategy and psychology to survive relentless school bullying.",
  },
  {
    id: 6,
    title: "SWEET HOME",
    rating: "8.8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlIzZzco7IAV4OZDrlHYBgj7QKK4opsXCrg&s",
    description:
      "Residents trapped in an apartment complex must fight terrifying monsters that reflect humanity’s inner desires.",
  },
  {
    id: 7,
    title: "ALICE IN BORDERLAND",
    rating: "8.2",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjk3MDUwYjQtY2EyNi00NTZkLWI4ZmUtNjgzYTQ0OGQ2ZTk2XkEyXkFqcGc@._V1_.jpg",
    description:
      "Friends are pulled into a deadly alternate Tokyo where survival games decide who lives and who dies.",
  },
  {
    id: 8,
    title: "IRON MAN (ALL)",
    rating: "9.7",
    image:
      "https://storage.googleapis.com/pod_public/1300/263125.jpg",
    description:
      "Tony Stark evolves from a genius billionaire to a global hero, redefining sacrifice, technology, and responsibility.",
  },
  {
    id: 9,
    title: "BATMAN (CHRISTIAN BALE)",
    rating: "9.0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-SvL951PnZc7gxiKC4JcMWhlOKIxdA_OAQ&s",
    description:
      "Christopher Nolan’s Dark Knight trilogy explores chaos, morality, and heroism through Gotham’s most iconic vigilante.",
  },
  {
    id: 10,
    title: "Revenant",
    rating: "9.0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4Upil1lKQhBHJZDQMXxKWV4TPmZVIGRal_XGQ7K1klurwHNpIATJQmKEzXm-bpIw37xq&s=10",
    description:
      "A frontiersman fights brutal wilderness and betrayal in a relentless quest for survival and revenge.",
  },
  {
    id: 11,
    title: "NIGHT HAS COME",
    rating: "7.9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS626jnwqAqMGctePJEUP6e-ByiCEFUOv5_LqxdXltqqOhtFc313u0-PFP8GxpI26nu5xLx5f87Q3PULmLcdS_h9fxtuI0gbQOypg7yII&s",
    description:
      "Students are forced into a real-life mafia game where trust breaks down and survival becomes uncertain.",
  },
  {
    id: 12,
    title: "SRK – ALL MOVIES",
    rating: "9.9",
    image:
      "https://i.pinimg.com/236x/65/c1/01/65c1016103fd4f4590fddc9e54680541.jpg",
    description:
      "From romance to action and drama, Shah Rukh Khan’s films define generations of Indian cinema.",
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

export default function Movies() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm hover:border-green-100/50 transition-colors duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Rating */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-xl">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-white text-[11px] font-bold tracking-tighter">
                  {movie.rating}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-100 transition-colors">
                {movie.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                {movie.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
