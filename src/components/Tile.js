import React, { Component } from 'react'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.styles = {
   	  top: props.meta.domPosition.offsetTop,
   	  left: props.meta.domPosition.offsetLeft,
      height: props.tileSize,
      width: props.tileSize
    }
  }

  render() {
    return (
      <li
        className={`${this.props.meta.design} rotation-${this.props.meta.rotation} tile`}
        ref={this.props.positionRef}
	      style={this.styles}
      >
      </li>
    )
  }
}

export default Tile
