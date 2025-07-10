import type { TodoItem } from "../types";


interface TodoListItemProps{
    todo:TodoItem;
    markCompleted:(completed:boolean)=> void;
}

const TodoListItem = ({todo,markCompleted}:TodoListItemProps) => {

    return(
        <div>
            <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(event.target.checked)}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
        </div>              
    )

}
export default TodoListItem;