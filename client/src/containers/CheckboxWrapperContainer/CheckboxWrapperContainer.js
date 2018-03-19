import React, { Component } from 'react'
import CheckboxContainer from '../CheckboxContainer/CheckboxContainer'
import './CheckboxWrapperContainer.css'
import axios from 'axios'

class CheckboxWrapperContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkboxes: [],
      tags: ""
    }
  }

  componentDidMount() {
    axios.get('/api/restaurants/tags')
      .then((response) => {
        var checkboxes = []
        response.data.map((tag) => {
          checkboxes.push({name: tag, checked: false})
        })
        this.setState({
          checkboxes
        })
      })
  }

  checkboxClicked(e) {
    var newCheckboxes = this.state.checkboxes
    newCheckboxes[e.i] = {name: e.name, checked: !e.checked}
    this.setState(newCheckboxes)
  }

  render() {
    var tagString = ""
    for (var i = 0; i < this.state.checkboxes.length; i ++) {
      if (this.state.checkboxes[i].checked == true) {
        tagString = tagString + this.state.checkboxes[i].name + ","
      }
    }

    if (tagString.slice(-1) == ",") {
      tagString = tagString.substring(0, tagString.length - 1)
    }

    return(
      <div id="CheckboxWrapper">
        <input id="tags" hidden value={tagString}/>
        <label> 태그를 선택해주세요. (필수아님) </label>
        {
          this.state.checkboxes.map((checkbox, i) => {
            return(<CheckboxContainer name={checkbox.name} i={i} onClick={e => this.checkboxClicked(e)} checked={checkbox.checked}/>)
          })
        }
      </div>
    )
  }
}

export default CheckboxWrapperContainer