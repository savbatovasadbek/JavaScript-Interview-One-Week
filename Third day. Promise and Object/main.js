// # Promise -> Bitta qutida ham dastur ishlash holati va errorni ishlatish mumkin

// ===================>>>>>>>>>

// let neww = new Promise((resolve, reject) => {});

// let promise = new Promise((resolve, reject) => {
//   const data = {
//     name: "John",
//     age: 30,
//     isMarried: true,
//   };

//   resolve(data);
//   // reject(data);
// });

// // Promises chaining -> then().then().then()..

// promise
//   .then((result) => {
//     //   console.log(result);
//     return new Promise((resolve, reject) => {
//       result.favouriteColor = "Red";
//       resolve(result);
//     });
//   })
//   .then((newResult) => {
//     return new Promise((resolve, reject) => {
//       newResult.car = "Malibu";
//       resolve(newResult);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(`${err} is not working ...`);
//   })
//   .finally(() => {
//     console.log("All work is done ...");
//   });

// console.log(promise);

// ===================>>>>>>>>>

// #Promise -> All and Race
// const user1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("1. After 1 second ...");
//   }, 1000);
// });

// const user2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("2. After 2 second ...");
//   }, 2000);
// });

// const user3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("3. After 3 second ...");
//   }, 3000);
// });

// user1.then((result) => console.log(result));
// user2.then((result) => console.log(result));
// user3.then((result) => console.log(result));

// Promise.all([user1, user2, user3]).then((result) => console.log(result));

// Promise.race([user2, user3, user1]).then((result) => console.log(result));

// End Promise ...

// ========== CallBack function -< CallStack hell ==========>>>>>>>

// const users = [
//   { fName: "John", lName: "Doe" },
//   { fName: "Robert", lName: "Guk" },
//   { fName: "Richert", lName: "Jonsin" },
// ];

// function getUsers() {
//   setTimeout(() => {
//     users.forEach((user) => {
//       document.body.innerHTML += `<li>${user.fName} ${user.lName}</li>`;
//     });
//   }, 1000);
// }

// function addUser(user, callBack) {
//   setTimeout(() => {
//     users.push(user);
//     callBack();
//   }, 2000);
// }

// addUser({ fName: "Harry", lName: "Potter" }, getUsers);
// addUser({ fName: "Harry", lName: "Potter" }, getUsers);

// getUsers();

// ========== Async -< Await ==========>>>>>>>

// const users2 = [
//   { fName: "John", lName: "Doe" },
//   { fName: "Robert", lName: "Guk" },
//   { fName: "Richert", lName: "Jonsin" },
// ];

// function getUsers() {
//   setTimeout(() => {
//     users2.forEach((user) => {
//       document.body.innerHTML += `<li>${user.fName} ${user.lName}</li>`;
//     });
//   }, 1000);
// }

// function addUser(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       users2.push(user);
//       resolve(users2);
//     }, 2000);
//   });
// }

// addUser({ fName: "Harry", lName: "Potter" }).then((data) => {
//   addUser({ fName: "Harry", lName: "Potter" }).then((arr) => {
//     console.log(arr);
//     getUsers();
//   });
// });

// getUsers();

// async function result() {
//   console.log("Async is working");
//   await addUser({ fName: "Harry", lName: "Potter" });
//   await addUser({ fName: "Harry", lName: "Potter" });
//   await addUser({ fName: "Harry", lName: "Potter" });
//   await addUser({ fName: "Harry", lName: "Potter" });
//   getUsers();
// }

// result();

// ========== Promise data server ==========>>>>>>>

// const API = "https://restcountries.com/v3.1/all";

// // (old) => new XMLHttpRequest();

// const getData = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState == 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState == 4) {
//         reject("Error !");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getData(API)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ========== Fetch ==========>>>>>>>

// const API2 = "https://restcountries.com/v3.1/all";

// fetch(API2)
//   .then((data) => {
//     return data.json();
//   })
//   .then((dataJson) => {
//     console.log(dataJson);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ========== Object ==========>>>>>>>

// const person = {
//   name: "John",
//   age: 30,
// };

// console.log(Object.isFrozen(person));
// Object.freeze(person);

// Object.seal(person); // -> Edit
// console.log(Object.isSealed(person));

// person.age = "31";
// person.name = "Doe";
// delete person.name;

// console.log(person);

const person = Object.create(
  {},
  {
    name: {
      value: "John",
      enumerable: true,
      writable: false,
      // configurable: false,
    },
    age: {
      value: 30,
      enumerable: true,
      writable: true,
      // configurable: false,
    },
    isMarried: {
      value: false,
      enumerable: true,
      // writable: false,
      configurable: true,
    },
  }
);

person.age = 50;
// delete person.isMarried;

console.log(person);

// ====================>>>>>>>

const arr = [1, 2, 3, 4, 5];

console.log(Object.getOwnPropertyNames(arr));
