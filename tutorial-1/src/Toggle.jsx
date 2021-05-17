import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => (
            {isToggleOn: !state.isToggleOn}
        ));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn? 'ON' : 'OFF'}
            </button>
        );
    }


}

// ReactDOM.render(
//     <Toggle/>,
//     document.getElementById('root')
// )


// function ActionLink() {
//     function handleClick(e){
//         e.preventDefault();
//         console.log('The link was clicked');
//     }

//     return (
//         <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//     );

// }

export default Toggle;