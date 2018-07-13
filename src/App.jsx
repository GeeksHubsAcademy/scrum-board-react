import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewList } from './store/actionCreators';

import './App.css';
import List from './List.component.jsx';



class App extends Component {
  constructor( props ) {
      super( props );
      this.state = {
          'addNewListText': '',
      }
  }
  
  addNewList = () => {
    this.props.addNewList(this.state.addNewListText)
    this.setState({ addNewListText: '' })
  }
  addNewTask(taskName, listId) {
    
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
  }
  markAsCompleted(taskId,listId, completedState) {
    // this.setState(prevState => {
    //     let newLists = prevState.lists.map(list => {
    //       if(list.listId === listId) {
    //         list.tasks = list.tasks.map(task => {
    //           if(task.taskId === taskId) {
    //             task.completed = completedState;
    //           }
    //           return task;
    //         })
    //       }
    //       return list
    //     }) ;
        
    //     return { lists: newLists }
    //   })
  }
 
  render() {
 
    return (
      <div className="App">
        <header className="addList">
          <input type="text" value={this.state.addNewListText} onChange={this.handleInputChange} onKeyUp={this.handleKeyup}/>
          <button onClick={this.addNewList}>add new list</button>
        </header>
        <section>
          <div className="lists">
            { this.props.lists.map( listData => 
            <List key={listData.listId} data={listData} />)}
          </div>
        </section>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({ lists: state.lists })
const mapDispatchToProps = (dispatch) => ({ addNewList: (name) => dispatch(addNewList(name)) })

const AppConnected = connect(  mapStateToProps,  mapDispatchToProps)(App)

export default AppConnected;
