import Image from "next/image";

export default function RectangleTeam({
  name,
  image,
  className,
}: {
  name?: string;
  image?: string;
  className?: string;
}) {
  return (
    <div className={`relative flex flex-col items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          className="relative h-[123px]"
          fill="transparent"
          stroke="#fff"
          strokeWidth="1"
          height="80px"
          points="50 1 95 25 95 75 50 99 5 75 5 25"
        />
      </svg>
      <div className="absolute top-3 flex flex-col items-center sm:top-4">
        <div className="h-full w-full ">
          <Image
            src={image || "/images/hex-err.png"}
            alt="test"
            width={1080}
            height={1080}
            loading="lazy"
            className="inset-0 h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
