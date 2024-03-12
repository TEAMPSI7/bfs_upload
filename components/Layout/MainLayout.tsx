"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import React from "react";
import Marquee from "react-fast-marquee";
import Emoji from "../emoji";
import data from "@/data/solo.json";
import SponsorImage from "./SponsorsImage";
import Image from "next/image";
import SponsorMarquee from "./SponsorMarquee";
import { Menu } from "lucide-react";
import Footer from "../sections/Footer";
import Navbar from "./Navbar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mobileSidebarOpeb, setMobileSidebarOpen] = useState(false);

  const getRandomSponsors = () => {
    const numSponsors = 1;

    const selected = [];
    for (let i = 0; i < numSponsors; i++) {
      const randomIndex = Math.floor(Math.random() * SponsorImage.length);
      selected.push(SponsorImage[randomIndex]);
    }
    return selected;
  };

  return (
    <main className="h-screen md:flex">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="duration-400 h-screen flex-1 transition-all">
        <div className="h-36 md:h-14"></div>

        <Navbar
          sidebarOpen={mobileSidebarOpeb}
          setSidebarOpen={setMobileSidebarOpen}
        />
        <div className="fixed top-0 z-10 w-full bg-bfs_soft-black">
          <div className="block p-4 md:hidden">
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

              {/* <Menu
                size={32}
                strokeWidth={1.5}
                className="text-bfs_secondary"
              /> */}
              <button
                type="button"
                className="rounded-md bg-gray-500/10 p-2 hover:scale-105 active:scale-105"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Menu
                  size={32}
                  strokeWidth={1.5}
                  className="text-bfs_secondary"
                />
              </button>
            </div>
          </div>

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
