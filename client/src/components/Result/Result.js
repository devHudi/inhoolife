import React, { Component } from 'react'
import './Result.css'

class Result extends Component {
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
        </div>
        <iframe className="map" width="600" height="450" frameborder="0" src={mapAddress} allowfullscreen></iframe>
      </div>

    )
  }
}

export default Result