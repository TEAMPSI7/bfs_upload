import ErrImg from "@/public/images/hex-err.png";
import Image from "next/image";

const gms = [
  {
    name: "Caster 1",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Caster 2",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Caster 3",
    image: "https://via.placeholder.com/150",
  },
];

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
          rowItems.push(<Team team={teams[teamIndex]} type={type} />);
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(<div />);
        }
      }
    } else {
      // odd row
      const itemsInRow = Math.min(numItemsPerRow, teams.length - teamIndex + 1);
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
      <div className="flex flex-row flex-wrap justify-center">{rowItems}</div>,
    );
  }

  return <div className="wrapper-teams-list-hex mx-auto">{rows}</div>;
};
const Team = ({ team, type }: any) => {
  //   const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/codm/solo-ranks/${team.name}.png`;

  return (
    <div className="relative flex w-4/12 flex-col items-center sm:w-2/12 ">
      {team.name !== "" ? (
        <>
          <Image
            src={"/images/hex-err.png"}
            height={1080}
            width={1080}
            alt={team.name}
            className="h-full w-full"
            loading={"lazy"}
          />
        </>
      ) : (
        <div className="block h-full w-full" />
      )}
    </div>
  );
};
export default function Page() {
  return (
    <>
      <div className="py-4">
        <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
          Game Master
        </h1>
        <div className="mx-auto flex min-h-[500px] max-w-[1020px] flex-col items-center justify-center">
          <TeamList teams={gms} numItemsPerRow={4} type="shoutcasters" />
        </div>
      </div>
    </>
  );
}
