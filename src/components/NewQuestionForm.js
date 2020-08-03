import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
//import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '&.MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));

const baseUrl = "https://express-trivia-api.herokuapp.com"

export default class NewQuestionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            correctAnswer: '',
            incorrectAnswerOne: '',
            incorrectAnswerTwo: '',
            incorrectAnswerThree: '',
            incorrectAnswers: []
            //classes: useStyles()
        }
    }
    //const classes = useStyles();

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            incorrectAnswers: [this.state.incorrectAnswerOne, this.state.incorrectAnswerTwo, this.state.incorrectAnswerThree]
        }, () => {
            axios.post(baseUrl + '/triviaQuestion', {
                question: this.state.question,
                correct_answer: this.state.correctAnswer,
                incorrect_answers: this.state.incorrectAnswers
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
        })//setState with callback
    }//handleSubmit

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    //className={this.state.classes.root} 
    render() {
        return(
            <form noValidate autoComplete="off">
                <div className="new-question-form">
                    <FormControl fullWidth><TextField required multiline id="standard-required" name="question" variant="outlined" color="primary" label="Question" onChange={this.handleChange} /></FormControl> <br/>
                    <FormControl fullWidth><TextField required multiline id="standard-required" name="correctAnswer" label="Correct Answer" onChange={this.handleChange}/></FormControl> <br/>
                    <FormControl fullWidth><TextField required multiline id="standard-required" name="incorrectAnswerOne" label="Incorrect Answer #1" onChange={this.handleChange}/></FormControl> <br/>
                    <FormControl fullWidth><TextField required multiline id="standard-required" name="incorrectAnswerTwo" label="Incorrect Answer #2" onChange={this.handleChange}/></FormControl> <br/>
                    <FormControl fullWidth><TextField required multiline id="standard-required" name="incorrectAnswerThree" label="Incorrect Answer #3" onChange={this.handleChange}/></FormControl> <br/><br/>
                    <Button type="submit" className="button-submit" color="primary" variant="outlined" onClick={this.handleSubmit}>Submit Question</Button>
                </div>
            </form>
        )//return
    }//render

}//NewQuestionForm

