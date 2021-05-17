
import React from "react";
import LabelText from "./LabelText";

class Label extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: this.props.item
        }
    }

    checkVars = () => {
        console.log('label props : ',this.props.item.length);
    }

    render () {
        // {this.checkVars()}
        if (this.props.item.length !== 0){
        return (
    
                
            
            <span className="inline-block">
            <span className="card-header"> Nutrition Facts</span>
                <span className="card-body text-primary ">
                <h5 className="card-title">Amount per serving</h5>
                {this.checkVars()}
                <form>
                    <LabelText value = "category" selectedMenuItem={this.props.selectedMenuItem} defaultValue = {this.props.item[7]}/>
                    <LabelText value = "totalfat" selectedMenuItem={this.props.selectedMenuItem} defaultValue = {this.props.item[2]}/>
                    <LabelText value = "saturatedfat" selectedMenuItem={this.props.selectedMenuItem} defaultValue = {this.props.item[3]}/>
                    <LabelText value = "transfat" selectedMenuItem={this.props.selectedMenuItem} defaultValue = {this.props.item[4]}/>
                    <LabelText value = "protein" selectedMenuItem={this.props.selectedMenuItem} defaultValue = {this.props.item[5]} />
                    <LabelText value = "carbohydrate" selectedMenuItem={this.props.selectedMenuItem} defaultValue = {this.props.item[6]} />

                </form>
                
                
                
                
                
                {/* <p className="card-text">Category : {this.props.item[7]}</p> */}
                {/* <p className="card-text">TotalFat : {this.props.item[2]}</p> */}
                {/* <p className="card-text">Saturated Fat : {this.props.item[3]}</p> */}
                {/* <p className="card-text">TransFat : {this.props.item[4]}</p> */}
                {/* <p className="card-text">Protein : {this.props.item[5]}</p> */}
                {/* <p className="card-text">Carbohydrate : {this.props.item[6]}</p> */}
                </span>
            </span>

        );
        }
        else {
            return null;
        }
    }

}
export default Label;