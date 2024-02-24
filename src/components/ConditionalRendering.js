import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_a_subscriber: true,
    };
  }
  render() {
    // if (this.state.is_a_subscriber) {
    //   return (
    //     <div>
    //       <h1>Subscribed!!😁</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1> Subscribe</h1>
    //     </div>
    //   );
    // }

    // another method
    return (
        this.state.is_a_subscriber ?  <div>  <h1>Subscribed!!😁</h1></div>
    : <div>  <h1> Subscribe</h1> </div>
    );
  }
}

export default ConditionalRendering;
