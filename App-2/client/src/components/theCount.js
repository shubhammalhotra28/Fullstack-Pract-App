import React, { Component } from 'react';

class TheCount extends Component{

  render() {
    return(
    <div class="the-count">
      <span> {this.props.balls} balls</span>,
      <span> {this.props.strikes} strikes</span>,
      <span> {this.props.outs} out</span>
    </div>
    )
  }
}

export default TheCount;