// ========== Introduction to Promise ==========>>>>>>>

const promise = new Promise(function (resolve, reject) {
  const data = {
    name: "john",
    age: 35,
    isMarried: true,
  };

  resolve(data);
  // reject("Error !");
});

promise
  .then((data) => {
    console.log(data);
    data.fullName = "John Doe";
    return data;
  })
  .then((newDate) => {
    console.log(newDate);
    newDate.favouriteActor = "John Uik";
    return newDate;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("All done ...");
  });

console.log(promise);

// ========== Promise -< All and Race ==========>>>>>>>

const user1 = new Promise((resolve, reject) => {
  resolve("Result one ...");
});

const user2 = new Promise((resolve, reject) => {
  resolve("Result two ...");
});

const user3 = new Promise((resolve, reject) => {
  resolve("Result three ...");
});

Promise.all([user1, user2, user3]).then((data) => {
  console.log(data);
});

Promise.race([user1, user2, user3]).then((data) => {
  console.log(data);
});

// ========== CallBack function -< CallStack hell ==========>>>>>>>

const users = [
  { fName: "John", lName: "Doe" },
  { fName: "Robert", lName: "Guk" },
  { fName: "Richert", lName: "Jonsin" },
];

function getUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      document.body.innerHTML += `<li>${user.fName} ${user.lName}</li>`;
    });
  }, 1000);
}

// getUsers();

function addUser(user, callBack) {
  setTimeout(() => {
    users.push(user);
    callBack();
  }, 2000);
}

addUser({ fName: "Harry", lName: "Potter" }, getUsers);
// getUsers();

// ========== Async -< Await ==========>>>>>>>

const users2 = [
  { fName: "John", lName: "Doe" },
  { fName: "Robert", lName: "Guk" },
  { fName: "Richert", lName: "Jonsin" },
];

function getUsers() {
  setTimeout(() => {
    users2.forEach((user) => {
      document.body.innerHTML += `<li>${user.fName} ${user.lName}</li>`;
    });
  }, 1000);
}

function addUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users2.push(user);
      resolve(users2);
    }, 2000);
  });
}

async function result() {
  await addUser({ fName: "Harry", lName: "Potter" });
  await addUser({ fName: "Harry", lName: "Potter" });
  await addUser({ fName: "Harry", lName: "Potter" });
  getUsers();
}

result();

// ========== Promise data server ==========>>>>>>>

const API = "https://restcountries.com/v3.1/all";

// (old) => new XMLHttpRequest();

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        reject("Error !");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getData(API)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// ========== Fetch ==========>>>>>>>

const API2 = "https://restcountries.com/v3.1/all";

fetch(API2)
  .then((data) => {
    return data.json();
  })
  .then((dataJson) => {
    console.log(dataJson);
  })
  .catch((err) => {
    console.log(err);
  });
