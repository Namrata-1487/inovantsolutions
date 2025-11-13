import React from 'react'
import Location from './Location';


const Header = () => {


  return (
    <>
      <div className="container-fluid text-center py-5 header-section justify-content-center d-flex flex-column align-items-center">
        <h2 className='text-center container header py-5'>Order delicious food from your
          favorite restaurants.</h2>
        <Location/>
      </div>
    </>
  )
}

export default Header