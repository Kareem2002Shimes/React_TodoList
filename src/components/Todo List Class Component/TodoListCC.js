import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoStyle.css';

/* Todo include
1- add todo
2- display
3- cross off todo
4- show number of active todo
5- filter all/active/complete
6- delete todo
7- delete all complete
   7.1 only show if atleast one is complete  
8- button to toggle all on/off

*/
class TodoList extends Component {
    state = { 
        todos : [],
        todoToShow : "all",
        toggleAllComplete : true
     } 
     addTodo = (todo)=>{
         this.setState ((state)=>({
             todos : [todo,...state.todos]
         }))
     }
     toggleComplete = id =>{
         this.setState((state)=>({
             todos : state.todos.map(todo =>{
                 if (todo.id === id){
                    // suppose to update
                    return {
                        ...todo,
                        complete : ! todo.complete
                    }
                 }else{
                     return todo
                 }
             })
         }))
     }
    updateTodoToShow = (s)=>{
        this.setState({
            todoToShow : s
        })
    }
    handleDeleteTodo = (id) =>{
        this.setState((state)=>({
            todos : state.todos.filter(todo => todo.id !== id)
        }))
    }
    removeAllTodosThatAreComplete = () =>{
        this.setState((state)=>({
            todos : state.todos.filter(todo => !todo.complete)
        }))
    }

    render() { 
        //update todoToShow in state  
        let todos = []
        if (this.state.todoToShow === "all"){
            todos = this.state.todos;
        }else if(this.state.todoToShow === "active"){
            todos = this.state.todos.filter(todo => (!todo.complete));
        }else if(this.state.todoToShow === "complete"){
            todos = this.state.todos.filter(todo => (todo.complete));
        }
        
        return (
           <div className='container'>
            <TodoForm onSubmit= {this.addTodo}/>
            {todos.map(todo => (
            <Todo 
            key={todo.id} 
            todo={todo} 
            toggleComplete = {() => this.toggleComplete(todo.id)} 
            onDelete = {()=> this.handleDeleteTodo(todo.id)}
            />
            ))}
            <div className='todo-count'>Todo Left: {this.state.todos.filter(todo => (!todo.complete)).length}</div>
            <div>
                <button className='update-btn btn ' onClick={()=> this.updateTodoToShow("all")}>all</button>
                <button className='update-btn btn'onClick={()=> this.updateTodoToShow("active")}>active</button>
                <button className='update-btn btn'onClick={()=> this.updateTodoToShow("complete")}>complete</button>
            </div>
            {this.state.todos.some(todo => todo.complete) ? 
            <button className='all-btn btn' onClick={this.removeAllTodosThatAreComplete}>Remove all complete todos</button> 
            : null}
            <div>
                <button className='all-btn btn' onClick={
                    ()=>{
                       this.setState((state)=>({ 
                           todos : state.todos.map(todo => ({
                               ...todo,
                               complete : state.toggleAllComplete
                           })),
                           toggleAllComplete : !state.toggleAllComplete
                       }))
                    }
                }>Toggle all complete : {`${this.state.toggleAllComplete}`}</button>
            </div>
           </div>
        );
    }
}

export default TodoList;