var items = require("./items.json");

module.exports = 
{	
	cart: {},

	displayCurrentItems: function() {
		console.log("\n");

		Object.keys(items).forEach(function(item) {
			console.log("Item \"" + item + "\" has a price of $" + items[item].price + ", and there are " + items[item].quantity + " in stock.");
		});

		console.log("\n");
	},

	displayCurrentCart: function() {
		console.log("\n");

		console.log();

		console.log("\n");
	},

	purchaseItem: function() {
		console.log("")
	}
}