import React, { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import AddResume from './AddResume'
import GlobalApi from './../../Service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import ResumeItem from './ResumeItem'

const Dashboard = () => {
  const { user } = useUser()  // Destructure the user from useUser
  const [resumeList, setResumeList] = useState([])

  // Log the user object for debugging
  useEffect(() => {
    console.log("User object:", user)
  }, [user])

  useEffect(() => {
    if (user && user?.primaryEmailAddress) {
      GetResumesList()
    }
  }, [user])

  const GetResumesList = () => {
    const emailAddress = user?.primaryEmailAddress?.emailAddress;
   
  
    if (emailAddress) {
      GlobalApi.GetUserResumes(emailAddress).then(res => { // Use "res" here
        setResumeList(res.data.data);
      
  
      }).catch(err => {
        console.error("Error fetching resumes:", err);
      });
    } else {
      console.error("Email address is undefined!");
    }
  };
  
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating Ai resume for your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <AddResume />
        {
          resumeList?.length > 0 ? resumeList.map((resume, index) => (
            <ResumeItem resume={resume} key={index} refreshData={GetResumesList} />
          )) : (
            [1, 2, 3, 4].map((item, index) => (
              <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'></div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default Dashboard
