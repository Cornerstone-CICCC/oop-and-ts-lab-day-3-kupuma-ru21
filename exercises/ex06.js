// Create a function called storeCatalog that returns an object with 3 properties:
// - products (object with product names as keys and no. of instances of the product)
// - totalPrice
// - mostExpensive
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function storeCatalog(queue) {
  const products = {};
  let totalPrice = 0;
  let mostExpensive = "";
  let maxPrice = 0;

  while (!queue.isEmpty()) {
    const item = queue.dequeue();
    if (products[item.product]) {
      products[item.product]++;
    } else {
      products[item.product] = 1;
    }

    totalPrice += item.price;

    if (item.price > maxPrice) {
      maxPrice = item.price;
      mostExpensive = item.product;
    }
  }

  return { products, totalPrice, mostExpensive };
}

const store = new Queue();
store.enqueue({ product: "Milk", price: 10 });
store.enqueue({ product: "Soap", price: 5 });
store.enqueue({ product: "Cereal", price: 12 });
store.enqueue({ product: "Milk", price: 10 });
store.enqueue({ product: "Shampoo", price: 7 });
store.enqueue({ product: "Broom", price: 25 });
store.enqueue({ product: "Cereal", price: 9 });

const result = storeCatalog(store);
console.log(result);
// {
//   products: {
//     "Milk": 2,
//     "Soap": 1,
//     "Cereal": 2,
//     "Shampoo": 1,
//     "Broom": 1
//   },
//   totalPrice: 78,
//   mostExpensive: "Broom"
// }
