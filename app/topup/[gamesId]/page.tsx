import Image from 'next/image';

// This is a mock function to fetch game data by ID. Replace it with your actual data fetching logic.
const fetchGameById = async (id: string) => {
  // Replace with actual API call or data fetching logic
  const games = [
    { id: '1', name: 'CODM', image: '/images/TOPUP/CODM_BIG.jpg' },
    // Add more games as needed
  ];
  return games.find(game => game.id === id);
};

// This is a mock function to fetch all games. Replace it with your actual data fetching logic.
const fetchAllGames = async () => {
  // Replace with actual API call or data fetching logic
  return [
    { id: '1', name: 'CODM', image: '/images/TOPUP/CODM_BIG.jpg' },
    // Add more games as needed
  ];
};

export async function generateStaticParams() {
  const games = await fetchAllGames();

  return games.map(game => ({
    gamesId: game.id.toString(),
  }));
}

const DynamicPage = async ({ params }: { params: { gamesId: string } }) => {
  const game = await fetchGameById(params.gamesId);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="flex gap-10 p-10">
      <div className="w-1/3 flex flex-col gap-4">
        <Image
          src={game.image}
          width={400}
          height={400}
          alt={game.name}
          loading="lazy"
        />
        <p>{game.name} - Shells Voucher</p>
        <p className="text-xs">
          REMINDER: You can convert your Garena Shells voucher to {game.name} CP here. Make sure to login using your in-game account.
        </p>
        <p className="text-xs">
          Buy Garena Shells for {game.name} CP in seconds! Just select the recharge amount, complete the payment and the Garena Shells voucher will immediately appear on the confirmation page and will be sent via email or SMS/Text Message (if purchased using Smart/Sun/TnT or Globe/TM).
        </p>
        <p className="text-xs">
          Pay with convenience using Codacash, Globe/TM, Smart/TNT, GCash, Maya, Coins.ph, GrabPay, Dito, Bank Transfers, OTC, and Card Payments. Theres no credit card, registration, or log-in required!
        </p>
      </div>

      <div className="relative w-2/3 flex flex-col gap-10">
        <div className="absolute left-[10%] -top-[1rem] w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
          <p className="bg-bfs_primary w-[2rem] h-[2rem] rounded-full flex justify-center items-center">1</p>
        </div>
        <div className="bg-white p-4 rounded-lg flex flex-col items-center">
          <p className="text-bfs_primary text-2xl font-bold mb-5">Enter User ID</p>
          <input
            type="text"
            placeholder="Enter your User ID"
            className="border rounded px-4 py-2 w-full mb-5"
          />
        </div>

        <div className="relative bg-white p-4 rounded-lg flex flex-col items-center">
          <div className="absolute left-[10%] -top-[1rem] w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
            <p className="bg-bfs_primary w-[2rem] h-[2rem] rounded-full flex justify-center items-center">2</p>
          </div>
          <p className="text-bfs_primary text-2xl font-bold mb-5">Select Voucher</p>
          <div className="grid grid-cols-2 gap-5 justify-center">
            <Image
              className="rounded-lg"
              src={"/images/TOPUP/CODM_16.jpg"}
              width={200}
              height={200}
              alt={"CODM"}
              loading="lazy"
            />
            <Image
              className="rounded-lg"
              src={"/images/TOPUP/CODM_8.jpg"}
              width={200}
              height={200}
              alt={"CODM"}
              loading="lazy"
            />
            <Image
              className="rounded-lg"
              src={"/images/TOPUP/CODM_5.jpg"}
              width={200}
              height={200}
              alt={"CODM"}
              loading="lazy"
            />
            <Image
              className="rounded-lg"
              src={"/images/TOPUP/CODM_3.jpg"}
              width={200}
              height={200}
              alt={"CODM"}
              loading="lazy"
            />
          </div>
          <button className="bg-bfs_primary text-white py-3 px-6 rounded-lg mt-5 hover:bg-bfs_secondary hover:text-black">
            Proceed to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
