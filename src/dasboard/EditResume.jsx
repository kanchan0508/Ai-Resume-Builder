import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditResume = () => {
    const param = useParams()

    useEffect(()=>{
    console.log(param.resumeId)
    },[])
  return (
    <div>
        editResume
    </div>
  )
}

export default EditResume
