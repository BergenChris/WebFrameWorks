import { useState } from "react";
import type { QuizQuestion } from "../types";
import { MultipleChoiceQuestion } from "./MultipeChoicequestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";


interface QuestionProps{
    question:QuizQuestion;
    setUserAnswer:(answer:string)=>void;

}
export const Question = ({question,setUserAnswer}:QuestionProps) => {
    
    let color = "white";



    if (question.user_answer !== undefined)
    {
        if (question.user_answer === question.correct_answer)
        {
            color="lightgreen";
        }
        else
        {
            color="red";
        }
    }

    return (
        <>
           <div style={{backgroundColor:color}}>{question.question}
           {question.user_answer === undefined &&
            <div>
                {question.type === "boolean" && <TrueFalseQuestion question={question} setUserAnswer={setUserAnswer}/>}
                {question.type === "multiple" && <MultipleChoiceQuestion question={question} setUserAnswer={setUserAnswer}/>}
            </div>
           }
           {question.user_answer && 
            <div>
                <p>Answer: {question.correct_answer}</p>
                <p>Your answer: {question.user_answer}</p>
            </div>
           }
            </div>
        </>
    
)
}