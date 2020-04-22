const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const area = utils.area(5, 6);
  expect(area).to.be.a("Number");
  expect(area).to.equal(5 * 6);
  expect(area).to.equal(30);
});

it("should return the are of a circle of radius 5", function() {
  const circleArea = utils.circleArea(5);
  expect(circleArea).to.equal(78.53981633974483)
});
  
// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function(){
  const item = utils.createItem("apple", 0.99, 2)
  expect(item).to.have.property("name");
  expect(item).to.have.property("price");
  expect(item).to.be.a("Object")
});

it("Should return an array containing all items in cart", function(){
  const returnedCart = utils.getShoppingCart();
  expect(returnedCart).to.be.a("Array")
  expect(returnedCart).to.be.empty;
});

it("Should add a new item to the shopping cart", function(){
  const item = utils.createItem("apple", 0.99);
  utils.addToShoppingCart(item);

  const returnedCart = utils.getShoppingCart();
  expect(returnedCart).to.be.a("Array")
  expect(returnedCart).to.have.length(1)
  expect(returnedCart[0]).to.include({name: 'apple', price: 0.99})
});

it("Should return the number of items in the cart", function() {
const returnedNumOfItems = utils.returnNumOfItemsInCart();
expect(returnedNumOfItems).to.be.a("Number")
expect(returnedNumOfItems).to.be.equal(1)
});

it("Should remove items from cart", function () {
const item = utils.removeItemsInCart("apple", 0.99, 1);
  utils.removeItemsInCart(item);

const returnedCart = utils.getShoppingCart();
expect(returnedCart).to.be.a("Array")
expect(returnedCart).to.be.equal([0])
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
