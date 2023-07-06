import { useEffect,useState } from "react";
import TwoPart from "./TwoPart";
import SingleJoke from "./SingleJoke";

function App() {
 
 
  return (
    <div className="app">
      <h2 className="heading">😂 Jokes! 😂</h2>
    <SingleJoke/> 
     <TwoPart/>
       
     
      <div className="buttons">
         <button className="another">Another Joke!😆</button>
      </div>

    </div>
  );
}

export default App;
