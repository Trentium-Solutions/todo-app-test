import React from 'react'

// Buttons component to display filter buttons to filter notes
function FilterButtons(props) {
  return (
    <>
      <button
        type='button'
        className='btn btn-secondary rounded p-2 btn-sm mx-2 my-3 w-25 small mybtn'
        aria-pressed={props.isPressed}
        data-testid='filterbuttons'
        disabled={props.isPressed} //it will be disabled when clicked upon
        onClick={() => props.setFilter(props.name)}
      >
        {props.name}
      </button>
    </>
  )
}

export default FilterButtons
