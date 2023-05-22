import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
      console.log(this.state)
    return (
      <div>ClassComponent</div>
    )
  }
}
