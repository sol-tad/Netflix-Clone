import React, { Component } from 'react'

export class EventBinding extends Component {
constructor(props) {
  super(props)

  this.state = {
     msg:"HI"
  }
  this.handler=this.handler.bind(this);
}

handler(){
    this.setState({
        msg:"BYE"
    })
}

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        {/* <button onClick={this.handler.bind(this)}>click me</button> */}
        <button onClick={this.handler}>click me</button>
      </div>
    );
  }
}

export default EventBinding;
