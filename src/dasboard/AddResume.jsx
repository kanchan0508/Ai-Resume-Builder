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
import GlobalApi from './../../Service/GlobalApi'

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const {user} = useUser
  const [loading, setLoading] = useState(false)
  console.log(user?.fullName)

  const onCreate = ()=>{
    setLoading(true)
    const uuid = uuidv4()

    const data = {
      data:{
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName

      }
    }

   GlobalApi.CreateNewResume(data).then(res =>{
    console.log(res)
         if(res)
         {
                 setLoading(false)
         }
   },(error)=>{
    setLoading(false);
   })
  }
  return (
    <div>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-14 mt-5 py-24 border item-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md  border-dashed  "
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <p>Add title for your new resume</p>
              <Input onChange={(e)=>setResumeTitle(e.target.value)} className="mt-2" placeholder="EX.Full Stack resume" />
            </DialogDescription>

            <div className="flex justify-end gap-5 py-3">
              <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
              <Button disabled={!resumeTitle || loading} onClick={()=>onCreate()}>
                {loading ? <Loader2 className="animate-spin" /> : "create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
