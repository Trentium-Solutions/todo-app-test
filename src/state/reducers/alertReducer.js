const alertReducer = (state = null, action) => {
  if (action.type === 'show') {
    state = action.payload
  } else if (action.type === 'hide') {
    state = null
  }
  return state
}

export default alertReducer
