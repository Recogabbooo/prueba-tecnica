import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
  const [catFact, setCatFact] = useState("");
  const [catGIF, setCatGIF] = useState("");
  
  const callGiphyAPI = (string) => {
  
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`
      )
      .then((res) => res.json())
      .then((data) => {
        console.log("gif", data.data[0].images.original.url)
        setCatGIF(data.data[0].images.original.url)
      
      });

    };

  const callAPI = () => {
  
    fetch('https://catfact.ninja/fact')
     .then((res) => res.json())
     .then((data) => { 
      setCatFact(data.fact || "Hola array vacio");
      callGiphyAPI(data?.fact?.split(" ", 3).join(" "));
      console.log(data.fact);
  
    });
     
  };
  useEffect (callAPI, []);
  
    return (

    <div style={{display: 'flex', gap: '20px', alignItems:'center'}}>    
    <img src={catGIF} alt='imagen' style={{objectFit: "contain", width: "200px", height: "200px"}}/>
    <h1>{catFact}</h1>
    </div>
  
  )
    
  };

export default App;
