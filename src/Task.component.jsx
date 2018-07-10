import React from 'react';
import './Task.component.css';
class Task extends React.Component {
    render () {
        return (
            <div className="taskItem" id={this.props.data.taskId}>
                <button>X</button>
                <div className="taskText">
                    {this.props.data.text}
                  </div>
            </div>
        );
    }
}
export default Task;