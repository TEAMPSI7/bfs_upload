import CodmSoloRanks from "../../components/sections/rankings/CodmSolo";

export default function Page() {
  return (
    <div className="rankings-page-bg relative -mt-1">
      <div className="bg-black/50 py-10">
        <div className="global-container">
          <h1 className="text-center text-2xl font-bold">
            CALL OF DUTY.MOBILE
          </h1>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center justify-center gap-4 rounded-md bg-bfs_soft-black/50 px-6 py-3 md:flex-row">
            <p className="text-xl font-bold text-white underline underline-offset-4">
              SOLO
            </p>
            <p className="text-xl font-bold text-bfs_secondary">DUO</p>
            <p className="text-xl font-bold text-bfs_secondary">TEAM</p>
            <p className="text-xl font-bold text-bfs_secondary">
              5V5 MULTIPLAYER
            </p>
          </div>

          <CodmSoloRanks />
        </div>
      </div>
    </div>
  );
}
