import React, { Component } from 'react'
import ResultModalContainer from '../ResultModalContainer/ResultModalContainer'
import './RouletteContainer.css'

class RouletteWrapperContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpened: false
    }
  }

  handleClick() {
    this.setState({
      modalOpened: !this.state.modalOpened
    })
  }

  render() {
    return(
      <div id="Roulette">
        <ResultModalContainer opened={this.state.modalOpened}/>
        <button onClick={ e => this.handleClick(e) }> 룰렛 돌리기 </button>
      </div>
    )
  }
}

export default RouletteWrapperContainer