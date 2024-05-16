import ErrImg from "@/public/images/hex-err.png";
import bordered from "@/public/images/bordered-desktop.png";
import borderedMobile from "@/public/images/bordered-mobile.png";
import { Tab } from "@headlessui/react";
import Image from "next/image";

const Team = ({ team, type }: { team: any; type: string }) => {
  let img = "";
  return (
    <div className="flex w-4/12 items-center sm:w-2/12 ">
      <Image
        src={"/images/hex-err.png"}
        width={1080}
        height={1080}
        alt={team.code}
        className="h-auto w-40"
        loading={"lazy"}
      />
    </div>
  );
};

const TeamList = ({
  teams,
  numItemsPerRow,
  type,
}: {
  teams: any;
  numItemsPerRow: number;
  type: string;
}) => {
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
            <Team
              key={teams[teamIndex].id}
              team={teams[teamIndex]}
              type={type}
            />,
          );
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(<div key={j} />);
        }
      }
    } else {
      // odd row
      const itemsInRow = Math.min(numItemsPerRow, teams.length - teamIndex + 1);
      for (let j = 0; j < itemsInRow; j++) {
        if (teamIndex < teams.length) {
          rowItems.push(
            <Team
              key={teams[teamIndex].id}
              team={teams[teamIndex]}
              type={type}
            />,
          );
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(
            <div key={j} className={`w-${12 / numItemsPerRow}/12`} />,
          );
        }
      }
    }

    rows.push(
      <div
        key={i}
        className="flex flex-row flex-wrap justify-center -space-x-2 md:-space-x-3 lg:-space-x-5"
      >
        {rowItems}
      </div>,
    );
  }

  return (
    <div className="-space-x- mx-auto flex flex-col md:-space-x-3 lg:-space-x-5">
      {rows}
    </div>
  );
};

const Teams = ({ data }: { data: any }) => {
  const { participants, teams } = data;
  return (
    <>
      <div className="relative mb-6 flex flex-col border-white px-1 py-3 sm:px-6">
        <div className="hidden sm:block">
          <TeamList teams={teams} numItemsPerRow={6} type="player" />
        </div>

        <div className="block sm:hidden">
          <TeamList teams={teams} numItemsPerRow={3} type="player" />
        </div>
      </div>
    </>
  );
};

export default Teams;
