import React, { Component } from 'react';

class Todo extends Component {
  
    render() { 
        return (
            <div className="d-f">
            <div style={{
               textDecoration : this.props.todo.complete ? "line-through" : ""
            }}
            onClick={this.props.toggleComplete}>{this.props.todo.text}
            </div>
             <button className="delete-btn" onClick={this.props.onDelete}>x</button>
         </div>
        );
    }
}


export default Todo;