import { totalSale, numberSale, buy, sell } from "./sales.js";

let buyer = {
  name: "John",
  total: 100,
};

let item = {
  name: "pen",
  price: 10,
  quantity: 50,
};

console.log(`Total sale = ${totalSale}`);
buy(buyer, item);
sell(item);

console.log("Total expense of buyer : ", buyer.total);
console.log("Quantity of item left : ", item.quantity);
console.log(`Total sale = ${totalSale}`);