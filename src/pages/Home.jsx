import BgImg from '../assets/blog-bg.webp'

import HeroSection from '../components/home/HeroSection'
import AllProdcuts from './AllProdcuts'
import HeroBanner from '../components/home/HeroBanner'
import ShopByCategory from '../components/home/ShopByCategory'
import FeaturedProducts from '../components/home/FeaturedProducts'
import SeasonSale from '../components/home/SeasonSale'
import Brands from '../components/home/Brands'
import SocialMedia from '../components/home/SocialMedia'
import Blog from '../components/home/Blog'
import Testimonials from '../components/home/Testimonials'


function Home() {
  return (
    <>
      <HeroSection />
      <HeroBanner />
      <ShopByCategory />
      <FeaturedProducts />
      <SeasonSale />
      <Brands />
      <SocialMedia />
      <section
        className="season-sale-main parallax-section relative"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="absolute inset-0 bg-[rgba(213,218,220,0.8)]" />
        <Blog />
        <Testimonials/>
      </section>
    </>
  )
}

export default Home