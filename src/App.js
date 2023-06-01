import React, { useState, useEffect } from 'react'
import './App.css';
import { getRocketsData } from './Redux/dataSlice';
import { useDispatch } from 'react-redux';
import Header from './Componets/Header';
import Searching from './Componets/Searching';
import HomePage from './Componets/HomePage';
import {Route,Routes} from 'react-router-dom'
import RocketsDetails from './Componets/RocketsDetails';

function App() {
  let handleheight = (e) => {
    setHeight(e.target.value)
  }


  const dispatch = useDispatch()
  const [height, setHeight] = useState(0)
  const [engine, setEngine] = useState(0)
  const [legs, setLegs] = useState(0)
  useEffect(() => {
    async function fetchUsers() {
      try {
        const api = await fetch('https://api.spacexdata.com/v3/rockets');
        const respo = await api.json();
        // console.log(respo);
        dispatch(getRocketsData(respo))
      } catch (error) {
        console.error("Data Not fetching plaese wait or refersh the page:", error);
      }
    }
    fetchUsers();
  }, []);
  console.log(height);
  return (
    <div className="App">
      <Header />
      <Searching handleheight={handleheight} />
      {/*  */}
      <Routes>
        <Route path='/' element={<HomePage height={height} />}/>
        <Route path='/v3/rockets/:rocket_id' element={<RocketsDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
