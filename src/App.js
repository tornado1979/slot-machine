import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import GamePlayer from './components/gamePlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h1 className="App-title">
            Welcome to React
          </h1>
        </header>
        <GamePlayer />
      </div>
    )
  }
}

export default App
