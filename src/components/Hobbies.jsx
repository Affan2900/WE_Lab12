import React from 'react';

const Hobbies = () => {
  const hobbies = [
    "Biryani", "Football", "Watching Movies", "Watching Series",
    "Watching Anime", "Watching Documentaries", "Watching Sports"
  ];

  return (
    <div className="hobbies">
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;

