import {observer} from 'mobx-react'
import React, { Component } from 'react';
import TodoItems from '../component/baseComponent/TodoItem.jsx'
import '../css/App.scss'
import {ObservableTodoStore,peopleStore} from '../model/todoListModel'

const ObservableTodoStoreIns =  new ObservableTodoStore()
const peopleStoreIns = new peopleStore()
ObservableTodoStoreIns.addTodo('Task One')
ObservableTodoStoreIns.addTodo('Task Two')
ObservableTodoStoreIns.addTodo('Task Three')
ObservableTodoStoreIns.addTodo('Task Four')
ObservableTodoStoreIns.assign(ObservableTodoStoreIns.todos[0],peopleStoreIns.assignees[0])
ObservableTodoStoreIns.assign(ObservableTodoStoreIns.todos[1],peopleStoreIns.assignees[1])

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
        { ObservableTodoStoreIns.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <div>
          <button onClick={() => this.newTodo() }>New Todo</button>
          <small> (double-click a todo to edit)</small>
        </div>
      
        <button onClick={() => this.loadTodo() }>Load Todo</button>
       
      </div>
    
    )
  }
  newTodo = () => {
    ObservableTodoStoreIns.addTodo(prompt('Enter a new todo:','coffee plz'))
  }
  loadTodo = () => {
    ObservableTodoStoreIns.pendingRequestsUp()
    setTimeout(() => {
      ObservableTodoStoreIns.addTodo('Random Todo ' + Math.random())
      ObservableTodoStoreIns.pendingRequestsDown()
    }, 2000)
  }
}
 
export default  TodoView



