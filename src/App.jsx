import React, { Component } from 'react';
import './App.css';
import List from './List.component.jsx';
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
                    <List/>
                </div>
            </section>
        </div>
        );
      }
    }
export default App;
