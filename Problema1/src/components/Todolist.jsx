import { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');


    const addTodo = () => {
        if (newTodo.trim() === '') return; // No agregar tareas vacías
        const newTodoItem = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };

    const toggleCompletion = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <br />

            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Agregar tarea"
            />
            <br />
            <button onClick={addTodo}>Agregar</button>
            <br />

            <ul className="list-group">

                {todos.map((todo) => (
                    <li className="list-group-item " key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

