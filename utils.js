const shoppingCart = [];

const sayHello = () => {
  return "Hello";
};

const area = (w, h) => {
  return w * h;
};

const perimeter = (w, h) => {
  return w + w + h + h;
};

const circleArea = r => {
  return Math.PI * r * r;
};

const createItem = (name, price, quantity=1) => {
  return {name, price, quantity}
}

// const removeItems = (name, price, quantity) => {
//   return {name, price, quantity}
// }

const addToShoppingCart = (item) => {
  shoppingCart.push(item);
  return shoppingCart
}

const getShoppingCart = () => {
  return shoppingCart
}

const returnNumOfItemsInCart = () => {
  let quantity = 0
  for(i = 0; i < shoppingCart.length; i++) {
    quantity += shoppingCart[i].quantity
  }
  return quantity
}

  const removeItemsInCart = (item) => {
    let removeQuantity = 0
    for(i = 0; i < shoppingCart.length; i++) {
      // item is a set of key values in an object
      // item {"name": apple, "price": .99, "quantity": 1}
      // i is always going ti be a number that represents the inde of where we are
      // i is going to be 0,1,2 etc
      console.log("shooping cart removed items" + shoppingCart[i])
    }
    return shoppingCart
  }

module.exports = { sayHello, area, perimeter, circleArea, createItem,  getShoppingCart, addToShoppingCart, returnNumOfItemsInCart, removeItemsInCart};
