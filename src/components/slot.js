import React from 'react'
import propTypes from 'prop-types'
// import slots images
import apple from '../assets/img/apple.png'
import lemon from '../assets/img/lemon.jpeg'
import cherry from '../assets/img/cherry.jpeg'
import banana from '../assets/img/banana.jpeg'
import init from '../assets/img/default.jpeg'

export const Slot = ({ data, slot }) => {
  const imgObject = {
    apple,
    lemon,
    cherry,
    banana,
  }
  const src = `http://localhost:3000/src/assets/img/${data[slot]}`
  return (
    <div>
      {slot === init && <img alt="default" src={init} />}
      {slot !== init && <img alt={data[slot]} src={imgObject[data[slot]]} />}
      <div>
        {data[slot]}
      </div>
    </div>
  )
}

Slot.defaultProps = {
  slot: init,
}

Slot.propTypes = {
  data: propTypes.array.isRequired, // eslint-disable-line
  slot: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
  ]),
}
