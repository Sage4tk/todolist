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

    //strikethrough style
    const cancel = {
        textDecoration: 'line-through'
    }
    const good = {
        textDecoration: 'none'
    }

    return (
        <div className='list-card'>
            <p style={content.completed ? cancel : good}>{content.task}</p>
            <div>
                <button onClick={() => removeCard(content.key)}>Remove<i className="fi-rr-add"></i></button>
                <button onClick={toggleDone}>Done</button>
            </div>
        </div>
    )
}