"use client";
import Link from "next/link";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { useState } from "react";
import data from "@/data/solo.json";

import up7 from "@/public/images/sponsors/7up.jpg";
import aquafina from "@/public/images/sponsors/aquafina.jpg";
import cheetos from "@/public/images/sponsors/cheetos.jpg";
import fritos from "@/public/images/sponsors/fritos.jpg";
import gatorade from "@/public/images/sponsors/gatorade.jpg";
import lays from "@/public/images/sponsors/lays.jpg";
import pepsiMax from "@/public/images/sponsors/pepsi-max.jpg";
import lipton from "@/public/images/sponsors/lipton.jpg";
import miranda from "@/public/images/sponsors/miranda.jpg";
import pepsi from "@/public/images/sponsors/pepsi.jpg";
import quaker from "@/public/images/sponsors/quaker.jpg";
import rr from "@/public/images/sponsors/rr.jpg";
import ruffles from "@/public/images/sponsors/ruffles.jpg";
import sb from "@/public/images/sponsors/sb.jpg";
import sodaStream from "@/public/images/sponsors/sodastream.jpg";
import tostitos from "@/public/images/sponsors/tostitos.jpg";
import Marquee from "react-fast-marquee";
import Emoji from "@/components/emoji";

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

  const sponsors = [
    up7,
    aquafina,
    cheetos,
    fritos,
    gatorade,
    lays,
    pepsiMax,
    lipton,
    miranda,
    pepsi,
    quaker,
    rr,
    ruffles,
    sb,
    sodaStream,
    tostitos,
  ];

  const getRandomSponsors = () => {
    const numSponsors = 1;

    const selected = [];
    for (let i = 0; i < numSponsors; i++) {
      const randomIndex = Math.floor(Math.random() * sponsors.length);
      selected.push(sponsors[randomIndex]);
    }
    return selected;
  };

  const sponsorsList = () => {
    return sponsors.map((sponsorImage) => (
      <div key={String(sponsorImage)} className="mx-2">
        <Image
          src={sponsorImage}
          width={50}
          height={50}
          alt="Sponsor"
          className="h-8 w-8 object-contain"
        />
      </div>
    ));
  };

  return (
    <div className="flex h-screen">
      <div
        className={`duration-400 hidden transition-all md:block ${open ? "w-60" : "w-20"}`}
      ></div>

      <div className="fixed z-[400] hidden flex-1 md:block">
        <div
          className={` ${
            open ? "w-60" : "w-20"
          } duration-400 relative h-screen bg-[#201c1c] p-3 transition-all ease-in-out`}
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
          <div className={`transition-all duration-500${open ? "p-4" : ""}`}>
            <Image
              src="/images/logo.png"
              alt="LOGO"
              width={1080}
              height={1080}
              className="rounded-xl"
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

      <div className="duration-400 h-screen flex-1 transition-all">
        <div className="h-16"></div>
        <div className="fixed top-0 z-10 h-10 w-full">
          <Marquee className="matches-nav py-2" speed={20}>
            {data.series[0].games.group_stage.round_one_group_a.map(
              (item: any) => (
                <div key={item.detail} className="flex items-center">
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

        <main className="global-container my-6">
          <h1 className="md:text-6xl">
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:ease-in to apply the ease-in utility at only
            medium screen sizes and above.
          </h1>
          <h1 className="md:text-6xl">
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:ease-in to apply the ease-in utility at only
            medium screen sizes and above.
          </h1>
          <h1 className="md:text-6xl">
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:ease-in to apply the ease-in utility at only
            medium screen sizes and above.
          </h1>
          <h1 className="md:text-6xl">
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:ease-in to apply the ease-in utility at only
            medium screen sizes and above.
          </h1>
        </main>

        {/* <div className="h-14"></div>
        <div className="fixed bottom-0 z-10 h-10 w-full bg-blue-200/20 py-2">
          <Marquee className="matches-nav py-2" speed={20}>
            {data.series[0].games.group_stage.round_one_group_a.map(
              (item: any) => (
                <div key={item.detail} className="flex items-center">
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
        </div> */}

        <div className="h-16"></div>
        <div className="fixed -bottom-1 flex h-14 w-full items-center">
          <Marquee
            className="footer-sponsor flex items-center py-2"
            speed={20}
            direction="right"
            autoFill
          >
            <div className="flex w-full items-center">{sponsorsList()}</div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
