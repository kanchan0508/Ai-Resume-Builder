import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import DetailsForm from "@/forms/DetailsForm";
import Summary from "@/forms/Summary";
import Experience from "@/forms/Experience";
import Education from "@/forms/Education";
import Skills from "@/forms/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import ThemeColor from "@/dasboard/ThemeColor";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const {resumeId} = useParams()
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link to={"/dashboard"} >
           <Button><Home/></Button>
          </Link>
          <ThemeColor />
        </div>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              {" "}
              <ArrowLeft />{" "}
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex gap-2 "
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />{" "}
          </Button>
        </div>
      </div>
      {/* Add form personal Details form here */}
      {activeFormIndex === 1 ? (
        <DetailsForm enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 2 ? (
        <Summary enableNext={(v) => setEnableNext(v)} />
      ) 
      : activeFormIndex === 3 ? (
        <Experience enableNext={(v) => setEnableNext(v)} />
      ): activeFormIndex === 4 ? (
        <Education  enableNext={(v) => setEnableNext(v)} />
      ): activeFormIndex === 5 ? (
        <Skills enableNext={(v) => setEnableNext(v)} />
      ):activeFormIndex === 6 ?  <Navigate to={'/my-resume/'+resumeId+'/view'} />
      
      :null}
      {/* summery */}

      {/* Experience */}

      {/* Education */}

      {/* Skill */}
    </div>
  );
};

export default FormSection;
