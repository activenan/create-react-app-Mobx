import {observer} from 'mobx-react'
import React, { Component } from 'react';
import TodoItem from '../baseComponent/TodoItem.jsx'
import '../../css/App.scss'
import ObservableTodoStore from '../../model/todoListModel'



@observer
class TodoLists extends Component {
  render() {
    return (
        <ul>
            {

            }

        </ul>
    
    );
  }
}
 
export default  TodoLists



