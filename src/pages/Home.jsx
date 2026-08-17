import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AllProdcuts from './AllProdcuts'
import HeroBanner from '../components/home/HeroBanner'
import ShopByCategory from '../components/home/ShopByCategory'
import FeaturedProducts from '../components/home/FeaturedProducts'

function Home() {
  return (
    <>
        <HeroSection/>
        <HeroBanner/>
        <ShopByCategory/>
        <FeaturedProducts/>
        {/* <AllProdcuts/> */}

    </>
  )
}

export default Home