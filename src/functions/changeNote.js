export const filters = {
  All: (task) => !task.deleted,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed && !task.deleted,
  Deleted: (task) => task.deleted,
}

export const handleAddTask = (e, addTask, setName, name) => {
  // used to call the add task function
  e.preventDefault()
  addTask(name)
  setName('')
}

export function heading(taskList, filter) {
  // sets the heading when each filter is applied based on number of tasks and filter
  const word = taskList.length === 1 ? 'task' : 'tasks'
  let endWord
  if (filter === 'Active') {
    endWord = 'remaining'
  }
  let headingText = `${taskList.length} ${word} ${endWord}`
  if (filter === 'All') {
    headingText = 'Checklist of tasks'
  }
  if (filter === 'Completed') {
    headingText = 'Completed tasks'
  }
  if (filter === 'Deleted') {
    headingText = 'Deleted tasks'
  }
  return headingText
}
