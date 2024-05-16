"use client";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight  } from "lucide-react";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const defaultMenu = [
  { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
  { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
  { title: "LEAGUE", icon: "Hexagon", isDropDown: false, url: "#" },
  { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings" },
  { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
  { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
  { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
  { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
  {
    title: "SPIN",
    icon: "CircleDotDashed",
    isDropDown: false, url: "https://spin.battleforsupremacy.tv/",
  },
]

const menuDropDown = [
  { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
  { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
  { title: "LEAGUE", icon: "Hexagon", isDropDown: true, url: "#" },
  { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings" },
  { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
  { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
  { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
  { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
  {
    title: "SPIN",
    icon: "CircleDotDashed",
    isDropDown: false, url: "https://spin.battleforsupremacy.tv/",
  }
]

export default function Sidebar({
  open,
  setOpen,
  setMenus,
  Menus,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  setMenus: React.Dispatch<React.SetStateAction<Object[]>>;
  Menus?: any;
}) {
  const path = usePathname();
  const [leagueOpen, setLeagueOpen] = useState([
    { title: "🔴 SUPREME", icon: "MonitorDot", url: "#", gap: "false" },
    { title: "🔵 SUPER", icon: "MonitorDot", url: "#", gap: "false" },
    { title: "🟢 STANDARD", icon: "MonitorDot", url: "#", gap: "false" }
  ]
  );
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div
        className={`duration-400 hidden transition-all md:block ${open ? "w-60" : "w-20"}`}
      ></div>

        <div className="fixed z-[400] hidden bg-[#201c1c]  flex-1 md:block overflow-y-auto">
        <div
          className={`${
            open ? "w-60" : "w-20"
          } duration-400 relative h-screen bg-[#201c1c] p-3 transition-all ease-in-out`}
        >
          <button
            className="absolute right-0 top-9 rounded-xl border-2 border-bfs_primary/50 bg-bfs_soft-black p-2.5"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowLeft  onClick={() => setMenus(defaultMenu)} size={16} /> : <ArrowRight onClick={() => setMenus(menuDropDown)} size={16} />}
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
            {Menus.map((Menu: any, index: number) => {
              const Icon = Icons[Menu.icon as keyof typeof Icons];
              if (!isClicked && Menu.icon == "") {
                return;
              }
              return (
                <Link
                  href={Menu.url}
                  key={Menu.title}
                  className={classNames(
                    path === Menu.url ? "bg-bfs_primary/20" : "",
                    `relative flex w-full gap-x-2 rounded-lg p-3 transition-colors duration-200 ease-in-out hover:bg-bfs_primary/20 
                    ${!open && "justify-center"}`,
                  )}
                  onClick={() => {
                    if (Menu.title == "LEAGUE" ) {
                      setIsClicked(!isClicked)
                      setMenus([
                        { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
                        { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
                        { title: "LEAGUE", icon: "Hexagon", isDropDown: true, url: "#" },
                        { title: "🔴 SUPREME", icon: "", isDropDown: true, url: "#", gap: "false" },
                        { title: "🔵 SUPER", icon: "", isDropDown: true, url: "#", gap: "false" },
                        { title: "🟢 STANDARD", icon: "", isDropDown: true, url: "#", gap: "false" },
                        { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings" },
                        { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
                        { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
                        { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
                        { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
                        {
                          title: "SPIN",
                          icon: "CircleDotDashed",
                          isDropDown: "false", url: "https://spin.battleforsupremacy.tv/",
                        }
                      ])
                      console.log(Menus)
                    }
                  }}
                >
                  {Menu.icon != "" && <Icon
                    aria-hidden="true"
                    strokeWidth={2}
                    className="h-6 w-6 flex-shrink-0 text-bfs_primary"
                  />}
                  <span
                    className={`single-line ${!open && "hidden"}
                    ${ (Menu.title == "🔴 SUPREME") ? "text-bfs_secondary" 
                    : (Menu.title == "🔵 SUPER") ? "text-bfs_primary"
                    : (Menu.title == "🟢 STANDARD") ? "text-green-500" : "text-bfs_dark-gray"}
                  `}
                  >
                    {Menu.title}
                  </span>

                  {
                    Menu.isDropDown && <ChevronRight className="absolute top-3.3 right-0" />
                  }

                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
