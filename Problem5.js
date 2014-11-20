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
		newArray.push(array[i].product.googleId);
		}
	}
	return newArray;
}


var getItemsByAuthor = function (arrayToSearch, desiredAuthor) {
	desiredAuthor = desiredAuthor.toLowerCase();
	var newArray = [];
	for (i=0; i < arrayToSearch.length; i+=1) {
		if (arrayToSearch[i].product.author.name.toLowerCase() === desiredAuthor) {
			newArray.push([arrayToSearch[i].product.googleId, arrayToSearch[i].product.author.name]);
		}
	}
	return newArray;
}

var getItemsByBrand = function(arrayToSearch, desiredBrand) {
	var newArray = [];
	desiredBrand = desiredBrand.toLowerCase();

	for (var i = 0; i < data.items.length; i+=1) {
	if (arrayToSearch[i].product.brand.toLowerCase() === desiredBrand) {
		newArray.push([arrayToSearch[i].product.googleId, arrayToSearch[i].product.brand]);
	}
}
	return newArray;
}

var getItems = function(product) {
	return data.items;
}

//  * All items made by Nikon with the author eBay.
newArray1 = [];

for (var i = 0; i < data.items.length; i+=1) {
	if (getItemsByBrand(data.items, "Nikon") && (getItemsByAuthor(data.items, "ebay")) {
	newArray1.push(data.items.product.googleId);
	}
}
console.log(newArray1)

// // * All items made by Sony.
// 	getItemsByBrand(data.items, "Sony")
newArray2 = [];

for (var i = 0; i < data.items.length; i+=1) {
	if (getItemsByBrand(data.items, "Sony")) === true;
	newArray2.push(data.items.product.googleId);
}
console.log(newArray2)

// //* All items made by Sony that are available.
// 	if (getItemsByBrand(data.items, "Sony") && (getAvailableProducts(data.items))

newArray3 = [];

for (var i = 0; i < data.items.length; i+=1) {
	if (getItemsByBrand(data.items, "Nikon") && (getAvailableProducts(data.items)) {
	newArray3.push(data.items.product.googleId);
	}
}
console.log(newArray3)

