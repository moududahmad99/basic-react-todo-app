import React from 'react'

import style from './todo.module.css'

const Todo = props => {

    // eslint-disable-next-line
    const { name, id, profession } = props.todo

    return (
        <article className={style.todo}>
            <div>
                <h2>{name}</h2>

                <h4>{profession}</h4>
            </div>
            <div>
                <i className='fa fa-trash'></i>
            </div>
        </article>
    )
}

export default Todo