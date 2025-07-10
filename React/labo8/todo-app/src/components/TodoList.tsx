import TodoListItem from "./TodoListItem";
import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useTodos(); // hier haalj je het uit de context

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <TodoListItem todo={todo} index={index} />
        </div>
      ))}
    </>
  );
};

export default TodoList;

