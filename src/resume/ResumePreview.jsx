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
    <div className='shadow-lg h-full p-14 border-t-[20px]  'style={{borderColor:resumeInfo?.themeColor}} >
      <PersonalDeatils resumeInfo={resumeInfo}/>
      <SummaryPreview resumeInfo={resumeInfo} />
      <ExperiencePreview  resumeInfo={resumeInfo}/>
      <EducationPreview resumeInfo={resumeInfo} />
      <SkillsPreview  resumeInfo={resumeInfo} />
      
    </div>
  )
}

export default ResumePreview
