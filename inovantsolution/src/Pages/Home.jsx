import React from 'react'
import Header from '../Components/Header'
import BrandScroll from '../Components/BrandScroll'
import Cards from '../Components/Cards'
import Cousins from '../Components/Cousins'
import RestaurantList from '../Components/RestaurantList'


const Home = () => {
  
  return (
    <>
      <Header />
      <BrandScroll />
      <Cards />
      <Cousins />
      <RestaurantList />
    </>
  )
}

export default Home