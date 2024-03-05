import SponsorImage from "./SponsorsImage";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function SponsorMarquee() {
  const sponsorsList = () => {
    return SponsorImage.map((sponsorImage) => (
      <div key={String(sponsorImage)} className="mx-2">
        <Image
          src={sponsorImage}
          width={50}
          height={50}
          alt="Sponsor"
          className="h-8 w-8 object-contain"
        />
      </div>
    ));
  };

  return (
    <>
      <div className="h-14"></div>
      <div className="fixed -bottom-1 flex h-16 w-full items-center">
        <Marquee
          className="footer-sponsor flex items-center py-3"
          speed={20}
          direction="right"
          autoFill
        >
          <div className="flex w-full items-center">{sponsorsList()}</div>
        </Marquee>
      </div>
    </>
  );
}
