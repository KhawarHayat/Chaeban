import React, { Component } from 'react'
import '../Sass/InputPage.scss'
export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <img
                    className='logo'
                    src='https://fontmeme.com/permalink/201125/cff1175189acda43451562999b5d032e.png'
                    alt='Logo'
                />
            </div>
        )
    }
}
