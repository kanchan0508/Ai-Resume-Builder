import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

const ResumeItem = ({ resume }) => {
    if (!resume || !resume.title) {
      return <div>No Resume Data Available</div>; // Fallback message
    }
  
  
    return (
        <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}>
      <div className='ml-5 mt-5'>
      <div className='p-14  bg-gradient-to-b
          from-pink-100 via-purple-200 to-blue-200
        h-[280px] 
          rounded-t-lg border-t-4 border-red-400
        '
        style={{
          borderColor:resume?.themeColor
        }}
        >
              <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/cv.png" width={80} height={80} />
              </div>
        </div>
        <h2 className='text-center text-sm  mt-2'>{resume.title}</h2>
      </div>
      </Link>
    );
  };
  

export default ResumeItem
