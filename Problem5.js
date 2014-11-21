// ##5.) Use your functions
// Use the functions you created in 1 - 5 to print find the following lists of items.

//  * All items made by Nikon with the author eBay.
//  * All items made by Sony.
//  * All items made by Sony that are available.

// **BONUS:** Create another search function and/or think of other interesting ways to combine the functions to preform useful searches.

var data = require("./products.json")

var getAvailableProducts = function(array) {
	
	var newArray = [];

		for (i=0; i < array.length; i+=1) {
			if (array[i].product.inventories[0].availability === "inStock") {
				newArray.push(array[i]);
			}
		}
	return newArray;
}


var getItemsByAuthor = function (arrayToSearch, desiredAuthor) {
	desiredAuthor = desiredAuthor.toLowerCase();
	var newArray = [];
	for (i=0; i < arrayToSearch.length; i+=1) {
		if ( arrayToSearch[i].product.author.name.toLowerCase().indexOf(desiredAuthor) >= 0 ) {
		// if (arrayToSearch[i].product.author.name.toLowerCase() === desiredAuthor.toLowerCase()) {
			newArray.push(arrayToSearch[i]);
		}
	}
	return newArray;
}

var getItemsByBrand = function(arrayToSearch, desiredBrand) {
	var newArray = [];
	desiredBrand = desiredBrand.toLowerCase();

	for (var i = 0; i < arrayToSearch.length; i+=1) {
		if (arrayToSearch[i].product.brand.toLowerCase() === desiredBrand) {
			newArray.push(arrayToSearch[i]);
		}
	}
	return newArray;
}

var getItems = function(product) {
	return product.items;
}

//  * All items made by Nikon with the author eBay.
// This is another version of logic that doesn't actually work, but should in work in theory:

// newArray1 = [];

// for (var i = 0; i < data.items.length; i+=1) {
// 	if (getItemsByBrand(data.items, "Nikon") && (getItemsByAuthor(data.items, "ebay")) {
// 	newArray1.push(data.items.product.googleId);
// 	}
// }
// console.log(newArray1)
var itemsByNikon = (getItemsByBrand(getItems(data), "Nikon"));
console.log(getItemsByAuthor(itemsByNikon, "ebay"));

// // // * All items made by Sony.
// // 	getItemsByBrand(data.items, "Sony")
// // newArray2 = [];

var itemsBySony = (getItemsByBrand(getItems(data), "Sony"));
console.log(getAvailableProducts(itemsBySony);

// for (var i = 0; i < data.items.length; i+=1) {
// 	if (getItemsByBrand(data.items, "Sony")) === true;
// 	newArray2.push(data.items.product.googleId);
// }
// console.log(newArray2)

// // //* All items made by Sony that are available.
// // 	if (getItemsByBrand(data.items, "Sony") && (getAvailableProducts(data.items))

var itemsBySony = (getItemsByBrand(getItems(data), "Sony"));
console.log(getAvailableProducts(itemsBySony));

// newArray3 = [];

// for (var i = 0; i < data.items.length; i+=1) {
// 	if (getItemsByBrand(data.items, "Nikon") && (getAvailableProducts(data.items)) {
// 	newArray3.push(data.items.product.googleId);
// 	}
// }
// console.log(newArray3)

