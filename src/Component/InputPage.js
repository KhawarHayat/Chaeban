import React, { Component } from 'react'
import { TextField, FormLabel, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core'
import '../Sass/InputPage.scss'
import { Link } from 'react-router-dom'
import { handleDate, handleMessage, handleTheme } from '../Redux/Input/inputAction'
import Header from './header'
import { connect } from 'react-redux'
class InputPage extends Component {
    onSubmit = () => {
        console.log(this.props.Input)
    }
    render() {
        return (
            <div className='InputPageMain' style={{ backgroundImage: `url('./Ice.jpg')` }}>
                <Header />
                <div className='InputPage' >
                    <img
                        className='Poster'
                        src='./IceCream.jpg'
                        alt='icecreame'
                    />
                    <div className='InputPageInfo'>
                        <h2>Leave a message</h2>
                        <TextField
                            id='date'
                            label='Date'
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth={true}
                            value={this.props.Input.date}
                            onChange={(e) => this.props.handleDate(e.target.value)}
                            required
                        />

                        <TextField
                            id='message'
                            label='Message'
                            type='text'
                            className='message'
                            multiline
                            rows={5}
                            rowsMax={5}
                            fullWidth={true}
                            spellCheck={true}
                            value={this.props.Input.message}
                            onChange={(e) => this.props.handleMessage(e.target.value)}
                            required
                        />
                        <div className='Radio'>
                            <FormLabel>Theme</FormLabel>
                            <RadioGroup className='RadioAlign' value={this.props.Input.theme} onChange={(e) => this.props.handleTheme(e.target.value)}>
                                <FormControlLabel value="light" control={<Radio color='primary' />} label="Light" />
                                <FormControlLabel value="dark" control={<Radio color='primary' />} label="Dark" />
                                <FormControlLabel value="purple" control={<Radio color='primary' />} label="Purple" />
                                <FormControlLabel value="green" control={<Radio color='primary' />} label="Green" />
                            </RadioGroup>
                        </div>
                        <center>
                            <Link className='link' to='/output'><Button onClick={this.onSubmit} className='Button' color="primary">
                                Output
                        </Button></Link>
                        </center>
                    </div>
                    <img
                        src='./Ice.jpg'
                        className='Poster2'
                        alt='ice'
                    />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleDate: (date) => dispatch(handleDate(date)),
        handleMessage: (message) => dispatch(handleMessage(message)),
        handleTheme: (theme) => dispatch(handleTheme(theme))
    }
}
const mapStateToProps = state => {
    return {
        Input: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage)