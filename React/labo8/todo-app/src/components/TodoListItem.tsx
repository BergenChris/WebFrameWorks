import { useTodos } from "../context/TodoContext";
import type { TodoItem } from "../types";

interface TodoListItemProps {
  todo: TodoItem;
  index: number;
}

const TodoListItem = ({ todo, index }: TodoListItemProps) => {
  const { markCompleted } = useTodos();

  if (todo.completed) {
    // Taak is af, geen checkbox tonen
    return (
      <div>
        <span style={{ textDecoration: "line-through" }}>{todo.name}</span>
      </div>
    );
  }

  // Taak niet af, checkbox tonen
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => markCompleted(index, e.target.checked)}
      />
      <span>{todo.name}</span>
    </div>
  );
};

export default TodoListItem;
