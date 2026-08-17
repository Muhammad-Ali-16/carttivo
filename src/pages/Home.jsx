import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AllProdcuts from './AllProdcuts'
import HeroBanner from '../components/home/HeroBanner'
import ShopByCategory from '../components/home/ShopByCategory'

function Home() {
  return (
    <>
        <HeroSection/>
        <HeroBanner/>
        <ShopByCategory/>
        {/* <AllProdcuts/> */}

    </>
  )
}

export default Home