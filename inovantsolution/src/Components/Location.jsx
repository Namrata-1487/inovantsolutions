
import React, { useState } from 'react'


const Location = ({ onSearch }) => {

 const [restaurant, setRestaurant] = useState("Search Restaurant");
 const [locationText, setLocationText] = useState("Kuwait city, kuwait");

 return (
  <>
   <div className='d-flex w-50 '>
    <div className='location-input border-0 bg-white d-flex align-items-center px-3 py-2 rounded me-3 '>
     <button onClick={() => onSearch(locationText)} className='border-0 p-0 bg-white me-2'><i className="fa-solid fa-location-dot p-0 "></i></button>

     <input type="search" name="location" id="location" className='border-0' value="" placeholder={locationText} onChange={(e) => { setLocationText(e.target.value) }} />
    </div>
    <div className='location-input border-0 bg-white d-flex align-items-center px-3 py-2 rounded w-100 '>
     <button onClick={() => onSearch(restaurant)} className='border-0 p-0 bg-white me-2'><i className="fa-solid fa-magnifying-glass p-0"></i></button>

     <input type="search" name="restaurant" id="restaurant" className='border-0 w-100' value="" placeholder={restaurant} onChange={(e) => { setRestaurant(e.target.value) }} />
    </div>
   </div>
  </>
 )
}

export default Location