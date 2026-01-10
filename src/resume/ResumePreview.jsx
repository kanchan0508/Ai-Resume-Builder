import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDeatils from './PersonalDeatils'
import SummaryPreview from './SummaryPreview'
import ExperiencePreview from './ExperiencePreview'
import EducationPreview from './EducationPreview'
import SkillsPreview from './SkillsPreview'

const ResumePreview = () => {
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px] bg-white text-black'
         style={{borderColor:resumeInfo?.themeColor}} >
      
      {/* Personal Details Section */}
      <div className='mb-6'>
        <PersonalDeatils resumeInfo={resumeInfo}/>
      </div>

      {/* Summary Section */}
      <div className='mb-6'>
        <SummaryPreview resumeInfo={resumeInfo} />
      </div>

      {/* Experience Section */}
      <div className='mb-6'>
        <ExperiencePreview resumeInfo={resumeInfo}/>
      </div>

      {/* Education Section */}
      <div className='mb-6'>
        <EducationPreview resumeInfo={resumeInfo} />
      </div>

      {/* Skills Section */}
      <div className='mb-6'>
        <SkillsPreview resumeInfo={resumeInfo} />
      </div>
      
    </div>
  )
}

export default ResumePreview
