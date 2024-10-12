import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from '../../Service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const Skills = () => {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    const [loading, setLoading] = useState(false);
    const {resumeId} = useParams()
  const [skillsList, setSkillsList] = useState([
    {
      name: '',
      rating: 0,
    },
  ]);
  useEffect(()=>{
    resumeInfo&&setSkillsList(resumeInfo?.skills)
  },[])
  const handleChange = (index, name, value) => {
    const newEntries = skillsList.slice();
    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([...skillsList, { name: '', rating: 0 }]);
  };
  const RemoveSkill =()=>{
    setSkillsList(PrevSkillsList=>PrevSkillsList.slice(0, -1))
  }

  const onSave=()=>{
    setLoading(true);
    const data={
      data:{
          skills:skillsList.map(({ id, ...rest }) => rest)
      }
  }

    GlobalApi.UpdateResumeDetail(resumeId, data).then(resp =>{
        console.log(resp)
        setLoading(false)
        toast("Skills saved")
    },(error)=>{
        toast("Error saving skills", error)
    })
  }

  useEffect(()=>{
    setResumeInfo({
        ...resumeInfo,
        skills: skillsList,
    })
  },[skillsList])

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Skills</h2>
        <p>Add Your top professional key skills</p>
        <div>
          {skillsList.map((item, index) => (
            <div key={index} className="flex justify-between p-3 border my-3 rounded-lg mb-2">
              <div>
                <label className="text-xs"> Name</label>
                <Input className="w-full"
                  type="text"
                  name="name"
                  value={item.name}
                  defaultValue={item?.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </div>
              <Rating
                style={{ maxWidth: 120 }}
                value={item.rating}
                onChange={(v) => handleChange(index, 'rating', v)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              className=" text-primary"
              variant="outline"
              onClick={AddNewSkills}
            >
              + Add more skills
            </Button>
            <Button
              className=" text-primary"
              variant="outline"
              onClick={RemoveSkill}
            >
              - Remove
            </Button>
          </div>
          <Button type="submit" onClick={()=>onSave()} disabled={loading}>{loading? <LoaderCircle className='animate-spin' /> : "Save"}</Button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
