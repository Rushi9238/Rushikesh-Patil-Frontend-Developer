import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getRocketsData } from './Redux/dataSlice';
import { useDispatch } from 'react-redux';
import Header from './Componets/Header';
import Searching from './Componets/Searching';
import HomePage from './Componets/HomePage';
import RocketsDetails from './Componets/RocketsDetails';
import './App.css';

function App() {
  let handleheight = (e) => {
    setHeight(e.target.value)
  }
  let handlEngin = (e) => {
    setEngine(e.target.value)
  }
  let handlLegs = (e) => {
    setLegs(e.target.value)
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
        dispatch(getRocketsData(respo))
      } catch (error) {
        console.error("Data Not fetching plaese wait or refersh the page:", error);
      }
    }
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <Header />
      <Searching
        handleheight={handleheight}
        handlEngin={handlEngin}
        handlLegs={handlLegs} />
      <Routes>
        <Route path='/' element={<HomePage height={height} engine={engine} legs={legs} />} />
        <Route path='/v3/rockets/:rocket_id' element={<RocketsDetails />} />
        <Route path='*' element={ <h1 style={{color:'white'}}>404 Error Page Not Found</h1>}/>
      </Routes>

    </div>
  );
}

export default App;
