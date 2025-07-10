import { useEffect, useState } from 'react'
import type {QuizQuestion,QuizResponse,Difficulty,QuestionType} from "./types";
import { LoadingIndicator } from './components/LoadingIndicator';
import { Question } from './components/Question';



const QuizApp = () => {

  const [questions,setQuestions] = useState<QuizQuestion[]>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [score,setScore] =  useState(0);

  // useEffect(()=>{
  //   setLoading(true);
  //   fetch("https://opentdb.com/api.php?amount=10")
  //     .then(res => res.json())
  //     .then(data => {
  //       setQuestions(data.results || []);      
  //     })
  //   setLoading(false);
      
  // },[]);
  
  const loadQuestions = async () => {
    setLoading(true)
    let response = await fetch("https://opentdb.com/api.php?amount=10")
    let data:QuizResponse = await response.json();
    setQuestions(data.results);
    setLoading(false);
  }
  useEffect(()=>{
    loadQuestions();
    
  },[]);

  const setUserAnswer = (answer:string, index:number)=>{
    let newQuestions = [...questions];  // opnieuw laden omdat we een ? hebben ingevuld met een waarde
    newQuestions[index].user_answer = answer;
    if (answer === newQuestions[index].correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
    setQuestions(newQuestions)
  }


  return(
    <>
      <div>
        {loading && <LoadingIndicator/>}
      </div>
      {questions.map((question,index)=> (
        <div key={question.question}>
          <h1 style={{fontSize:10}}><Question question={question} setUserAnswer={(answer)=>setUserAnswer(answer,index)}/></h1>
        </div>
      ))}
      <div>Score: {score} / 10</div>
    </>
  )
}






function App() {


  return (
    <>
      <QuizApp/>
    </>
  )
}

export default App
