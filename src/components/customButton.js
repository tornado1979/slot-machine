import React from 'react'
import propTypes from 'prop-types'

export const CustomButton = ({ disable, handleClick }) => {
  return (
    <button className="spin" disabled={disable} onClick={handleClick} type="button">
      Spin
    </button>
  )
}

CustomButton.propTypes = {
  disable: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
}
