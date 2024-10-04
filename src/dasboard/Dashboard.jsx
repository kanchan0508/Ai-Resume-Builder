import React, { useEffect } from 'react'
import { Button } from '../components/ui/button'
import AddResume from './AddResume'
import GlobalApi from './../../Service/GlobalApi'
import { useUser } from '@clerk/clerk-react'

const Dashboard = () => {
  const user = useUser()

  useEffect(()=>{
    user&& GetResumesList()
  },[user])

  const GetResumesList = ()=>{
    GlobalApi.GetUserResumes(user?.primaryEmail?.emailAddress).then(res =>{
        console.log(res)
      })
    }

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
