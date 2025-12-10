import React, { useState } from "react";
import { useAppStore } from "../store/Appstore.js";
import Projects from "../app/Project.jsx";
import Soon from "../app/AddSoon";
import { Terminals } from "../app/Terminal";
import { Google } from "../app/Google";
import Spotify from "../app/Spotify";
import SkillsShowcase from "../app/Skills";
import ChatBot from "../app/chatbot/Chatbot.jsx";
import MacGallery from "../app/Gallary";

export default function Dock() {
  const openApp = useAppStore((s) => s.openApp);
  const [hoveredApp, setHoveredApp] = useState(null);
  const [bouncingAppId, setBouncingAppId] = useState(null);

  const apps = [
    {
      id: "About Me",
      label: "About Me",
      icon: "/icons/skills.jpg",
      comp: <SkillsShowcase />,
    },
    {
      id: "Projects",
      label: "Projects",
      icon: "/icons/Notes.png",
      comp: <Projects />,
    },
    {
      id: "Blogs",
      label: "Blogs",
      icon: "/icons/Blogs.png",
      comp: <Soon />,
    },
    {
      id: "spotify",
      label: "Spotify",
      icon: "/icons/spotify.jpg",
      comp: <Spotify />,
    },
    {
      id: "Gallery",
      label: "Gallery",
      icon: "/icons/Gal.jpg",
      comp: <MacGallery />,
    },

    {
      id: "Jarvis",
      label: "Jarvis",
      icon: "/icons/Chat.jpg",
      comp: <ChatBot />,
    },
    {
      id: "Google",
      label: "Google",
      icon: "/icons/google.jpg",
      comp: <Google />,
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
      if (app.url) window.open(app.url, "_blank");
      else openApp(app.id, app.comp);
      setBouncingAppId(null);
    }, 200);
  };

  return (
    <div
      className="
        absolute bottom-4 left-1/2 -translate-x-1/2
        flex items-end gap-1.5
        px-4 py-2 rounded-xl
        bg-black/35 backdrop-blur-2xl
        border border-white/20 shadow-2xl
      "
      style={{ height: "85px", boxShadow: "0 20px 60px rgba(0,0,0)" }}
    >
      {/* Tooltip */}
      {hoveredApp && (
        <div
          className="
            absolute -top-12 left-1/2 -translate-x-1/2
            px-4 py-1 rounded-md
            bg-black/70 text-white shadow-xl
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
              className="w-[2px] h-16 bg-white/25 rounded-md mx-2"
            />
          );

        return (
          <div
            key={app.id}
            onMouseEnter={() => setHoveredApp(app)}
            onMouseLeave={() => setHoveredApp(null)}
            onClick={() => handleAppClick(app)}
            className={`
              flex flex-col items-center justify-center
              w-[58px]
              transition-all duration-200 ease-out cursor-pointer

              ${hoveredApp?.id === app.id ? "-translate-y-2 scale-110" : ""}
              ${bouncingAppId === app.id ? "animate-bounceOnce" : ""}
            `}
          >
            <div
              className="
                w-[50px] h-[50px]
                rounded-lg bg-white/10 backdrop-blur-xl
                border border-white/20 shadow-lg
                flex items-center justify-center
                transition-all duration-200
              "
            >
              <img
                src={app.icon}
                alt={app.label}
                className="w-[42px] h-[42px] object-contain rounded-md "
              />
            </div>

            {/* App Name - Hidden on Hover */}
            <p
              className={`
                text-[11px] text-white/85 font-medium transition-opacity duration-150
                ${hoveredApp?.id === app.id ? "opacity-0" : "opacity-100"}
              `}
            >
              {app.id}
            </p>
          </div>
        );
      })}
    </div>
  );
}
