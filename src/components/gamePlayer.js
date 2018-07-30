import React, { Component } from 'react'
import _ from 'lodash'
import { Slot } from './slot'
import { CustomButton } from './customButton'

import data from '../reelData.json'
import wins from '../wins.json'

class GamePlayer extends Component {
  state = {
    btnDisable: false,
    coins: 999,
    reelData: data,
    winsData: wins,
  }

  // deduct 1 coin on every spin
  deductCoin = () => {
    this.setState((prevState, props) => ({
      coins: prevState.coins - 1,
    }))
  }

  // spin button pressed
  handleClick= () => {
    // deduct 1 coin
    this.deductCoin()
    // get random numbers for each slot
    const slotOne = Math.floor(Math.random() * (7 - 1 + 1)) + 1
    const slotTwo = Math.floor(Math.random() * (7 - 1 + 1)) + 1
    const slotThree = Math.floor(Math.random() * (7 - 1 + 1)) + 1


    // update the state
    // disable 'spin' button
    this.setState((prevState, props) => ({
      btnDisable: true,
      slotOne,
      slotTwo,
      slotThree,
    }))

    const {
      reelData,
      winsData,
    } = this.state

    // group each fruit with its occurences as a {key:value} pairs
    const occurArr = _
      .countBy([reelData.Reel1[slotOne], reelData.Reel2[slotTwo], reelData.Reel3[slotThree]])

    const fruitWithMaxOccurs = Object.keys(occurArr).filter(key => occurArr[key] > 1) // eslint-disable-line

    // update coins on state
    Object.keys(winsData).filter(key => { // eslint-disable-line
      if (key === fruitWithMaxOccurs[0]) {
        if (winsData[fruitWithMaxOccurs][occurArr[fruitWithMaxOccurs]] !== undefined) {
          const coinsWon = winsData[fruitWithMaxOccurs][occurArr[fruitWithMaxOccurs]]
          this.setState((prevState, props) => ({
            coins: prevState.coins + coinsWon,
          }))
        }
        return winsData[fruitWithMaxOccurs][occurArr[fruitWithMaxOccurs]]
      }
    })
    // enable 'spin' button
    this.setState((prevState, props) => ({
      btnDisable: false, // button is enabled again
    }))
  }

  render() {
    const {
      btnDisable,
      coins,
      reelData,
      slotOne,
      slotTwo,
      slotThree,
    } = this.state

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
            disable={btnDisable}
            handleClick={this.handleClick}
          />
          <div className="coins">
            Coins:
            {coins}
          </div>
        </div>
      </div>
    )
  }
}

export default GamePlayer
