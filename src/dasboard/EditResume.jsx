import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from "../resume/FormSection"
import ResumePreview from '@/resume/ResumePreview'
import dummy from '@/data/dummy'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from '../../Service/GlobalApi'

const EditResume = () => {
    const {resumeId} = useParams()
    const [resumeInfo, setResumeInfo] = useState()

    useEffect(()=>{
      GetResumeInfo()
    },[])

    const GetResumeInfo = ()=>{
      GlobalApi.GetResumeById(resumeId).then(resp =>{
        console.log(resp.data.data)
        setResumeInfo(resp.data.data)
      })
    }
  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col p-10 gap-10' >
      <FormSection />

      <ResumePreview />
      
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume
