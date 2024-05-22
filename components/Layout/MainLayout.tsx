"use client";
import { useState, Fragment } from "react";
import Sidebar from "./Sidebar";
import React from "react";
import Marquee from "react-fast-marquee";
import Emoji from "../emoji";
import data from "@/data/solo.json";

import SponsorImage from "./SponsorsImage";
import Image from "next/image";
import SponsorMarquee from "./SponsorMarquee";
import { Menu, X } from "lucide-react";
import Footer from "../sections/Footer";
import Navbar from "./Navbar";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Icons } from "../icons";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const defaultMenu = [
  { title: "🔴 LIVE TV", icon: "MonitorDot", isDropDown: false, url: "#", gap: "false" },
  { title: "HISTORY", icon: "History", isDropDown: false, url: "#" },
  { title: "LEAGUE", icon: "Hexagon", isDropDown: false, url: "#" },
  { title: "RANKINGS", icon: "Trophy", isDropDown: false, url: "/rankings/solo" },
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
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getRandomSponsors = () => {
    const numSponsors = 1;

    const selected = [];
    for (let i = 0; i < numSponsors; i++) {
      const randomIndex = Math.floor(Math.random() * SponsorImage.length);
      selected.push(SponsorImage[randomIndex]);
    }
    return selected;
  };
  const [Menus, setMenus] = React.useState(defaultMenu);

  return (
    <main className="h-screen md:flex">
      <Sidebar open={open} setOpen={setOpen} setMenus={setMenus} Menus={Menus} />

      <div className="duration-400 h-screen flex-1 transition-all">
        <div className="h-36 md:h-14"></div>

        <div className="fixed top-0 z-10 w-full bg-bfs_soft-black">
          {/* <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 flex md:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex w-full max-w-xs flex-1 flex-col bg-bfs_soft-black pb-4 pt-5">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <X className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center justify-center px-4">
                    <Link href="/">
                      <Image
                        src="/images/logo.png"
                        alt="LOGO"
                        width={1080}
                        height={1080}
                        className="h-16 w-16 rounded-xl"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 space-y-1 p-3">
                    {Menus.map((Menu: any, index: number) => {
                      const Icon = Icons[Menu.icon as keyof typeof Icons];

                      return (
                        <Link
                          href={Menu.url}
                          key={Menu.url}
                          className={classNames(
                            path === Menu.url ? "bg-bfs_primary/20" : "",
                            `"} flex w-full gap-x-2 rounded-lg p-3 transition-colors duration-200 ease-in-out hover:bg-bfs_primary/20`,
                          )}
                        >
                          <Icon
                            aria-hidden="true"
                            strokeWidth={2}
                            className="h-6 w-6 flex-shrink-0 text-bfs_primary"
                          />
                          <span className={`single-line text-bfs_dark-gray`}>
                            {Menu.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
            </Dialog>
          </Transition.Root> */}

          {/* <div className="block p-4 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="LOGO"
                  width={1080}
                  height={1080}
                  className="h-10 w-10 rounded-md object-contain md:h-16 md:w-16"
                />
                <h4 className="md:text-2xl">BattleForSupremacy.TV</h4>
              </div>

              <button
                type="button"
                className="rounded-md bg-gray-500/10 p-2 hover:scale-105 active:scale-105"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Menu
                  size={32}
                  strokeWidth={1.5}
                  className="text-bfs_secondary"
                />
              </button>
            </div>
          </div> */}

          <Marquee className="matches-nav h-13 py-2" autoFill speed={20}>
            {data.series[0].games.group_stage.round_one_group_a.map(
              (item: any) => (
                <div key={item.name} className="flex items-center">
                  <p className="mx-2 flex gap-x-2">
                    <Emoji emoji={item.country} /> {item.name} SCORE:{" "}
                    {item.score}
                  </p>
                  {getRandomSponsors().map((sponsorImage) => (
                    <div key={String(sponsorImage)} className="mx-2">
                      <Image
                        src={sponsorImage}
                        width={50}
                        height={50}
                        alt="Sponsor"
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  ))}
                </div>
              ),
            )}
          </Marquee>
        </div>

        <section className="mt-4 w-full md:mt-1">{children}</section>

        <Footer />
        <SponsorMarquee />
      </div>
    </main>
  );
}
