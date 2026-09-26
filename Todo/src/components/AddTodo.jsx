import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
    const [text, setText] = useState("");
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <input
                type="text"
                placeholder="Enter a task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">
                Add
            </button>
        </form>
    );
}

export default AddTodo;