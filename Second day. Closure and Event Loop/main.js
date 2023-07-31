// #Closure - bu (zamikaniya rus) (zamikaniya uzb) -> ichma ich function chaqirish

// function foo(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const first = foo(10);
// first(5);
// console.log(first(5));

// ==================>>>>>>>>>

// function site(domain) {
//   return function (hosting) {
//     console.log(`https://www.${hosting}.${domain}`);
//   };
// }

// const com = site("com");
// const uz = site("uz");

// const google = com("google");
// const kun = uz("kun");

// ==================>>>>>>>>>

// function full(domain, hosting) {
//   return `https://${domain}.${hosting}`;
// }

// const fullSite = full("google", "com");
// const fullSiteUzb = full("kun", "uz");
// console.log(fullSite);

// ==================>>>>>>>>>

// for (var i = 0; i < 5; i++) {
//   ((x) => {
//     setTimeout(() => {
//       console.log(x);
//     }, x * 1000);
//   })(i);
// }

// #Closure -> funksiya va uning qiymatini kerakli paytda foydalanish.

// foo(1)(2)(3)() => 6 ====> It's sugar solutioon by Nafisa

// function foo(a) {
//   return function (b) {
//     if (b) {
//       return foo(a + b);
//     }
//     return a;
//   };
// }
// console.log(foo(1)(2)(3)(4)());

// ==================>>>>>>>>>

// Can you write code for this function: sum(a)(b)(c)....( n)(). This should return the sum of all the numbers a+b+c+..+n.

// Functions in javascripts are First Class Functions
// Functions are like objects
// sum(1)(2)(3).. (n)

// ==================>>>>>>>>>

// Fist consider it like a function sum(1)(2)() which is called and gives output 3
// let sum = function (a) {
//   // Sum again gives a function which can be executed by passing an argument inside it let's call it b
//   return function (b) {
//     return a + b;
//   };
// };

// ==================>>>>>>>>>

// Now consider it like a function sum(1)(2)(3)() which is called and gives output 6
// let sum = function (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// };

// ==================>>>>>>>>>

// We can see a clear pattern, will solve it recursively
// const sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b); // it takes an argument and return a function which again can take an argument.
//     }
//     return a; // it will keep on adding 1+2+3+4..
//   };
// };

// console.log(sum(1)(2)()); //3
// console.log(sum(1)(2)(3)(4)()); //10

// ==================>>>>>>>>>
// ==================>>>>>>>>>
// ==================>>>>>>>>>

// #Event loop Asinxronlik ==> Codelarni ketma - ket o'qilishi va bajarilishi.

// console.log("1");

// console.log("2");

// setTimeout(() => {
//   console.log("3");
// }, 2000);

// window.setTimeout(() => {
//   console.log("4");
// }, 1000);

// console.log("5");

// ==================>>>>>>>>>
// ==================>>>>>>>>>

// #This -> undefined

// function foo() {
//   console.log(this);
// }

// const foo = () => {
//   console.log(this);
// };

// foo();

// const car = {
//   name: "malibu",
//   foo: () => {
//     console.log(this.name);
//   },
// };

// car.foo();

// ==================>>>>>>>>>
// Interview questions
// ==================>>>>>>>>>

// 1. 1995-yil Brandan Eich
// 2. MochaScript => LiveScript => JavaScript
// 3. ECMAScript => 1997-yil => Europian Computer Manufacturers Assaociation
// 4. Google Map => 2005 - yil
// 5. Data Types 8 ta.
// String
// Number
// BigInt
// Symbol
// Boolean
// undefined
// null
// Object

// Primitive:- (String,Boolean,Number,BigInt,Null,Undefined,Symbol )
// Non-Primitive:- Object (array, functions) also called object references.

// Mutable yaratilgandan keyin o'zgartirilishi mumkin bo'lgan qiymatlardir.

// const arr = [1, 2, 3, 5];
// arr.splice(1, 3);
// console.log(arr);

// Array.prototype.add = function (n) {
//   for (i = this.length - 1; i >= 0; i--) {
//     this[i + 1] = this[i];
//   }
//   this[0] = n;
//   return this;
// };
// arr.add(0);
// arr.add(-1);
// arr.add(-2);

// console.log(arr);

// Immutable yaratilgandan keyin o'zgartirib bo'lmaydigan qiymatlardir.

// const arr2 = [1, 2, 3, 5];
// const newArr = arr2.slice(1, 3);
// console.log(newArr);

// Array.prototype.summ = function () {
//   return this.reduce((a, b) => a + b);
// };

// console.log(arr2.summ());

// 6. not defined, undefined, not declared

// console.log(a);
// var a = 5;
// function sum() {}
// ⛔️ SyntaxError: Identifier 'sum' has already been declared
// const sum = 15;

// 7. Template literals => ` `

// 8. Qaysi method istalgan sanoq sistemasidan 10 likka o'tkazadi.
// 11(2) => 3(10)
// console.log(parseInt("11", 2));

// 9. Type Coersion => majburlash
// console.log(10 == "10");
// console.log(undefined == null);
// console.log(undefined == NaN);
// console.log(undefined == undefined);
// console.log(NaN == NaN);
// console.log(null == NaN);
// console.log(null == null);
// console.log(Symbol("a") === Symbol("a"));
// console.log(10 || null || ""); // 0 => 0 => 1 ...
// console.log(1 && "" && null); // 0 * 10 // 1 * 1 * 0

// 10. Falsy => '', NaN, undefined, null, 0
// 11. Truthy => string, 1, true, number,
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(42));
// console.log(Boolean("0"));
// console.log(Boolean("false"));
// console.log(Boolean(new Date()));
// console.log(Boolean(-42));
// console.log(Boolean(12n));
// console.log(Boolean(true));
// console.log(Boolean(3.14));
// console.log(Boolean(-3.14));
// console.log(Boolean(Infinity));
// console.log(Boolean(-Infinity));

// const arr = [1, 2, 2, 2, 1, 1, 1];
// 1 : 4
// 2 : 3
//   if (!obj[item]) {
//     obj[item] = 1;
//   } else {
//     obj[item] = obj[item] + 1;
//   }
// const obj = {};

// arr.forEach((item) => {
//   obj[item] = obj[item] + 1 || 1;
// });

// console.log(obj);
