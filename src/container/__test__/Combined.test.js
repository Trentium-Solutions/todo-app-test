import {createRoot} from 'react-dom/client'
import {render, screen} from '@testing-library/react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistore} from '../../state/store'
import {Combined} from '../Combined'

describe('combined test suite', () => {
  jest.mock('nanoid', () => {
    return {nanoid: () => '1234'}
  })
  const combinedComponent = (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Combined />
      </PersistGate>
    </Provider>
  )
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(combinedComponent)
  })

  it('renders combined correctly', () => {
    render(combinedComponent)
    expect(screen.getByTestId('combined')).toBeTruthy()
  })
})
