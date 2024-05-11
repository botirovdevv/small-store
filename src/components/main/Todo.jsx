import React, { useState } from 'react'
import { initAsyncCompiler } from 'sass'

function Todo() {
    const initialState = [
        {
            id: 1, 
            title: "react"
        },
        {
            id: 1, 
            title: "vue"
        },
    ]

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState(initialState)

    const addButtonClick = () => {
        if(value.trim === ''){
            alert('input bosh')
        }else{
            let obj = {
                id: todos.length,
                title: value
            }

            setTodos([...todos, obj])
            setValue('')
        }
    }
  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={addButtonClick}>add</button>

        {
            todos.map((item) => (
                <div>
                    <h1>{item.id}</h1>
                    <p>{item.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Todo