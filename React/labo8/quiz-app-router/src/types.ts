export interface QuizQuestion {
  type: QuestionType;
  difficulty: Difficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer?:string;
}

export interface QuizResponse {
  response_code: number;
  results: QuizQuestion[];
}
export type QuestionType = "multiple" | "boolean";
export type Difficulty = "easy" | "medium" | "hard";