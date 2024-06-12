import Image from "next/image";

const DynamicPage = ({ params }: any) => {
  return (
    <div className="flex gap-10 p-10">
      <div className="w-1/3 flex flex-col gap-4">
        <Image
          src={"/images/TOPUP/CODM_BIG.jpg"}
          width={400}
          height={400}
          alt={"CODM"}
          loading="lazy"
        />
        <p>Call of Duty Mobile - Shells Voucher</p>
        <p className="text-xs">
          REMINDER: You can convert your Garena Shells voucher to Call of Duty
          Mobile CP here. Make sure to login using your in-game account.
        </p>
        <p className="text-xs">
          Buy Garena Shells for Call of Duty Mobile CP in seconds! Just select
          the recharge amount, complete the payment and the Garena Shells
          voucher will immediately appear on the confirmation page and will be
          sent via email or SMS/Text Message (if purchased using Smart/Sun/TnT
          or Globe/TM).
        </p>
        <p className="text-xs">
          Pay with convenience using Codacash, Globe/TM, Smart/TNT, GCash, Maya,
          Coins.ph, GrabPay, Dito, Bank Transfers, OTC, and Card Payments.
          Theres no credit card, registration, or log-in required!
        </p>
      </div>

      <div className="relative w-2/3 flex flex-col gap-10">
      <div className="absolute left-[10%] -top-[1rem] w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
        <p className="k bg-bfs_primary w-[2rem] h-[2rem] rounded-full flex justify-center items-center">1</p>
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

          {/* <div className="bg-white p-4 rounded-lg flex flex-col items-center my-10">
            <p className="text-black text-2xl font-bold mb-5">Select Payment</p>
            <div className="flex flex-col gap-5 justify-center w-full">
              <div className="text-black w-4/5 border border-black rounded py-5 text-2xl mx-auto text-center">
                GCash
              </div>
              <div className="text-black w-4/5 border border-black rounded py-5 text-2xl mx-auto text-center">
                VISA
              </div>
              <div className="text-black w-4/5 border border-black rounded py-5 text-2xl mx-auto text-center">
                Coins PH
              </div>
            </div>
            <button
              className="px-6 py-3 rounded border border-bfs_accent mt-5 bg-bfs_secondary/80 text-white hover:bg-bfs_secondary hover:text-white"
              type="button"
            >
              Buy now!
            </button>
          </div> */}
        </div>
    </div>
  );
};

export default DynamicPage;
