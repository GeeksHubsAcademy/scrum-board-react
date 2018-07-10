import React from 'react';
import './Task.component.css';
class Task extends React.Component {
    render () {
        return (
            <div className="taskItem" id="task-123234">
                <button>X</button>
                <div className="taskText">
                    Aprender React
                  </div>
            </div>
        );
    }
}
export default Task;