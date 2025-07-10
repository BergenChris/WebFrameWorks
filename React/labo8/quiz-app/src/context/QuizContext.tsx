import { createContext, useContext, useEffect, useState } from "react";
import type { QuizQuestion, QuizResponse } from "../types";

interface QuizContextType {
  questions: QuizQuestion[];
  score: number;
  loading: boolean;
  setUserAnswer: (answer: string, index: number) => void;
  reloadQuestions: () => void;
}

const defaultQuizContext: QuizContextType = {
  questions: [],
  score: 0,
  loading: false,
  setUserAnswer: () => {},
  reloadQuestions: () => {},
};

const QuizContext = createContext<QuizContextType>(defaultQuizContext);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const loadQuestions = async () => {
    setLoading(true);
    const res = await fetch("https://opentdb.com/api.php?amount=10");
    const data: QuizResponse = await res.json();
    setQuestions(data.results);
    setScore(0);
    setLoading(false);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const setUserAnswer = (answer: string, index: number) => {
    setQuestions((prev) => {
      const newQs = [...prev];
      if (newQs[index].user_answer === undefined) {
        if (answer === newQs[index].correct_answer) {
          setScore((prevScore) => prevScore + 1);
        }
      }
      newQs[index].user_answer = answer;
      return newQs;
    });
  };

  return (
    <QuizContext.Provider value={{ questions, score, loading, setUserAnswer, reloadQuestions: loadQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
