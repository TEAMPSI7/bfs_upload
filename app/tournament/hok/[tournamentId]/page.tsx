"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import axios from 'axios';
import Image from 'next/image';

interface Participant {
  teamName?: string;  // teamName is optional
  playerId: string;
  name: string;
  country: string;
  // other properties of Participant
}



const countryToEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const Page = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbyqDu6Q7OM7qwl5OqXWwk1HnutSlAXMMtPW-gV3WHj1S0EajsUqpRzuNmy7OL4XEv-g/exec'
        );
        console.log("RESPONSE ", response.data);
        setParticipants(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const teams = participants.reduce((acc, participant) => {
    const teamName = participant.teamName || 'Unknown Team';
    if (!acc[teamName]) {
      acc[teamName] = [];
    }
    acc[teamName].push(participant);
    return acc;
  }, {} as { [key: string]: Participant[] });

  return (
    <div className="w-4/5 mx-auto my-10 flex flex-col space-y-[1.5rem] overflow-hidden">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.keys(teams).map((teamName) => (
          <div key={teamName} className="relative border h-[300px] rounded shadow overflow-hidden group">
            <div className="absolute inset-0">
              <Image 
                src={`/images/Honor of Kings/${teamName}.jpg`}
                layout="fill"
                objectFit="cover"
                alt={teamName}
                loading="lazy"
                className="opacity-70"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end text-center z-10">
              <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:block z-20"></div>
              <div className="relative z-30">
                <div className="hidden group-hover:block bg-white bg-opacity-50 p-4">
                  {teams[teamName].map((player, index) => (
                    <div key={player.playerId + index} className="text-black flex space-x-2 hover:border-b hover:border-black">
                      <p>{countryToEmoji(player.country)}</p>
                      <p>{player.playerId}</p>
                      <p>{player.name}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-black bg-opacity-50 p-4">
                  {teamName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;
