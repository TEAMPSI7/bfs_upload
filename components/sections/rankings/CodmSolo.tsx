import { useContext, useEffect, useState } from "react";
import starlink from "@/public/images/starlink_1.jpg";
import * as url from "url";
import ErrImg from "@/public/images/hex-err.png";
import Image from "next/image";

const RactangleTeamFlag = ({
  name,
  flag = "",
  rank = "",
  className = "",
}: {
  name: string;
  flag: string;
  rank: string;
  className: string;
}) => {
  return (
    <div className="relative">
      {/* <Image
        className="w-[90px] object-cover sm:w-[190px]"
        src={`https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/bfs-ranks-6/solo/${name}.png`}
        width={200}
        height={200}
        alt=""
      /> */}
      {/*<div className="absolute top-0 right-0 mr-10 mt-3 rounded-full bg-primary w-[30px] h-[30px] flex items-center justify-center">*/}
      {/*  {rank}*/}
      {/*</div>*/}
    </div>
  );
};

const CodmSoloRanks = () => {
  const global_ranks = [
    { rank: 1, name: 2831 },
    { rank: 2, name: 4953 },
    { rank: 3, name: 3099 },
    {
      rank: 4,
      name: 7420,
    },
    { rank: 5, name: 3078 },
    { rank: 6, name: 7734 },
    { rank: 6, name: 8345 },
    {
      rank: 8,
      name: 8169,
    },
    { rank: 8, name: 6485 },
    { rank: 10, name: 7502 },
    { rank: 11, name: 7500 },
    {
      rank: 12,
      name: 7229,
    },
    { rank: 13, name: 4229 },
    { rank: 14, name: 2769 },
    { rank: 15, name: 6572 },
    {
      rank: 16,
      name: 7489,
    },
    { rank: 16, name: 7419 },
    { rank: 18, name: 4229 },
    { rank: 18, name: 6769 },
    {
      rank: 18,
      name: 4857,
    },
    { rank: 21, name: 6994 },
    { rank: 21, name: 6603 },
    { rank: 21, name: 7303 },
    {
      rank: 21,
      name: 7305,
    },
    { rank: 21, name: 8514 },
    { rank: 26, name: 2887 },
    { rank: 26, name: 2749 },
    {
      rank: 26,
      name: 2753,
    },
    { rank: 26, name: 3082 },
    { rank: 26, name: 8346 },
    { rank: 31, name: 6487 },
    {
      rank: 31,
      name: 7220,
    },
    { rank: 31, name: 8389 },
    { rank: 31, name: 6708 },
    { rank: 31, name: 7366 },
    {
      rank: 31,
      name: 7244,
    },
    { rank: 31, name: 8388 },
    { rank: 31, name: 8305 },
    { rank: 31, name: 8375 },
    {
      rank: 31,
      name: 8513,
    },
    { rank: 31, name: 7321 },
    { rank: 31, name: 8641 },
    { name: "" },
  ];

  const Team = ({ team, type }: { team: any; type: string }) => {
    // const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/codm/solo-ranks/${team.name}.png`;

    return (
      <div className="relative flex w-4/12 flex-col items-center sm:w-2/12 ">
        {team.name !== "" ? (
          <>
            <Image
              src="/images/hex-err.png"
              width={200}
              height={200}
              alt={team.name}
              className="h-full w-full"
              loading={"lazy"}
            />
            <div className="absolute left-0 top-1/3 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-bfs_secondary text-white">
              {team.rank}
            </div>
          </>
        ) : (
          <div className="block h-full w-full" />
        )}
      </div>
    );
  };

  const GenPyramid = ({ global_ranks }: any) => {
    const totalItems = 12;
    const totalRows = 5;
    const pyramid = [];
    let currentItem = 0;
    const itemsPerRow = [];
    let remainingItems = totalItems;
    for (let i = 1; i <= totalRows; i++) {
      const items = Math.min(i, remainingItems);
      itemsPerRow.push(items);
      remainingItems -= items;
    }

    // Generate the pyramid rows
    let index = 0;
    for (let row = 0; row < totalRows; row++) {
      const items = [];
      for (let col = 0; col < itemsPerRow[row]; col++) {
        if (currentItem < totalItems) {
          const rank = global_ranks[currentItem];
          items.push(
            <RactangleTeamFlag
              key={index}
              name={rank?.name}
              flag={rank?.country}
              rank={rank?.rank}
              className="w-full sm:w-[70%]"
            />,
          );
          currentItem++;
          index++;
        }
      }
      pyramid.push(
        <div
          key={row}
          className={`flex  ${row === 5 - 1 ? "justify-evenly sm:justify-between" : "justify-center"} ${row > 0 && "-mt-3 sm:-mt-10"}`}
        >
          {items}
        </div>,
      );
    }

    // Render the pyramid container
    return (
      <div className="pyramid-container m-auto max-w-[300px] sm:max-w-full">
        {pyramid}
      </div>
    );
  };

  const TeamList = ({ teams, numItemsPerRow, type }: any) => {
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
            rowItems.push(<Team team={teams[teamIndex]} type={type} />);
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
            rowItems.push(<Team team={teams[teamIndex]} type={type} />);
            teamIndex++;
          } else {
            // add empty data to fill row
            rowItems.push(<div className={`w-${12 / numItemsPerRow}/12`} />);
          }
        }
      }

      rows.push(
        <div className="flex flex-row flex-wrap justify-center">
          {rowItems}
        </div>,
      );
    }

    return <div className="wrapper-teams-list-hex mx-auto">{rows}</div>;
  };

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
            <TeamList teams={global_ranks} numItemsPerRow={5} type="player" />
          </div>

          <div className="block sm:hidden">
            <TeamList teams={global_ranks} numItemsPerRow={3} type="player" />
          </div>
        </div>
      </div>
    </>
  );
};
export default CodmSoloRanks;
