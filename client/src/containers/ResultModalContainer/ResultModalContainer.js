import React, { Component } from 'react'
import ResultContainer from '../ResultContainer/ResultContainer'
import SpinnerContainer from '../SpinnerContainer/SpinnerContainer'
import './ResultModalContainer.css'
import closeBtn from './close.png'
import axios from 'axios'

class ResultModalContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
      displayStyle: {
        top: '100%'
      },
      modal: {
        name: "",
        tags: [],
        address: ""
      },
      spinnerVisible: false
    }
  }

  toggleModal() {

    if (this.state.opened) { //숨길때
      this.setState({
        opened: !this.state.opened
      })

      setTimeout(() => {
        this.setState({
          displayStyle: {top: '100%'} //숨기기
        })
      }, 700)
    } else {

      this.setState({
        spinnerVisible: true
      }, () => {
        setTimeout(() => {
          this.setState({
            spinnerVisible: false,
            opened: !this.state.opened,
            displayStyle: {top: '0'}, //보이기
          })
        }, 4000)
      })

      axios.get('/api/restaurants/choice?tags=' + document.getElementById("tags").value)
        .then((response) => {
          this.setState({
            modal: {
              name: response.data.name,
              tags: response.data.tags,
              address: response.data.address
            }
          })
        })
    }
  }

  componentWillReceiveProps() {
    this.toggleModal()
  }

  render() {
    return(
      <div id="ResultModal" className={ this.state.opened ? "opened" : "" } style={ this.state.displayStyle } >
        <SpinnerContainer visible={ this.state.spinnerVisible }/>
        <div className="wrapper">
          <div className="modal">
            <img src={closeBtn} className="closeBtn" onClick={e => this.toggleModal()}/>
            <ResultContainer name={this.state.modal.name} tags={this.state.modal.tags} address={this.state.modal.address}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultModalContainer