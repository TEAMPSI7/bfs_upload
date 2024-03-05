import Teams from "@/components/sections/Teams";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <>
      <div className="flex h-[400px] items-center justify-center bg-bfs_primary/20 md:h-[800px]">
        <h1>Video Container Here</h1>
      </div>

      <div className="global-container !py-5">
        <div className="mt-5">
          <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
            BattleForSupremacy.TV : CODM - Solo Battle Royale Season-2
          </h1>
          <p className="text-center text-lg leading-tight text-bfs_secondary md:text-xl">
            DONT HUNT WHAT YOU CAN{"'"}T KILL, EVERY ACTION HAS CONSEQUENCES -
            JOHN WICK
          </p>
        </div>

        <div className="box-border-gradient mt-4 flex justify-center gap-x-2.5 rounded-xl p-2.5">
          <div className="flex flex-1 flex-col items-center space-y-1 rounded-lg bg-[#201c1c] py-4 ">
            <p className="text-center">TOTAL PRIZE POOL</p>
            <h3 className="text-3xl font-bold text-bfs_secondary">$228</h3>
          </div>

          <div className="flex flex-1 flex-col items-center space-y-1 rounded-lg bg-[#201c1c] py-4">
            <p className="text-center">PLAYERS</p>
            <h3 className="text-3xl font-bold text-bfs_secondary">100</h3>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
            THE BIGGEST CODM LEAGUE
          </h1>

          <p className="text-center text-lg leading-tight text-bfs_secondary md:text-xl">
            100 PLAYERS | 106 COUNTRIES
          </p>
        </div>

        <div className="mt-20">
          <div className="rounded-xl bg-bfs_soft-black p-4 py-6 md:p-10">
            <Tabs
              defaultValue="players"
              className="flex flex-col justify-center"
            >
              <TabsList className="bg-transaparent">
                <TabsTrigger
                  value="players"
                  className="TabsTrigger !bg-transparent"
                >
                  <h4 className="text-xl font-bold md:text-2xl">PLAYERS</h4>
                </TabsTrigger>
                <TabsTrigger
                  value="countries"
                  className="TabsTrigger !bg-transparent"
                >
                  <h4 className="text-xl font-bold md:text-2xl">COUNTRIES</h4>
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="players"
                className="flex w-full justify-center"
              >
                <Teams
                  data={{
                    participants: [
                      { name: "Participant 1", team: "Team 1" },
                      { name: "Participant 2", team: "Team 1" },
                      { name: "Participant 3", team: "Team 2" },
                      { name: "Participant 4", team: "Team 2" },
                      { name: "Participant 5", team: "Team 3" },
                      { name: "Participant 6", team: "Team 3" },
                      { name: "Participant 7", team: "Team 4" },
                      { name: "Participant 8", team: "Team 4" },
                      { name: "Participant 9", team: "Team 5" },
                      { name: "Participant 10", team: "Team 5" },
                    ],
                    teams: [
                      { name: "Team 1" },
                      { name: "Team 2" },
                      { name: "Team 3" },
                      { name: "Team 4" },
                      { name: "Team 5" },
                      { name: "Team 1" },
                      { name: "Team 2" },
                      { name: "Team 3" },
                      { name: "Team 4" },
                      { name: "Team 5" },
                      { name: "Team 1" },
                      { name: "Team 2" },
                      { name: "Team 3" },
                      { name: "Team 4" },
                      { name: "Team 5" },
                      { name: "Team 1" },
                      { name: "Team 2" },
                      { name: "Team 3" },
                      { name: "Team 4" },
                      { name: "Team 5" },
                    ],
                  }}
                />
              </TabsContent>
              <TabsContent value="countries">
                <Teams
                  data={{
                    participants: [
                      { name: "Participant 1", team: "Team 1" },
                      { name: "Participant 2", team: "Team 1" },
                      { name: "Participant 3", team: "Team 2" },
                      { name: "Participant 4", team: "Team 2" },
                      { name: "Participant 5", team: "Team 3" },
                      { name: "Participant 6", team: "Team 3" },
                      { name: "Participant 7", team: "Team 4" },
                      { name: "Participant 8", team: "Team 4" },
                      { name: "Participant 9", team: "Team 5" },
                      { name: "Participant 10", team: "Team 5" },
                    ],
                    teams: [
                      { name: "Team 1" },
                      { name: "Team 2" },
                      { name: "Team 3" },
                      { name: "Team 4" },
                    ],
                  }}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
