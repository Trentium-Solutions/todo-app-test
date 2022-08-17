import React from 'react'
import {render, screen} from '@testing-library/react'
import {createRoot} from 'react-dom/client'
import {filters} from '../../functions/changeNote'
import FilterButtons from '../FilterButtons'
import TestRenderer from 'react-test-renderer'

describe('filterbuttons test suite', () => {
  const filterNames = Object.keys(filters)
  const filterList = filterNames.map((name) => (
    <FilterButtons key={name} name={name} />
  ))
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(filterList)
  })
  it('renders buttons correctly', () => {
    render(filterList)
    expect(screen.getAllByTestId('filterbuttons')).toBeTruthy()
  })

  it('matches snapshot buttons', () => {
    const tree = TestRenderer.create(filterList).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
