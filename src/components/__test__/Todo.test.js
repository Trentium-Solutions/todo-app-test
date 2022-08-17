import {createRoot} from 'react-dom/client'
import {render, screen} from '@testing-library/react'
import Todo from '../Todo'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistore} from '../../state/store'
import TestRenderer from 'react-test-renderer'

describe('todo test suite', () => {
  const todoComponent = (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Todo />
      </PersistGate>
    </Provider>
  )
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Todo />)
  })
  it('renders todos correctly', () => {
    render(todoComponent)
    expect(screen.getAllByTestId('todo')).toBeTruthy()
  })
  it('matches snapshot todos', () => {
    const tree = TestRenderer.create(todoComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
