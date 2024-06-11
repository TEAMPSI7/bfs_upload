import React from 'react'
import Image from "next/image";
const page = () => {
  return (
    <div className="w-4/5 mx-auto my-10 flex flex-col space-y-[1.5rem]">
      <div className="headerbutton space-x-[25px] ">
        <button className='rounded bg-primary hover:bg-bfs_primary-dark/30 px-[25px] py-[15px]'>Overview</button>
        <button className='rounded bg-primary hover:bg-bfs_primary-dark/30 px-[25px] py-[15px]'>5v5</button>
      </div>
      <div className=' text-2xl text-bold text-bfs_primary-dark py-1 border-b-2 border-bfs_primary-dark w-full'>About</div>
      <p>The Call of Duty: Mobile World Championship is the World Championship of the 2023 CODM Competitive Season organized by Activision and ESL Snapdragon Pro Series. Invited are best teams from each of the regional championships.</p>
      <div className=' w-full'>
        <h5 className='text-2xl text-bold text-bfs_primary-dark py-1 border-b-2 border-bfs_primary-dark w-full'>Format</h5>
        <div>
            <ul className="list-disc ml-5">
                <li className="mb-2">
                    Swiss Stage: December, 15<sup>th</sup>
                    <ul className="list-disc list-inside ml-5">
                    <li className="mb-2">
                        16 Team Swiss System Format
                        <ul className="list-disc list-inside ml-5">
                            <li className="mb-1">Teams are paired randomly in Round 1</li>
                            <li className="mb-1">Rounds 2 to 5 are seeded based on each teams win-loss record</li>
                            <li className="mb-1">All matches are Bo3.</li>
                            <li className="mb-1 p-1 rounded">Teams that reach 3 wins in Swiss advance to Playoffs</li>
                            <li className="mb-1 p-1 rounded">Teams that reach 3 losses in Swiss are eliminated.</li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li className="mb-2">
                    Playoffs: December, 16<sup>th</sup> - 17<sup>th</sup>
                    <ul className="list-disc list-inside ml-5">
                        <li className="mb-2">
                            Single Elimination
                            <ul className="list-disc list-inside ml-5">
                            <li className="mb-1">All matches are Bo5 except Bo7 Grand Final</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className=' text-2xl text-bold text-bfs_primary-dark py-1 border-b-2 border-bfs_primary-dark w-full'>Participants</div>
        <div>
            <Image 
                src={"/images/TOPUP/codM.jpg"}
                width={200}
                height={200}
                alt={"CODM"}
                loading="lazy"
            />
        </div>
      </div>
    </div>
  )
}

export default page
