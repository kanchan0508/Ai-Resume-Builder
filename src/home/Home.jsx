import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import Header from '../components/custom/Header'
import LandingPage from './LandingPage'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <Header />
        <LandingPage />
        <Footer />
       
    </div>
  )
}

export default Home
