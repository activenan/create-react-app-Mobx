import {observable,computed,action,useStrict,autorun} from 'mobx'

useStrict(true)

export  class ObservableTodoStore {
    @observable todos = []     
    @observable pendingRequests = 0

    constructor() {
        autorun(() => console.log(this.report))
    }

	@computed get completedTodosCount() {
        return this.todos.filter(todo =>  todo.completed === true).length
    }

	@computed get report() {
        if(this.todos.length === 0) 
            return "<none>"
            return `Next todo: "${this.todos[0].task}"` +
             `Progress: ${this.completedTodosCount} / ${this.todos.length}`
    
    }
    
	@action addTodo (task) {
		this.todos.push({
			task: task,
			completed: false,
            assignee: null,
        
		});
    }
    
    @action toggleTaskStatus (taskObj) {
        taskObj.completed = !taskObj.completed
    }

    @action changeTaskName (taskObj) {
        taskObj.task = prompt('Task name', taskObj.task) || taskObj.task
    }
    @action assign (taskObj,assignee ) {
        taskObj.assignee = assignee
    }
    @action pendingRequestsUp () {
        this.pendingRequests++;
    }
    @action pendingRequestsDown () {
        this.pendingRequests--;
    }
}


export  class peopleStore {
    @observable assignees = [
        { name: "Michel" },
        { name: "Me" }
    ]
    @action changeAssignee () {

    }
}