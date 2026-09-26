import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (text.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, deleteTodo, toggleTodo }}
        >
            {children}
        </TodoContext.Provider>
    );
}