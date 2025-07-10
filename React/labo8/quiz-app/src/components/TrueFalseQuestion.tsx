import type { QuizQuestion } from "../types";
import { useTheme } from "../context/ThemeContext";

interface Props {
  question: QuizQuestion;
  setUserAnswer: (answer: string) => void;
}

export const TrueFalseQuestion = ({ question, setUserAnswer }: Props) => {
  const { darkMode } = useTheme();
  const labelColor = darkMode ? "#eee" : "#111";

  return (
    <div>
      {["True", "False"].map((option) => (
        <label key={option} style={{ color: labelColor, marginRight: 10 }}>
          <input
            type="radio"
            name={question.question}
            value={option}
            onChange={() => setUserAnswer(option)}
          />{" "}
          {option}
        </label>
      ))}
    </div>
  );
};
