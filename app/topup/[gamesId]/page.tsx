import Image from "next/image";

const DynamicPage = ({params} : any) => {
  return (
    <div className="flex gap-10 p-10">
      <div className="w-1/2 flex flex-col gap-4">
        <Image 
            src={"/images/TOPUP/CODM_BIG.jpg"}
            width={400}
            height={400}
            alt={"CODM"}
            loading="lazy"
          />
          <p>Call of Duty Mobile - Shells Voucher</p>
          <p className="text-xs">REMINDER: You can convert your Garena Shells voucher to Call of Duty Mobile CP here. Make sure to login using your in-game account.</p>
          <p className="text-xs">Buy Garena Shells for Call of Duty Mobile CP in seconds! Just select the recharge amount, complete the payment and the Garena Shells voucher will immediately appear on the confirmation page and will be sent via email or SMS/Text Message (if purchased using Smart/Sun/TnT or Globe/TM).</p>
          <p className="text-xs">Pay with convenience using Codacash, Globe/TM, Smart/TNT, GCash, Maya, Coins.ph, GrabPay, Dito, Bank Transfers, OTC,and Card Payments. Theres no credit card, registration, or log-in required!</p>
      </div>

      <div>
        <div className="bg-white p-4 rounded-lg flex align-center flex flex-col items-center">
            <p className="text-black text-2xl font-bold mb-5">Select Voucher</p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Image 
                className="rounded-lg"
                  src={"/images/TOPUP/CODM_16.jpg"}
                  width={400}
                  height={400}
                  alt={"CODM"}
                  loading="lazy"
                />
                <Image 
                  className="rounded-lg"
                  src={"/images/TOPUP/CODM_8.jpg"}
                  width={400}
                  height={400}
                  alt={"CODM"}
                  loading="lazy"
                />
                <Image 
                  className="rounded-lg"
                  src={"/images/TOPUP/CODM_5.jpg"}
                  width={400}
                  height={400}
                  alt={"CODM"}
                  loading="lazy"
                />
                <Image 
                  className="rounded-lg"
                  src={"/images/TOPUP/CODM_3.jpg"}
                  width={400}
                  height={400}
                  alt={"CODM"}
                  loading="lazy"
                />
            </div>
        </div>
        <div className="bg-white p-4 rounded-lg flex flex-col items-center my-10">
          <p className="text-black text-2xl font-bold mb-5">Select Payment</p>
          <div className="flex flex-col gap-5 justify-center w-full">
            <div className="text-black w-4/5 border border-black rounded py-5 text-2xl mx-auto text-center">GCash</div>
            <div className="text-black w-4/5 border border-black rounded py-5 text-2xl mx-auto text-center">VISA</div>
            <div className="text-black w-4/5 border border-black rounded py-5 text-2xl mx-auto text-center">Coins PH</div>
          </div>
          <button className="px-6 py-3 rounded border border-bfs_accent mt-5 bg-bfs_secondary/80 text-white hover:bg-bfs_secondary hover:text-white" type="button">Buy now!</button>
        </div>
      </div>
    </div>
  );
}

export default DynamicPage;
