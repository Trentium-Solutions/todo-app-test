import React, {useState} from 'react'
import Modal from './Modal'
import './Todo.css'

function Todo(props) {
  //This function displays task list items
  const [newName, setNewName] = useState('')
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(false)
    props.editTask(props.id, newName)
    setNewName('')
  }

  const handleEdit = () => {
    setShow(true)
    props.setEdit(true)
    setNewName(props.name)
  }
  return (
    <>
      <Modal
        name={props.name}
        id={props.id}
        newName={newName}
        setNewName={setNewName}
        show={show}
        setShow={setShow}
        handleSubmit={handleSubmit}
        edit={props.edit}
      />
      <div className='d-flex c-cb my-3 ms-3 text-wrap' data-testid='todo'>
        <input
          id={`item-${props.id}`}
          type='checkbox'
          defaultChecked={props.completed}
          onChange={() => props.taskCompleted(props.id)}
        />
        <label
          className='text-break me-3 todo-label w-100'
          htmlFor={`item-${props.id}`}
        >
          {props.name}
        </label>
        <div className='d-flex justify-content-end align-items-center'>
          {/* if note is not deleted it will display a edit button else it will display a recover task button  */}
          {!props.deleted ? (
            <i
              className='fa fa-edit mx-2 cursor black'
              onClick={() => {
                handleEdit(props.id)
                setShow(true)
              }}
              title='Edit Note'
            ></i>
          ) : (
            <i
              className='fa-solid fa-recycle mx-2 text-success cursor'
              onClick={() => props.deleteTask(props.id, props.completed)}
              title='Recover Note'
            ></i>
          )}
          {/* if note is not deleted it will display a delete button else it will display a delete permanently button  */}
          {!props.deleted ? (
            <i
              className='fa fa-trash-alt mx-1 cursor red'
              onClick={() => props.deleteTask(props.id, props.completed)}
              title='Delete Note'
            ></i>
          ) : (
            <i
              className='fa fa-trash-alt mx-1 cursor red'
              onClick={() => props.deletePerm(props.id, props.completed)}
              title='Delete Permanently'
            ></i>
          )}
        </div>
      </div>
    </>
  )
}

export default Todo
