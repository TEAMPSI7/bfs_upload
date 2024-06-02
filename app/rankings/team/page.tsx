"use client"
import Link from "next/link";
import Ranking from "../../../components/sections/rankings/Ranking";
import global_ranks from "../../../data/CODM/squad_ranks.json"
import CodmTeam from "@/components/sections/rankings/CodmTeam";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Page() {
  const [global_ranks, setGlobalRanks] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbxR9BgfPnz3MT_9OG9gP1RkvHp1XHDUzhUQc0tQbwGXnTA2cYs9tpginIUyofHUV31R/exec?url=/squad-global'
        );
        console.log("RESPONSE ", response);

        // Slice the response data to get items from index 1 to 89 (2nd to 90th items)
        const slicedData = response.data.slice(0, 91);
        console.log("SLICED ", slicedData)
        setGlobalRanks(slicedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
    return (
      <div className="rankings-page-bg relative -mt-1">
        <div className="bg-black/50 py-10">
          <div className="global-container">
            <h1 className="text-center text-2xl font-bold">
              CALL OF DUTY.MOBILE
            </h1>
            <div className="mx-auto mt-4 flex w-fit flex-col items-center justify-center gap-4 rounded-md bg-bfs_soft-black/50 px-6 py-3 md:flex-row">
              <Link href="/rankings/solo" className="text-xl font-bold text-bfs_secondary">
                SOLO
              </Link>
              <Link href="/rankings/duo" className="text-xl font-bold text-bfs_secondary">DUO</Link>
              <Link href="/rankings/team"  className="text-xl font-bold text-white underline underline-offset-4">
                TEAM
              </Link>
              <Link href="/rankings/mult5v5" className="text-xl font-bold text-bfs_secondary">5V5 MULTIPLAYER</Link>
            </div>
            <Ranking global_ranks={global_ranks} path_name={"squad_hex"} />
          </div>
        </div>
      </div>
    );
  }