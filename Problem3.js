//##3.) getItemsByAuthor(array, author)
// Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.

// Test this function by searching for Target, CDW, eBay
var data = require("./products.json")

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

console.log(getItemsByAuthor(data.items, "Target"));