
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit Sharma', score: 90 },
    { name: 'Virat Kohli', score: 85 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Shubman Gill', score: 50 },
    { name: 'Hardik Pandya', score: 75 },
    { name: 'Jadeja', score: 65 },
    { name: 'Surya Yadav', score: 95 },
    { name: 'Ishan Kishan', score: 40 },
    { name: 'Axar Patel', score: 55 },
    { name: 'Mohammed Shami', score: 30 },
    { name: 'Bumrah', score: 70 },
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>List of Players (Score ≥ 70)</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
