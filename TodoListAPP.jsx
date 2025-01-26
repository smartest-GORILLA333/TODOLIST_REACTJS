import React, { Component } from "react";
import './App.css';

class TodoListAPP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            task: ""
        };
    }

    ontype = (event) => {
        this.setState({ task: event.target.value });
    }

    add = () => {
        const task = this.state.task;
        const tasks = this.state.tasks;
        if (task.trim() !== '') {
            this.setState({
                tasks: [...tasks, task],
                task: "",
            });
        }
    }

    modify=(index)=>{
        let modifiedTask = prompt('please enter your modified task here : ')
        if (modifiedTask != null){
            this.setState((ps)=>{
                let modifiedTasks = [...ps.tasks];
                modifiedTasks[index] = modifiedTask;
                return({tasks: modifiedTasks})
            })
        }
    }



    delete = (index) => {
        this.setState((ps) => ({
            tasks: ps.tasks.filter((_, i) => i !== index)
        }));
    }

    clearTasks = () => {
        this.setState({ tasks: [] });
    }

    render() {
        return (
            <div className="container">
                <h1>SIMPLE TODOLIST WITH REACT JS</h1>
                <div className="s_container">
                <div className="input">
                    <input onChange={this.ontype} type="text" placeholder="THE TASK GOES HERE" />
                    <button onClick={this.add} id="addBtn">ADD</button>
                </div>
                <div className="tasksList">
                    <ul>
                        {this.state.tasks.map((t, i) => (
                            <li key={i}>
                                {i + " : " + t}
                                <div className="delOrMod">
                                    <button onClick={()=>this.modify(i) } id="modBtn">MODIFY</button>
                                <   button onClick={() => this.delete(i)} id="delBtn">DELETE</button>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                    <button onClick={this.clearTasks} id="clrBtn">CLEAR</button>
                </div>
            </div>
            </div>
            
        )
    }
};

export default TodoListAPP;
