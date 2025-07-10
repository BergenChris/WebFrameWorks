import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoInput = () => {
  const { addTodo } = useTodos();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Nieuw todo-item"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Toevoegen</button>
    </form>
  );
};

export default TodoInput;
