import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import TriviaQuestion from './QuestionList'
import NewQuestionForm from './NewQuestionForm'

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
            <Route path="/triviaQuestion" component={TriviaQuestion} exact />
          </Switch>

          <Switch>
            <Route path="/triviaQuestion/new" component={NewQuestionForm} />
          </Switch>
        </div>

      </div>
    )
  }//render

}//App class component

export default App;
