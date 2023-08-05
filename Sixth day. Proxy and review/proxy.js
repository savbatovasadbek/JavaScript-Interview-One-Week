// ===================================>>>>>>>>>>>>>>>
// =============== Proxy ====================>>>>>>>>>>>>>>>
// ===================================>>>>>>>>>>>>>>>

// Object

// const target = {
//   name: "John",
//   age: 25,
//   job: "FullStack",
//   fullInfo() {
//     return `${this.age} ${this.name} ${this.job}`;
//   },
// };

// const handler = {
//   get(target, prop) {
//     // console.log("Senga ma'lumot yo'q");
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return "Bunaqa property mavjud emas!";
//     }
//   },
// };

// const proxy = new Proxy(target, handler);

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

// ====================>>>>>>>>>
// Proxy amaliy

// const setDefaultValue = (target, defaultValue = 0) => {
//   return new Proxy(target, {
//     get(target, prop) {
//       //   if (prop in target) {
//       //     return target[prop];
//       //   } else {
//       //     return defaultValue;
//       //   }
//       return prop in target ? target[prop] : defaultValue;
//     },
//   });
// };

// const koordinata = setDefaultValue(
//   {
//     x: 10,
//     y: 5,
//   },
//   null
// );

// =======>>>>>>>>>
// Hidden properties

const hiddenKey = (target, prefix = "_") => {
  return new Proxy(target, {
    has(target, prop) {
      if (prop in target && !prop.startsWith(prefix)) {
        return true;
      } else {
        return false;
      }
    },
    get(target, prop) {
      if (prop.startsWith(prefix)) {
        // console.log("Bu maxsiy kalit");
        // return `${target[prop]
        //   .split("")
        //   .map((el) => "*")
        //   .join("")}`;
        return undefined;
      } else {
        return target[prop];
      }
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((el) => !el.startsWith(prefix));
      //   return Object.keys(target).filter((el) => !el.startsWith(prefix));
    },
  });
};

const data = hiddenKey(
  {
    name: "Vladilen",
    age: 25,
    _key: "12312",
  },
  "_"
);

console.log(Object.keys(data));
