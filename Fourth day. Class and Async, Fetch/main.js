// let name = "Redmi";
// let price = "500$";

// function full(name, price) {
//   return `${name} => ${price}`;
// }

// console.log(full(name, price));

// # Eng yaxshi function bu hech qanaqa qiymat qabul qilmaydigan function ...

// ========== Encapsulation ============>>>>>>>>>

// class Animal {
//   name = "dog";
//   price = "100$";

//   // f(x) = x + 5  f(x) => x

//   full() {
//     return this.name + "=>" + this.price;
//   }
// }

// const dog = new Animal();
// console.log(dog.full());

// ============ Static ==========>>>>>>>>>

// class Animal {
//   static type = "ANIMAL"; // -< Static is for only Animal class

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     console.log("I am animal ...");
//   }
// }

// const animal = new Animal({
//   name: "Animal",
//   afe: 5,
//   hasTail: true,
// });

// console.log(animal);

// ============= Inheritance(extends) =========>>>>>>>>

// class Cat extends Animal {
//   static type = "CAT";

//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   // ============= Polimorfizm(voice) =========>>>>>>>>

//   voice() {
//     // super.voice();
//     console.log("I am cat ...");
//   }

//   // ====== Encapsulation -< getter and setter ======>>>>>>>>>

//   get ageInfo() {
//     return this.age * 7;
//   }

//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }

// const cat = new Cat({
//   name: "Cat",
//   age: 7,
//   hasTail: true,
//   color: "black",
// });

// let catAge = cat.ageInfo;

// ============= Abstruction(#price) -< private =========>>>>>>>>

// class Phone {
//   //   #price = "50$";
//   constructor(_name, _price) {
//     this.name = _name;
//     this.#price = _price;
//   }
//   getFullPrice() {
//     return this.#price + this.#price;
//   }
// }

// const redmi = new Phone("Redmi", "500$");
// // redmi.#price = "10$";

// console.log(redmi);

// ======================>>>>>>>>>>>
// Pure function

// const pure = (a, b) => a + b;

// function pure(a, b) {
//   return a + b;
// }

// Math.random() ,  log, ...

// console.log(pure(10, 5));

// ======================>>>>>>>>>>>
// #Curry Function

// const curry = (a) => (b) => (c) => a + b + c;

// function curry2(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(curry(1)(2)(3));
// console.log(curry2(1)(2)(3));

// =============== Amaliy tajriba ===============>>>>>>>>>

// class ListBinding {
//   constructor(element) {
//     this.listElement = element;
//     this.textList = ["Home", "Blog", "About"];
//   }

//   // Makes an <li>text</li> tag
//   static createListItem(text) {
//     const li = document.createElement("li");
//     li.textContent = text;
//     return li;
//   }

//   update() {
//     //   Remove all existing <li> elements/tags ...
//     while (this.listElement.firstChild) {
//       this.listElement.removeChild(this.listElement.firstChild);
//     }

//     //   Fill <li> to <ul>/<ol>
//     for (let text of this.textList) {
//       this.listElement.appendChild(ListBinding.createListItem(text));
//     }
//     return `Uptade is done successfel ...`;
//   }

//   // add <li> element
//   add(text) {
//     this.textList.push(text);
//     this.update();
//     return `<li> element is added successful ...`;
//   }

//   // Remove <li> element by index
//   remove(idx) {
//     this.textList.splice(idx, 1);
//     this.update();
//     return `<li> element is removed successful ...`;
//   }
// }

// =============== Promise ===============>>>>>>>>

// console.log(1);

// let promise = new Promise((resolve, reject) => {
//   const data = {
//     name: "John",
//     age: 30,
//     isMarried: true,
//   };

//   resolve(data);
//   // reject(data);
// });

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
//   });
//   .catch((err) => {
//     console.error(`${err} is not working ...`);
//   })
//   .finally(() => {
//     console.log("All work is done ...");
//   });

const delay = (s) => {
  return new Promise((r) => setTimeout(() => r(), s));
};

// delay(0).then((res) => console.log("2"));

// ============== Fetch ================>>>>>>>>

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchTodo() {
//   console.log("Fetch todo started ...");
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// fetchTodo()
//   .then((data) => console.log("Data: ", data))
//   .catch((e) => console.error(e));

// ============== Async ================>>>>>>>>

async function fetchTodo() {
  console.log("Async Fetch Todo started ...");
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data: ", data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Async function End ...");
  }
}

fetchTodo();

// async function hur() {
//   return "Async dan Promise qaytadi ...";
// }

// hur().then((res) => alert(res));
