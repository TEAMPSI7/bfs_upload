"use client"
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [games, setGames] = useState([
        { title: "Call of Duty Mobile", icon: "", isDropDown: true, url: "/tournament/codm", gap: "false" },
        { title: "Honor of Kings", icon: "", isDropDown: true, url: "#", gap: "false" },
        { title: "Fortnite", icon: "", isDropDown: true, url: "#", gap: "false" },
        { title: "GTA:V", icon: "", isDropDown: true, url: "#", gap: "false" }
    ])

    return (
        <div className="w-4/5 mx-auto my-10 flex items-center flex-col">
          <p className='text-2xl font-bold mb-4'>Welcome to Tournaments!</p>
          <div className="self-start mb-4 flex flex-col">
            {games.map(game => (
              <Link href={game.url} className="hover:text-bfs_primary" key={game.title}>- {game.title}</Link>
            ))}
          </div>
          <div className='space-y-4 flex flex-col'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      )
  }
  
  export default Page;
  