// ##1.) getItems(array)

// Create a function called `getItems` that simply returns the items array from the google product object.

var data = require("./products.json")

var getItems = function(product) {
	return data.items;
}

console.log(getItems());