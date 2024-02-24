// import React, { Component } from "react";
// class Subscribe extends Component {
//   constructor() {
//     super();
//     this.state = {
//       channelName: "solomon",
//     };
//   }

//   changeMessage() {
//     this.setState({
//       channelName: "Thanks for subscription!",
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.channelName}</h1>
//         <button onClick={() => this.changeMessage()}>subscribe</button>
//       </div>
//     );
//   }
// }

// export default Subscribe;

import React,{Component} from 'react'
class Subscribe extends Component{

  constructor(){
    super();
    this.state={
      channelName:"solomon"
    }
  }

  changeMessage(){
    this.setState({
      channelName:"Thanks for subscription!"
    })
  }

render(){
  return(
    <div>
    <h1> {this.state.channelName}</h1>
     <button onClick={()=>this.changeMessage()}>subscribe</button>
    </div>


  )
}
}

export default Subscribe;