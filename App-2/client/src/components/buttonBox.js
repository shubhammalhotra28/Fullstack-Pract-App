import React, { Component } from 'react';

class ButtonBox extends Component{

  render() {
    return(
    <div class="button-box">
      <div class="batters-box">
        <button onClick={this.props.onBall}>Ball</button>
        <button onClick={this.props.onStrike}>Strike</button>
      </div>
      <div class="outcome-box">
        <button onClick={this.props.onRun}>Run</button>
        <button onClick={this.props.onHit}>Hit</button>
        <button onClick={this.props.onError}>Error</button>
        <button onClick={this.props.onOut}>Out</button>
      </div>
      <button onClick={this.props.onReset}>Reset</button>
    </div>
    )
  }
}

export default ButtonBox;