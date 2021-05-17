// some gloval variables
let proteins = [["steak",300],["ground beef",200],["chicken",100],["fish",80],["soy",50]];
let fruits = [["orange",300],["banana",200],["pineapple",100],["grapes",80],["blueberries",50]];
let vegetables = [["romaine",30],['green beans',40],["squash",100],["spinach",50],["kale",10]];
let dairy = [["milk",300],["yoghurt",200],["cheddar cheese",200],["skim milk",100],["cottage cheese",80]];
let grains = [["bread",200],["bagel",300],["pita",250],["naan",210],["tortilla",120]];


// count for conditional check
let count = 0;
// total_calories
let toalAmount = 0;
// common_dictionary
let common_dict = {
	'steak': 300,
	'ground beef': 200,
	'chicken': 100,
	'fish': 80,
	'soy': 50,
	'orange': 300,
	'banana': 200,
	'pineapple': 100,
	'grapes': 80,
	'blueberries': 50,
	'romaine': 30,
	'green beans': 40,
	'squash': 100,
	'spinach': 50,
	'kale': 10,
	'milk': 300,
	'yoghurt': 200,
	'cheddar cheese': 200,
	'skim milk': 100,
	'cottage cheese': 80,
	'bread': 200,
	'bagel': 300,
	'pita': 250,
	'naan': 210,
	'tortilla': 120
}


// function responsible to return the list of items which needed to be displayed
function populateItems(arr){

	li = [];
	for(var i = 0; i < arr.length;i++){
		li.push(arr[i][0]);
	}
	console.log(li);
	return li;

}

//  populate the list box in the middle
function fillListBox(li){

	var select = document.getElementById('text_area_1');
	
	for(var i = 0; i< li.length; i++){
		var opt = document.createElement('option');
		opt.value = li[i];
		opt.innerHTML = li[i];
		// opt.click = setTextOfButton();
		select.appendChild(opt);

	}

}

/*
	Function responsible to update the text of the button
	to Add
*/
function setTextOfButton(){
	var btn = document.getElementById('button');
	btn.innerText = "Add";

}


// function to clear the items
function clearItems(){
	var select = document.getElementById('text_area_1');
	
	while (select.firstChild) {
        select.removeChild(select.firstChild);
    }


	console.log('removed');

}
/*
	Function responisble to remove the selected Items
*/

function removeSelectedItems(){
	
	selectElement = document.querySelector('#text_area_2');
                      
    output = selectElement.value;
  	console.log(output);
  	// decrement the total sum

  	toalAmount -= common_dict[output];
    console.log('toalAmount = ',toalAmount);

    // setting the value of inner HTML of p tag for total calories

    var a = document.getElementsByClassName('total_sum');
    a[0].innerText = toalAmount;

    // removing the value from the list

  	index = selectElement.selectedIndex;
  	selectElement.remove(index);
}

/*
	Function responsible to work appropriately based on the 
	selection
*/

function buttonValue(){

	var btn = document.getElementById('button');

	value = btn.innerText;

	if (value == "Add"){
		addSelectedItems();
	}
	else {
		removeSelectedItems();
	}

}



function addSelectedItems(){
	let dropdown = document.getElementById('dropdown_list');
	var value = dropdown.value.toLowerCase();
	main_li = value;
	// onclick should add the item to selected items
	var e = document.getElementById("text_area_1");
	selectElement = document.querySelector('#text_area_1');
                      
    output = selectElement.value;
  	console.log(output);

  	var select = document.getElementById('text_area_2');

  	var opt = document.createElement('option');
	opt.value = output;
	opt.innerHTML = output;
	select.appendChild(opt);
	console.log(main_li);

    var a = document.getElementsByClassName('calories');
    a[0].style.display = "inline-block";

    // add to global counter - total_sum_of_calories
    toalAmount += common_dict[output];
    console.log('toalAmount = ',toalAmount);

    // setting the value of inner HTML of p tag for total calories

    var a = document.getElementsByClassName('total_sum');
    a[0].innerText = toalAmount;

}


function checkAddition(){
	console.log('hi');
}


function checkRemoval(){
	console.log('remove_items');

}

/*
	Function responsible to update the text of the button
	to remove
*/

function setTextOfButtonToRemove(){
	var btn = document.getElementById('button');
	btn.innerText = "Remove";
}

/*
	Function responsible to list the items based on
	the selection from the drop down menu
*/

function listitems(){
	let dropdown = document.getElementById('dropdown_list');
	var value = dropdown.value;
	
	if (count !=0 || count > 1){
		clearItems();
	}

	li = null;
	if (value === "Proteins"){
		li = populateItems(proteins);
		// console.log(li);
	}
	else if (value === "Fruits"){
		li = populateItems(fruits);
	}
	else if (value === "Vegetables"){
		li = populateItems(vegetables);
	}
	else if (value === "Dairy"){
		li = populateItems(dairy);
	}
	else if (value === "Grain"){
		li = populateItems(grains);
	}
	else {
		console.log(dropdown.value);
	
	}
	count += 1;
	if (li != null){
		// add the list items to the textbox
		fillListBox(li);
	}


	
}