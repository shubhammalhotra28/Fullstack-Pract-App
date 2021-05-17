import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';


class Clock extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  


// function Clock(props){
//     return (
//         <div>
//             <h1>Hello, World!</h1>
//             <h2> It is {props.date.toLocaleTimeString()}. </h2>
//         </div>
//     );
// }



function tick(){
    // const element = (
    //     <div>
    //         <h1>Hello</h1>
    //         <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //     </div>
    // );
    ReactDOM.render(
        // <Clock date={new Date()}/>,
        <Clock/>,
        document.getElementById('root')
    );

}

// setInterval(tick,1000);

export default tick;
