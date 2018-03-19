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
      axios.get('/api/image/' + encodeURI("인하대 " + nextProps.name))
      .then((response) => {
        this.setState({
          images: response.data
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
      address = "인천광역시 부평구 부개동 대동아파트"
      tags = ["제작자","블로그","방문","해주세요"]
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