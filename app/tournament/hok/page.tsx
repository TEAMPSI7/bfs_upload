"use client"
import React from 'react'
import Link from "next/link";
const page = () => {

  return (
    <div className="w-4/5 mx-auto my-10 flex flex-col space-y-[1rem]">
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
        <Link href={`/tournament/hok/${1}`} className='flex bg-bfs_soft-black hover:bg-bfs_primary px-4 py-2 rounded'>
            <p className='flex-1'>5V5 SEASON 1</p>
            <p className='flex-1'>JUNE 20, 2024 - JULY 13, 2024</p>
            <div className='flex-1 flex'>
                <p className='flex-1'>$1000</p>
                <p className='flex-1'>-</p>
            </div>
        </Link>
        <div className='flex bg-bfs_soft-black hover:bg-bfs_primary px-4 py-2 rounded'>
            <p className='flex-1'>1V1 SEASON 1</p>
            <p className='flex-1'>MAY 20, 2024 - MAY 29, 2024</p>
            <div className='flex-1 flex'>
                <p className='flex-1'>$88</p>
                <p className='flex-1'>SISKA</p>
            </div>
        </div>
        
    </div>
  )
}

export default page
