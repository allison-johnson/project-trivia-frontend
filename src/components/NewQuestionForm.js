import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '&.MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function NewQuestionForm() {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Question submitted!")
        //axios.post()
    }

    return(
        <form className={classes.root} noValidate autoComplete="off">
            <div className="new-question-form">
                <FormControl fullWidth><TextField required multiline id="standard-required" variant="outlined" color="primary" label="Question" /></FormControl> <br/>
                <FormControl fullWidth><TextField required multiline id="standard-required" label="Correct Answer" /></FormControl> <br/>
                <FormControl fullWidth><TextField required multiline id="standard-required" label="Incorrect Answer #1" /></FormControl> <br/>
                <FormControl fullWidth><TextField required multiline id="standard-required" label="Incorrect Answer #2" /></FormControl> <br/>
                <FormControl fullWidth><TextField required multiline id="standard-required" label="Incorrect Answer #3" /></FormControl> <br/><br/>
                <Button type="submit" className="button-submit" color="primary" variant="outlined" onClick={handleSubmit}>Submit Question</Button>
            </div>
        </form>
    )//return
}//NewQuestionForm

