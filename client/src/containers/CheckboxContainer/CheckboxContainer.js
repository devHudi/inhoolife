import React, { Component } from 'react'
import './CheckboxContainer.css'

class CheckboxContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.checked
    }
  }

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick({
        target: this,
        i: this.props.i,
        name: this.props.name,
        checked: this.state.checked
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked
    })
  }

  render() {
    return(
      <button onClick={ e => this.handleClick(e) } className={ this.state.checked ? "checkbox checked" : "checkbox"}>
        { this.props.name }
      </button>
    )
  }
}

export default CheckboxContainer