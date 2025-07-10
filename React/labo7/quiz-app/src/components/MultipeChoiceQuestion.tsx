import { useState } from "react";
import type { QuizQuestion } from "../types";

interface MultipeChoiceQuestionProps{
    question:QuizQuestion;
    setUserAnswer: (answer:string) => void;

}

const sortAnswer = (correctAnswer:string,wrongAnswers:string[])=> {
    let allAnswers = [correctAnswer,...wrongAnswers]
    allAnswers.sort((a,b)=>Math.random()-0.5);
    return allAnswers;

}

export const MultipleChoiceQuestion = ({question,setUserAnswer}:MultipeChoiceQuestionProps) => {

    const [allAnswers,SetAllAnswers] = useState(sortAnswer(question.correct_answer,question.incorrect_answers))
    

    return(
        <div>
            <select onChange={(e)=>setUserAnswer(e.target.value)}>
                <option value=""></option>
                {allAnswers.map((answer,i)=>(
                    <option key={i }value={answer}>{answer}</option>
                ))}
            </select>
        </div>
    )
}