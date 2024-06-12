"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";


const boxes = [
  { id: 1, content: "ABCF", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
  { id: 2, content: "EFG3", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
  { id: 3, content: "ASD23", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
  { id: 4, content: "GDSF23", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
  { id: 5, content: "ECHO23", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
  { id: 6, content: "FOX49", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
  { id: 7, content: "EZA12", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
  { id: 8, content: "QWE23", teams: ["ASD", "ASD", "ASD", "ASD", "ASD"] },
];

const page = () => {

  return (
    <div className="w-4/5 mx-auto my-10 flex flex-col space-y-[1.5rem]">
        <h1 className='text-3xl self-center font-bold'>Honor of Kings</h1>
      <div className="headerbutton space-x-[25px] ">
        <button className='rounded bg-primary hover:bg-bfs_primary-dark/30 px-[25px] py-[15px]'>Overview</button>
        <button className='rounded bg-primary hover:bg-bfs_primary-dark/30 px-[25px] py-[15px]'>5v5</button>
      </div>
      <div>
        <div className='flex'>
            <p className='flex-1'>Tournament</p>
            <p className='flex-1'>Date</p>
            <div className='flex-1 flex'>
                <p className='flex-1'>PrizePool</p>
                <p className='flex-1'>Winner</p>
            </div>
        </div>
        </div>
        <Link href={`/tournament/hok/${1}`} className='flex'>
            <p className='flex-1'>5V5 SEASON 1</p>
            <p className='flex-1'>JUNE 20, 2024 - JULY 13, 2024</p>
            <div className='flex-1 flex'>
                <p className='flex-1'>$1000</p>
                <p className='flex-1'>-</p>
            </div>
        </Link>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {boxes.map((box) => (
            <div key={box.id} className="relative border h-[200px] rounded shadow overflow-hidden group">
              <div className="absolute inset-0">
                <Image 
                  src={"/images/TOPUP/codM.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt={"CODM"}
                  loading="lazy"
                  className="opacity-70"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end text-center z-10">
                <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:block z-20"></div>
                <div className="relative z-30">
                  <div className="hidden group-hover:block bg-white bg-opacity-50 p-4">
                    {box.teams.map((team, index) => (
                      <div key={team + index} className="text-black hover:border-b hover:border-black">
                        {team}
                      </div>
                    ))}
                  </div>
                  <div className="bg-black bg-opacity-50 p-4">
                    {box.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default page
