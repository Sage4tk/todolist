import React from 'react';

export default function RoutineCard({ content, setTodo, todo }) {
    const removeCard = (itemKey) => {
        setTodo(todo.filter(({ key }) => key !== itemKey));
    }

    return (
        <div>
            <p>{content.key}. {content.task}</p>
            <button onClick={() => removeCard(content.key)}>done</button>
        </div>
    )
}