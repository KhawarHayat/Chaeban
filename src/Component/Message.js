import React, { Component } from 'react'
import propTypes from 'prop-types';

export default class Message extends Component {
    render() {
        return (
            <div className='message'>
                <h2>{this.props.date}</h2>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

Message.propTypes={
    date: propTypes.string,
    message: propTypes.string
}