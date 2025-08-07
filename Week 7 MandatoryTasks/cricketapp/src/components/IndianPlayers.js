
import React from 'react';

const IndianPlayers = () => {
  const team = ['Rohit', 'Virat', 'Rahul', 'Hardik', 'Bumrah', 'Shami'];
  

  const oddTeam = team.filter((_, index) => index % 2 === 0);
  const evenTeam = team.filter((_, index) => index % 2 !== 0);

  
  const T20players = ['Surya', 'Rishabh', 'Gill'];
  const RanjiTrophy = ['Sarfaraz', 'Jaiswal', 'Mukesh'];

  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team</h3>
      <ul>
        {oddTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h3>Even Team</h3>
      <ul>
        {evenTeam.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>

      <h3>Merged Players (T20 + Ranji)</h3>
      <ul>
        {allPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
