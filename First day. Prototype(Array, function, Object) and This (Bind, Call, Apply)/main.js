// #This => Bind, Call, Apply
// =======================>>>>>>>> Fire Code
// This => Window
// =======================>>>>>>>>
// console.log(this === window);
// =======================>>>>>>>>
// var color = "red";

// function myName(_color) {
//   //   this.color = _color;
//   console.log(`My name is`, this);
// }
// myName("Green");
// =======================>>>>>>>>

// const car = {
//   name: "Mers",
//   year: 2023,
//   sayName: myName,
//   sayWindow: myName.bind(myName),
//   info(_number, _color) {
//     console.log(`Car name: ${this.name}`);
//     console.log(`Year: ${this.year}`);
//     console.log(`Number: ${_number}`);
//     console.log(`Color: ${_color}`);
//     // return 121;
//   },
// };

// const malibu = {
//   name: "Malibu",
//   year: 2025,
// };

// const newFoo = car.info.apply(malibu, [1221, "red"]);
// newFoo(1221, "red");
// console.log(newFoo.bold()); <b> ... </b>
// console.log(typeof newFoo); // => String, number, ... depend on return.

// =======================>>>>>>>>

// const my = {
//   name: "John",
//   year: function () {
//     console.log(this.name);
//     return "It is class name ...";
//   },
// };

// console.log(my.year());

// =======================>>>>>>>>

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];

// const summ = (_num) => {
//   return _num.reduce((a, b) => a + b);
// };

// To Create Prototype for Array

// Array.prototype.summ = function () {
//   return this.reduce((a, b) => a + b);
// };

// Immutable => It creats new value ...

// console.log(arr.summ());

// console.log(summ(arr));
// console.log(summ(arr2));

// afee
// () => {}

// afii
// (() => )()

// =======================>>>>>>>>
// const newArr = new Array(12, 15, 16);
// console.log(newArr);

// newArr.prototype.summ = function () {
//   return this.reduce((a, b) => a + b);
// };

// console.log(newArr.summ());

// =======================>>>>>>>>
// Function Construction

// function User(_fName, _lName) {
//   this.fName = _fName;
//   this.lName = _lName;
// }

// User.prototype.fullName = function () {
//   console.log(`I am ${this.fName} ${this.lName}`);
// };

// const user1 = new User("Savbatov", "Asadbek");
// User("Savbatov", "Asadbek");

// user1.fullName();

// =======================>>>>>>>>

// function foo(a) {
//   function boo() {
//     console.log(a);
//   }
//   boo();
// }

// =======================>>>>>>>>

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// // console.log(typeof add5);
// const add10 = makeAdder(10);
// // console.log(typeof add10);

// makeAdder(5)(10);

// =======================>>>>>>>>

// const person = new Object({
//   name: "John",
//   say: function () {
//     console.log(this.name);
//   },
// });

// const lena = Object.create(person);

// lena.name = "lena";

// =======================>>>>>>>>

// function outer() {
//   //   let x = 10;
//   //   var x = 10;
//   function inner() {
//     // x = 1;
//     console.log(x);
//     var x = 5; // ==> x = undefined
//     console.log(x); // ==> x = 5
//     // let x = 1; // not defined // 1 // undefined
//     //   TDZ ===> Reference Error
//   }
//   return inner;
// }

// let closureFn = outer();
// closureFn();

// console.log(x);
// var x = 5;

// <= >= == === != !== => ====> ===>>>
