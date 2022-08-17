import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import {useSelector} from 'react-redux'
import Alert from '../components/Alert'
export const Combined = () => {
  const alert = useSelector((state) => state.alert)
  const mode = useSelector((state) => state.theme)
  if (mode === 'light') {
    document.body.style.backgroundColor = '#121212'
  } else {
    document.body.style.backgroundColor = 'white'
  }
  return (
    <div className='min-vh-100 overflow-auto' data-testid='combined'>
      <Navbar />
      <Alert alert={alert} />
      <Main />
    </div>
  )
}
