import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Navbar from './Navbar'


const baseUrl = "https://express-trivia-api.herokuapp.com"

//mode: "no-cors",

const options = {
  method: 'GET',
  headers: {
    "Accept": "application/json"
  }
}//options

class App extends Component {
  constructor() {
    super()
    this.state = {
      triviaQuestionList: []
    }
  }//constructor

  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello from my trivia app!</h1>
        <Button>This is our first button!</Button>
      </div>
    )
  }//render

  componentDidMount() {
    fetch(baseUrl + '/triviaQuestion', options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          triviaQuestionList: data
        })
      })
      .catch(err => {
        console.log("Error!", err)
      })
  }//componentDidMount

}//App class component

export default App;
