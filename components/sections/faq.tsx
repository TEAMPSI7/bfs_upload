import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="text-center">
      <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
        FAQ
      </h1>

      <p className="text-center text-lg leading-tight text-bfs_secondary md:text-xl">
        BATTLEFORSUPREMACY PRO LEAGUE EXPLAINED
      </p>

      <div className="flex justify-center">
        <div className="mt-5 w-[600px]">
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
                  Currently, 15 teams jointly govern and participate in revenue
                  for BattleForSupremacy Pro League. They also have long-term
                  participation slots which protect them from getting relegated.
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
                  ecosystem, where every new talent has a direct path to play on
                  the world{"'"}s biggest stages.
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
  );
}
