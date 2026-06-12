import React from 'react'
import Hero from '../components/Hero'
import LatestConnection from '../components/LatestConnection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <LatestConnection></LatestConnection>
        <BestSeller></BestSeller>
        <OurPolicy></OurPolicy>
        <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Home