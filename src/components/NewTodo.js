import React, { useState } from 'react'
import style from './newTodo.module.css';

const NewTodo = (props) => {

    const [todo, setTodo] = useState({ name: '', profession: '' })
    const { name, profession } = todo;

    const handleChange = (e) => {
        const name = e.target.name
        setTodo((prevTodo) => {
            return { ...prevTodo, [name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTodo(todo)
        setTodo({ name: '', profession: '' })
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div>
                <div className={style.formInner}>
                    <label htmlFor='name'>Name: </label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.formInner}>
                    <label htmlFor='profession'>Profession: </label>
                    <input
                        type="text"
                        id='profession'
                        name='profession'
                        value={profession}
                        onChange={handleChange}
                    />
                </div>
                <button className={style.button}>
                    Add Todo
                </button>
            </div>
        </form>
    )
}

export default NewTodo