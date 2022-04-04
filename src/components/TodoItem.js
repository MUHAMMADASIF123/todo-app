import React from 'react'
import './todoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/counter/todoSlice';

const  TodoItem=({name,done,id})=> {
  const dispatch=useDispatch()
  const handleCheck=()=>{
    dispatch(setCheck(id))
  }
  return (
    <div className='todoItem'>
        {/* <p>{name}</p>
        <p>{done}</p>
        <p>{id}</p> */}
        <Checkbox
  checked={done}
  color="primary"
  onChange={handleCheck}
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>
<p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem