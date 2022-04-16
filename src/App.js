import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import BeerCard from "./BeerCard";

const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    Axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      setdata(response.data);
    });
  }, []);

  // useEffect(()=>{
  //   console.log(data)
  // }, [data])

  const handleClick = (button) => {
    console.log(data);
  };

  return (
    <div className="App">
        <header id="header">Punk API Beer APP</header>
        <p id="beerList">Beer List</p>
      <section className="grid">
        {/* if we want to run javascript code inside of our return
      we need to wrap it in curly braces */}
        {data.map((beer) => {
          return <BeerCard key={beer.id} beer={beer} />;
        })}

      </section>
        <button id="button" onClick={handleClick}>
          button
        </button>
    </div>
  );
};
export default App;
