import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../Service/GlobalApi";
import { toast } from "sonner";
import { AIChatSession } from "../../Service/AiModel";

const prompt =
  "Job title: {jobTitle}, Depends on job title give summery for Resume summery with 4-5 lines in JSON format with field experience level and summary for experience level fresher, mid-level or experienced";

const Summary = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState([]);

  const params = useParams();

  useEffect(() => {
    if (summery) {
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
    }
  }, [summery]);

  useEffect(() => {
    resumeInfo && setSummery(resumeInfo?.summery);
  }, []);

  const GenerateSummeryFromAi = async () => {
    if (!resumeInfo?.jobTitle) {
      toast.error("Please add a Job Title in 'Personal Details' first!");
      return;
    }
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();

      console.log("AI Response Text:", responseText);

      // Clean up the response text to ensure it's valid JSON
      const cleanText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      
      // Wrap the response in an array if it's not already one (handling your specific prompt logic)
      // Your prompt asks for JSON format, but sometimes it returns just the object or array.
      // Let's try to parse it directly first.
      let parsedResult;
      try {
          parsedResult = JSON.parse(cleanText);
      } catch (e) {
          // If direct parse fails, try wrapping in array as per your original code
          parsedResult = JSON.parse(`[${cleanText}]`);
      }

      // Ensure it's an array
      const finalResult = Array.isArray(parsedResult) ? parsedResult : [parsedResult];
      
      setAiGeneratedSummeryList(finalResult); 
    } catch (error) {
      console.error("Error generating summary:", error);
      toast.error("Failed to generate summary from AI.");
    } finally {
      setLoading(false);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        summery: summery,
      },
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        enableNext(true);
        setLoading(false);
        toast("Details Updated.");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const handleSummaryClick = (summary) => {
    setSummery(summary);
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary Details</h2>
        <p>Add a summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              variant="outline"
              type="button"
              size="sm"
              onClick={GenerateSummeryFromAi}
              className="border-primary text-primary flex gap-2"
            >
              <Brain className="h-4 w-4" />
              Generate from AI
            </Button>
          </div>

          <Textarea
            className="mt-5"
            required
            value={summery}
            onChange={(e) => setSummery(e.target.value)}
          />

          <div className="mt-3 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList.length > 0 && (
        <div className="mt-5">
          <h2 className="font-bold text-lg">AI-Generated Summaries</h2>
          {aiGeneratedSummeryList.map((item, index) => (
            <div
              key={index}
              className="p-4 mt-3 shadow rounded-lg border hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSummaryClick(item.summary)}
            >
              <h2 className="font-bold">Experience Level: {item.experience_level}</h2>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summary;
