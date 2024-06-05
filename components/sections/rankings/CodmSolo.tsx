"use client"
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from 'axios';

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
  const [global_ranks, setGlobalRanks] = useState([]);
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  console.log(formattedDate);
  const [updatedDate, setUpdatedData] = useState(formattedDate.toUpperCase())
  const Team = ({ team, type }: { team: any; type: string }) => {
    return (
      <div className="relative flex w-4/12 flex-col items-center sm:w-2/12">
        {team.name !== "" ? (
          <>
            <Image
              src={`/images/CODM/solo_hex/${team.playerId}.png`}
              width={150}
              height={150}
              alt={team.name}
              className="h-full w-full"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                target.src = '/images/CODM/solo_hex/hex_err.png';
              }}
            />
            <div className="absolute -left-4 top-1/3 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-bfs_secondary text-white">
              {team.rank}
            </div>
          </>
        ) : (
          <div className="block h-full w-full" />
        )}
      </div>
    );
  };

  const TeamList = ({ teams, numItemsPerRow, type }: any) => {
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
            rowItems.push(
              <Team key={teams[teamIndex].playerId} team={teams[teamIndex]} type={type} />
            );
            teamIndex++;
          } else {
            // add empty data to fill row
            rowItems.push(<div key={`empty-${teamIndex}`} />);
          }
        }
      } else {
        // odd row
        const itemsInRow = Math.min(
          numItemsPerRow,
          teams.length - teamIndex + 1
        );

        for (let j = 0; j < itemsInRow; j++) {
          if (teamIndex < teams.length) {
            rowItems.push(
              <Team key={teams[teamIndex].playerId} team={teams[teamIndex]} type={type} />
            );
            teamIndex++;
          } else {
            // add empty data to fill row
            rowItems.push(
              <div key={`empty-${teamIndex}`} className={`w-${12 / numItemsPerRow}/12`} />
            );
          }
        }
      }

      rows.push(
        <div key={`row-${i}`} className="flex flex-row gap-9 flex-wrap justify-center">
          {rowItems}
        </div>
      );
    }

    return <div className="wrapper-teams-list-hex mx-auto">{rows}</div>;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbxR9BgfPnz3MT_9OG9gP1RkvHp1XHDUzhUQc0tQbwGXnTA2cYs9tpginIUyofHUV31R/exec?url=/solo'
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
