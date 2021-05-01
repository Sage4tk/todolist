import React, { useState } from 'react';

export default function Form({ todo, setTodo }) {
    const [input, setInput] = useState('');
    
    //onchange handler
    const inputHander = (e) => {
        setInput(e.target.value);
    }

    //submit
    const sumbit = (e) => {
        e.preventDefault();
        setTodo([
            ...todo,
            {
                task: input,
                completed: false,
                key: Math.max(...todo.map(data => data.key), 0) + 1
            }
        ])
        setInput('');
    }

    return (
        <form>
            <div>
                <label>Routine</label>
                <input type="text" onChange={inputHander} value={input} />
            </div>
            <div>
                <button type="submit" onClick={sumbit}>submit</button>
            </div>
        </form>
    )
}