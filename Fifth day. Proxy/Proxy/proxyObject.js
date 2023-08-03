// Object
const person = {
  name: "John",
  age: 25,
  job: "FullStack",
};

// ================== Proxy ===============>>>>>>>>>>
// #Proxy -> Ob'ekt Proxysizga boshqa ob'ekt uchun proksi-server yaratishga imkon beradi, u ushbu ob'ekt uchun asosiy operatsiyalarni ushlab turishi va qayta belgilashi mumkin.

// =========== get -< target and prop (property) =========>>>>>>
// #target -> return the object
// #prob -> return object property

// =========== set -< target, prop and new value =========>>>>>>
// #target[prop] = value -> set a new value

// =========== has -< target and prop =========>>>>>>
// #Object.keys(target).includes(prop) ->
//  return true -> if prop has in target
//  return false -> if prop has not in target

// =========== deleteProperty -< target, prop =========>>>>>>
// #delete target[prop] -> delete prop in target

const proxy = new Proxy(person, {
  get(target, prop) {
    // console.log(target);
    // console.log(prop);
    // console.log(`Getting property "${prop}"`);
    if (!(prop in target)) {
      return prop
        .split("_")
        .map((key) => target[key])
        .join(" ");
    }
    return target[prop];
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target ...`);
    }
  },

  has(target, prop) {
    return Object.keys(target).includes(prop);
  },

  deleteProperty(target, prop) {
    console.log(`Deleting ${prop} ...`);
    delete target[prop];
    return true;
  },
});

console.log(proxy);
console.log(proxy.name);
console.log(proxy.name_age_job);

// =================================>>>>>>>>>>
// Functions

const log = (text) => `Log: ${text}`;

const fn = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log(`Calling fn ...`, thisArg);

    return target.apply(thisArg, args).toUpperCase();
  },
});

console.log(fn("Proxy for Functions"));

// =================================>>>>>>>>>>
// Class

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
      },
    });
  },
});

const user1 = new personProxy("John", 30);

console.log(user1);
console.log(user1.name);
