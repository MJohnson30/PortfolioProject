
import './App.css';
import React, { Component } from 'react'
import BigBangStarField from 'react-big-bang-star-field'
 
class Example extends Component {
  render () {
    return (
      <BigBangStarField
        numStars={666}
        maxStarSpeed={1}
        scale={4}
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        starColor={"217, 160, 244"}
      />
    )
  }
}

export default Example;
