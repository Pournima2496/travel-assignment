import React from 'react'
import BestPackages from '../../components/best packages/BestPackages'
import Feature from '../../components/features/Feature'
import HeroBanner from "../../components/hero banners/HeroBanner"

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <BestPackages />
        <Feature />
    </div>
  )
}

export default Home