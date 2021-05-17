import React from 'react';

class LoginButton extends React.Component {
    handleClick = () => {
        console.log('this is :',this);
    }

    render() {
        return (
//             <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

            <button onClick={this.handleClick}>
                Click Me (LoginButton)
            </button>
        );
    }
}
export default LoginButton;