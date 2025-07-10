
import type { TodoItem } from '../types';
import TodoListItem from './TodoListItem';



interface TodoListProps{
    todos: TodoItem[];
    markCompleted:(index:number,completed:boolean)=> void;
}
const TodoList =({todos,markCompleted}:TodoListProps)=>{

    return(
        <div>
                {todos.map((todo, index) => (
                    <TodoListItem todo={todo} markCompleted={(completed:boolean)=>markCompleted(index,completed)} />
                ))}
            </div>
    )

}

export default TodoList;