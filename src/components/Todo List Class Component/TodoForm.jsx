import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {
    state = { 
        text : ""
     }
     handleChange = (e)=>{
        this.setState({
            text : e.target.value
        })
     } 
     handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit({
            id : shortid.generate(),
            text : this.state.text,
            complete : false
        });
        this.setState({
            text: ""
        });
     }
   
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input className='input-field' type="text" onChange={this.handleChange} value={this.state.text}/>
                <button className='btn' onClick={this.handleSubmit}>Add Todo</button>
            </form>
        );
    }
}
 
export default TodoForm;