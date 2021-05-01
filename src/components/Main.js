import React, { useState, useEffect } from 'react';

//components
import Form from './Form';
import Routine from './Routine';

export default function Main() {
    //todos
    const [todo, setTodo] = useState([]);

    //get localstorate to display
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('list'));
        if (list !== null) {
            setTodo(list);
        }
    }, []);

    //save 
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(todo));
    });

    return (
        <div>
            <Form todo={todo} setTodo={setTodo} />
            <Routine todo={todo} setTodo={setTodo} />
        </div>
    )
}