import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg';
import { AIChatSession } from '../../../Service/AiModel';
import { toast } from 'sonner';

const PROMPT = 'position title: {positionTitle} , Depends on position title give me 5-7 points for my experience in resume , give me result in HTML tags';

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const [value, setValue] = useState(defaultValue || ""); // Fallback to empty string if defaultValue is undefined
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);

    console.log(defaultValue+ "value")

    React.useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    

    const GenerateSummeryFromAI = async () => {
        if (!resumeInfo?.experience[index]?.title) {
            toast('Please Add Position Title');
            return;
        }

        setLoading(true);
        const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);

        try {
            const result = await AIChatSession.sendMessage(prompt);
            const resp = await result.response.text();

            // Clean the response by removing brackets and formatting as plain text
            let cleanResponse = resp.replace(/[\[\]"]/g, '');
            cleanResponse = cleanResponse.replace(/,/g, '');

            setValue(cleanResponse.trim());
            onRichTextEditorChange(cleanResponse.trim(), "workSummery", index); // Pass the cleaned value back to the parent
        } catch (error) {
            console.error('Error generating summary from AI:', error);
            toast('Failed to generate summary');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summary</label>
                <Button variant="outline" size="sm"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary">
                    {loading ?
                        <LoaderCircle className='animate-spin' /> :
                        <>
                            <Brain className='h-4 w-4' /> Generate from AI
                        </>
                    }
                </Button>
            </div>
            <EditorProvider>
                <Editor
                    value={value}
                    onChange={(e) => {
                        const newValue = e.target.value; // Get the new value from the editor
                        setValue(newValue); // Update the local state
                        onRichTextEditorChange(newValue, "workSummery", index); // Pass the new value back
                    }}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;
