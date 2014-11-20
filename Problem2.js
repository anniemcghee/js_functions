// ##2.) getItemsByBrand(array, brand)
// Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

// Test this function by searching for Sony, Cannon, Nikon and Panasonic.

var data = require("./products.json")

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

console.log(getItemsByBrand(data.items, "Nikon"));

/*We included arrayToSearch as a parameter so that we can specify location as a part of this function. 
This may not have been necessary - because data.items feels like something we shouldn't have to reference all the time. Who likes to specify arrays?
The framing of the question helped us understand that there is a CONDITION (brand) that gets pushed into a new array.
That means I have to create an empty array in the function to get pushed into - then I have to have a for - if - push inside my function
