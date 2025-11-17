import React from 'react'
import Header from '../Components/Header'
import BrandScroll from '../Components/BrandScroll'
import Cards from '../Components/Cards'
import Cousins from '../Components/Cousins'
import RestaurantList from '../Components/RestaurantList'
import Offer from "../Components/Offer"

const Home = () => {
  
  return (
    <>
      <Header />
      <BrandScroll />
      <Cards />
      <Cousins />
      <RestaurantList />
      <Offer />
    </>
  )
}

export default Home