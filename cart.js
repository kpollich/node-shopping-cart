var items = require("./items.json");

module.exports = 
{	
	cart: {},

	displayCurrentItems: function() {
		console.log("---------------------------------------------------");
		console.log("Current items: ");
		Object.keys(items).forEach(function(item) {
			console.log("Item \"" + item + "\" has a price of $" + items[item].price + ", and there are " + items[item].quantity + " in stock.");
		});

		console.log("---------------------------------------------------");
	},

	displayCurrentCart: function() {
		console.log("\nCurrent cart in borderline illegible JSON: %j ", this.cart);
	},

	purchaseItem: function(item, quantity){
		if (items[item]){
			this.cart[item] = {"quantity": quantity, "total": items[item].price * quantity};
			items[item].quantity -= quantity;
			console.log("---------------------------------------------------");
			console.log("You successfully purchased " + quantity + " " + item + "! Here's your cart and the available items after your purchase: ");
			this.displayCurrentCart();
			this.displayCurrentItems();
		}	
	}
}