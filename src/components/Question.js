import React, { Component } from 'react'
let _ = require('lodash')

export class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: this.props.info.question,
            correctAnswer: this.props.info.correct_answer,
            incorrectAnswers: this.props.info.incorrect_answers,
        }
    }
    render() {
        //console.log("props inside Question:", this.props)
        let shuffledAnswers = _.shuffle([this.state.correctAnswer].concat(this.state.incorrectAnswers))
        let shuffledAnswerList = shuffledAnswers.map((choice, i) => {
          return(
            <div key={i}>
              <li>{choice}</li>
            </div>
          )
        })
        return (
            <div>
                <h4>{this.state.question}</h4>
                <ol type="A">{shuffledAnswerList}</ol>
            </div>
        )
    }
}

export default Question
