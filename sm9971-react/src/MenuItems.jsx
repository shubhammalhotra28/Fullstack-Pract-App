
import React from "react";
import './App.css';


class MenuItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemList: this.props.itemList,
            selectedItem: null
        }

    }

    // event handler on menu items

    selectMenuItem = (event) =>{
        var sitem = null;
        console.log('menu item check');
        this.props.itemList.forEach(item => {
            if(item[0] === event.target.value){
                sitem = item;
                
            }
        })
        this.props.setMenuItemSelected(sitem, true);
        
    }
    
    // populate itemss
    populateItems = () => {
        
        if(this.props.itemList && this.props.itemList.length > 0){
            var returnList = [];
            this.props.itemList.forEach(item => {
                returnList.push(
                    <option value={item[0]}>{item[0]}</option>
                )
            })
            return returnList;
        }
        
    }
    
    render (){
        console.log(this.props.itemList)
        return (
            
            <div className="main">
                <span className="menu_items">
                    <label for="menu_items">Menu Items</label>
                </span>
                <div className="text_area_span_1">
                    <select id="text_area_1" size="5" onChange={this.selectMenuItem}>
                        {this.populateItems()}
                    </select> 
                </div>
            </div>
        );
    
    }
}
export default MenuItems;