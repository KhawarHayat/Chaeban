import React, { Component } from 'react'
import { connect } from 'react-redux'
import { error } from '../Redux/Input/inputAction'
import propTypes from 'prop-types'
import '../Sass/ErrorBoundries.scss'
 class ErrorBoundries extends Component {
    componentDidCatch = (error, info) => {
        console.log(info)
      this.props.error(info)
    }
    render() {
        if(this.props.Input.error){
            return(
                <div className='ErrorBoundries'>
                <img
                src='./Opps.PNG'
                alt='error'
                />
                <p>{this.props.errInfo}</p>
                </div>
            )
        }
        return this.props.children
    }
}

ErrorBoundries.propTypes={
    errInfo: propTypes.string
}

const mapStateToProps = state => {
    return {
        Input: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
      error: (err) => dispatch(error(err))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(ErrorBoundries)