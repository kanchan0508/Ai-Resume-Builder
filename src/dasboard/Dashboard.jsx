import React, { useEffect, useState } from 'react'
import AddResume from './AddResume'
import GlobalApi from './../../Service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import ResumeItem from './ResumeItem'
import { motion } from 'framer-motion'
import { FileText, Plus, Sparkles } from 'lucide-react'

const Dashboard = () => {
  const { user } = useUser()
  const [resumeList, setResumeList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user && user?.primaryEmailAddress) {
      GetResumesList()
    }
  }, [user])

  const GetResumesList = () => {
    const emailAddress = user?.primaryEmailAddress?.emailAddress;
    
    if (emailAddress) {
      setLoading(true)
      GlobalApi.GetUserResumes(emailAddress).then(res => {
        setResumeList(res.data.data);
        setLoading(false)
      }).catch(err => {
        console.error("Error fetching resumes:", err);
        setLoading(false)
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <div className='flex items-center justify-center mb-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4'>
              <FileText className='w-6 h-6 text-white' />
            </div>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              My Resumes
            </h1>
          </div>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Create and manage your professional resumes with our AI-powered builder
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'
        >
          <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700'>
            <div className='flex items-center'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center'>
                <FileText className='w-6 h-6 text-white' />
              </div>
              <div className='ml-4'>
                <div className='text-2xl font-bold text-gray-900 dark:text-white'>
                  {resumeList.length}
                </div>
                <div className='text-gray-600 dark:text-gray-300'>Total Resumes</div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700'>
            <div className='flex items-center'>
              <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-white' />
              </div>
              <div className='ml-4'>
                <div className='text-2xl font-bold text-gray-900 dark:text-white'>AI</div>
                <div className='text-gray-600 dark:text-gray-300'>Powered</div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700'>
            <div className='flex items-center'>
              <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center'>
                <Plus className='w-6 h-6 text-white' />
              </div>
              <div className='ml-4'>
                <div className='text-2xl font-bold text-gray-900 dark:text-white'>New</div>
                <div className='text-gray-600 dark:text-gray-300'>Create Resume</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resume Grid */}
        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {[...Array(4)].map((_, index) => (
              <div key={index} className='animate-pulse'>
                <div className='bg-gray-200 dark:bg-gray-700 rounded-2xl h-80'></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          >
            <motion.div variants={itemVariants}>
              <AddResume />
            </motion.div>
            
            {resumeList?.map((resume, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ResumeItem resume={resume} refreshData={GetResumesList} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && resumeList.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='text-center py-20'
          >
            <div className='w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full flex items-center justify-center mx-auto mb-6'>
              <FileText className='w-12 h-12 text-purple-500' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              No resumes yet
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto'>
              Get started by creating your first AI-powered resume. It only takes a few minutes!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Dashboard