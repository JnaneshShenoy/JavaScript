export class ProductBean {
  constructor(prodId, productName, productQuantity, productPrice) {
    this.prodId = prodId;
    this.productName = productName;
    this.productQuantity = productQuantity;
    this.productPrice = productPrice;
  }
}

export let products = [
  new ProductBean(505, "Lenovo", 10000, 10000),
  new ProductBean(506, "Mi", 6, 15000),
  new ProductBean(507, "Samsung", 10, 8000),
  new ProductBean(508, "Apple", 8, 60000),
];
