import React, { useEffect, useState } from 'react';
import "./App.css";
import { collection, query, orderBy, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import Todo from './ToDo';
import "./ToDoMain.css";

const q=query(collection(db,'todos'),orderBy('timestamp','desc'));

function ToDoMain() {
const [todos,setTodos]=useState([]);
const [input, setInput]=useState('');
useEffect(() => {
onSnapshot(q,(snapshot)=>{
setTodos(snapshot.docs.map(doc=>({
id: doc.id,
item: doc.data()
})))
})
},[input]);
const addTodo=(e)=>{
e.preventDefault();
addDoc(collection(db,'todos',),{
    todo:input,
    timestamp: serverTimestamp()
    })
setInput('')
};

return (
<div className='background'>
<h1> Kauppalista</h1>
<form className='lineupForm'>
<input className='inputBox' value={input}
onChange={e=>setInput(e.target.value)} />
<button className='buttonSubmit' onClick={addTodo}  >+</button>
</form>
<ul>
{todos.map(item=> <Todo key={item.id} arr={item} />)}
</ul>
</div>

);
}
 
export default ToDoMain;