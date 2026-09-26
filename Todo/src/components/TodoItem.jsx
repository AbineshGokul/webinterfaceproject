import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
    const { deleteTodo, toggleTodo } = useContext(TodoContext);

    return (
        <div className="todo-item">
            <div
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </div>

            <button onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;