import React from 'react'
import {actionCreators} from '../state'
import {useSelector, useDispatch} from 'react-redux'

function Navbar() {
  // Navbar component to display a navbar

  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme)
  const toggleMode = () => {
    if (mode === 'light') {
      dispatch(actionCreators.darkTheme())
      document.body.style.backgroundColor = 'white'
    } else {
      dispatch(actionCreators.lightTheme())
      document.body.style.backgroundColor = '#121212'
    }
  }
  return (
    <nav
      className={`navbar navbar-${
        mode === 'light' ? 'dark' : 'light'
      } navbar-expand-lg bg-${
        mode === 'light' ? 'dark' : 'light'
      } navbar-fixed`}
    >
      <div className='container-fluid'>
        <a className='navbar-brand fs-4' href='/'>
          Todolist
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end'></ul>
          <div
            onClick={toggleMode}
            className='cursor hover'
            title='Change Theme'
          >
            <label
              htmlFor='theme'
              className={`text-${
                mode === 'light' ? 'light' : 'dark'
              } me-1 cursor margin`}
            >
              {`${mode === 'light' ? 'Light ' : 'Dark '}`} Mode
            </label>
            <i
              id='theme'
              className={`fa-solid fa-${
                mode === 'light' ? 'sun' : 'moon'
              } text-${
                mode === 'light' ? 'light fs-5 me-3' : 'dark fs-5 me-2'
              }`}
            ></i>
          </div>
          <span
            className={`text-${mode === 'light' ? 'light' : 'dark'} fs-6 me-2`}
          >
            Stay organized & focused.
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
