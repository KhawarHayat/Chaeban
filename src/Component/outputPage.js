import React, { Component } from 'react'
import Message from './Message'
import {FaGithub} from 'react-icons/fa'
import OutputHeader from './outputHeader'
import {connect} from 'react-redux'
import '../Sass/OutputPage.scss'
class OutputPage extends Component {
   
    render() {
        
        return (
            <div className={this.props.Input.theme} style={{backgroundImage:`url('./${this.props.Input.theme}Back.jpg')` }} onLoad={this.handleLoad}>
                <div className='OutputMain'>
               <OutputHeader/> 
               <Message
               date={this.props.Input.date}
               message={this.props.Input.message}
               />
               <FaGithub
               className='OutputGit'
               
               />
               </div>
            </div>
        )
        }
    }

const mapStateToProps = state => {
    return {
      Input: state
    }
  }
  export default connect(mapStateToProps,)(OutputPage)