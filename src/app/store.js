import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import  todoReducer  from '../features/counter/todoSlice'
export const store = configureStore({
 
  reducer: {
    todos:todoReducer
  },
});

 let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}


