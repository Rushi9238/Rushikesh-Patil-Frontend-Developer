import React from 'react'
import { useSelector } from 'react-redux'
import '../CSS_files/HomePage.css'
import { useNavigate } from 'react-router-dom'
const HomePage = ({height}) => {
  const navigate=useNavigate()
    const {data}=useSelector((select)=>select.dataSlice)
    console.log(data);
    const filter=data.filter((ele)=>{
      return ele.height.feet>=height
    })
    console.log(filter);
  return (
    <div className='home'>
        {
            data.map((ele)=>{
                return <div className='rockets-banner' style={{backgroundImage:`url(${ele.flickr_images[1]})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',}} >
                  <div className="details">
                   <h4>{ele.country}</h4>
                  <h1>{ele.rocket_name}</h1>
                   <button onClick={()=>{
                    navigate(`/v3/rockets/${ele.rocket_id}`)
                   }}>Details</button>
                  </div>
                </div> 
            })
        } 
    </div>
  )
}
export default HomePage