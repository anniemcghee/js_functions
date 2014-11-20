//##4.) getAvailableProducts(array)
/*Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products 
(an available product is one with at least one availability of "inStock" in the inventories array)
*/
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

console.log(getAvailableProducts(data.items));