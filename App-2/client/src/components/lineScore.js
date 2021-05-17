import React, { Component } from 'react';

class LineScore extends Component{

  renderHeaderLine(inning_runs) {
    let header_spans = inning_runs.map((_runs, i) => {
      return(<span>{i + 1}</span>)
    })
    header_spans.push(<span>R</span>)
    header_spans.push(<span>H</span>)
    header_spans.push(<span>E</span>)
    return header_spans
  }

  renderLine(team) {
    const inning_runs = this.props.inning_runs[team];
    console.log('this.props (line) = ',this.props);
    console.log('inning_runs = ',inning_runs);
    let spans = inning_runs.map((runs, i) => {
      return( <span> {runs} </span> )
    })
    return spans
  }

  // Sum up the runs across all innings, nulls count as zeros
  renderRunTotal(team){
    const inning_runs = this.props.inning_runs[team]
    return inning_runs.reduce((total_runs, runs) => total_runs + runs)
  }



  render() {
    return(
    <div class="line-score">
        <div class="line header">
          <span></span>
          {this.renderHeaderLine(this.props.inning_runs["home"])}
        </div>
        <div class="line">
          <span id= "away">Away</span>
          {this.renderLine("away")}
          <span>{this.renderRunTotal("away")}</span>
          <span>{this.props.hits["away"]}</span>
          <span>{this.props.errors["away"]}</span>
        </div>
        <div class="line">
          <span id="home">Home</span>
          {this.renderLine("home")}
          <span>{this.renderRunTotal("home")}</span>
          <span>{this.props.hits["home"]}</span>
          <span>{this.props.errors["home"]}</span>
        </div>
    </div>
    )
  }
}

export default LineScore;