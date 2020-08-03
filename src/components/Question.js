import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import CorrectAnswer from './CorrectAnswer'
import axios from 'axios';
let _ = require('lodash')

const baseUrl = "https://express-trivia-api.herokuapp.com"

export class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: this.props.info.question,
            correctAnswer: this.props.info.correct_answer,
            incorrectAnswers: this.props.info.incorrect_answers,
            questionId: this.props.info._id,
            revealAnswer: false
        }
    }//constructor

    toggleReveal = () => {
        let newReveal = !this.state.revealAnswer 
        this.setState({
            revealAnswer: newReveal 
        })
    }

    handleDelete = (e) => {
        let targetId = ""
        if (e.target.id) {
            targetId = e.target.id 
        } else {
            targetId = e.target.parentElement.id
        }
        console.log("targetId: ", targetId)
        axios.delete(baseUrl + `/triviaQuestion/${targetId}`)
            .then(response => response.data)
            .catch(err => console.log(err))
    }

    render() {
        let shuffledAnswers = _.shuffle([this.state.correctAnswer].concat(this.state.incorrectAnswers))
        let shuffledAnswerList = shuffledAnswers.map((choice, i) => {
          return(
            <div key={i}>
              <li>{choice}</li>
            </div>
          )
        })

        let reveal = null
        if (this.state.revealAnswer) {
            reveal = <CorrectAnswer answer={this.state.correctAnswer} />
        }

        let revealOrHide = ""
        if (this.state.revealAnswer) {
            revealOrHide = "Hide Answer"
        } else {
            revealOrHide = "Reveal Answer"
        }

        return (
            <div>
                <h4>{this.state.question}</h4>
                <ol type="A">{shuffledAnswerList}</ol>
                <div className="question-buttons">
                    <Button variant="outlined" color="primary" onClick={this.toggleReveal}>{revealOrHide}</Button>
                    <Button variant="outlined" color="secondary">Edit Question</Button>
                    <Button variant="outlined" color="secondary"id={this.state.questionId} onClick={this.handleDelete}>Delete Question</Button>
                </div>
                {reveal}
            </div>
        )
    }//render
}//Question Component

export default Question
