import React from 'react'
import { useContext, useEffect, useState } from "react";
import starlink from "@/public/images/starlink_1.jpg";
import * as url from "url";
import ErrImg from "@/public/images/hex-err.png";
import Image from "next/image";

const Team = ({ team, type, path_name }: { team: any; type: string, path_name: string }) => {
  // const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/codm/solo-ranks/${team.name}.png`;

  return (
    <div className="relative flex w-4/12 flex-col items-center sm:w-2/12 ">
      {team.name !== "" ? (
        <div className='w-[210px] h-[210px]'>
          <Image
            src={`/images/CODM/${path_name}/${team.logo}.png`}
            width={200}
            height={200}
            alt={team.logo}
            className="h-full w-full"
            loading={"lazy"}
          />

          <div className="absolute -left-4 top-1/3 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-bfs_secondary text-white">
            {team.rank}
          </div>
        </div>
      ) : (
        <div className="block h-full w-full" />
      )}
    </div>
  );
};

const TeamList = ({ teams, numItemsPerRow, type, path_name }: any) => {
  // const totalRows = Math.ceil(teams.length / numItemsPerRow);
  const totalRows =
    Math.ceil(teams.length / numItemsPerRow) +
    Math.ceil((teams.length % numItemsPerRow) / 2);

  let teamIndex = 0;
  let rows = [];

  for (let i = 1; i <= totalRows; i++) {
    const rowItems = [];

    if (i % 2 === 0) {
      // even row
      for (let j = 0; j < numItemsPerRow - 1; j++) {
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
        if (teamIndex < teams.length) {
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
  return (
    <>
      <div className="mt-4 flex flex-col items-center rounded-lg bg-bfs_soft-black/50 p-4">
        <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
          POWER RANKINGS SOLO - BATTLE ROYALE
        </h1>
        <p className="text-lg text-bfs_secondary">AS OF MAY 12,2023</p>
      </div>
      <div className="card rounded-md p-3">
        <div>
          <div className="hidden sm:block">
            <TeamList teams={global_ranks} path_name={path_name} numItemsPerRow={5} type="player" />
          </div>

          <div className="block sm:hidden">
            <TeamList teams={global_ranks} numItemsPerRow={3} type="player" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Ranking
