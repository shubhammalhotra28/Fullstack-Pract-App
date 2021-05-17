import React from "react";
import './App.css';


class Button extends React.Component {

    
    addItems = () => {
        this.props.addToSelectedItems()
    }

    removeItems = () => {
        this.props.removeSelectedItem();

    }

    render (){
        return (
            <span className="main">
                <span className="button-span">
                    <button onClick={this.addItems}>
                        Add
                    </button>
                </span>
                <span>
                    <button onClick={this.removeItems}>
                    Remove
                    </button>
                    
                </span>
            </span>
        );
    }

}
export default Button;