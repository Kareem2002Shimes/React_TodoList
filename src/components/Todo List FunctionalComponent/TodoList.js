import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from './Todo';
import './TodoStyle.css';

function TodoList(){

    let [todos,setTodos] = useState([]);
    const [todoToShow,setTodoToShow] = useState("all");
    const [toggleAllComplete,setToggleAllComplete] = useState(true);

    const  addTodo = todo =>{

        setTodos(
            [todo,...todos]
        )
    }
    const toggleComplete = id =>{
        setTodos(todos.map(todo =>{
            if (todo.id === id){
                // suppose to update
                return {
                    ...todo,
                    complete : ! todo.complete
                }
             }else{
                 return todo
             }
        }))
    }
    const handleDeleteTodo = (id) =>{
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    const removeAllTodosThatAreComplete = () =>{
        setTodos(
            todos.filter(todo => !todo.complete)
        )
      
    }
    const updateTodoToShow = (s)=>{

       setTodoToShow(
           s
       )
    }

   //update todoToShow in state  
    if(todoToShow === "active"){
        todos = todos.filter(todo => (!todo.complete));
        
    }else if(todoToShow === "complete"){
        todos = todos.filter(todo => (todo.complete));
    }

    return(
        
        <div className="container">
            <TodoForm onSubmit= {addTodo}/>
            {todos.map(todo =>(
                <Todo
                 key= {todo.id} todo = {todo} 
                 toggleComplete = {() => toggleComplete(todo.id)} 
                 onDelete = {()=> handleDeleteTodo(todo.id)} />
            ))}
          
           <div>
                <button className='update-btn btn ' onClick={()=> updateTodoToShow("all")}>all</button>
                <button className='update-btn btn'onClick={()=> updateTodoToShow("active")}>active</button>
                <button className='update-btn btn'onClick={()=> updateTodoToShow("complete")}>complete</button>
            </div>
            {todos.some(todo => todo.complete) ? 
            <button className='all-btn btn' onClick={removeAllTodosThatAreComplete}>Remove all complete todos</button> 
            : null}
              <button className='all-btn btn' onClick={
                    ()=>{
                        setTodos(
                            todos.map(todo =>({
                                ...todo,
                                complete : toggleAllComplete,
                            }
                            ))
                        )
                        setToggleAllComplete(
                            !toggleAllComplete
                        )
                      
                    }
                }>Toggle all complete : {`${toggleAllComplete}`}</button>
       </div>
    )
}

export default TodoList;