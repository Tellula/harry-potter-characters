import React from "react";

const Card = ({ name, actor, image, house }) => {
  return (
    <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 card">
      <img className="portrait"
        src={image} 
        alt={name}
      />
      <div>
        <h1>{name}</h1>
        <h2>{house}</h2>
        <p>{actor}</p>
      </div>
    </div>
  );
};

export default Card; //Exports it to CardList
