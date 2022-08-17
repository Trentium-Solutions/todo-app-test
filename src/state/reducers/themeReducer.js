const themeReducer = (state = 'light', action) => {
  if (action.type === 'dark') {
    return (state = action.payload)
  } else if (action.type === 'light') {
    return (state = action.payload)
  } else {
    return state
  }
}

export default themeReducer
