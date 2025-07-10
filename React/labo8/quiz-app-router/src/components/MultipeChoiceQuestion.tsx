import { useState } from "react";
import type { QuizQuestion } from "../types";
import { useTheme } from "../context/ThemeContext";

interface Props {
  question: QuizQuestion;
  setUserAnswer: (answer: string) => void;
}
function decodeHtml(html:string) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export const MultipleChoiceQuestion = ({ question, setUserAnswer }: Props) => {
  const { darkMode } = useTheme();

  const shuffleAnswers = () => {
    const all = [question.correct_answer, ...question.incorrect_answers];
    return all.sort(() => Math.random() - 0.5);
  };

  const [answers] = useState<string[]>(shuffleAnswers());

  const background = darkMode ? "#333" : "#fff";
  const color = darkMode ? "#eee" : "#000";

  return (
    <div style={{ background, color, padding: 10, borderRadius: 4 }}>
      <select onChange={(e) => setUserAnswer(e.target.value)} defaultValue="">
        <option value="" disabled>
          Select an answer
        </option>
        {answers.map((answer, i) => (
          <option key={i} value={answer}>
            {decodeHtml(answer)}
          </option>
        ))}
      </select>
    </div>
  );
};
