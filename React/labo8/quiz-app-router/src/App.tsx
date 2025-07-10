import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import { QuizProvider, useQuiz } from "./context/QuizContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { Question } from "./components/Question";

const DifficultySelection = () => {
  const navigate = useNavigate();
  const difficulties = ["easy", "medium", "hard"];

  return (
    <div>
      <h2>Select difficulty:</h2>
      <ul>
        {difficulties.map((diff) => (
          <li key={diff}>
            <button onClick={() => navigate(`/quiz/${diff}`)}>{diff}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const QuizApp = () => {
  const { difficulty } = useParams<{ difficulty: string }>();
  const {
    questions,
    loading,
    score,
    setUserAnswer,
    setQuestions,
    setLoading,
    setScore,
  } = useQuiz();

  const loadQuestions = async () => {
    if (!difficulty) return;
    setLoading(true);
    setScore(0);

    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`
      );
      const data = await res.json();
      setQuestions(data.results);
    } catch (e) {
      console.error("Failed to load questions", e);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [difficulty]);

  if (loading) return <LoadingIndicator />;

  return (
    <>
      {/* Difficulty menu also inside quiz page */}
      <DifficultySelection />

      <button onClick={loadQuestions}>Reload Questions</button>

      {questions.map((q, i) => (
        <Question
          key={i}
          question={q}
          index={i}
          setUserAnswer={(ans) => setUserAnswer(ans, i)}
        />
      ))}

      <div>
        Score: {score} / {questions.length}
      </div>
    </>
  );
};

const Main = () => {
  const { darkMode, toggle } = useTheme();
  const bg = darkMode ? "#222" : "#eee";
  const fg = darkMode ? "#eee" : "#222";

  return (
    <div
      style={{
        backgroundColor: bg,
        color: fg,
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <button onClick={toggle}>Switch to {darkMode ? "Light" : "Dark"} Mode</button>
      <h1>Quiz App</h1>

      <Routes>
        <Route path="/" element={<DifficultySelection />} />
        <Route path="/quiz/:difficulty" element={<QuizApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <QuizProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </QuizProvider>
    </ThemeProvider>
  );
};

export default App;
