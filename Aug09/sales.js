var numberSale = 0;
var totalSale = 0;

export function buy(buyer, item) {
  if (buyer.total >= item.price) {
    buyer.total -= item.price;
  } else {
    console.log("Buyer doesn't have enough money to buy the item");
  }
}

export function sell(item) {
  totalSale += item.price;
  numberSale += 1;
  item.quantity -= 1;
}

export { totalSale, numberSale };