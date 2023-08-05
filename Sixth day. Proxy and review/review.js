// // JSON

// const API = "backend.json"; // API

// // AJAX

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if (request.readyState == 4 && request.status == 200) {
//     const data = JSON.parse(request.responseText);
//     console.table(data);
//   }
// });

// request.open("GET", API);

// request.send();

// // Fetch

// fetch("backend.json")
//   .then((data) => {
//     return data.json();
//     //   console.log(data);
//   })
//   .then((dataJson) => {
//     console.table(dataJson);
//   });

// ============================>>>>>>>>>>>
// Interview question

// 1. Hoisting nima?
// 2. Execuation context nima?
// 3. TDZ nima? Va qanday hollarda uchraydi?

// let and const, var => function

// function arr() {
//   console.log(a); // 2. undefined
//   var a = 10;
// }
// console.log(a); // 1. 10
// arr();

// !4. Jsda qanday scopelarni bilasz?
// function, global, Block, module

// 5.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[-1]); // undefined

// 6.
// let arr1 = []; //Bir o'lchamli
// let arr2 = [
//   [2, 2],
//   [3, 5],
// ]; // Ikki olchami
// let arr3 = [[[]]]; // Uch o'lchamli massiv

// 7.
// const arr = [1, [2, [3, [4, [5, [6, [7], 8], 9], 10]]], 12];
// const res = arr.flat(5);
// console.log(res);

// 8.
// let arr = [1, 2];
// let obj = {
//   1: 1,
//   2: 2,
// };

// console.log(typeof arr == typeof obj);

// 9. Biita likka bo'glanib qolayapti
// let a = [1, 2];
// let b = [...a];
// b.push(0);
// console.log(a);

// 10. Biita likka bo'glanib qolayapti
// let a = [{ name: "John" }];
// let b = [...a]; // Rest operator
// b[0].name = "Doe";
// console.log(a);

// Array methods
// 11. push, unshift, shift, pop, reverse, indexof -< indx or -1, splice, slice
// let arr = [1, 2, 3];
// console.log(arr.splice(1, 2, 0));
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => console.log(el + 5));
// console.log(arr2);

// for (let el of arr) {
//   console.log(el);
// }

// for (let el in arr) {
//   console.log(el);
// }
