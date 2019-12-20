// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Here: This calls the Board component into the App component. We can render Board component in App component as many times as we'd like. */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Here: This is a class constructor that assigns the initial state of gameBoard, currentPlayer and winner
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: This allows us to run the class constructor this.state in our function gamePlay
    const { gameBoard, currentPlayer, winner } = this.state
    // 4) Here: This if statement says if the given index of gameBoard is null (open) and there is no winner, then assign the index to currentPlayer
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
      })
    }
    if(winner === null){
      // 5) Here: If all indexs of goameBoard have a value and winner is null, run function winning
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: This sets winner as currentPlayer when the winning conditions are met
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: This maps through the gameBoard for current value for each index of the array
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: references gamePlay to show the current state of the square */}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: Displays the current player on our application */}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: Displays the currentPlayer as the winner when winning conditions are met */}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: Displays the gameboard with player moves as they are selected */}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: this brings in the current state of the gameboard (values of the indexs) and current player so that the square can be updated upon being clicked
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: displays value of the square on the application (nothing if not clicked or the assigned player if clicked) */}
        { this.props.value }
      </div>
    )
  }
}

export default App
