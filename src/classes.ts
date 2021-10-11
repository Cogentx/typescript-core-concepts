class Customer {
  // properties

  constructor(public fname : string, public lname : string, public age : number) {}

  placeOrder(productId : number) {
    console.log(productId);
  }
}

class GoldCustomer extends Customer {

}

let cust : Customer = new Customer('Jane', 'Doe', 27);
let gold : GoldCustomer = new GoldCustomer('Jane', 'Doe', 27);

console.log(cust.age);
console.log(cust.placeOrder(7));
console.log(gold.age);
console.log(gold.placeOrder(7))
