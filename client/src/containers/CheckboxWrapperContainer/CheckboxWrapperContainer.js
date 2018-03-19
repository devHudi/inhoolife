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

  sortByFrequency(toBeSorted) {
    var hash = new Object();
    toBeSorted.forEach(function (element, index, array) { 
                           if (hash[element] == undefined) {
                               hash[element] = 1;
                           }
                           else {
                               hash[element] +=1;
                           }});
    var itemCounts = new Array();
    for (var key in hash) {
       var itemCount = new Object();
       itemCount.key = key;
       itemCount.count = hash[key];
       itemCounts.push(itemCount);
    }
    itemCounts.sort(function(a,b) { if(a.count<b.count) return 1; 
        else if (a.count>b.count) return -1; else return 0;});

    return itemCounts.map(function(itemCount) { return itemCount.key; });
  }
  //출처 : https://stackoverflow.com/questions/3579486/sort-a-javascript-array-by-frequency-and-then-filter-repeats

  componentDidMount() {
    axios.get('/api/restaurants/tags')
      .then((response) => {
        console.log(this.sortByFrequency(response.data))
        var checkboxes = []
        this.sortByFrequency(response.data).map((tag) => {
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