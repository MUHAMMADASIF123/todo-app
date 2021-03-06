import React, { useState } from 'react'
import './input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/counter/todoSlice'



function Input() {
    const [input,setInput]=useState('')
    const dispatch=useDispatch();
const addToDo=()=>{
  console.log(`Adding ${input}`)
  dispatch(saveTodo({
    item:input,
    done:false,
    id:Date.now()
  }))

}
  return (
    <div className='input'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addToDo}>Add !</button>
        
        </div>
  )
}

export default Input