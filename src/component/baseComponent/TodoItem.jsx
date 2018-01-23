import {observer} from 'mobx-react'
import React ,{Component} from 'react'


@observer
class TodoItem extends Component {
    render() {
      const todo = this.props.todo
      return (
        <li onDoubleClick={ () => this.props.onRename(todo) }>
          <input
            type='checkbox'
            checked={ todo.completed }
            onChange={ () => this.props.onToggleCompleted(todo) }
          />
          { todo.task }
          { todo.assignee
            ? <small>{ todo.assignee.name }</small>
            : null
          }
      </li>
      );
    }
  
  }
  
  export default TodoItem