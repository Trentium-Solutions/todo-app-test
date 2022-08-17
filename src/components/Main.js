import React, {useState} from 'react'
import FilterButtons from './FilterButtons'
import Todo from './Todo'
import {nanoid} from 'nanoid'
import {useSelector, useDispatch} from 'react-redux'
import {actionCreators} from '../state/index'
import Modal from './Modal'
import {filters, handleAddTask, heading} from '../functions/changeNote'

function Main(props) {
  //main function to combine the state as well as to call all functions

  const tasks = useSelector((state) => state.tasks)
  const mode = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [filter, setFilter] = useState('All')
  const [showAdd, setShowAdd] = useState(false)
  const [edit, setEdit] = useState(false)
  const filterNames = Object.keys(filters)

  const showAlert = (msg, type) => {
    dispatch(
      actionCreators.showAlert(msg, type),
      setTimeout(() => {
        dispatch(actionCreators.hideAlert())
      }, 2000),
    )
  }
  const deletePerm = (id) => {
    // deletes a task permanently
    dispatch(actionCreators.deletePermTasks(id))
    showAlert('Task is permanently deleted!', 'success')
  }

  const handleSubmit = (e) => {
    if (name !== '') {
      // checks if field is filled and then decides which action to do
      setShowAdd(false)
      handleAddTask(e, addTask, setName, name)
    } else {
      alert('Please enter some task first!')
    }
  }

  const taskCompleted = (id) => {
    // dispatches a call which will set the task to completed
    dispatch(actionCreators.compTask(id))
  }

  const addTask = (name) => {
    // sets the newTask array and dispatches it to create a new task
    const newTask = {
      id: nanoid(),
      name: name,
      completed: false,
      deleted: false,
    }
    dispatch(actionCreators.saveTask(newTask))
  }

  const deleteTask = (id, comp) => {
    // soft deletes a task only if it is completed else shows a alert
    if (comp === true) {
      dispatch(actionCreators.deletedTask(id))
    } else {
      showAlert('Incomplete tasks cannot be deleted!', 'danger')
    }
  }

  const editTask = (id, newName) => {
    // dispatches a call to edit the task
    dispatch(actionCreators.editedTask(id, newName))
  }

  const taskList = tasks.filter(filters[filter]).map((task) => (
    // filter the tasks based on the filter and map them accordingly
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      deleted={task.deleted}
      deletePerm={deletePerm}
      key={task.id}
      taskCompleted={taskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      tasks={tasks}
      setEdit={setEdit}
      edit={edit}
    />
  ))

  const handleAdd = () => {
    // set the showAdd state to true
    setEdit(false)
    setShowAdd(true)
  }

  const filterList = filterNames.map((name) => (
    // maps filterNames to display filter buttons
    <FilterButtons
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  return (
    <>
      <Modal
        sname={name}
        setName={setName}
        handleSub={handleSubmit}
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        edit={edit}
      />

      {/* Main UI of the task app */}
      <div className='d-flex justify-content-center'>
        <div
          className={`container col-md-6 mx-3 m-3 p-3 mb-5 align-center rounded ${
            mode === 'light' ? 'lite' : 'dark'
          }`}
        >
          <div className=' d-flex align-items-center justify-content-center flex-column'>
            <h1 className='font-weight-bold'>Todolist</h1>
            <h4>What tasks needs to be done?</h4>
          </div>
          <div className='d-flex flex-row align-items-center justify-content-center'>
            {/* Displays filterlist button here */}
            {filterList}
          </div>
          <div className='my-2'>
            <div className='d-flex'>
              <h4 id='list-heading' className='w-100 ms-2'>
                {/* Calls heading function to display heading */}
                {heading(taskList, filter)}
              </h4>
              <div className='d-flex fs-1 justify-content-end align-items-center'>
                <i
                  className='fa-solid fa-circle-plus cursor fs-1 green'
                  onClick={handleAdd} //It calls handleAdd method
                  title='Add Tasks'
                ></i>
              </div>
            </div>
            {/* It will display tasklist in reverse so new task is added on Top */}
            {taskList.length !== 0 ? (
              taskList.reverse()
            ) : (
              <div className='ms-2 fs-6'> Nothing to show here :(</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
