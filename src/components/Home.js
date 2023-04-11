import React from 'react'
import Todos from './Todos'
import style from './home.module.css'

const Home = () => {

    const tempUserData = [
        {
            'id': '1',
            'name': "Sabbir",
            'profession': "Web Designer"
        },
        {
            'id': '2',
            'name': "Moudud",
            'profession': "Web Application Engineer"
        },
    ]

  return (
    <div className={style.wrapper}>
        <h1 style={{color: '#000000', textAlign: 'center'}}>Todo App</h1>
        <Todos todos={tempUserData}/>
    </div>
  )
}

export default Home