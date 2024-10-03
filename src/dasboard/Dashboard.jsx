import React from 'react'
import { Button } from '../components/ui/button'
import AddResume from './AddResume'

const Dashboard = () => {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>
        My Resume
      </h2>
      <p>Start Creating Ai resume to your next job role</p>
      <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-5'>
        <AddResume />
      </div>
      
    </div>
  )
}

export default Dashboard
