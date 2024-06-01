import React from 'react'
import { useContext, useEffect, useState } from "react";
import starlink from "@/public/images/starlink_1.jpg";
import * as url from "url";
import ErrImg from "@/public/images/hex-err.png";
import Image from "next/image";

const Team = ({ team, type, path_name }: { team: any; type: string, path_name: string }) => {
  // const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/codm/solo-ranks/${team.name}.png`;

  return (
    <div  className={`relative flex w-4/12 flex-col items-center sm:w-2/12 ${team.playerId === "emptyy" ? "hidden lg:block" : ""}`}>
      {team.name !== "" ? (
        <div className="w-full max-w-[210px] h-auto sm:max-w-[210px]">
          <Image
            src={`/images/CODM/${path_name}/${team.playerId != "" ? team.playerId  : "hex-err"}.png`}
            width={200}
            height={200}
            alt={team.playerId === "emptyy" ? "" : team.playerId}
            className="h-full w-full"
            loading={"lazy"}
          />

          {team.playerId != "emptyy" && <div className="absolute -left-2 sm:-left-1  top-1/3 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-bfs_secondary text-white">
            {team.rank}
          </div>}
        </div>
      ) : (
        <div className="block h-full w-full" />
      )}
    </div>
  );
};

const TeamList = ({ teams, numItemsPerRow, type, path_name }: any) => {
  // const totalRows = Math.ceil(teams.length / numItemsPerRow);
  const totalRows = Math.ceil(teams.length / numItemsPerRow) * 2;

  let teamIndex = 0;
  let rows = [];
  const dummyTeamData = { 
    playerId: "emptyy",
    rank: 5
  }

  for (let i = 1; i <= totalRows; i++) {
    const rowItems = [];

    if (i % 2 === 0) {
      // even row
      for (let j = 0; j < 2; j++) {
        if (teamIndex < teams.length) {
          rowItems.push(<Team team={teams[teamIndex]} path_name={path_name} type={type} />);
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(<div />);
        }
      }
    } else {
      // odd row
      const itemsInRow = Math.min(
        numItemsPerRow,
        teams.length - teamIndex + 1,
      );

      for (let j = 0; j < itemsInRow; j++) {
        if (j == 2) {
          rowItems.push(<Team team={dummyTeamData} path_name={path_name} type={type} />);
          // teamIndex++;
        }
        else if (teamIndex < teams.length) {
          rowItems.push(<Team team={teams[teamIndex]} path_name={path_name} type={type} />);
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(<div className={`w-${12 / numItemsPerRow}/12`} />);
        }
      }
    }

    rows.push(
      <div className="flex flex-row gap-9 flex-wrap justify-center">
        {rowItems}
      </div>,
    );
  }

  return <div className="wrapper-teams-list-hex mx-auto">{rows}</div>;
};

const Ranking = ({global_ranks, path_name}:any) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  console.log(formattedDate);
  const [updatedDate, setUpdatedData] = useState(formattedDate.toUpperCase())
  return (
    <>
      <div className="mt-4 flex flex-col items-center rounded-lg bg-bfs_soft-black/50 p-4">
        <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
          POWER RANKINGS SOLO - BATTLE ROYALE
        </h1>
        <p className="text-lg text-bfs_secondary">AS OF {updatedDate}</p>
      </div>
      <div className="card rounded-md p-3">
        <div>
          <div className="hidden sm:block">
            <TeamList teams={global_ranks} path_name={path_name} numItemsPerRow={5} type="player" />
          </div>

          <div className="block sm:hidden">
            <TeamList teams={global_ranks} path_name={path_name} numItemsPerRow={3} type="player" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Ranking
