import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider> 
      <h1>Mijn Todo App</h1>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
};

export default App;

//detodoprovider zorgt ervoor dat alle child components toegang hebben tot de todos via de context