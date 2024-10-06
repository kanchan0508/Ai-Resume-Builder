import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

const ResumeItem = ({ resume }) => {
    if (!resume || !resume.title) {
      return <div>No Resume Data Available</div>; // Fallback message
    }
  
    return (
        <Link to={'/dashboard/resume/'+resume.resumeId+'/edit'}>
      <div className='ml-5 mt-5'>
        <div className='p-14 bg-secondary hover:scale-105 transition-all hover:shadow-md shadow-primary flex items-center border justify-center h-[280px]'>
          <Notebook />
        </div>
        <h2 className='text-center my-1 marker:'>{resume.title}</h2>
      </div>
      </Link>
    );
  };
  

export default ResumeItem
