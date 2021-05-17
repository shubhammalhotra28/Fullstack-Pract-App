import React from "react";
import './App.css';
// import MenuItems from "./MenuItems";

class Categories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem : "",
        };
    }
    
    // event handler for dropdown
    onChangeClick = (event) => {
        var val = event.target.value;
        this.dropDownValue = val;
        console.log('val = ',this.dropDownValue);
        this.handleClick(val);
    
    }
    // function to populate items
    populateItems(arr){

        var li = [];
        for(var i = 0; i < arr.length;i++){
            li.push(arr[i][0]);
        }
        console.log('populateItemsCheck = ',li);
        this.sendState = li;
        return li;
    
    }
    
    
    sendState(li){
        console.log(li);
        console.log('state : ',this.state);
        this.sendProps = li;
    }

    // select the items
    
    selectItem = (event) => {
        this.setState({
            selectedItem: event.target.value
        })
        this.props.onSelect(event.target.value)
    }
    // function to get categories
    getCategories = () => {
        var returnList = []
        Object.keys(this.props.categories).forEach(cat => {
            returnList.push(<option value={cat}>{cat}</option>)
        })

        return returnList;
    }

    render() {
        
        return (
        <span className="main">
            <span className="categories">
                <label for="categories">Categories</label>
                            
            </span>
            <span className="dropList">
                <br/>   
            <select className="dropdown_list"  value={this.state.selectedItem} onChange={this.selectItem}>
				<option value="" ></option>
                {this.getCategories()}
			
			</select>
            </span>
            <span className="menu_items_main">
                {/* <MenuItems state={this.state.sendState}/> */}
            </span>
        </span>
    );
    }
}
export default Categories;