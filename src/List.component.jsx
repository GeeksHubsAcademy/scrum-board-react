import React from 'react';
import './List.component.css';
import Task from './Task.component.jsx';
import ListType from './List.type.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        data: ListType,
        onHandleMarkAsCompleted: PropTypes.func.isRequired,
        onHandleNewTask: PropTypes.func.isRequired,
        onHandleRemoveList: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            newTaskName: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({newTaskName: e.target.value})
    }
    handleAddNewTask = (e) => {
        if(e.keyCode === 13 || e.type === 'click') {
            this.props.onHandleNewTask(this.state.newTaskName, this.props.data.listId)
             this.setState({newTaskName: ''})
        }
    }
    handleRemoveList = () => {
        this.props.onHandleRemoveList(this.props.data.listId)
    }
    render() {
        return (
            <div className="list"
                id={this.props.data.listId}>
                <div className="listHeader">
                    <h4>{this.props.data.name}
                        <button onClick={this.handleRemoveList}>X</button>
                    </h4>
                </div>
                <div className="addTask">
                    <input 
                        type="text" 
                        value={this.state.newTaskName} 
                        onChange={this.handleInputChange} 
                        onKeyUp={this.handleAddNewTask} />
                    <button onClick={this.handleAddNewTask}>add task</button>
                </div>
                {this.props.data.tasks.map(taskData => 
                <Task 
                    data={taskData} 
                    onHandleMarkAsCompleted={this.props.onHandleMarkAsCompleted} 
                    key={taskData.taskId}/>)}
            </div>
        )
    }
}
export default List;