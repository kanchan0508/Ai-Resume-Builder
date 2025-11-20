import { Loader2Icon, MoreVertical, FileText, Trash2, Eye, Edit, Download } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import GlobalApi from '../../Service/GlobalApi';

const ResumeItem = ({ resume, refreshData }) => {
    if (!resume || !resume.title) {
      return null;
    }
  
   const navigation = useNavigate()
   const [openAlert,setOpenAlert]=useState(false);
   const [loading,setLoading]=useState(false);
 
   const onDelete=()=>{
     setLoading(true);
     GlobalApi.DeleteResumeById(resume.documentId).then(resp=>{
       console.log(resp);
       toast('Resume Deleted!');
       refreshData()
       setLoading(false);
       setOpenAlert(false);
     },(error)=>{
       setLoading(false);
     })
   }

    return (
      <div className='hover:scale-105 transition-all duration-300 ease-in-out'>
        <Link to={'/dashboard/resume/'+resume.documentId+"/edit"}>
          <div className='p-6 bg-white h-[280px] rounded-t-lg border-t-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md'
            style={{
              borderColor: resume?.themeColor || '#9f5bff'
            }}
          >
            <div className='flex items-center justify-center h-[180px] w-full bg-gray-50 rounded-lg mb-3'>
              <img src="/cv.png" width={80} height={80} alt="resume-icon" className="opacity-80" />
            </div>
          </div>
        </Link>
        
        <div className='border p-3 flex justify-between items-center rounded-b-lg shadow-lg bg-white'>
          <h2 className='text-sm font-medium truncate w-full pr-2 text-gray-700'>{resume.title}</h2>
          
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical className='h-4 w-4 cursor-pointer text-gray-500 hover:text-primary'/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=>navigation('/dashboard/resume/'+resume.documentId+"/edit")}>
                <Edit className="h-4 w-4 mr-2"/> Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume.documentId+"/view")}>
                <Eye className="h-4 w-4 mr-2"/> View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume.documentId+"/view")}>
                <Download className="h-4 w-4 mr-2"/> Download
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setOpenAlert(true)} className="text-red-600 focus:text-red-600">
                <Trash2 className="h-4 w-4 mr-2"/> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialog open={openAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Resume?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete <strong>{resume.title}</strong>? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete} disabled={loading} className="bg-red-600 hover:bg-red-700">
                  {loading? <Loader2Icon className='animate-spin'/>:'Delete'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    )
}

export default ResumeItem
