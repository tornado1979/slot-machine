import React from 'react'
import propTypes from 'prop-types'

export const CustomButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} type="button">
      Spin
    </button>
  )
}

CustomButton.propTypes = {
  handleClick: propTypes.func.isRequired,
}
