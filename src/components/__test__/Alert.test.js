import Alert from '../Alert'
import {createRoot} from 'react-dom/client'
import TestRenderer from 'react-test-renderer'
import {render, screen} from '@testing-library/react'

const alert = {
  type: 'success',
  message: 'Displayed Successfully',
}
describe('alert test suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Alert alert={alert}></Alert>)
  })

  it('renders alert correctly', () => {
    render(<Alert alert={alert}></Alert>)
    expect(screen.getByTestId('alert')).toBeTruthy()
  })

  it('matches snapshot alert', () => {
    const tree = TestRenderer.create(<Alert alert={alert}></Alert>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
