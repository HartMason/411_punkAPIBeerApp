import React, { useState } from "react";
import "./BCard.css"; 

export default function BeerCard(props) {
  // const {beer} = props
  const beer = props.beer;
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = (e, id) => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  return (
    <div id="beerInfo">
      <p className="beerName">{beer.name}</p>
      <p>{beer.abv}</p>
      <img
        src={beer.image_url}
        className="beerPic"
        alt={beer.name}
        style={{ height: "100px" }}
      />
      <br/>
      {isLiked ? (
        <button onClick={(e) => handleLike(e, beer.id)} className="like">
          UnLike
        </button>
      ) : (
        <button onClick={(e) => handleLike(e, beer.id)} className="like">
          Like
        </button>
      )}
    </div>
  );
}
