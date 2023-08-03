// ======= Request =======>>>>>>>>>
// const API = "https://restcountries.com/v3.1/all";

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if (request.readyState == 4 && request.status == 200) {
//     const data = JSON.parse(request.responseText);
//     // console.log(data);
//   }
// });

// Open -> API bn bizni bog'laydi.
// request.open("GET", API);

// Send -> Backendan malumot kelishini taminlaydi.
// request.send();

// console.log(request);

// ============= ReadyState ==============>>>>>>>>>>
// 0. UNSENT	Client has been created. open() not called yet.
// 1. backend bn bog'landik
// 2. backendan malumot kelishga tayyor
// 3. Backendan malumotlar yuklanayapti responseText ga
// 4. Yuklash yakunlandi

// ========= Promise request ============>>>>>>>
// const url = "https://restcountries.com/v3.1/all";

// const getData = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState == 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       }
//       if (request.readyState == 4) {
//         reject("404 Not Found ...");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getData(url)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     // throw new Error(err);
//     console.log(err);
//   });

// ========== Fetch ==========>>>>>>>

// const API2 = "https://restcountries.com/v3.1/all";

// // const request = fetch(API2);

// fetch(API2)
//   .then((data) => {
//     return data.json();
//   })
//   .then((dataJson) => {
//     console.log(dataJson);
//   })
//   .catch((err) => {
//     console.log("Backendan ma'lumot olinmadi ...");
//   });

// ===================================>>>>>>>>>>>>>>>
// =============== Proxy ====================>>>>>>>>>>>>>>>
// ===================================>>>>>>>>>>>>>>>

// Object

// const target = {
//   name: "John",
//   age: 25,
//   job: "FullStack",
// };

// const handler = {};

// const proxy = new Proxy(target, handler);

// console.log(proxy);

// ========== Object -> Proxy ==========>>>>>>>>

// const person = {
//   name: "John",
//   age: 25,
//   job: "FullStack",
// };

// const proxy = new Proxy(person, {
//   get(target, prop) {
//     // console.log(`Getting prop "${prop}"`);
//     // console.log("Target : ", target);
//     // console.log("Prop(property) : ", prop);
//     // console.log("Receiver : ", receiver);
//     // return "I don't want to give you that information ...";
//     if (prop in target) {
//       return target[prop];
//     } else {
//       //   return `${prop} field not found ...`;
//       return prop
//         .split("_")
//         .map((key) => target[key])
//         .join(" ");
//     }
//   },

//   set(target, prop, value) {
//     if (prop in target) {
//       console.log(`Setting new value ...`);
//       return (target[prop] = value);
//     } else {
//       throw new Error(`No ${prop} field in target ...`);
//     }
//   },

//   has(target, prop) {
//     console.log(`Has is working ...`);
//     // return prop in target;
//     return Object.keys(target).includes(prop);
//   },

//   deleteProperty(target, prop) {
//     if (prop in target) {
//       delete target[prop];
//       console.log(`Property deleted: ${prop}`);
//     } else {
//       console.log(`Property is not found`);
//     }
//   },
// });

// console.log(proxy);

// ========== Function -> Proxy ==========>>>>>>>>

// const { log } = console;
// log(5);

// const log = (text) => `Log: ${text}`;
// console.log(log(5));
// // print("555");

// const fn = new Proxy(log, {
//   apply(target, thisAgs, args) {
//     console.log(`Apply is working ...`);

//     return target.apply(thisAgs, args).toUpperCase();
//   },
// });
// console.log(fn(5));

// =============== Class -> Proxy==================>>>>>>>>>>

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// const personProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log(`Construct ...`);

//     return new target(...args);
//   },
// });

const personProxy = new Proxy(Person, {
  construct(target, args) {
    console.log(`Construct ...`);

    return new Proxy(new target(...args), {
      get(target, prop) {
        console.log(`Getting prop -> "${prop}"`);

        return target[prop];
        // return `Senga ma'lumot yo'q :) ...`;
      },
    });
  },
});

const user1 = new personProxy("John", 30);

console.log(user1);
console.log(user1.name);
