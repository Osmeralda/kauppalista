import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import "./ToDo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const trashCan = <FontAwesomeIcon icon={faTrashCan} className="white" />


const Todo=({arr})=>{
    return (
    <div className='output'>
    <p className='item'>{arr.item.todo}</p>
    <button className='button' onClick={() => {deleteDoc(doc(db,'todos',arr.id))}}>{trashCan}</button>
    
    </div>
    )
    };

    export default Todo;
