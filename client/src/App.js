import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [listOfAthletes, setListOfAthletes] = useState([]);
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState(0);
  const [rank, setRank] = useState('');

  useEffect(() => {
    //This useEffect is a function that is going to run immediately as the website is loaded
    Axios.get('http://localhost:3001/getRegistrations').then((response) => {
      setListOfAthletes(response.data);
    });
  }, []);

  const createRegistration = () => {
    Axios.post('http://localhost:3001/createRegistration', {
      name,
      rank,
      regNo,
    }).then((response) => {
      // alert('User created');
      setListOfAthletes([
        ...listOfAthletes,
        {
          name,
          rank,
          regNo,
        },
      ]);
    });
  };

  return (
    <div className='App'>
      <div className='athletesDisplay'>
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
      <div>
        <input
          type='text'
          placeholder='name...'
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='rank...'
          onChange={(event) => {
            setRank(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='regNo...'
          onChange={(event) => {
            setRegNo(event.target.value);
          }}
        />
        <button onClick={createRegistration}>Create Registration</button>
      </div>
    </div>
  );
}

export default App;
