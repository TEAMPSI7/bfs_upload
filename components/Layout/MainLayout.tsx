"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import Emoji from "../emoji";
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
import Image from "next/image";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

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
    <main className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} />

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
          {children}
        </main>

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
    </main>
  );
}
