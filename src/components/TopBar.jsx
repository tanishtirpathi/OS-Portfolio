// src/components/TopBar.jsx
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Calendar } from "./ui/calendar";

import { Bluetooth, Wifi } from "lucide-react";

export default function TopBar({ appTitle = "Finder", setStage }) {

  function handleAction(action) {
    if (action === "lock") setStage("lock");
    if (action === "logout") setStage("lock");
    if (action === "sleep") setStage("lock");
    if (action === "shutdown") setStage("power");
  }

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  function getTime() {
    const now = new Date();
    const weekday = now.toLocaleString("en-US", { weekday: "short" });
    const month = now.toLocaleString("en-US", { month: "short" });
    const day = now.getDate();
    const t = now.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return `${weekday}, ${month} ${day} ${t}`;
  }

  const hoverStyle =
    "hover:bg-white/20 hover:backdrop-blur-xl hover:rounded transition-all";

  return (
    <div className="w-full h-8 flex items-center justify-between px-3 select-none bg-black/5 backdrop-blur-lg fixed top-0 left-0 z-50 text-black border-y border-white/15">
      {/* LEFT */}
      <div className="flex items-center gap-2 text-[11px] font-medium">
        {/* Apple Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`cursor-pointer px-0.5 py-1 ml-3 text-base font-bold font-syne${hoverStyle}`}
          >
            Tanish
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white/10 text-white shadow-2xl border-white/20 backdrop-blur-xl mx-2 mt-2rounded">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-x"
              onClick={() => handleAction("lock")}
            >
              Lock
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-x"
              onClick={() => handleAction("logout")}
            >
              Log out
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-x"
              onClick={() => handleAction("sleep")}
            >
              Sleep
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-x"
              onClick={() => handleAction("shutdown")}
            >
              Shutdown
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Menu Items */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-black/70">
          {/* FILE */}
          <DropdownMenu>
            <DropdownMenuTrigger className={hoverStyle}>
              <p className="text-base  px-1.5 font-syne">File</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/10 text-[10px] text-white backdrop-blur-xl border-white/20 shadow-2xlrounded mx-2 mt-2">
              <DropdownMenuItem className="text-xs">
                New Folder
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs">
                New Finder Window
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs">New Tab</DropdownMenuItem>
              <DropdownMenuItem className="text-xs">Open</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xs">Get Info</DropdownMenuItem>
              <DropdownMenuItem className="text-x">Rename</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-x">Duplicate</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* EDIT */}
          <DropdownMenu>
            <DropdownMenuTrigger className={hoverStyle}>
              <p className="text-base px-1.5 font-syne">Edit</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/10 text-[10px] text-white backdrop-blur-xl border-white/20 shadow-2xlrounded  mx-2 mt-2">
              <DropdownMenuItem className="text-x">Undo</DropdownMenuItem>
              <DropdownMenuItem className="text-x">Redo</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-x">Cut</DropdownMenuItem>
              <DropdownMenuItem className="text-x">Copy</DropdownMenuItem>
              <DropdownMenuItem className="text-x">Paste</DropdownMenuItem>
              <DropdownMenuItem className="text-x">Select All</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-x">Find</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* VIEW */}
          <DropdownMenu>
            <DropdownMenuTrigger className={hoverStyle}>
              <p className="text-base px-1.5 font-syne">View</p>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white/10 text-[10px] text-white backdrop-blur-xl border-white/20 shadow-2xlrounded mx-2 mt-2">
              <DropdownMenuItem className="text-x">
                as Icons ⌘1
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">as List ⌘2</DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                as Columns ⌘3
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                as Gallery ⌘4
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-x">
                Use Stacks ⌃⌘0
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-x">Clean Up</DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                Clean Up By ▸
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-x">
                Hide Tab Bar ⇧⌘T
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                Show All Tabs ⇧⌘\
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                Hide Sidebar ⌥⌘S
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                Hide Preview ⇧⌘P
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-x">
                Hide Toolbar ⇧⌘T
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                Hide Path Bar ⌥⌘P
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                Hide Status Bar ⌘/
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-x">
                Show View Options ⌘J
              </DropdownMenuItem>
              <DropdownMenuItem className="text-x">
                Show Preview Options ⌥⌘J
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-x">
                Enter Full Screen ⌃⌘F
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* App Name */}
        <div
          className={`ml-2 text-base font-syne font-medium px-1 py-1${hoverStyle}`}
        >
          {appTitle}
        </div>
      </div>

      {/* CENTER — empty like macOS */}
      <div className="flex-1"></div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 text-[11px] font-medium text-black">
        <Bluetooth className={`w-4 h-4 cursor-pointer `} />
        <Wifi className={`w-4 h-4 font cursor-pointer`} />

        {/* TIME */}
        <DropdownMenu>
          <DropdownMenuTrigger className={`cursor-pointer ${hoverStyle}`}>
            <p className="text-xs px-1.5 py-1 font-syne">{time}</p>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white/10 backdrop-blur-xl border-white/20 text-white shadow-2xl rounded-xl px-4 py-4 mx-2 mt-2">
            <DropdownMenuLabel>Calendar</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-x">
              <Calendar className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
