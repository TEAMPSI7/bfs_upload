import Image from 'next/image';
import axios from 'axios';

interface Participant {
  teamName?: string;
  playerId: string;
  name: string;
  country: string;
}

const fetchTournamentById = async (id: string) => {
  // Replace this with actual data fetching logic
  const response = await axios.get(`https://api.example.com/tournament/${id}`);
  return response.data;
};

const fetchAllTournamentIds = async () => {
  // Replace this with actual data fetching logic
  const response = await axios.get('https://api.example.com/tournaments');
  return response.data.map((tournament: { id: string }) => ({ id: tournament.id }));
};

export async function generateStaticParams() {
  const tournaments = await fetchAllTournamentIds();

  return tournaments.map((tournament: any) => ({
    tournamentId: tournament.id,
  }));
}

const TournamentPage = async ({ params }: { params: { tournamentId: string } }) => {
  const { tournamentId } = params;
  const tournament = await fetchTournamentById(tournamentId);

  if (!tournament) {
    return <div>Tournament not found</div>;
  }

  const participants = tournament.participants as Participant[];

  const teams = participants.reduce((acc, participant) => {
    const teamName = participant.teamName || 'Unknown Team';
    if (!acc[teamName]) {
      acc[teamName] = [];
    }
    acc[teamName].push(participant);
    return acc;
  }, {} as { [key: string]: Participant[] });

  return (
    <div className='relative h-full min-h-screen bg-cover pb-[2rem] bg-center bg-white/80'>
      <div className="w-[90%] mx-auto  flex flex-col space-y-[1.5rem] overflow-hidden">
        <div className='relative flex flex-col items-center mt-8 justify-center'>
          <h1 className='text-7xl font-bold text-white' style={{ WebkitTextStroke: '1px black' }}>Honor of Kings</h1>
          <h2 className='text-xl mt-2 font-bold text-white' style={{ WebkitTextStroke: '1px black' }}>5V5 ONLINE TOURNAMENT SEASON 1</h2>
          <div className='w-full mt-[1.5rem]' style={{ 
            backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.8), rgba(255,255,255,0.8), rgba(0,0,0,0.8))',
            color: '#FFFFFF',
          }}>
            <p className='text-white text-3xl text-center z-2 font-bold ' style={{ 
              color: '#FFFFFF',
              WebkitTextStroke: '1px black',
            }}>
              PARTICIPANTS
            </p>
          </div>
        </div>
        <div className="relative p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {Object.keys(teams).map((teamName) => (
            <div key={teamName} className='bg-white '>
              <div className="relative h-[225px] rounded shadow group ">  
                <div className="absolute inset-0"  
                  style={{
                    backgroundImage: `url('/images/Honor of Kings/background.png')`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="absolute inset-0" style={{
                    backgroundImage: ` url('/images/Honor of Kings/border.png')`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}>
                    {teamName !== "VOIN ALLIANCE" ? <Image 
                      src={`/images/HOK TEAMS/${teamName}.png`}
                      height={140}
                      width={140}
                      alt={teamName}
                      loading="lazy"
                      className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    /> : 
                    <Image 
                      src={`/images/HOK TEAMS/${teamName}.png`}
                      height={90}
                      width={90}
                      alt={teamName}
                      loading="lazy"
                      className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />}
                  </div>
                </div>
                <div className="flex flex-col justify-start text-center z-10">
                  <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:block z-20"></div>
                  <div className="relative z-30 flex-grow">
                    <div className="hidden group-hover:flex justify-between space-x-2 bg-black bg-opacity-50 p-4">
                      <p className='text-[10px] text-white'>Country</p>
                      <p className='text-[10px] text-white'>Player #</p>
                      <p className='text-[10px] text-white'>Player Name</p>
                    </div>
                    <div className="hidden group-hover:block justify-between bg-primary-dark bg-opacity-50 p-4">
                      {teams[teamName].slice(0, 5).map((player, index) => (
                        <div
                          key={player.playerId + index}
                          className="player-info text-accent flex space-x-2 border-b border-white"
                          // onMouseEnter={() => setHoveredPlayerId(player.playerId)}
                          // onMouseLeave={() => setHoveredPlayerId(null)}
                          // style={{
                          //   backgroundImage: hoveredPlayerId === player.playerId
                          //     ? 'linear-gradient(to right, rgba(255, 0, 0, 0.6), rgba(255, 255, 255, 0.6), rgba(255, 0, 0, 0.6))'
                          //     : 'none',
                          // }}
                        >
                          <Image 
                            src={`/images/Flag Rectangle/${player.country}.png`}
                            width={20}
                            height={10}
                            className='h-4/5 self-center'
                            alt={`${player.country}`}
                          />
                          <p className='text-[0.8rem] text-stroke text-stroke-black'>{player.playerId}</p>
                          <p className='text-[0.8rem]  text-stroke text-stroke-black'>
                            {player.name.length > 10 ? `${player.name.substring(0, 10)}...` : player.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-[2rem]  items-center">
                <p className="w-[15ch] text-center text-black/70 font-bold text-[0.8rem]" style={{ WebkitTextStroke: '0.8px black' }}>{teamName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
