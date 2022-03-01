import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [listOfAthletes, setListOfAthletes] = useState([
    { id: 1, name: "Cleveland", age: 37, rank: "civ", regNo: 4975 },
  ]);
  return (
    <div className="App">
      <div className="athletesDisplay">
        {listOfAthletes.map((athlete) => {
          return (
            <div>
              <h1>id:{athlete.id}</h1>
              <h1>Name:{athlete.name}</h1>
              <h1>rank:{athlete.rank}</h1>
              <h1>regNo:{athlete.regNo}</h1>
              <h1>age:{athlete.age}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
