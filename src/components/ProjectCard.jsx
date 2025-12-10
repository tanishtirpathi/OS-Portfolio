import { CodeXml } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  technologies,
  status,
  image,
  link,
  GithubLink,
}) {
  return (
    <div className="bg-black/20 backdrop-blur-xl border cursor-pointer border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Top Image */}
      <div className="w-full h-40 bg-gradient-to-r from-pink-500 to-purple-500 relative">
        <img
          src={image}
          className="w-full h-full object-cover opacity-90"
          alt={title}
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">{title}</h2>

          <div className="flex justify-center items-center gap-4">
            {" "}
            <span
              className="text-white/60 text-xl cursor-pointer"
              onClick={() => window.open(GithubLink)}
            >
              <CodeXml />
            </span>{" "}
            <span
              className="text-white/60 text-xl cursor-pointer"
              onClick={() => window.open(link)}
            >
              🌐
            </span>
          </div>
        </div>

        <p className="text-white/60 text-sm mt-2">{description}</p>

        {/* Tech Stack */}
        <div className="mt-3">
          <p className="text-white font-medium mb-1 text-sm">Technologies</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-lg bg-white/10 border border-white/10 text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span
            className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
              status === "ALL DONE"
                ? "bg-green-500/20 text-green-300"
                : "bg-red-500/20 text-red-300"
            }`}
          >
            {status === "ALL DONE" ? "✅ ALL DONE" : "🚧 BUILDING"}
          </span>

          <button
            onClick={() => window.open(link)}
            className="text-white/60 hover:text-white transition text-sm flex items-center gap-1"
          >
            Live Link →
          </button>
        </div>
      </div>
    </div>
  );
}
