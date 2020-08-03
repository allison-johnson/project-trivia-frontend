import React, { Component } from 'react'

export class CorrectAnswer extends Component {
    render() {
        return (
          <p style={{"font-style": "italic"}}>Correct Answer: {this.props.answer}</p>
        )
    }
}

export default CorrectAnswer
