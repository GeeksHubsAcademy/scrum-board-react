import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
<div className="App">
    <header className="addList">
        <input type="text" />
        <button>add new list</button>
    </header>
    <section>
        <div className="lists">
            <div class="list"
                 data-listId="list-1243234">
                <div class="listHeader">
                    <h4>To do
                        <button>X</button>
                    </h4>

                </div>
                <div class="addTask">
                    <input type="text"/>
                    <button>add task</button>
                </div>
                <div class="taskItem" data-taskId="task-123234">
                  <button>X</button>
                  <div class="taskText">
                    Aprender React
                  </div>
                </div>
            </div>
        </div>
    </section>
</div>
        );
      }
    }
export default App;