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
		// Have to bind here avoid issues with 'this' in the forEach below
		var currentCart = this.cart
		console.log("Your cart: ");

		Object.keys(currentCart).forEach(function(i) {
			console.log("|item: " + i + ", quantity: " + currentCart[i].quantity + " total: $" + currentCart[i].total.toFixed(2) + "|");
		});

		console.log("Cart Total: " + this.getCartTotal() + "\n");
	},

	getCartTotal: function() {
		var total = 0;
		var currentCart = this.cart;
		Object.keys(currentCart).forEach(function(i) {
			total += currentCart[i].total;
		});

		return "$" + total.toFixed(2);
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
			console.log("\nYou successfully purchased " + quantity + " " + item + "! Here's your cart and the available items after your purchase: \n");
			this.displayCurrentCart();
			this.displayCurrentItems();

			callback();
		}	
	},

	isItemPurchasable: function(item, quantity) {
		return (items[item] && Number(quantity) <= Number(items[item].quantity));
	}
}