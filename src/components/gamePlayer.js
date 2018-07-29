import React, { Component } from 'react'
import { Slot } from './slot'
import { CustomButton } from './customButton'

import data from '../reelData.json'

class GamePlayer extends Component {
  state = {
    reelData: data,
  }

  handleClick= () => {
    console.log('spin pressed')
    const slotOne = Math.floor(Math.random() * (7 - 1 + 1)) + 1
    const slotTwo = Math.floor(Math.random() * (7 - 1 + 1)) + 1
    const slotThree = Math.floor(Math.random() * (7 - 1 + 1)) + 1
    console.log('spin pressed', slotOne, slotTwo, slotThree)
    this.setState((prevState, props) => ({
      slotOne,
      slotTwo,
      slotThree,
    }))
  }

  render() {
    const {
      reelData,
      slotOne,
      slotTwo,
      slotThree,
    } = this.state

    console.log(this.state)
    return (
      <div className="game-player">
        <div className="row">
          <Slot
            data={reelData.Reel1}
            slot={slotOne}
          />
          <Slot
            data={reelData.Reel2}
            slot={slotTwo}
          />
          <Slot
            data={reelData.Reel3}
            slot={slotThree}
          />
        </div>
        <div className="row">
          <CustomButton
            handleClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default GamePlayer
