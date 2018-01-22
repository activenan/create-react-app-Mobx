import {observer} from 'mobx-react'
import React, { Component } from 'react';
import TodoList from '../component/baseComponent/TodoList.jsx'
import '../css/App.scss'

@observer
class TodoLists extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/logo.svg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Mobx</h1>
          div
        </header>
    
      
      </div>
    
    );
  }
}
 
export default  TodoLists



