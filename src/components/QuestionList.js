import React, { Component } from 'react'
import Question from './Question'

const baseUrl = "https://express-trivia-api.herokuapp.com"

const options = {
  method: 'GET',
  headers: {
    "Accept": "application/json"
  }
}//options

export class QuestionList extends Component {
    constructor() {
        super()
        this.state = {
            questionList: []
        }
    }

    render() {
        let allQuestions = this.state.questionList.map((question, i) => {
            return (
                <div key={i}>
                    <Question info={question} />
                </div>
            )
        })
        return (
            <div>
                {allQuestions}
            </div>
        )
    }

    componentDidMount() {
      fetch(baseUrl + '/triviaQuestion', options)
        .then(res => res.json())
        .then(data => {
            console.log("data: ", data)
            this.setState({
              questionList: data
            })
        })
        .catch(err => {
            console.log("Error!", err)
      })
  }//componentDidMount
}

export default QuestionList
