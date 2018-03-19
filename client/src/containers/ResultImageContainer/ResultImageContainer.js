import React, { Component } from 'react'
import './ResultImageContainer.css'

class ResultImageContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: ["http://placehold.it/280*186", "http://placehold.it/280*186", "http://placehold.it/280*186"]
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.images
    })
  }

  render() {
    return (
      <div id="ResultImage">
        {
          this.state.images.map((image) => {
            return(<img src={image} />)
          })
        }
      </div>
    )
  }
}

export default ResultImageContainer