import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import '../Sass/OutputPage.scss'
export default class OutputHeader extends Component {
    render() {
        return (
            <div className='OutputPageHeader'>
               <Link to='/' className='link'> <FaArrowLeft className='Icon'/> </Link>
                <img
                className='logo1'
                src='https://fontmeme.com/permalink/201126/732ed9cc25906027181768c438889418.png'
                alt='PosterLight'
                />
                <img
                className='logo2'
                src='https://fontmeme.com/permalink/201127/47eaeefd992c1b265b98fed89e36bda0.png'
                alt='PosterLight'
                />
                <img
                className='logo3'
                src='https://fontmeme.com/permalink/201127/14d63fd09c5d4c30a5ad9ec795ae6a83.png'
                alt='PosterLight'
                />
                <img
                className='logo4'
                src='https://fontmeme.com/permalink/201127/d72f7b4271085276d56c6481a37f0c23.png'
                alt='PosterLight'
                />
            </div>
        )
    }
}
