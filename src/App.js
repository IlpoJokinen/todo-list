import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  }
  const deleteItem = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setTodos(todos.filter((item, index) =>parseInt(e.target.id) !== index ))
  }
  const inputChaged = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value});
  }
  return (
  
    <div className="App">
      <div id="header"><h2>Simple Todolist</h2></div>
      <div id="input">
      <div id="addTodo"><b>Add todo:</b></div>
      <form onSubmit={addTodo}>
       Description:<input type="text" name="desc" onChange={inputChaged} value={todo.desc}/>   
       Date:<input type="text" name="date" onChange={inputChaged} value={todo.date}/>
       <input type="submit" value="Add"/>
      </form>
      </div>
      <TodoTable todos={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
