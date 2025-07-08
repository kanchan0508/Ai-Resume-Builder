import { Loader2Icon, MoreVertical, FileText, Edit, Eye, Download, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ResumeItem = ({ resume, refreshData }) => {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!resume || !resume.title) {
    return <div>No Resume Data Available</div>;
  }

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(resp => {
      toast('Resume deleted successfully!');
      refreshData();
      setLoading(false);
      setOpenAlert(false);
    }, (error) => {
      setLoading(false);
      toast('Error deleting resume');
    });
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Resume Preview */}
          <Link to={'/dashboard/resume/' + resume.documentId + "/edit"}>
            <div 
              className='h-48 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 dark:from-purple-900/50 dark:via-pink-900/30 dark:to-blue-900/50 flex items-center justify-center relative overflow-hidden'
              style={{
                background: resume?.themeColor ? 
                  `linear-gradient(135deg, ${resume.themeColor}20, ${resume.themeColor}10)` : 
                  'linear-gradient(135deg, #f3e8ff, #fdf2f8, #eff6ff)'
              }}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              <div className="relative z-10 text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg"
                  style={{
                    backgroundColor: resume?.themeColor || '#8b5cf6'
                  }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Resume Preview
                </div>
              </div>
            </div>
          </Link>

          {/* Resume Info */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate mb-1">
                  {resume.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Created {new Date(resume.createdAt || Date.now()).toLocaleDateString()}
                </p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <MoreVertical className='h-4 w-4 text-gray-500' />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem 
                    onClick={() => navigation('/dashboard/resume/' + resume.documentId + "/edit")}
                    className="flex items-center"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Resume
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigation('/my-resume/' + resume.documentId + "/view")}
                    className="flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Resume
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigation('/my-resume/' + resume.documentId + "/view")}
                    className="flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => setOpenAlert(true)}
                    className="flex items-center text-red-600 dark:text-red-400"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Resume
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <Link 
                to={'/dashboard/resume/' + resume.documentId + "/edit"}
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200"
                >
                  Edit
                </motion.button>
              </Link>
              <Link 
                to={'/my-resume/' + resume.documentId + "/view"}
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  View
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Resume</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{resume.title}"? This action cannot be undone and will permanently remove your resume.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={onDelete} 
              disabled={loading}
              className="bg-red-600 hover:bg-red-700"
            >
              {loading ? (
                <>
                  <Loader2Icon className='w-4 h-4 mr-2 animate-spin' />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Resume
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ResumeItem;