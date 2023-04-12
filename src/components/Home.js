import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'

import { v4 as uuidv4 } from 'uuid'

const Home = () => {

    const [ todos, setTodos ] = useState([])

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
        const filteredTodo = prevTodos.filter((todo) => todo.id !== id)
            return filteredTodo 
        })
    }

    return (
        <div className={style.wrapper}>
            <h1 style={{ color: '#000000', textAlign: 'center' }}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo}/>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
    )
}

export default Home