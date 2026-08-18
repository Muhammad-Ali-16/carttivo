import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AllProdcuts from './AllProdcuts'
import HeroBanner from '../components/home/HeroBanner'
import ShopByCategory from '../components/home/ShopByCategory'
import FeaturedProducts from '../components/home/FeaturedProducts'
import SeasonSale from '../components/home/SeasonSale'


function Home() {
  return (
    <>
      <HeroSection />
      <HeroBanner />
      <ShopByCategory />
      <FeaturedProducts />
      <SeasonSale />
    </>
    )
}

export default Home