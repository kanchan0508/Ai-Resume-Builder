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
    console.log("Email Address for API call:", emailAddress);
  
    if (emailAddress) {
      GlobalApi.GetUserResumes(emailAddress).then(res => { // Use "res" here
        setResumeList(res.data.data);
        console.log("res:" + res)
      }).catch(err => {
        console.error("Error fetching resumes:", err);
      });
    } else {
      console.error("Email address is undefined!");
    }
  };
  console.log("Resume List:", resumeList);
  

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating Ai resume for your next job role</p>
      <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-5'>
        <AddResume />
        {
          resumeList?.map((resume, index) => (
            <ResumeItem resume={resume} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
