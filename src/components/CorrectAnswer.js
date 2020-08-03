import React, { Component } from 'react'

export class CorrectAnswer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <p style={{"font-style": "italic"}}>Correct Answer: {this.props.answer}</p>
        )
    }
}

export default CorrectAnswer
