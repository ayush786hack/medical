import React from 'react'
import MainBranner from '../components/MainBranner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewLetter from '../components/NewLetter'


const Home = () => {
  return (
    <div className='mt-10'>
      
        <MainBranner />
        <Categories />

        
        <BestSeller/>
        <BottomBanner />
        <NewLetter />
        
       
    </div>
  )
}

export default Home
