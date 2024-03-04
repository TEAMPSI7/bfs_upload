"use client";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Page() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "🔴 LIVE TV", icon: "MonitorDot", url: "/", gap: "false" },
    { title: "HISTORY", icon: "History", url: "#" },
    { title: "LEAGUE", icon: "Hexagon", url: "#" },
    { title: "RANKINGS", icon: "Trophy", url: "#" },
    { title: "SPONSORSHIPS", icon: "Joystick", url: "#" },
    { title: "GAMEMASTERS", icon: "UserCog", url: "#" },
    { title: "SHOUTCASTERS", icon: "UsersRound", url: "#" },
    { title: "FAQ", icon: "Megaphone", url: "#" },
    { title: "SPIN", icon: "CircleDotDashed", url: "#" },
  ];

  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <div
          className={` ${
            open ? "w-60" : "w-20"
          } fixed h-screen bg-[#201c1c] p-3 duration-200`}
        >
          <Image
            alt="test"
            width={30}
            height={30}
            src="/images/bg-text-.png"
            className={`absolute -right-3 top-9 w-7 cursor-pointer rounded-full border-2 border-indigo-700  ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex items-center gap-x-4">
            <Image
              src="/images/logo.png"
              alt="LOGO"
              width={1080}
              height={1080}
              className="rounded-md"
            />
          </div>

          <div className="mt-4 space-y-1">
            {Menus.map((Menu, index) => {
              const Icon = Icons[Menu.icon as keyof typeof Icons];

              return (
                <Link
                  href={Menu.url}
                  key={Menu.url}
                  className={`flex w-full gap-x-2 rounded-lg p-3 transition-colors duration-200 ease-in-out hover:bg-bfs_primary/20
                  ${!open && "justify-center"}
                  `}
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={2}
                    className="h-6 w-6 flex-shrink-0 text-bfs_primary"
                  />
                  <span
                    className={`single-line ${!open && "hidden"}
                    text-bfs_dark-gray
                  `}
                  >
                    {Menu.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <main
        className={`global-container flex-1 overflow-y-auto transition-all duration-500 ease-in-out ${
          open ? "md:ml-60" : "md:ml-20"
        }`}
      >
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </main>
    </div>
  );
}
