import React from 'react'
import BestPackages from '../../components/best packages/BestPackages'
import Feature from '../../components/features/Feature'
import HeroBanner from "../../components/hero banners/HeroBanner"
import Testimonial from '../../components/testimonial/Testimonial'

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <BestPackages />
        <Feature />
        <Testimonial />
    </div>
  )
}

export default Home