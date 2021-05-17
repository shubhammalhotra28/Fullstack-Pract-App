import React from "react";

class SelectButton extends React.Component{

    // button handler 
    buttonClickHandler = () => {
        if(this.props.buttonState === true){
            // add item

            this.props.addToSelectedItems()
        }
        if(this.props.buttonState === false){
            this.props.removeSelectedItem();
        }
    }
    
    // function setting button text 
    getButtonState = () => {
        if(this.props.buttonState === true){
          return "Add";
        } else{
          if(this.props.buttonState === false){
            return "Remove";
          }else{
            return "";
          }
        }
      }

    render (){
        console.log("BUTTON STATE ",this.props.buttonState);
        return (
            <div className="main">
                <span class="button_span">
	  		    <button id="button" onClick={this.buttonClickHandler}>
	  			    {this.getButtonState()}	
	  		    </button>
	  	        </span>
            </div>
        );
    }

}
export default SelectButton;