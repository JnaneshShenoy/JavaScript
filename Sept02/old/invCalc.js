import { ProductBean, products } from "./product"

let lowStock = [];
let inStock = [];

function invDet() {
  let totPrice = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].productQuantity <= 5) {
      lowStock.push(products[i]);
    } else {
      inStock.push(products[i]);
    }
    totPrice += products[i].productQuantity * products[i].productPrice;
  }
  console.log(`Total Price: ${totPrice}`);
  console.log(`Low Stock: ${lowStock.map(p => p.productName).join(', ')}`);
  console.log(`In Stock: ${inStock.map(p => p.productName).join(', ')}`);
}

invDet();