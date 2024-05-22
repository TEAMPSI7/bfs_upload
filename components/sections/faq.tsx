'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CodmSoloRanks from "./rankings/CodmSolo";
// import { useState } from "react";
import Countries from "./rankings/Countries";
import * as React from "react"

export default function FAQ() {
  const [active, setActive] = React.useState("players")

  return (
    <div className="py-5">
    <div className="global-container">
      
      <div className="mt-4 flex flex-col items-center rounded-lg  p-4">
      {/* bg-bfs_soft-black/50 */}
        <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
          THE BIGGEST CODM LEAGUE
        </h1>
        <p className="text-lg text-bfs_secondary">100 PLAYERS | 106 COUNTRIES</p>
      </div>
      <div className="bg-bfs_soft-black/50 px-4 py-2">
        <div className="mx-auto mt-4 flex w-fit flex-col items-center justify-center gap-4 rounded-md bg-bfs_soft-black/50 px-6 py-3 md:flex-row">
            <div onClick={() => setActive("players")} className={`text-xl font-bold ${active === "players" ? "text-white underline underline-offset-4}" : "text-bfs_secondary"}`}>
              PLAYERS
            </div>
            <div onClick={() => setActive("countries")} className={`text-xl font-bold text-bfs_secondary ${active === "countries" ? "text-white underline underline-offset-4}" : "text-bfs_secondary"}`}>COUNTRIES</div>
            
        </div>
        {active === "players" ? <CodmSoloRanks /> : <Countries />}
      </div>
      <h1 className="text-title-gradient text-center mt-6 text-xl font-bold md:text-3xl">
        FAQ
      </h1>

      <div className="flex justify-center">
        <div className="mt-3 w-[600px]">
          <Accordion type="single" className="space-y-6" collapsible>
            <AccordionItem
              value="faq1"
              className="rounded-md border-b-0 bg-bfs_soft-black px-5"
            >
              <AccordionTrigger className="text-left text-xl font-bold">
                What is partner from BattleForSupremacy pro League?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-left">
                  Currently, 15 teams jointly govern and participate in
                  revenue for BattleForSupremacy Pro League. They also have
                  long-term participation slots which protect them from
                  getting relegated.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq2"
              className="rounded-md border-b-0 bg-bfs_soft-black px-5"
            >
              <AccordionTrigger className="text-left text-xl font-bold">
                Can not partner team take part the league?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-left">
                  Yes, BattleForSupremacy Pro League is open for everyone to
                  play in regardless of partner status. We believe in an open
                  ecosystem, where every new talent has a direct path to play
                  on the world{"'"}s biggest stages.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq3"
              className="rounded-md border-b-0 bg-bfs_soft-black px-5"
            >
              <AccordionTrigger className="text-left text-xl font-bold">
                Do partner teams get preferential seeding in the league?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-left">
                  Seeding for the groups of BattleForSupremacy Pro League is
                  done based on the BattleForSupremacy World Ranking and
                  independent of partner status.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
  );
}
