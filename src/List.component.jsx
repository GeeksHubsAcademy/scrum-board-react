import React from 'react';
import './List.component.css';
import Task from './Task.component.jsx';

class List extends React.Component {
    render() {
        return (
            <div className="list"
                id="list-1243234">
                <div className="listHeader">
                    <h4>To do
                        <button>X</button>
                    </h4>

                </div>
                <div className="addTask">
                    <input type="text" />
                    <button>add task</button>
                </div>
                <Task/>
            </div>
        )
    }
}
export default List;