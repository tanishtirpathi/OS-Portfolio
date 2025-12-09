// Dock.js — Perfect macOS Dock with per-icon glass UI
import React, { useState } from "react";
import { useAppStore } from "../store/AppStore";
import Notes from "../app/Notes";
import Settings from "../app/Settings";
import Soon from "../app/AddSoon";
import { Terminals } from "../app/Terminal";
import { Google } from "../app/Google";
import Spotify from "../app/Spotify";
import SkillsShowcase from "../app/Skills";
import MacGallery from "../app/Gallary"
export default function Dock() {
  const openApp = useAppStore((s) => s.openApp);
  const [hoveredApp, setHoveredApp] = useState(null);
  const [bouncingAppId, setBouncingAppId] = useState(null);

  const apps = [
    { id: "notes", label: "Notes", icon: "/icons/Notes.jpg", comp: <Notes /> },
    {
      id: "Google",
      label: "Google",
      icon: "/icons/google.jpg",
      comp: <Google />,
    },
    {
      id: "Blogs",
      label: "Blogs",
      icon: "/icons/Blogs.png",
      comp: <Terminals />,
    },
    {
      id: "Gallery",
      label: "Gallery",
      icon: "/icons/Gal.jpg",
      comp: <MacGallery />,
    },
    {
      id: "About Me ",
      label: "About Me ",
      icon: "/icons/skills.jpg",
      comp: <SkillsShowcase />,
    },
    {
      id: "spotify",
      label: "Spotify",
      icon: "/icons/spotify.jpg",
      comp: <Spotify />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: "/icons/Setting.jpg",
      comp: <Soon />,
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: "/icons/terminal.jpg",
      comp: <Terminals />,
    },
    { divider: true },

    {
      id: "Github",
      label: "GitHub",
      icon: "/icons/github.jpg",
      url: "https://github.com/tanishtirpathi",
    },
    {
      id: "Youtube",
      label: "Youtube",
      icon: "/icons/Youtube.jpg",
      url: "https://www.youtube.com/@tanishtirpathi0",
    },
    {
      id: "Instagram",
      label: "Instagram",
      icon: "/icons/Instagram.jpg",
      url: "https://www.instagram.com/techwithtanish/",
    },
    {
      id: "x",
      label: "X (Twitter)",
      icon: "/icons/X.jpg",
      url: "https://x.com/tanishtirpathi",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: "/icons/linkedin.jpg",
      url: "https://www.linkedin.com/in/tanishtirpathi/",
    },

    { divider: true },
    {
      id: "Trash Bin",
      label: "Trash Bin",
      icon: "/icons/trash.png",
      comp: <Soon />,
    },
  ];

  const handleAppClick = (app) => {
    setBouncingAppId(app.id);

    setTimeout(() => {
      if (app.url) {
        // 🔥 open in new tab if URL exists
        window.open(app.url, "_blank");
      } else {
        // open internal app
        openApp(app.id, app.comp);
      }
      setBouncingAppId(null);
    }, 200);
  };

  return (
    <div
      className="
        absolute bottom-3 left-1/2 -translate-x-1/2
        flex items-center gap-2
        px-4 py-2 rounded-2xl
        bg-black/30 backdrop-blur-2xl
        border border-white/20 shadow-xl
      "
      style={{ height: "70px" }}
    >
      {/* Tooltip */}
      {hoveredApp && (
        <div
          className="
            absolute -top-12 left-1/2 -translate-x-1/2
            px-4 py-1 rounded-md
            bg-black/50 text-white shadow-xl
            text-sm font-medium backdrop-blur-xl
            animate-fadeSlide pointer-events-none
          "
        >
          {hoveredApp.label}
        </div>
      )}

      {apps.map((app, index) => {
        if (app.divider)
          return (
            <div
              key={index}
              className="w-[1.5px] h-8 bg-white/25 rounded-full mx-2"
            />
          );

        return (
          <div
            key={app.id}
            onMouseEnter={() => setHoveredApp(app)}
            onMouseLeave={() => setHoveredApp(null)}
            onClick={() => handleAppClick(app)}
            className={`
              flex items-center justify-center
              w-[51px] h-[51px]
              rounded-lg bg-white/30 backdrop-blur-xl
              shadow-lg border border-white/20
              transition-all duration-200 ease-out
              hover:scale-120 hover:-translate-y-2
              ${bouncingAppId === app.id ? "animate-bounceOnce" : ""}
            `}
          >
            <img
              src={app.icon}
              alt={app.label}
              className="w-[44px] h-[44px] object-contain rounded-md"
            />
          </div>
        );
      })}
    </div>
  );
}
