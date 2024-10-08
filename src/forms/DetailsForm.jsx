import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../Service/GlobalApi'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'

const DetailsForm = ({enableNext}) => {
    const params = useParams()
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    const [formData, setFormData] = useState()
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) =>{
        enableNext(false);
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})  // updating formData state with new value from input field.  // This will trigger the re-render of the component.  // We use spread operator to create a new object with updated value.  // 'name' is the property name and 'value' is the new value.  // In this case, it's the same as formData[name] = value, but this is a more efficient way to update
        setResumeInfo({...resumeInfo, [name]: value})  // updating resumeInfo state with new value from input field.  // This will trigger the re-render of the component.  // We use spread operator to create a new object with updated value.  // 'name' is the property name and 'value' is the new value.  // In this case, it's the same as resumeInfo[name] = value, but this is a more efficient way to update
    }

    const onSave = (e) => {
       e.preventDefault();
       setLoading(true)
       const data = {
        data: formData
       }
       GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp=>{
        enableNext(true)
        setLoading(false)
        toast("Details Updated.")

       },(error) => {
        setLoading(false)
       })
      
    }
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10  '>
    <h2 className='font-bold text-lg'>Personal Details</h2>
    <p>Get Started with the basic information</p>

    <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3 '>
            <div>
                <label  className='text-sm'>First Name</label>
                <Input name="firstName" required defaultValue={resumeInfo?.firstName} onChange={handleInputChange} />
            </div>
            <div>
                <label  className='text-sm'>Last Name</label>
                <Input name="lastName" required defaultValue={resumeInfo?.lastName} onChange={handleInputChange} />
            </div>
            <div className='col-span-2'>
                <label  className='text-sm'>Job Title</label>
                <Input name="jobTitle" required defaultValue={resumeInfo?.jobTitle} onChange={handleInputChange} />
            </div>
            <div className='col-span-2'>
                <label  className='text-sm'>Address</label>
                <Input name="address" required defaultValue={resumeInfo?.address} onChange={handleInputChange} />
            </div>
            <div>
                <label  className='text-sm'>Phone</label>
                <Input name="phone" required defaultValue={resumeInfo?.phone} onChange={handleInputChange} />
            </div>
            <div>
                <label  className='text-sm'>Email</label>
                <Input name="email" required defaultValue={resumeInfo?.email} onChange={handleInputChange} />
            </div>

        </div>
        <div className='mt-3 flex justify-end'>
            <Button type="submit" disabled={loading}>{loading? <LoaderCircle className='animate-spin' /> : "Save"}</Button>

        </div>
    </form>
      
    </div>
  )
}

export default DetailsForm
