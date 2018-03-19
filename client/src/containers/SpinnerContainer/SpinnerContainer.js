import React, { Component } from 'react'
import { DoubleBounce } from 'styled-spinkit'
import './SpinnerContainer.css'

class SpinnerContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      visible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible
    })
  }

  render() {
    var visibleStyle = {
      display: this.state.visible ? "block" : "none"
    }

    return (
      <div id="Spinner" style={ visibleStyle }>
        <div className="vertical"><div className="center">
        <DoubleBounce color="#FFFFFF" size={60}/>
        <label> 고르는 중이에요! </label>
        </div></div>
      </div>
    )
  }
}

export default SpinnerContainer