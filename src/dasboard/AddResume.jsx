import { Loader2, PlusSquare, Sparkles } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/clerk-react";
import GlobalApi from './../../Service/GlobalApi';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = async () => {
    if (!resumeTitle.trim()) {
      return;
    }

    setLoading(true);
    const uuid = uuidv4();

    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      }
    };

    try {
      const res = await GlobalApi.CreateNewResume(data);
      if (res) {
        setLoading(false);
        setOpenDialog(false);
        setResumeTitle("");
        navigate("/dashboard/resume/" + res.data.data.documentId + "/edit");
      }
    } catch (error) {
      console.error("Error creating resume:", error);
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    setOpenDialog(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && resumeTitle.trim() && !loading) {
      onCreate();
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCardClick}
        className="group relative cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label="Create new resume"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl h-80 flex flex-col items-center justify-center p-8 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-purple-50/50 group-hover:to-pink-50/50 dark:group-hover:from-purple-900/20 dark:group-hover:to-pink-900/20">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg"
          >
            <PlusSquare className="w-8 h-8 text-white" />
          </motion.div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Create New Resume
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed mb-4">
            Start building your professional resume with our AI-powered tools
          </p>
          
          <div className="flex items-center text-purple-500 text-sm font-medium group-hover:text-purple-600 transition-colors">
            <Sparkles className="w-4 h-4 mr-1 group-hover:animate-pulse" />
            AI Powered
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </motion.div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <DialogTitle className="text-2xl font-bold">Create New Resume</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300">
              Give your resume a memorable title to get started
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Resume Title
              </label>
              <Input
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., Software Engineer Resume"
                className="w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                autoFocus
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  setOpenDialog(false);
                  setResumeTitle("");
                }}
                className="flex-1"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                onClick={onCreate}
                disabled={!resumeTitle.trim() || loading}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Create Resume
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddResume;