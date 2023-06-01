import React,{useState} from 'react'
import '../CSS_files/Searching.css'

const Searching = ({handleheight}) => {
  
  return (
    <>
    <div className="searchConatiner">
    <select name='height' className='filter' onChange={handleheight} >
            <option value="0">---Select Height---</option>
            <option value="100"> Greater than 100 Feet</option>
            <option value="200"> Greater than 200 Feet</option>
            <option value="300"> Greater than 300 Feet</option>
        </select>
        <select name='height' className='filter' >
            <option value="0">---Select Engine---</option>
            <option value="100"> Greater than 100 Feet</option>
            <option value="200"> Greater than 200 Feet</option>
            <option value="300"> Greater than 300 Feet</option>
        </select>
        <select name='height' className='filter' >
            <option value="0">---Select Legs---</option>
            <option value="100"> Greater than 100 Feet</option>
            <option value="200"> Greater than 200 Feet</option>
            <option value="300"> Greater than 300 Feet</option>
        </select>
    </div>
    </>
  )
}

export default Searching