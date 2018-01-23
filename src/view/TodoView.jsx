import {observer} from 'mobx-react'
import React, { Component } from 'react';
import TodoItems from '../component/baseComponent/TodoItem.jsx'
import '../css/App.scss'
import ObservableTodoStore from '../model/todoListModel'

const ObservableTodoStoreIns =  new ObservableTodoStore()
ObservableTodoStoreIns.addTodo('Task One')
ObservableTodoStoreIns.addTodo('Task Two')
ObservableTodoStoreIns.addTodo('Task Three')
ObservableTodoStoreIns.addTodo('Task Four')

@observer
class TodoView extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/logo.svg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Mobx</h1>
        </header>
        <ul>
          {
            ObservableTodoStoreIns.todos.map((todo, idx) =>  
            <TodoItems   todo={ todo } 
                          key={ idx } 
                          onRename={(todo) => ObservableTodoStoreIns.changeTaskName(todo)}
                          onToggleCompleted = {(todo) => ObservableTodoStoreIns.toggleTaskStatus(todo)}  />)
          }
        </ul>
       
      </div>
    
    );
  }
}
 
export default  TodoView



