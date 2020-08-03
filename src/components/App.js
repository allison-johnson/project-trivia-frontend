import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Navbar from './Navbar'
import TriviaQuestion from './QuestionList'

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
        
        <div className="body">
          <Switch>
            <Route path="/triviaQuestion" component={TriviaQuestion} />
          </Switch>
        </div>
{/* {    <Button>Ask Me Anything!</Button>} */}
      </div>
    )
  }//render

}//App class component

export default App;
