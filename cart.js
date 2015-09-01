var items = require("./items.json");

module.exports = 
{	
	cart: {},

	displayCurrentItems: function() {
		console.log("---------------------------------------------------");
		console.log("Current items: ");
		Object.keys(items).forEach(function(item) {
			console.log("Item \"" + item + "\" has a price of $" + items[item].price + 
				", and there are " + items[item].quantity + " in stock."
			);
		});

		console.log("---------------------------------------------------");
	},

	displayCurrentCart: function() {
		console.log("\nCurrent cart in borderline illegible JSON: %j ", this.cart);
	},

	purchaseItem: function(item, quantity, callback){
		if (items[item]){
			if (!this.cart[item]) {
				this.cart[item] = {"quantity": Number(quantity), "total": Number(items[item].price * quantity)};
			}
			else {
				this.cart[item].quantity += Number(quantity);
				this.cart[item].total = Number(items[item].price * this.cart[item].quantity);
			}
			items[item].quantity -= quantity;
			console.log("You successfully purchased " + quantity + " " + item + "! Here's your cart and the available items after your purchase: ");
			this.displayCurrentCart();
			this.displayCurrentItems();

			callback();
		}	
	},

	isItemPurchasable: function(item, quantity) {
		return (items[item] && Number(quantity) <= Number(items[item].quantity));
	}
}