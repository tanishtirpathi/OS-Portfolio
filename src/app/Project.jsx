import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

// ⭐ Import each project detail page
import { Jarvis } from "../components/Projects/Other";
import { Portfolio } from "../components/Projects/Portfolio";
import { TripGuard } from "../components/Projects/TripGuard";
import { Crushsync } from "../components/Projects/Crushsync";
import { LeetLow } from "../components/Projects/Leetlab";
import { Mindpin } from "../components/Projects/Mindpin";
import { TrendUp } from "../components/Projects/TrendUp";
export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Trip Guard",
      description: "A safety website  120+ user...",
      technologies: ["React.js", "Js", "Node", "MongoDB", "LLMs"],
      status: "ALL DONE",
      image: "/projects/trip.png",
      link: "https://trip-guard.vercel.app/",
      GithubLink: "https://github.com/tanishtirpathi/TripGuard",
    },
    {
      id: 2,
      title: "Trend Up ",
      description: "Chat + freely 15+ user ",
      technologies: ["React.js", "shadcn", "express", "MongoDB", "WebRTV"],
      status: "ALL DONE",
      image: "/projects/trendup.png",
      link: "https://trend-up.vercel.app/",
      GithubLink: "https://github.com/tanishtirpathi/trend-Up-",
    },

    {
      id: 3,
      title: "LeetLow",
      description: "A small leet code clone...",
      technologies: ["React.js", "Judge-0", "prisma"],
      status: "Building",
      image: "/projects/Leet.png",
      link: "#",
      GithubLink: "https://github.com/tanishtirpathi/Leetlow",
    },

    {
      id: 4,
      title: "Mindpin",
      description: "An desktop app 150+ user ...",
      technologies: ["Electron", "Core JS", "Tailwind"],
      status: "ALL DONE",
      image: "/projects/mind.png",
      link: "https://mindpin.vercel.app/",
      GithubLink: "https://github.com/tanishtirpathi/First-desktop-app-",
    },
    {
      id: 5,
      title: "Tanish OS Portfolio",
      description: "Terminal-based Portfolio OS...",
      technologies: ["React", "Tailwind", "LocalStorage"],
      status: "Operational",
      image: "/projects/OS.png",
      link: "https://tanishtirpathi.vercel.app",
      GithubLink: "https://github.com/tanishtirpathi/OS-portfolio",
    },
    {
      id: 6,
      title: "Crush sync",
      description: "code Crush finder  34+ daily user...",
      technologies: ["React", "JS", "Github API", "Tailwind"],
      status: "ALL DONE",
      image: "/projects/crush.png",
      link: "https://crushsync.vercel.app",
      GithubLink: "https://github.com/tanishtirpathi/Crushsync",
    },
    {
      id: 7,
      title: "Jarvis- ",
      description: "My personal voice assistant ",
      technologies: ["LLm ", "python", "Selenium"],
      status: "ALL DONE",
      image: "/projects/jarvis.jpg",
      link: "#",
      GithubLink:
        "https://github.com/tanishtirpathi/real-life-jarvis-from-iron-man-",
    },
  ];

  const [visible, setVisible] = useState(4);
  const [projectId, setProjectId] = useState(null);

  const loadMore = () => setVisible(visible + 2);

  // ⭐ Dynamic component mapping
  const projectPages = {
    1: <TripGuard goBack={() => setProjectId(null)} />,
    2: <TrendUp goBack={() => setProjectId(null)} />,
    3: <LeetLow goBack={() => setProjectId(null)} />,
    4: <Mindpin goBack={() => setProjectId(null)} />,
    5: <Portfolio goBack={() => setProjectId(null)} />,
    6: <Crushsync goBack={() => setProjectId(null)} />,
    7: <Jarvis goBack={() => setProjectId(null)} />,
  };

  if (projectId) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={projectId}
          initial={{
            opacity: 0,
            scale: 0.2,
            y: 0,
            x: 0,
            borderRadius: "50%", // circular bloom
            filter: "blur(12px)",
            transformOrigin: "center center",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            borderRadius: "0%", // becomes full rectangle
            filter: "blur(0px)",
            transition: {
              duration: 0.45,
              ease: [0.16, 1, 0.2, 1], // smooth spring-like
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.4,
            borderRadius: "30%",
            filter: "blur(8px)",
            transition: { duration: 0.25, ease: "easeInOut" },
          }}
          className="w-full h-full"
        >
          {projectPages[projectId] || <div>Project Not Found</div>}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <>
      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.slice(0, visible).map((p) => (
          <ProjectCard
            key={p.id}
            {...p}
            onViewDetail={() => setProjectId(p.id)} // ⭐ Set ID on click
          />
        ))}
      </div>

      {visible < allProjects.length && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            className="bg-black/50 border border-white/40 text-white px-6 py-2 rounded-lg mb-10"
          >
            Show other projects ↓
          </button>
        </div>
      )}
    </>
  );
}
