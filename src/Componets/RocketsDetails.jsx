import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../CSS_files/RocketsDetails.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
const RocketsDetails = () => {
    const navigate=useNavigate()
    const {rocket_id}=useParams()
    const[rocketDetails,setRocketDetails] =useState()
    useEffect(()=>{
        async function fetchUsers() {
            try {
              const api = await fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`);
              const respo = await api.json();
              setRocketDetails(respo)
            } catch (error) {
              console.error("Data Not fetching plaese wait or refersh the page:", error);
            }
          }
          fetchUsers();
    },[])
    console.log(rocketDetails);
  return (
    <div className='rocketsDetails'>
<button onClick={()=>{
    navigate('/')
}}> 👈🏻 BACK TO ROCKETS </button>
    {
        rocketDetails ? <>
        <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={2000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
                {rocketDetails.flickr_images.map((ele)=>{
                    return  <img className='carousel-item-padding-40-px' src={ele} alt="" />
                })}
              </Carousel>
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