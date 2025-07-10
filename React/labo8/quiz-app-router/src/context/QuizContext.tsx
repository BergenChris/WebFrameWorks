import { createContext, useContext, useState } from "react";
import type { QuizQuestion } from "../types";

interface QuizContextType {
  questions: QuizQuestion[];
  loading: boolean;
  score: number;
  setUserAnswer: (answer: string, index: number) => void;
  setQuestions: React.Dispatch<React.SetStateAction<QuizQuestion[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const setUserAnswer = (answer: string, index: number) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      if (newQuestions[index].user_answer === undefined) {
        newQuestions[index].user_answer = answer;
        if (answer === newQuestions[index].correct_answer) {
          setScore((prevScore) => prevScore + 1);
        }
      }
      return newQuestions;
    });
  };

  return (
    <QuizContext.Provider
      value={{ questions, loading, score, setUserAnswer, setQuestions, setLoading, setScore }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used inside a QuizProvider");
  return context;
};
