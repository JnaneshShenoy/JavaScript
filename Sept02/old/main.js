import { product_bean,product } from "./product.js";

let lowstockproduct=[];
let instockproduct=[];

function inventory() {
    let totalprice=0;
    for (let i = 0; i < product.length; i++) {
        totalprice=product[i].productprice*product[i].productquality;
        console.log('total price of '+product[i].productname+'is'+totalprice);
        if(product[i].productquality<5){
            lowstockproduct.push(product[i])
        }else{
            instockproduct.push(product[i])
        }
    }
    console.log('Low stock');
    lowstockproduct.forEach(element => {
        console.log(element.productname+" "+element.productquality);
    });

    console.log('In stock');
    lowstockproduct.forEach(element => {
        console.log(element.productname+" "+element.productquality);
    });
}

inventory()

export class product_bean{
   constructor(prodid,productname,productquality,productprice){
       this.prodid=prodid;
       this.productname=productname;
       this.productquality=productquality;
       this.productprice=productprice
   }
}

let prod1=new product_bean(501,'Lenovo',0,10000)
let prod2=new product_bean(502,'Lenovo',6,15000)
let prod3=new product_bean(503,'Lenovo',10,8000)
let prod4=new product_bean(504,'Lenovo',8,60000)

let product=[];
product.push(prod1,prod2,prod3,prod4)
console.log(product)

export {product}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script src="inventory.js"></script>
// </body>
// </html>