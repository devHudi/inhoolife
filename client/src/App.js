import React, { Component } from 'react';
import CheckboxWrapperContainer from './containers/CheckboxWrapperContainer/CheckboxWrapperContainer'
import RouletteContainer from './containers/RouletteContainer/RouletteContainer'

class App extends Component {
  render() {
    var style={
      textAlign: 'center'
    }

    return (
      <div style={style}>
        <RouletteContainer />
        <CheckboxWrapperContainer />
      </div>
    );
  }
}

export default App;
