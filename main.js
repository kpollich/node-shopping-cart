var cart = require("./cart");
var prompt = require('prompt');
process.stdin.setEncoding("utf-8");

cart.displayCurrentItems();

var schema = {
	properties: {
		item: {
			description: "Enter your choice of item"
		},
		quantity: {
			description: "Enter the quantity"
		}
	}
};

function getInput () {
	prompt.start();
	prompt.get(schema, function(err, result) {
		if (err) { return onErr(err); }
		if (cart.isItemPurchasable(result.item, result.quantity)) {
			cart.purchaseItem(result.item, result.quantity, getInput);
		}
		else {
			console.log("Unable to make a purchase for that item/quantity. Try again.");
		}
	});
}

function onErr(err) {
	console.log(err);
}

getInput();