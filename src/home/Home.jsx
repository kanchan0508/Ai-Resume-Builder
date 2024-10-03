import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import Header from '../components/custom/Header'

const Home = () => {
  return (
    <div>
        <Header />
    <UserButton />
    </div>
  )
}

export default Home
