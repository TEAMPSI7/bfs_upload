import Link from "next/link";

export default function ExploreMore() {
  return (
    <div>
      <h1 className="text-title-gradient text-center text-xl font-bold md:text-3xl">
        EXPLORE MORE
      </h1>
      <p className="text-center text-lg leading-tight text-bfs_secondary md:text-xl">
        GET FURTHER INFORMATION
      </p>

      <div className="mt-5 flex flex-col justify-center gap-3 md:flex-row">
        <div className="flex-1 rounded-md bg-bfs_soft-black p-5 text-center">
          <h1 className="text-3xl font-bold text-bfs_secondary">
            OUR CHAMPION
          </h1>
          <p className="mt-4">
            Get a full list of all our legendary history of champions, starting
            with the first season.
          </p>

          <div className="mt-5">
            <Link
              href="#"
              className="rounded-lg border px-6 py-2 text-xl font-bold hover:bg-white hover:text-black"
            >
              OUR HISTORY
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded-md bg-bfs_soft-black p-5 text-center">
          <h1 className="text-3xl font-bold text-bfs_secondary">
            OUR CHAMPION
          </h1>
          <p className="mt-4">Our latest News</p>
          <p className="text-sm text-gray-500">January 6, 2023</p>

          <div className="mt-5">
            <Link
              href="#"
              className="rounded-lg border px-6 py-2 text-xl font-bold"
            >
              NEWS OVERVIEW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
