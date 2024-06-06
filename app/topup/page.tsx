"use client"
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleClick = (gamesId: number) => {
    router.push(`/topup/${gamesId}`);
  };

  return (
    <div className="w-4/5 mx-auto my-10 flex items-center flex-col">
      <h1 className="text-2rem font-bold">DIGITAL CODES</h1>
      <div className="flex gap-4 my-5 justify-center">
        {[1, 2, 3].map((num) => {
          return (
            <div key={num} onClick={() => handleClick(num)} className="cursor-pointer">
              <Image 
                src={"/images/TOPUP/codM.jpg"}
                width={200}
                height={200}
                alt={"CODM"}
                loading="lazy"
              />
              <p>COD: Mobile</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
