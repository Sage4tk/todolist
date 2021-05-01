import React from 'react';

//component
import RoutineCard from './RoutineCard';

export default function routine({ todo, setTodo }) {
    if (todo.length === 0) return (null);
    return (
        <div>
            <h1>List</h1>
            {todo.map((content) => (
                <RoutineCard content={content} key={content.key} setTodo={setTodo} todo={todo} />
            ))}
        </div>
    )
}