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
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

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
    <main className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="duration-400 h-screen flex-1 transition-all">
        <div className="h-36 md:h-14"></div>

        <div className="fixed top-0 z-10 w-full bg-[#111]">
          <div className="block p-4 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="LOGO"
                  width={1080}
                  height={1080}
                  className="h-16 w-16 object-contain"
                />
                <h4 className="text-2xl">BattleForSupremacy.TV</h4>
              </div>

              <Menu size={42} />
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

        <main className="mt-4 md:mt-1">{children}</main>

        <SponsorMarquee />
      </div>
    </main>
  );
}
