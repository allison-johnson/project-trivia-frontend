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
        <img className="trivia-img" src="https://cdn.pixabay.com/photo/2019/05/22/20/06/brainstorm-4222409_960_720.jpg" />
        <Button>Ask Me Anything!</Button>
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
