"use client";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const path = usePathname();
  const Menus = [
    { title: "🔴 LIVE TV", icon: "MonitorDot", url: "#", gap: "false" },
    { title: "HISTORY", icon: "History", url: "#" },
    { title: "LEAGUE", icon: "Hexagon", url: "#" },
    { title: "RANKINGS", icon: "Trophy", url: "/rankings" },
    { title: "SPONSORSHIPS", icon: "Joystick", url: "/sponsorship" },
    { title: "GAMEMASTERS", icon: "UserCog", url: "/gamemasters" },
    { title: "SHOUTCASTERS", icon: "UsersRound", url: "/shoutcasters" },
    { title: "FAQ", icon: "Megaphone", url: "/faqs" },
    {
      title: "SPIN",
      icon: "CircleDotDashed",
      url: "https://spin.battleforsupremacy.tv/",
    },
  ];

  return (
    <>
      <div
        className={`duration-400 hidden transition-all md:block ${open ? "w-60" : "w-20"}`}
      ></div>

      <div className="fixed z-[400] hidden flex-1 md:block">
        <div
          className={`${
            open ? "w-60" : "w-20"
          } duration-400 relative h-screen bg-[#201c1c] p-3 transition-all ease-in-out`}
        >
          <button
            className="absolute -right-5 top-9 rounded-xl border-2 border-bfs_primary/50 bg-bfs_soft-black p-2.5"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
          <div className={`transition-all duration-500${open ? "p-4" : ""}`}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="LOGO"
                width={1080}
                height={1080}
                className="rounded-xl"
              />
            </Link>
          </div>

          <div className="mt-4 space-y-1">
            {Menus.map((Menu, index) => {
              const Icon = Icons[Menu.icon as keyof typeof Icons];

              return (
                <Link
                  href={Menu.url}
                  key={Menu.url}

                  className={classNames(
                    path === Menu.url ? "bg-bfs_primary/20" : "",
                    `flex w-full gap-x-2 rounded-lg p-3 transition-colors duration-200 ease-in-out hover:bg-bfs_primary/20 
                    ${!open && "justify-center"}`,
                  )}
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
    </>
  );
}
