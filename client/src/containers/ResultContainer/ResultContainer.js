import React, { Component } from 'react'
import './ResultContainer.css'
import ResultImageContainer from '../ResultImageContainer/ResultImageContainer'

import axios from 'axios'

import sadFrog from './sad_frog.jpeg'

class ResultContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name == "식당이 없어요 ㅜ-ㅜ") {
      this.setState({
        images: [sadFrog, sadFrog, sadFrog, sadFrog, sadFrog]
      })
    } else {
      var images = []
      axios.get('/api/image/' + "인하대" + encodeURI(nextProps.name))
      .then((response) => {
        response.data.map((image) => {
          images.push(image)
        })
        axios.get('/api/image/' + "인후" + encodeURI(nextProps.name))
        .then((response) => {
          response.data.map((image) => {
            images.push(image)
          })
          axios.get('/api/image/' + encodeURI(nextProps.name) + " 식당")
          .then((response) => {
            response.data.map((image) => {
              images.push(image)
            })
            this.setState({
              images
            })
          })
        })
        
      })
    }
  }

  render() {
    var mapAddress = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBXd0lbKKkNOVht3dUIirL_IDHVAeefIus&q=" + encodeURI(this.props.address)

    var name = this.props.name
    var address = this.props.address
    var tags = this.props.tags

    if (this.props.name == "") {
      name = "타이틀이 없습니다"
      address = ""
      tags = ["이거", "느낌이", "쎄한게", "오류가", "난것같은데"]
    }

    return (
      <div id="Result">
        <div className="content">
          <h1> { name } </h1>
          <h2> { address } </h2>
          <h3>
            { tags.map((tag => {
              return("#" + tag + " ")
            })) }
          </h3>
          <label> 아래 사진은 네이버에서 제공하는 사진이며, 좌우로 스크롤하시면 더 많은 사진을 볼 수 있습니다. </label>
        </div>
        <div className="bottom-container">
          <ResultImageContainer images={ this.state.images }/>
          <iframe className="map" frameborder="0" src={mapAddress} allowfullscreen></iframe>
        </div>
      </div>
    )
    

  }
}

export default ResultContainer