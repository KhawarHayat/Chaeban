import React, { Component } from 'react'

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
