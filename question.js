// "use strict";
let arr = [1, 2, 3, 4, 5];

// console.log(Object.getOwnPropertyNames(arr));

// console.log(arr.toString());
// Arrayni stringa o'tkazish
// 1,2,3,4

// console.log(arr + [5, 6, 7, 8]);
// String -> 1,2,3,45,6,7,8

// console.log(arr.concat([5, 6, 7, 8]));
// [1, 2, 3, 4, 5, 6, 7, 8];

// ======= sort =======>>>>>>
// arr.sort((a, b) => {
//   a = a - b;
//   return a;
// });

// arr.sort((a, b) => a - b);

// console.log(arr);

// console.log(arr.splice(1, 2));

// arr.forEach((el, idx) => {
//   if (el === 2) {
//     // arr.splice(idx, 1); // [ 11, 3, 4, 0 ]
//     delete arr[idx]; // [ 11, <1 empty item>, 3, 4, 0 ]
//   }
// });

// console.log(arr);

// let newUsers = Object.assign(arr, [5, 6, 7, 8]);

// console.log(newUsers);

// var a = {
//   name: "Ajay",
// };

// var b = {
//   approvers: [
//     {
//       id: "12",
//     },
//   ],
// };

// let d = structuredClone(a);
// d.age = 30;

// var c = Object.assign(a, b);
// let c = structuredClone(a);
// console.log(a);

// console.log(arr.slice(1, 4)); // [1, 4) -> 1,2,3
// console.log(arr);

// console.log(arr.copyWithin(0, 1, 4));

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Keyn" },
  { id: 4, name: "Uik" },
];

let userName = "John";

// users.map((el) => (el.age = el.id * 10));
let newUsers = users.filter((el) => el.name != userName);

console.log(newUsers);

// users.forEach((el) => (el.age = 30));

// let newArr = arr.forEach((el) => el + 1);
// console.log(newArr);

// console.log(users);

// const user = [{ id: 1, name: "John" }];

// const newUser = user;

// newUser[0].name = "Doe";

// console.log(user);

// 9. Biita likka bo'glanib qolayapti
// let a = [1, 2];
// let b = [...a];
// b.push(0);
// console.log(a);

// 10. Biita likka bo'glanib qolayapti
// let a = [{ name: "John" }];
// let b = [...a]; // Rest operator -> {...a}
// b[0].name = "Doe";
// console.log(a);

// fetch("users.json", {
//   method: "GET",
//   body: JSON.stringify({ id: 1, name: "Doe", age: 25 }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Xato"));

// async function addUser() {
//   const response = await fetch("users.json", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       id: "4",
//       name: "Name 4",
//     }),
//   });

//   const data = await response.json();

//   console.log(data);
// }

// addUser();
