import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import DetailsForm from '@/forms/DetailsForm'

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1)
  const [enableNext,setEnableNext ] = useState(false)
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant="outline" size="sm" className="flex gap-2"> <LayoutGrid /> Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && <Button size="sm" onClick={()=>setActiveFormIndex(activeFormIndex - 1)}> <ArrowLeft/> </Button> }
          <Button disabled={!enableNext} className="flex gap-2 " size="sm" onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/> </Button>
        </div>

      </div>
      {/* Add form personal Details form here */}
      {activeFormIndex === 1?<DetailsForm enableNext={(v)=>setEnableNext(v)}/> : null} 
       {/* summery */}

       {/* Experience */}

       {/* Education */}

       {/* Skill */}
    </div>
  )
}

export default FormSection
