import React, { Component } from 'react'
import { DoubleBounce } from 'styled-spinkit'
import './SpinnerContainer.css'

class SpinnerContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      visible: false,
      comment: ""
    }
  }
  
  componentDidMount() {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      const comments = [
        "제가 골라드릴게요!",
        "고르는 중이에요!",
        "오늘 식사는 제가 책임지죠!",
        "뭐가 나오던 무조건 먹기에요?"
      ]
      const rndIndex = Math.floor((Math.random() * (comments.length - 1)))
      const comment = comments[rndIndex]

      this.setState({
        visible: nextProps.visible,
        comment
      })
    } else {
      this.setState({
        visible: nextProps.visible,
        comment: ""
      })
    }
  }

  render() {
    var visibleStyle = {
      display: this.state.visible ? "block" : "none"
    }
    
    return (
      <div id="Spinner" style={ visibleStyle }>
        <div className="vertical"><div className="center">
        <DoubleBounce color="#FFFFFF" size={60}/>
        <label> { this.state.comment } </label>

        <ins className="adsbygoogle"
            style={{display:"inline-block", width:"320px", height:"100px"}}
            data-ad-client="ca-pub-2093688085838727"
            data-ad-slot="5764403476"></ins>
        </div></div>
      </div>
    )
  }
}

export default SpinnerContainer