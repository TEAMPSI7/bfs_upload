import MainLayout from "@/components/Layout/MainLayout";
import Marquee from "react-fast-marquee";
import data from "@/data/solo.json";

import up7 from "@/public/images/sponsors/7up.jpg";
import aquafina from "@/public/images/sponsors/aquafina.jpg";
import cheetos from "@/public/images/sponsors/cheetos.jpg";
import fritos from "@/public/images/sponsors/fritos.jpg";
import gatorade from "@/public/images/sponsors/gatorade.jpg";
import lays from "@/public/images/sponsors/lays.jpg";
import pepsiMax from "@/public/images/sponsors/pepsi-max.jpg";
import lipton from "@/public/images/sponsors/lipton.jpg";
import miranda from "@/public/images/sponsors/miranda.jpg";
import pepsi from "@/public/images/sponsors/pepsi.jpg";
import quaker from "@/public/images/sponsors/quaker.jpg";
import rr from "@/public/images/sponsors/rr.jpg";
import ruffles from "@/public/images/sponsors/ruffles.jpg";
import sb from "@/public/images/sponsors/sb.jpg";
import sodaStream from "@/public/images/sponsors/sodastream.jpg";
import tostitos from "@/public/images/sponsors/tostitos.jpg";
import Image from "next/image";

export default function Home() {
  const sponsors = [
    up7,
    aquafina,
    cheetos,
    fritos,
    gatorade,
    lays,
    pepsiMax,
    lipton,
    miranda,
    pepsi,
    quaker,
    rr,
    ruffles,
    sb,
    sodaStream,
    tostitos,
  ];

  const getRandomSponsors = () => {
    const numSponsors = 1;

    const selected = [];
    for (let i = 0; i < numSponsors; i++) {
      const randomIndex = Math.floor(Math.random() * sponsors.length);
      selected.push(sponsors[randomIndex]);
    }
    return selected;
  };

  return (
    <MainLayout>
      <Marquee className="matches-nav fixed top-0 py-4" speed={20}>
        {data.series[0].final_stage.map((item) => (
          <div key={item.detail} className="flex items-center">
            <p className="mx-2">
              {item.name} {item.country}
            </p>

            {getRandomSponsors().map((sponsorImage) => (
              <div key={String(sponsorImage)} className="mx-2">
                <Image
                  src={sponsorImage}
                  width={30}
                  height={30}
                  alt="Sponsor"
                />
              </div>
            ))}
          </div>
        ))}
      </Marquee>

      <h2 className="text-5xl">asfakfjslkfjakslfjaslfj</h2>
    </MainLayout>
  );
}
