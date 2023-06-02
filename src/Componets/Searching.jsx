import React,{useState} from 'react'
import '../CSS_files/Searching.css'

const Searching = ({handleheight,handlEngin,handlLegs}) => {
  
  return (
    <>
    <div className="searchConatiner">
    <select name='height' className='filter' onChange={handleheight} >
            <option value="0">---Select Height---</option>
            <option value="100"> Greater than 100 Feet</option>
            <option value="200"> Greater than 200 Feet</option>
            <option value="300"> Greater than 300 Feet</option>
        </select>
        <select name='height' className='filter' onChange={handlEngin}>
            <option value="0">---Select Engine---</option>
            <option value="400"> Engine Thrust greater than 400 KN </option>
            <option value="900"> Engine Thrust greater than 900 KN </option>
            <option value="1000"> Engine Thrust greater than 1000 KN </option>
        </select>
        <select name='height' className='filter' onChange={handlLegs}>
            <option value="0">---Select Legs---</option>
            <option value="4"> Landing lages greater than 4</option>
            <option value="6"> Landing lages greater than 6</option>
            <option value="12"> Landing lages greater than 12</option>
        </select>
    </div>
    </>
  )
}

export default Searching