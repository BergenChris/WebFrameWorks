import React, { createContext, useContext, useEffect, useState } from "react";
import type { QuizQuestion, QuizResponse } from "./types";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { Question } from "./components/Question";

// ----------- Theme Context ------------------
interface ThemeContextType {
  darkMode: boolean;
  toggle: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => setDarkMode((d) => !d);

  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ----------- Quiz Context ------------------
interface QuizContextType {
  questions: QuizQuestion[];
  loading: boolean;
  score: number;
  setUserAnswer: (answer: string, index: number) => void;
  reloadQuestions: () => void;
}
const QuizContext = createContext<QuizContextType | undefined>(undefined);
const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within QuizProvider");
  return context;
};
const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const reloadQuestions = async () => {
    setLoading(true);
    const res = await fetch("https://opentdb.com/api.php?amount=10");
    const data: QuizResponse = await res.json();
    setQuestions(data.results);
    setScore(0);
    setLoading(false);
  };

  useEffect(() => {
    reloadQuestions();
  }, []);

  const setUserAnswer = (answer: string, index: number) => {
    const updated = [...questions];
    updated[index].user_answer = answer;
    if (answer === updated[index].correct_answer) {
      setScore((s) => s + 1);
    }
    setQuestions(updated);
  };

  return (
    <QuizContext.Provider value={{ questions, loading, score, setUserAnswer, reloadQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

// ----------- QuizApp component ---------------
const QuizApp = () => {
  const { questions, loading, score, setUserAnswer, reloadQuestions } = useQuiz();

  if (loading) return <LoadingIndicator />;
  return (
    <>
      <button onClick={reloadQuestions}>Reload Questions</button>
      {questions.map((q, i) => (
        <Question key={i} question={q} index={i} setUserAnswer={(ans) => setUserAnswer(ans, i)} />
      ))}
      <div>Score: {score} / {questions.length}</div>
    </>
  );
};

// ----------- Main app ------------------------
const App = () => {
  const { darkMode, toggle } = useTheme();

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <button onClick={toggle}>Switch to {darkMode ? "Light" : "Dark"} Mode</button>
      <h1>Quiz App</h1>
      <QuizApp />
    </div>
  );
};

// ----------- Wrap with providers ---------------
const Root = () => (
  <ThemeProvider>
    <QuizProvider>
      <App />
    </QuizProvider>
  </ThemeProvider>
);

export default Root;

