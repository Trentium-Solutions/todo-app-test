import React from 'react'
import {render, screen} from '@testing-library/react'
import {createRoot} from 'react-dom/client'
import Navbar from '../Navbar'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistore} from '../../state/store'
import TestRenderer from 'react-test-renderer'

describe('navbar test suite', () => {
  const navbarComponent = (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Navbar />
      </PersistGate>
    </Provider>
  )
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Navbar />)
  })
  it('renders buttons correctly', () => {
    render(navbarComponent)
    expect(screen.getAllByText('Todolist')).toBeTruthy()
  })
  it('matches snapshot navbar', () => {
    const tree = TestRenderer.create(navbarComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
