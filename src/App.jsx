import React, { Component } from 'react';
import './App.css';
import List from './List.component.jsx';
class App extends Component {
  constructor( props ) {
      super( props );
      this.state = {
          'addNewListText': '',
          "lists": JSON.parse(localStorage.getItem('lists')) || [],

      }
  }
  generateId(namespace) {
    return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`

  }
  addNewList = () => {
    const newList = {
                  "listId": this.generateId('list'),
                  "name": this.state.addNewListText,
                  "tasks": []
              }
    this.setState(prevState => {
      prevState.lists.push(newList);
      return ({lists: prevState.lists, addNewListText: ''});
    });

  }
  addNewTask(taskName, listId) {
    const newTask = {
                      "taskId": this.generateId('task'),
                      "text": taskName,
                      "completed": false,
                      "color": "white",
                      "listId": listId
                  }
   this.setState(prevState => {
     const newLists = prevState.lists.map( list => {
       if (list.listId === listId) {
         list.tasks.push(newTask)
       }
       return list;
     })
     return { lists: newLists}
   })
  }
  handleInputChange = (e) => {
    this.setState({addNewListText: e.target.value})
  }
  handleKeyup = (e) => {
    if(e.keyCode === 13) {
      this.addNewList();
    }
  }
  removeList(listId) {
      this.setState(prevState => {
        let newLists = prevState.lists.filter( list => list.listId !== listId) ;
        return { lists: newLists }
      })
  }
  markAsCompleted(taskId,listId, completedState) {
    this.setState(prevState => {
        let newLists = prevState.lists.map(list => {
          if(list.listId === listId) {
            list.tasks = list.tasks.map(task => {
              if(task.taskId === taskId) {
                task.completed = completedState;
              }
              return task;
            })
          }
          return list
        }) ;
        
        return { lists: newLists }
      })
  }
 
  render() {
    localStorage.setItem('lists', JSON.stringify(this.state.lists));
    return (
      <div className="App">
        <header className="addList">
          <input type="text" value={this.state.addNewListText} onChange={this.handleInputChange} onKeyUp={this.handleKeyup}/>
          <button onClick={this.addNewList}>add new list</button>
        </header>
        <section>
          <div className="lists">
            { this.state.lists.map( listData => 
            <List key={listData.listId} data={listData} onHandleNewTask={this.addNewTask.bind(this)} onHandleRemoveList={this.removeList.bind(this)} onHandleMarkAsCompleted={this.markAsCompleted.bind(this)}/>)}
          </div>
        </section>
      </div>
    );
  }
}
export default App;
