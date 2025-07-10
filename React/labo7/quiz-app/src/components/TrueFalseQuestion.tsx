import type { QuizQuestion } from "../types";

interface TrueFalseQuestionProps{
    question:QuizQuestion;
    setUserAnswer: (answer:string) => void;

}

export const TrueFalseQuestion = ({question,setUserAnswer}:TrueFalseQuestionProps) => {


  return(
    <div>
        <input type="radio" name={question.question} onChange={()=>setUserAnswer("True")}/> True
        <input type="radio" name={question.question} onChange={()=>setUserAnswer("False")}/> False
    </div>
  )
}