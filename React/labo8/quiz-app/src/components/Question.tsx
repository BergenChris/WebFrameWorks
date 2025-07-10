import React from "react";
import type { QuizQuestion } from "../types";
import { MultipleChoiceQuestion } from "./MultipeChoiceQuestion";
import { TrueFalseQuestion } from "./TrueFalseQuestion";

interface QuestionProps {
  question: QuizQuestion;
  index: number;
  setUserAnswer: (answer: string) => void;
}

export const Question = ({ question, setUserAnswer }: QuestionProps) => {
  const answered = question.user_answer !== undefined;
  const correct = question.user_answer === question.correct_answer;
  const bg = answered ? (correct ? "lightgreen" : "lightcoral") : undefined;

  return (
    <div style={{ backgroundColor: bg, margin: 10, padding: 10 }}>
      <p>{question.question}</p>
      {!answered ? (
        question.type === "boolean" ? (
          <TrueFalseQuestion question={question} setUserAnswer={setUserAnswer} />
        ) : (
          <MultipleChoiceQuestion question={question} setUserAnswer={setUserAnswer} />
        )
      ) : (
        <>
          <p>Correct answer: {question.correct_answer}</p>
          <p>Your answer: {question.user_answer}</p>
        </>
      )}
    </div>
  );
};
