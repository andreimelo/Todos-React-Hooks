import React,{useState}from 'react';
import Form from '../src/Form'
import './App.css';

export default() =>{  
 const [todos,setTodos] = useState([]);

  return(
    <div className="App">
    <Form onSubmit={text=>setTodos([{text,complete:false},...todos])}/>
    <div>
      {
        todos.map(({text})=> (
        <div key={text}>{text}</div>
        ))}
    </div>
 <button onClick={()=>setTodos([])}>Reset</button>
    </div>
  );
};