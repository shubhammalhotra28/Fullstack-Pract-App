import React from "react";

class TotalNutritionFacts extends React.Component{
    

    render (){
        if (this.props.total !== 0){
        return (<span>
                
            
            <span class="card border-primary mb-3  p-3 margin_1 float-right ">
            <span className="card-header"> Nutrition Facts</span>
                <span className="card-body text-primary ">
                <h5 className="card-title">Amount per serving</h5>
                <p className="card-text">Total Fat : {this.props.totalFat}</p>
                <p className="card-text">Total Saturated Fat : {this.props.SaturatedFat}</p>
                <p className="card-text">Total TransFat : {this.props.TransFat}</p>
                <p className="card-text">Total Protein : {this.props.Protein}</p>
                <p className="card-text">Total Carbohydrate : {this.props.Carbohydrate}</p>
                </span>
            </span>
            </span>
        );    }
        else{
            return null;
        }
}


}
export default TotalNutritionFacts;