import Modal from '../Modal'
import {createRoot} from 'react-dom/client'
import TestRenderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistore} from '../../state/store'

describe('modal test suite', () => {
  const modalComponent = (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Modal />
      </PersistGate>
    </Provider>
  )
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Modal />)
  })

  it('matches snapshot modal', () => {
    const tree = TestRenderer.create(modalComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
