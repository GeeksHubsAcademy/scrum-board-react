import React from 'react';
import './List.component.css';
import Task from './Task.component.jsx';
import ListType from './List.type.js';

class List extends React.Component {
    static propTypes = {
        data: ListType
    }
    render() {
        return (
            <div className="list"
                id={this.props.data.listId}>
                <div className="listHeader">
                    <h4>{this.props.data.name}
                        <button>X</button>
                    </h4>
                </div>
                <div className="addTask">
                    <input type="text" />
                    <button>add task</button>
                </div>
                <Task data={this.props.data.tasks[0]}/>
            </div>
        )
    }
}
export default List;