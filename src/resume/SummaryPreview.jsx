import React from 'react'

const SummaryPreview = ({resumeInfo}) => {
  return (
    <div className='text-sm'>
      <p>{resumeInfo?.summery}</p>
    </div>
  )
}

export default SummaryPreview
