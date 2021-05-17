import React, {Component} from 'react';
import './App.css';

import Categories from './categories';
import MenuItems from './MenuItems';
import SelectedItems from './SelectedItems';
import Button from './button';
import Label from './Label';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // ["name","calories","totalFat","saturatedFat","transFat","protein","carbohydrate","category"]
      // proteins: [
      //   ["steak",300,5.73,2.183,0.182,29.44,0.0,'proteins'],
      //   ["ground beef",200,13.1,5.3,0.6,15.18,0.0,'proteins'],
      //   ["chicken",100,9.3,2.5,0.1,27.14,0.0,'proteins'],
      //   ["fish",80,6.34,1.0,0.0,19.84,0.0,'proteins'],
      //   ["soy",50,19.94,2.884,0.0,36.49,30.16,'proteins']
      // ],
    
      // fruits: [
      //   ["orange",300,0.12,0.0,0.0,0.94,11.75,"fruits"],
      //   ["banana",200,0.33,0.0,0.0,1.09,22.84,"fruits"],
      //   ["pineapple",100,0.12,0.0,0.0,0.54,13.12,"fruits"],
      //   ["grapes",80,0.16,0.0,0.0,0.72,18.1,"fruits"],
      //   ["blueberries",50,0.33,0.0,0.0,0.74,14.49,"fruits"]
      // ],

      // vegetables: [
      //   ["romaine",30,0.3,0.0,0.0,1.2,3.3,"vegetables"],
      //   ['green beans',40,0.22,0.0,0.0,1.83,6.97,"vegetables"],
      //   ["squash",100,0.2,0.0,0.0,1.2,3.4,"vegetables"],
      //   ["spinach",50,0.4,0.0,0.0,2.9,3.6,"vegetables"],
      //   ["kale",10,0.9,0.0,0.0,4.3,8.8,"vegetables"]
      // ],

      // dairy: [
      //   ["milk",300,3.9,2.4,0.0,3.2,4.8,"dairy"],
      //   ["yoghurt",200,5.0,0.0,0.0,9.0,3.98,"dairy"],
      //   ["cheddar cheese",200,9.0,6.0,0.0,7.0,0.0,"dairy"],
      //   ["skim milk",100,0.2,0.1,0.0,8.3,12.5,"dairy"],
      //   ["cottage cheese",80,4.3,0.0,0.0,11.12,3.98,"dairy"]
      // ],
      
      // grains : [
      //   ["bread",200,1.1,0.0,0.0,4.0,13.8,"grains"],
      //   ["bagel",300,1.7,0.1,0.0,13.8,68,"grains"],
      //   ["pita",250,1.7,0.3,0.0,6.3,35.2,"grains"],
      //   ["naan",210,3.3,0.1,0.0,2.7,16.9,"grains"],
      //   ["tortilla",120,0.5,0.1,0.0,1.1,8.5,"grains"]
      // ],
      

      buttonState: undefined,
      
      selectedMenuListing: [],
      selectedItemsListing : [],
      selectedMenuItem : [],
      totalNutritionFacts: []
      // selectVisible: undefined
    }
  }


  updateData = (apiResponse) => {
    console.log('updating the data');
    console.log(apiResponse.fruits);
   
    var fruitsData = apiResponse.fruits;
    var vegetablesData = apiResponse.vegetables;
    var grainsData = apiResponse.grains;
    var dairyData = apiResponse.dairy;
    var proteinsData = apiResponse.proteins;

    this.setState({
      proteins:proteinsData,
      vegetables:vegetablesData,
      grains:grainsData,
      dairy:dairyData,
      fruits:fruitsData
    
    },() => {
      console.log('states updated, now printing this.state to check');
      console.log('this.state = ',this.state);
    });
   }


  fetchData = () => {
    fetch('/get_all_data')
    .then((response) => {
      if (response.status === 200){
        console.log('response status = 200');
        console.log(response);
        return response.json()
      }
      else{
        console.log('error');
        // setting it manually
        this.setState({
          proteins: [
            ["steak",300,5.73,2.183,0.182,29.44,0.0,'proteins'],
            ["ground beef",200,13.1,5.3,0.6,15.18,0.0,'proteins'],
            ["chicken",100,9.3,2.5,0.1,27.14,0.0,'proteins'],
            ["fish",80,6.34,1.0,0.0,19.84,0.0,'proteins'],
            ["soy",50,19.94,2.884,0.0,36.49,30.16,'proteins']
          ],
        
          fruits: [
            ["orange",300,0.12,0.0,0.0,0.94,11.75,"fruits"],
            ["banana",200,0.33,0.0,0.0,1.09,22.84,"fruits"],
            ["pineapple",100,0.12,0.0,0.0,0.54,13.12,"fruits"],
            ["grapes",80,0.16,0.0,0.0,0.72,18.1,"fruits"],
            ["blueberries",50,0.33,0.0,0.0,0.74,14.49,"fruits"]
          ],
    
          vegetables: [
            ["romaine",30,0.3,0.0,0.0,1.2,3.3,"vegetables"],
            ['green beans',40,0.22,0.0,0.0,1.83,6.97,"vegetables"],
            ["squash",100,0.2,0.0,0.0,1.2,3.4,"vegetables"],
            ["spinach",50,0.4,0.0,0.0,2.9,3.6,"vegetables"],
            ["kale",10,0.9,0.0,0.0,4.3,8.8,"vegetables"]
          ],
    
          dairy: [
            ["milk",300,3.9,2.4,0.0,3.2,4.8,"dairy"],
            ["yoghurt",200,5.0,0.0,0.0,9.0,3.98,"dairy"],
            ["cheddar cheese",200,9.0,6.0,0.0,7.0,0.0,"dairy"],
            ["skim milk",100,0.2,0.1,0.0,8.3,12.5,"dairy"],
            ["cottage cheese",80,4.3,0.0,0.0,11.12,3.98,"dairy"]
          ],
          
          grains : [
            ["bread",200,1.1,0.0,0.0,4.0,13.8,"grains"],
            ["bagel",300,1.7,0.1,0.0,13.8,68,"grains"],
            ["pita",250,1.7,0.3,0.0,6.3,35.2,"grains"],
            ["naan",210,3.3,0.1,0.0,2.7,16.9,"grains"],
            ["tortilla",120,0.5,0.1,0.0,1.1,8.5,"grains"]
          ],
          
    
        })
      
      
      
      }
    }
    )
    .then((jsonData) => {
      this.updateData(jsonData);
    }
    )
    .catch((error) => {
      console.log(error);
    })

  }

  componentDidMount(){
    this.fetchData();
  }

  setButtonState = (state) => {
    this.setState({
      buttonState: state,
    });
  }


  setSelected = (selectedItem) => {
    console.log("Setting selected");
    this.setState({selectedMenuListing: selectedItem})
  }

  getCategoryListing = () => {
    return {
      proteins: this.state.proteins,
      fruits: this.state.fruits,
      vegetables:this.state.vegetables,
      dairy: this.state.dairy,
      grains : this.state.grains
    }
       
  }

  setMenuItemSelected = (item, buttonState) => {
    console.log('selected item = ',item);
    this.setState({
      selectedMenuItem : item
    }, () => {
      
      this.setState({
        buttonState: buttonState
      }, ()=>{console.log("NEW STATE " ,this.state.buttonState)})
    }
    
    );

  }

  addToSelectedItems = () => {
    console.log("Add to selected items")
    this.setState({
      selectedItemsListing : [...this.state.selectedItemsListing, this.state.selectedMenuItem]
    })
  }

  setItemForRemoval = (item) => {
    console.log('checkkk',item);
    this.setState({removalItem: item}, () => this.setState({buttonState: false}));
  }

  removeSelectedItem = () => {
      console.log('chhhhh');
      console.log("Remove selected item ", this.state.removalItem);
      var index = (this.state.removalItem);
      if (index > -1){
        this.state.selectedItemsListing.splice(index,1);
      }
      // console.log('check pop item -------- splice check now= ',a); 
      this.setState({
        selectedItemsListing : [...this.state.selectedItemsListing]
      })
  }

  checkFunction = () => {

    console.log('state : ',this.state);
  }

 
  render(){

      return (
        <div className="App">
          <h1> NutriKit Food Planner</h1>
          <h3>NutriKit allows you to select your groceries, and track your nutritional progress (good or bad)
          </h3>
          <div className="center-align">
          <Categories categories={this.getCategoryListing()} onSelect={this.setSelected}/>
          <MenuItems itemList={this.getCategoryListing()[this.state.selectedMenuListing]} setMenuItemSelected={this.setMenuItemSelected} setButtonState={this.setButtonState}/>
          
          <Label visible = {this.state.selectVisible} item = {this.state.selectedMenuItem} selectedMenuItem={this.state.selectedMenuItem}/>
          {this.checkFunction()}
          <Button addToSelectedItems={this.addToSelectedItems} removeSelectedItem={this.removeSelectedItem}/>
          <SelectedItems selectedItemsListing={this.state.selectedItemsListing} setForRemoval={this.setItemForRemoval}/>
          

          </div>

          
        </div>
      );
  }
  
}