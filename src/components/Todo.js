import React from 'react'

import style from './todo.module.css'

const Todo = props => {

    // eslint-disable-next-line
    const { name, profession } = props.todo
    const {  id } = props

    const handleClick = (id) => {
        props.onRemoveTodo(id)
    }

    return (
        <article className={style.todo}>
            <div>
                <h2>{name}</h2>

                <h4>{profession}</h4>
            </div>
            <div onClick={() => {handleClick(id)}}>
                <i className='fa fa-trash'></i>
            </div>
        </article>
    )
}

export default Todo