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
  const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState({});

  const params = useParams();

  useEffect(() => {
    if (summery) {
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
    }
  }, [summery]);

  const GenerateSummeryFromAi = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
  
    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();
  
      console.log("AI Response Text:", responseText); // Log the raw response
  
      // Fix: Wrap the response in an array
      const fixedResponseText = `[${responseText}]`; // Wrap in square brackets
  
      // Try parsing the corrected response
      try {
        const parsedResult = JSON.parse(fixedResponseText);
        setAiGeneratedSummeryList(parsedResult); // Set the parsed array
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        toast.error("Invalid response format from AI service.");
      }
  
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
              onClick={() => GenerateSummeryFromAi()}
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

      {Object.keys(aiGeneratedSummeryList).length > 0 && (
        <div>
          <h2 className="font-bold text-lg">Suggestions</h2>
          {Object.entries(aiGeneratedSummeryList).map(([key, item]) => (
            <div key={key}>
              <h2 className="font-bold">Level: {item.experience_level}</h2>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summary;
