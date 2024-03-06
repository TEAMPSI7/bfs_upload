import Teams from "@/components/sections/Teams";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <>
      <section className="m-2">
        <div className="flex h-[400px] items-center justify-center bg-bfs_primary/5 md:h-[800px]">
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

          <div className="mt-20">
            <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
              FORMAT
            </h1>

            <div className="mt-5 rounded-xl bg-[#201c1c] p-7">
              <div className="divide-bfs_primary/30 flex justify-center divide-x-2 ">
                <div className="flex-1">
                  <h2 className="text-center text-2xl font-bold text-bfs_secondary">
                    GENERAL RULES
                  </h2>
                  <p className="ml-3 mt-3">
                    ➡️ 3 Rounds - TPP <br /> ➡️ 1 Kill = 1 Point <br /> ➡️ No
                    Placing Points
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="text-center text-2xl font-bold text-bfs_secondary">
                    MATCH RULES
                  </h2>
                  <p className="ml-3 mt-3 leading-relaxed">
                    🟢 All weapons, skins, and vehicles are allowed to use{" "}
                    <br /> 🟢 Class will be based from spin the wheel <br /> 🟢
                    Most Wanted Player will be based from spin the wheel <br />{" "}
                    🟢 Failure to join the first game can join on the next round{" "}
                    <br />
                    🟢 Trashtalk/Emotes are allowed
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="text-center text-2xl font-bold text-bfs_secondary">
                    PRIZE RULES
                  </h2>
                  <p className="ml-3 mt-3">
                    🟢 Top 1 $48 <br />
                    🟢 Top 2 $28 <br />
                    🟢 Top 3 $24 <br />
                    🟢 Top 4 $18 <br />
                    🟢 Top 5 $16 <br />
                    🟢 Top 6 $14 <br />
                    🟢 Top 7 $12
                    <br /> 🟢 Top 8 $8 <br />
                    🟢 Most Wanted Killer: $8 <br />
                    Per round <br />
                    🟢 $88 = For the Most Wanted Player who didn{"'"}t die and
                    became the LAST MAN STANDING each round
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm italic underline">
                  ➡️Failure to follow the rules will be automatically
                  disqualified <br />
                  ➡️If there{"'"}s any problem during the event,
                  BattleForSupremacy CODM Department will have the right to
                  decide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
