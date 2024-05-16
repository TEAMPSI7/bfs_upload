import SponsorImage from "./SponsorsImage";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function SponsorMarquee() {
  const sponsorsList = () => {
    return SponsorImage.map((sponsorImage) => {
      return (
      <div key={String(sponsorImage.src)} className="mx-2">
        <Image
          src={sponsorImage}
          width={1080}
          height={1080}
          alt="Sponsor"
          className="h-10 w-10 object-contain md:h-8 md:w-8"
          onClick={() => SponsorImage.map( s => {
            console.log("S " + s)
          })}
        />
      </div>
    )});
  };

  return (
    <>
      <div className="h-14"></div>
      <div className="fixed -bottom-1 flex h-16 w-full items-center md:h-16">
        <Marquee
          className="footer-sponsor flex items-center py-3"
          speed={20}
          direction="right"
          autoFill
        >
          <div onClick={() => SponsorImage.map( s => {
            console.log("S " + s)
          })} className="flex w-full items-center">{sponsorsList()}</div>
        </Marquee>
      </div>
    </>
  );
}
