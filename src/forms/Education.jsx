import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import GlobalApi from "../../Service/GlobalApi";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router-dom";

const Education = () => {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    const params = useParams()
  const [educationalList, setEducationalList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    resumeInfo&&setEducationalList(resumeInfo?.education)
  },[])

  const handleChange = (e, index) => {
    const newEntries = educationalList.slice();
    const {name, value} = e.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
  };
  const AddNewEducation = () => {
    setEducationalList([
      ...educationalList,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };
  const RemoveEducation = () => {
    setEducationalList((prevEducationalList) => prevEducationalList.slice(0, -1));
  };
  const onSave = () => {
    setLoading(true)
    const data ={
       data:{
        education: educationalList,
       }
      };

      GlobalApi.UpdateResumeDetail(params.resumeId, data).then(resp=>{
        console.log(resp)
        setLoading(false)
        toast("Detail updated !")
      },(error)=>{
        setLoading(false)
        console.log(error)
        toast("Error updating detail!")
      })
    }
 useEffect(()=>{
    setResumeInfo({
     ...resumeInfo,
      education: educationalList,
    });
    // console.log(resumeInfo);
  },[educationalList])

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10  ">
        <h2 className="font-bold text-lg">Education</h2>
        <p>Add your educational details</p>
        <div>
          {educationalList?.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div className="col-span-2">
                  <label className="text-xs ">University Name</label>
                  <Input
                    name="universityName"
                    onChange={(e) => handleChange(e, index)}
                    defaultValue={item?.universityName}
                  />
                </div>
                <div>
                  <label className="text-xs ">Degree</label>
                  <Input
                    name="degree"
                    onChange={(e) => handleChange(e, index)}
                    defaultValue={item?.degree}
                  />
                </div>
                <div>
                  <label className="text-xs ">Major</label>
                  <Input
                    name="major"
                    onChange={(e) => handleChange(e, index)}
                    defaultValue={item?.major}
                  />
                </div>
                <div>
                  <label className="text-xs ">Start Date</label>
                  <Input
                   type="date"
                    name="startDate"
                    onChange={(e) => handleChange(e, index)}
                    defaultValue={item?.startDate}
                  />
                </div>
                <div>
                  <label className="text-xs ">End Date</label>
                  <Input
                   type="date"
                    name="endDate"
                    onChange={(e) => handleChange(e, index)}
                    defaultValue={item?.endDate}
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-xs ">Description</label>
                  <Textarea
                    name="description"
                    onChange={(e) => handleChange(e, index)}
                    defaultValue={item?.description}
                  />
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
              onClick={AddNewEducation}
            >
              + Add more education
            </Button>
            <Button
              className=" text-primary"
              variant="outline"
              onClick={RemoveEducation}
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

export default Education;
