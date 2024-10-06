import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/clerk-react";
import GlobalApi from './../../Service/GlobalApi';
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser(); // Call useUser as a function
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const onCreate = () => {
    setLoading(true);
    const uuid = uuidv4();

    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress, // Check if email exists
        userName: user?.fullName,
      }
    };



    GlobalApi.CreateNewResume(data)
      .then(res => {
        
        if (res) {
          setLoading(false);
          setOpenDialog(false); // Close the dialog on success
          setResumeTitle("");
           navigate("/dashboard/resume/"+res.data.data.documentId+"/edit")
          // Clear the title input
        }
      })
      .catch(error => {
        console.error("Error creating resume:", error); // Log any errors
        setLoading(false);
      });
  };

  return (
    <div>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-14 mt-5 py-24 border item-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md border-dashed"
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input onChange={(e) => setResumeTitle(e.target.value)} className="mt-2" placeholder="EX. Full Stack resume" />
            </DialogDescription>

            <div className="flex justify-end gap-5 py-3">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
              <Button disabled={!resumeTitle || loading} onClick={onCreate}>
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
