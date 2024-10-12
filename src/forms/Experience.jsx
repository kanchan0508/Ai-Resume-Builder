import RichTextEditor from "@/components/custom/RichTextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import GlobalApi from "../../Service/GlobalApi";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router-dom";

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
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const initialLoad = useRef(true);

    useEffect(() => {
        if (initialLoad.current && resumeInfo?.experience) {
            setExperienceList(resumeInfo.experience);
            initialLoad.current = false; // Prevents further updates
        }
    }, [resumeInfo]);

    const handleChange = (index, event) => {
        const newEntries = experienceList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setExperienceList(newEntries);
    };

    const handleAddExperience = () => {
        setExperienceList([...experienceList, formField]);
    };

    const RemoveExperience = () => {
        setExperienceList((prevExperienceList) => prevExperienceList.slice(0, -1));
    };

    const handleRichtextEditor = (value, name, index) => {
        console.log(value); // Log the new value received from the editor
        const newEntries = experienceList.slice();
        newEntries[index][name] = value; // Update the experienceList with the new value
        setExperienceList(newEntries); // Update state with the modified list
    };

    useEffect(() => {
        setResumeInfo((prev) => ({
            ...prev,
            experience: experienceList,
        }));
    }, [experienceList]);

    const onSave = () => {
        setLoading(true);
        const data = {
            data: {
                experience: experienceList.map(({ id, workSummery, ...rest }) => ({
                    ...rest,
                    workSummery: workSummery || '', // Ensure this field is included
                })),
            },
        };
        GlobalApi.UpdateResumeDetail(params?.resumeId, data)
            .then(res => {
                setLoading(false);
                toast('Details updated!');
            })
            .catch(error => {
                console.error(error.response?.data || error.message);
                setLoading(false);
                toast('Failed to update details!');
            });
    };

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
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
                                        defaultValue={item?.title}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs ">Company Name</label>
                                    <Input
                                        name="companyName"
                                        defaultValue={item?.companyName}
                                        onChange={(event) => handleChange(index, event)}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs ">City</label>
                                    <Input
                                        name="city"
                                        defaultValue={item?.city}
                                        onChange={(event) => handleChange(index, event)}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs ">State</label>
                                    <Input
                                        name="state"
                                        defaultValue={item?.state}
                                        onChange={(event) => handleChange(index, event)}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs ">Start Date</label>
                                    <Input
                                        type="date"
                                        defaultValue={item?.startDate}
                                        name="startDate"
                                        onChange={(event) => handleChange(index, event)}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs ">End Date</label>
                                    <Input
                                        type="date"
                                        name="endDate"
                                        defaultValue={item?.endDate}
                                        onChange={(event) => handleChange(index, event)}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <RichTextEditor
                                        defaultValue={item?.workSummery}
                                        index={index}
                                        onRichTextEditorChange={handleRichtextEditor} // Update handler
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
                            onClick={RemoveExperience}
                            disabled={experienceList.length <= 1}
                        >
                            Remove Experience
                        </Button>
                        <Button
                            className=" text-primary"
                            variant="outline"
                            onClick={handleAddExperience}
                        >
                            Add Experience
                        </Button>
                    </div>
                    <Button
                        onClick={onSave}
                        disabled={loading}
                    >
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Experience;
