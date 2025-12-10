import ProjectCard from "../components/ProjectCard";
import { ArrowRight } from "lucide-react";
export default function Projects() {
  const projects = [
    {
      title: "Trip GUard",
      description:
        "A safty website for tourist that have multiple feature like complaints and life geo fencing ",
      technologies: ["React.js", "Js", "Node", "MongoDB", "LLMs"],
      status: "ALL DONE",
      image: "/projects/trip.png",
      link: "https://trip-guard.vercel.app/",
      GithubLink: "https://github.com/tanishtirpathi/TripGuard",
    },
    {
      title: "Crush sync ",
      description:
        "A website which take your github and your Crush github and tell more about your relationships posibility ",
      technologies: ["React js ", "Js", "Github API", "Tailwind"],
      status: "ALL DONE",
      image: "/projects/crush.png",
      link: "https://crushsync.vercel.app",
      GithubLink: "https://github.com/tanishtirpathi/Crushsync",
    },
    {
      title: "Tanish OS Portfolio",
      description:
        "A web-based simulated terminal OS with commands, animations, and custom UI system.",
      technologies: [
        "React",
        "Tailwind",
        "LocalStorage",
        "Custom Hooks",
        "shadcn",
        "JS",
      ],
      status: "operational",
      image: "/projects/OS.png",
      link: "https://tanishtirpathi.vercel.app",
      GithubLink: "https://github.com/tanishtirpathi/OS-portfolio",
    },
    {
      title: "LeetLab",
      description:
        "A simple and workable leet code clone type website with workable use ",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Three.js"],
      status: "building",
      image: "/projects/portfolio3.png",
      link: "",
    },
  ];

  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      <div className="flex items-center justify-center ">
        <button
          onclick={() => window.open("")}
          className="bg-black/50 cursor-pointer flex gap-2 rounded-lg border shadow-2xl mb-10 border-white/40 px-8 py-2"
        >
          show all Project <ArrowRight />
        </button>
      </div>
    </>
  );
}
