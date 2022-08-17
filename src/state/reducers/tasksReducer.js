const preNotes = [
  {id: 'todo-0', name: 'Repeat', completed: false, deleted: false},
  {id: 'todo-1', name: 'Sleep', completed: false, deleted: false},
  {id: 'todo-2', name: 'Eat', completed: true, deleted: false},
]

//handles and changes the state based on parameters passed through reducer functions

const tasksReducer = (state = preNotes, action) => {
  if (action.type === 'add') {
    state = state.concat(action.payload)
  } else if (action.type === 'change') {
    state = action.payload
  } else if (action.type === 'edit') {
    const editedTaskList = state.map((task) => {
      if (action.id === task.id) {
        return {...task, name: action.name}
      }
      return task
    })
    state = editedTaskList
  } else if (action.type === 'delete') {
    const deletedTasks = state.map((task) => {
      if (action.id === task.id) {
        return {...task, deleted: !task.deleted}
      }
      return task
    })
    state = deletedTasks
  } else if (action.type === 'completed') {
    const updatedTasks = state.map((task) => {
      if (action.id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    state = updatedTasks
  } else if (action.type === 'deleteP') {
    const tasksRemaining = state.filter((task) => action.id !== task.id)
    state = tasksRemaining
  }
  return state
}

export default tasksReducer
