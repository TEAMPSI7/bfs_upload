  "use client";
  import Image from "next/image";
  import { useState } from "react";
  import { Icons } from "@/components/icons";
  import Link from "next/link";
  import { ArrowLeft, ArrowRight, ChevronRight  } from "lucide-react";
  import { usePathname } from "next/navigation";
  import '../CSS/footer.css'

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const defaultMenu = [
    { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
    { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
    { title: "LEAGUE", icon: "Hexagon", isDropDown: false, url: "#" },
    { title: "TOURNAMENT", icon: "Swords", isDropDown: false, url: "#" },
    { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings" },
    { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
    { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
    { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
    { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
    { title: "TOPUP", icon: "Donut", isDropDown: false, url: "/topup" },
    {
      title: "SPIN",
      icon: "CircleDotDashed",
      isDropDown: false, url: "https://spin.battleforsupremacy.tv/",
    },
  ]

  const menuDropDown = [
    { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
    { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
    { title: "TOURNAMENT", icon: "Swords", isDropDown: true, url: "#" },
    { title: "LEAGUE", icon: "Hexagon", isDropDown: true, url: "#" },
    { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings/solo" },
    { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
    { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
    { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
    { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
    { title: "TOPUP", icon: "Donut", isDropDown: false, url: "/topup" },
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
    setMenus: any;
    Menus?: any;
  }) {
    const path = usePathname();
    const [isMinimized, setIsMinimized] = useState(true)
    // let isMinimized = true;
    const [leagueOpen, setLeagueOpen] = useState([
      { title: "🔴 SUPREME", icon: "MonitorDot", url: "#", gap: "false" },
      { title: "🔵 SUPER", icon: "MonitorDot", url: "#", gap: "false" },
      { title: "🟢 STANDARD", icon: "MonitorDot", url: "#", gap: "false" }
    ]
    );
    
    const [isClicked, setIsClicked] = useState(false);

    const handleMenuClick = (Menu: any) => {
      console.log(isMinimized, " ISMIN")
      if (isMinimized) return;
      if (Menu.title === "LEAGUE" || Menu.title === "TOURNAMENT") {
        setIsClicked(!isClicked);
        if (Menu.title === "LEAGUE") {
          setMenus([
            { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
            { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
            { title: "TOURNAMENT", icon: "Swords", isDropDown: true, url: "" },
            { title: "LEAGUE", icon: "Hexagon", isDropDown: true, url: "#" },
            { title: "🔴 SUPREME", icon: "", isDropDown: true, url: "#", gap: "false" },
            { title: "🔵 SUPER", icon: "", isDropDown: true, url: "#", gap: "false" },
            { title: "🟢 STANDARD", icon: "", isDropDown: true, url: "#", gap: "false" },
            { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings/solo" },
            { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
            { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
            { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
            { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
            { title: "TOPUP", icon: "Donut", isDropDown: false, url: "/topup" },
            {
              title: "SPIN",
              icon: "CircleDotDashed",
              isDropDown: "false", url: "https://spin.battleforsupremacy.tv/",
            }
          ])
        } else if (Menu.title === "TOURNAMENT") {
          setMenus([
            { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
            { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
            { title: "TOURNAMENT", icon: "Swords", isDropDown: true, url: "" },
            { title: "Honor of Kings", icon: "", isDropDown: true, url: "/tournament/hok", gap: "false" },
            { title: "Call of Duty Mobile", icon: "", isDropDown: true, url: "#", gap: "false" },
            { title: "Fortnite", icon: "", isDropDown: true, url: "#", gap: "false" },
            { title: "GTA:V", icon: "", isDropDown: true, url: "#", gap: "false" },
            { title: "LEAGUE", icon: "Hexagon", isDropDown: true, url: "#" },
            { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings/solo" },
            { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
            { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
            { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
            { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
            { title: "TOPUP", icon: "Donut", isDropDown: false, url: "/topup" },
            {
              title: "SPIN",
              icon: "CircleDotDashed",
              isDropDown: "false", url: "https://spin.battleforsupremacy.tv/",
            }
          ])
        }
      }
    }

    return (
      <>
        <div
          className={`duration-400 hidden transition-all md:block ${open ? "w-60" : "w-20"}`}
        ></div>

          <div className="fixed z-[400] hidden bg-[#201c1c]  flex-1 md:block overflow-y-auto">
          <div className={`${open ? "w-60" : "w-20"} sidebar relative h-screen bg-[#201c1c] p-3 transition-all ease-in-out`}>
            <button
              className="absolute right-0 top-9 rounded-xl border-2 border-bfs_primary/50 bg-bfs_soft-black p-2.5"
              onClick={() => {
                setOpen(!open)
                setIsMinimized(!isMinimized)
                // isMinimized = !isMinimized
                // console.log("CHANGED ", isMinimized)
              }}
            >
              {open ? <ArrowLeft  onClick={() => {
                  setMenus(defaultMenu)
                  // isMinimized = true
                  // console.log("true", isMinimized)
                }} size={16} /> : <ArrowRight onClick={() => {
                  setMenus(menuDropDown)
                  // setIsMinimized(true)
                  // console.log("FALSE", isMinimized)
                  // isMinimized = false
                }} size={16} />}
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
                    onClick={() => handleMenuClick(Menu)}
                    // onClick={() => {
                    //   if (Menu.title == "LEAGUE" && !isMinimized) {
                    //     setIsClicked(!isClicked)
                    //     console.log("IS MINIMIZED", isMinimized)
                    //     setMenus([
                    //       { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
                    //       { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
                    //       { title: "TOURNAMENT", icon: "Swords", isDropDown: false, url: "#" },
                    //       { title: "LEAGUE", icon: "Hexagon", isDropDown: true, url: "#" },
                    //       { title: "🔴 SUPREME", icon: "", isDropDown: true, url: "#", gap: "false" },
                    //       { title: "🔵 SUPER", icon: "", isDropDown: true, url: "#", gap: "false" },
                    //       { title: "🟢 STANDARD", icon: "", isDropDown: true, url: "#", gap: "false" },
                    //       { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings/solo" },
                    //       { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
                    //       { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
                    //       { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
                    //       { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
                    //       {
                    //         title: "SPIN",
                    //         icon: "CircleDotDashed",
                    //         isDropDown: "false", url: "https://spin.battleforsupremacy.tv/",
                    //       }
                    //     ])
                    //     console.log(Menus)
                    //   }

                    //   if (Menu.title == "TOURNAMENT" && !isMinimized) {
                    //     setIsClicked(!isClicked)
                    //     console.log("IS MINIMIZED", isMinimized)
                    //     setMenus([
                    //       { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
                    //       { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
                    //       { title: "TOURNAMENT", icon: "Swords", isDropDown: true, url: "#" },
                    //       { title: "🔴 SUPREME", icon: "", isDropDown: true, url: "#", gap: "false" },
                    //       { title: "🔵 SUPER", icon: "", isDropDown: true, url: "#", gap: "false" },
                    //       { title: "🟢 STANDARD", icon: "", isDropDown: true, url: "#", gap: "false" },
                    //       { title: "LEAGUE", icon: "Hexagon", isDropDown: true, url: "#" },
                    //       { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings/solo" },
                    //       { title: "SPONSORSHIPS", icon: "Joystick", isDropDown: false, url: "/sponsorship" },
                    //       { title: "GAMEMASTERS", icon: "UserCog", isDropDown: false, url: "/gamemasters" },
                    //       { title: "SHOUTCASTERS", icon: "UsersRound", isDropDown: false, url: "/shoutcasters" },
                    //       { title: "FAQ", icon: "Megaphone", isDropDown: false, url: "/faqs" },
                    //       {
                    //         title: "SPIN",
                    //         icon: "CircleDotDashed",
                    //         isDropDown: "false", url: "https://spin.battleforsupremacy.tv/",
                    //       }
                    //     ])
                    //     console.log(Menus)
                    //   }
                    // }}
                  >
                     {Icon ? (
                    <Icon
                      aria-hidden="true"
                      strokeWidth={2}
                      className="h-6 w-6 flex-shrink-0 text-bfs_primary"
                    />
                  ) : ""}
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
                      Menu.isDropDown && <ChevronRight className={`absolute top-3.3 right-0 ${!open && "hidden"}`}/>
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
