
import React from "react";
import TotalNutritionFacts from "./TotalNutritionFacts";

// should maintain the total as well
class SelectedItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            total : 0,
            totalFat: 0,
            SaturatedFat: 0,
            TransFat: 0,
            Protein: 0,
            Carbohydrate: 0
        }
        
    }

// function to check change in props
componentDidUpdate(prevProps){
    var sum = 0;
    var localTransFat = 0;
    var localSaturatedFat = 0;
    var localTotalFat = 0;
    var localProtein = 0;
    var localCarbohydrate = null;
    console.log('cc1 = ',this.state);
    if(prevProps.selectedItemsListing !== this.props.selectedItemsListing){
        console.log('this.props.selectedItemsListing = ',this.props.selectedItemsListing);
        this.props.selectedItemsListing.forEach(p => {
            console.log('p = ',p[1]);
            sum += p[1];
            localTotalFat += p[2];
            localSaturatedFat += p[3];
            localTransFat += p[4];
            localProtein += p[5];
            localCarbohydrate += p[6];
            
        }
        )
        this.setState({total:sum},() => {
            this.setState({totalFat:localTotalFat})    
        }, () => {
            this.setState({SaturatedFat:localSaturatedFat})
        },() => {
            this.setState({Protein:localProtein})
        }, () => {
            this.setState({Carbohydrate:localCarbohydrate})
        }, () => {
            this.setState({TransFat:localTransFat})
        });
    }

    console.log('cheee : ',this.state);

    
}

// populate items
populateItems = ()=>{
    
    var returnList = [];
    // var localTransFat = 0;
    // var localSaturatedFat = 0;
    // var localTotalFat = 0;
    // var localProtein = 0;
    // var localCarbohydrate = 0;
    
    if(this.props.selectedItemsListing !== undefined && this.props.selectedItemsListing.length > 0){
        this.props.selectedItemsListing.forEach(item => {
            console.log(item);
            // localTotalFat += item[2];
            // localSaturatedFat += item[3];
            // localTransFat += item[4];
            // localProtein += item[5];
            // localCarbohydrate += item[6];
            returnList.push(
                <option value={item[0]}>{item[0]}</option>
            )
        })
    }
    // console.log("Populating selected items listing ", returnList);
    

    return returnList;
    
}

// event handler for item removal : using the

selectItemForRemoval = (e) => {
    var index = 0;
    if(this.props.selectedItemsListing){
        this.props.selectedItemsListing.forEach(item => {
            if(item[0] === e.target.value){
                this.props.setForRemoval(index);

            }
            index += 1;
        })
    }
    
    
}

   render(){
       return (
        <span className="main">
        <span className="selected_items">
        <label for="selected_items">Selected Items</label>
        </span>
        <div class="text_area_span_2" >
      <select id="text_area_2" size="15" onChange={this.selectItemForRemoval} >  
        {this.populateItems()}
        </select> 
    <br/>
    <span class="calories">
    <p>
        Total Calories : {this.state.total}
    </p>
    </span>
    <div className="progress">
  <div className="progress-bar" role="progressbar" styles="width: 2000px;" aria-valuenow={this.state.total} aria-valuemin="0" aria-valuemax="2000">{this.state.total}</div>
</div>

    <TotalNutritionFacts totalFat = {this.state.totalFat} SaturatedFat = {this.state.SaturatedFat} TransFat = {this.state.TransFat}
    Protein = {this.state.Protein} Carbohydrate = {this.state.Carbohydrate} total={this.state.total}/>
    

  </div>
        
   </span>
       );
   }
   
}
export default SelectedItems;
