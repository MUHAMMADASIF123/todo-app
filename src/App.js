import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import './components/input.css'
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import {selectTodoList} from './features/counter/todoSlice'
function App() {
  const todoList=useSelector(selectTodoList)
  return (
    <div className="App">
       <Input/>
      <div className='app_container'>
        <div className='app_todo'>
{todoList.map((item=>(
  
  <TodoItem
  name={item.item}
  done={item.done}
  id={item.id}
  />

)))}
{/* {todoList.map((item) => (
        <div  key={item.id} className="user">{item.item}</div>
     
    ))} */}
        </div>

      </div>
     
    </div>
  );
}

export default App;
