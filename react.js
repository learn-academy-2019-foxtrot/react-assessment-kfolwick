// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.


import React from 'react';
import './App.css';

class App extends React.Component{
render(){
  return (
    <div className="App">
        <h1>I am a component!</h1>
    </div>
  );
}
}

export default App;



// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }

let mappedNames = names.map((value, index) => {
  return `${value} is ${value.length} characters long.`
})
console.log(mappedNames.join('\r\n'));



// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

const {name, home, dislikes} = this.state

// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}

countUp = () => {
this.setState({ counter : this.state.counter +1 })
}



// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';
import App from './App.js'

class Recipes extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes:
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
    }
  }

  render() {
    return(
      let recipe = recipes.map((recipes.name) => {
        return(
          <li key={recipes.name}>{recipes.name}</li>
        )
      })
      <ul>
        {recipe}
      </ul>
    )
  }
}
export default Recipes
