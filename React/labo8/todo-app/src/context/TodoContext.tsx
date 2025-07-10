import { createContext, useContext, useEffect, useState } from "react";
import type { TodoItem } from "../types";

interface TodoContextType {
  todos: TodoItem[];
  addTodo: (name: string) => void;
  markCompleted: (index: number, completed: boolean) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=25")
      .then((res) => res.json())
      .then((data) => {
        const mapped: TodoItem[] = data.map((item: any) => ({
          name: item.title,
          completed: item.completed,
        }));
        setTodos(mapped);
      });
  }, []);

  const addTodo = (name: string) => {
    setTodos((prev) => [...prev, { name, completed: false }]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, markCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be used inside a TodoProvider");
  return context;
};
