import React from 'react';

export default function RoutineCard({ content, setTodo, todo }) {
    //remove card
    const removeCard = (itemKey) => {
        setTodo(todo.filter(({ key }) => key !== itemKey));
    }

    //toggle activity
    const toggleDone = () => {
        let toggle = !content.completed;
        setTodo(todo.map(item => item.key === content.key ? {...item, completed: toggle}: item))
    }

    return (
        <div>
            <p>{content.task}</p>
            <button onClick={() => removeCard(content.key)}>done</button>
            <button onClick={toggleDone}>{content.completed ? 'true' : 'false'}</button>
        </div>
    )
}