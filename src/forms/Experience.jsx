import RichTextEditor from "@/components/custom/RichTextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};
const Experience = () => {
  const [experienceList, setExperienceList] = useState([formField]);
  const {resumeInfo, setResumeInfo} =  useContext(ResumeInfoContext)

  const handleChange = (index, event) => {
    const newEntries = experienceList.slice();
    const {name, value} = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const handleAddExperience = () => {
    setExperienceList([...experienceList, formField]);
  };
  const RemoveExperience = () => {
    setExperienceList((prevExperienceList) => prevExperienceList.slice(0, -1));
  };

  const handleRichtextEditor =(e,name, index)=>{
    const newEntries = experienceList.slice();
    newEntries[index][name] =e.target.value;
    setExperienceList(newEntries)
  }
  useEffect(()=>{
   setResumeInfo({
    ...resumeInfo,
    experience:experienceList
   })

  },[experienceList])

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10  ">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your previous job experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 border p-3 my-5 gap-3 rounded-lg">
                <div>
                  <label className="text-xs ">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs ">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs ">City</label>
                  <Input
                    name="city"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs ">State</label>
                  <Input
                    name="state"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs ">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs ">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor index={index} onRichTextEditorChange={(event)=>handleRichtextEditor(event, "workSummery", index)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              className=" text-primary"
              variant="outline"
              onClick={handleAddExperience}
            >
              + Add more experience
            </Button>
            <Button
              className=" text-primary"
              variant="outline"
              onClick={RemoveExperience}
            >
              - Remove
            </Button>
          </div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
