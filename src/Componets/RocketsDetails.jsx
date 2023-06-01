import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../CSS_files/RocketsDetails.css'
const RocketsDetails = () => {
    const navigate=useNavigate()
    const {rocket_id}=useParams()
    // console.log(rocket_id);
    const[rocketDetails,setRocketDetails] =useState()
    useEffect(()=>{
        async function fetchUsers() {
            try {
              const api = await fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`);
              const respo = await api.json();
            //   console.log(respo);
              setRocketDetails(respo)
            //   dispatch(getRocketsData(respo))
            } catch (error) {
              console.error("Data Not fetching plaese wait or refersh the page:", error);
            }
          }
          fetchUsers();
    },[])
    console.log(rocketDetails);
  return (
    <div className='rocketsDetails'>
        {/* <img src={rocketDetails && rocketDetails.flickr_images[1]} alt="" />
    <h1>{rocketDetails.rocket_name}</h1> */}
    {/* {console.log(rocketDetails)} */}
<button onClick={()=>{
    navigate('/')
}}> 👈🏻 BACK TO ROCKETS </button>
    {
        rocketDetails ? <>
        <img src={rocketDetails.flickr_images[0]} alt="" />
        <div className="modal-footer">
        <div className='row'>
            <div className='col-sm-4'>
                <h4>Country</h4>
                <p>{rocketDetails.country}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Height</h4>
                <p>{rocketDetails.height.feet} Feet</p>
            </div>
            <div className='col-sm-4'>
                <h4>Diameter</h4>
                <p>{rocketDetails.diameter.meters} Meters</p>
            </div>
            <div className='col-sm-4'>
                <h4>Mass</h4>
                <p>{rocketDetails.mass.kg} Kg</p>
            </div>
            <div className='col-sm-4'>
                <h4>Active</h4>
                <p>{rocketDetails.active?`YES` : `NO`}</p>
            </div>
            <div className='col-sm-4'>
                <h4>First Flight</h4>
                <p>{rocketDetails.first_flight}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Reusable</h4>
                <p>{rocketDetails.first_stage.reusable?`YES`:`NO`}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Company</h4>
                <p>{rocketDetails.company}</p>
            </div>
            <div className='col-sm-4'>
                <h4>Cost per Launch</h4>
                <p>{rocketDetails.cost_per_launch} $</p>
            </div>
        </div>
        <h3>{rocketDetails.description}</h3>
        <a href={rocketDetails.wikipedia} target="_blank" ><button type="button" className="btn">Know More</button></a>
      </div>

        </> : ""
    }



    </div>
  )
}

export default RocketsDetails