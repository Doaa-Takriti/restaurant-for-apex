import React from 'react'
import Try from "../components/Home/Try"
import DescImg from '../components/Home/DescImg'
import Descimgreverse from '../components/Home/Descimgreverse'
import CarouselDigital from '../components/Home/CarouselDigital'
import Review from '../components/Home/Review'

  import Features from '../components/Home/Features'
  import Navbartop from "../components/Home/Navbartop"
  import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div className='home'>
       <Navbartop />

  <Try />
  <DescImg/>
  <Descimgreverse/>
  <CarouselDigital/>
  <Review/>
<Features/>
<Footer/>


    </div>
  )
}

export default Home
