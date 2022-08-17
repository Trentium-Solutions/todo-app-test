// functions to dispatch action calls based on parameters passed, this functions are directly available to main components

export const saveTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: 'add',
      payload: task,
    })
  }
}
export const deletePermTasks = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'deleteP',
      id: id,
    })
  }
}
export const editedTask = (id, name) => {
  return (dispatch) => {
    dispatch({
      type: 'edit',
      id: id,
      name: name,
    })
  }
}
export const deletedTask = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'delete',
      id: id,
    })
  }
}
export const compTask = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'completed',
      id: id,
    })
  }
}
export const showAlert = (message, type) => {
  return (dispatch) => {
    dispatch({
      type: 'show',
      payload: {
        message: message,
        type: type,
      },
    })
  }
}

export const hideAlert = () => {
  return (dispatch) => {
    dispatch({
      type: 'hide',
    })
  }
}

export const lightTheme = () => {
  return (dispatch) => {
    dispatch({
      type: 'light',
      payload: 'light',
    })
  }
}

export const darkTheme = () => {
  return (dispatch) => {
    dispatch({
      type: 'dark',
      payload: 'dark',
    })
  }
}
