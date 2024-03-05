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
        <div className="h-14"></div>
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

        <main className="m-2">{children}</main>

        <SponsorMarquee />
      </div>
    </main>
  );
}
