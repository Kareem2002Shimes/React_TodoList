import React, { useState } from "react";
import shortid from 'shortid';

function TodoForm(props){

    const [text,setText] = useState("")
    const handleChange = (e)=>{
        setText(
            e.target.value
        )
     } 
     const handleSubmit = (e)=>{
        e.preventDefault();
       
        props.onSubmit({
            id : shortid.generate(),
            text : text,
            complete : false
        });
       setText("")
     }
     return (
        <form onSubmit={handleSubmit}>
            <input className='input-field' type="text" onChange={handleChange} value={text}/>
            <button className='btn' onClick={handleSubmit}>Add Todo</button>
        </form>
    );
}




export default TodoForm;