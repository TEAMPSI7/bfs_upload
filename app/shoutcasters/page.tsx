import Image from "next/image";

export default function Page() {
  return (
    <div className="py-5">
      <div className="global-container">
        <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
          Shoutcasters
        </h1>
        <Image
          src="/images/casters-de.svg"
          width={1080}
          height={1080}
          className="h-auto w-full object-contain"
          alt="Shoutcasters"
        />
      </div>
    </div>
  );
}
