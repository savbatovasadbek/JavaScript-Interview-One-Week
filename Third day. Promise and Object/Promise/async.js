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

function addUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      resolve(users);
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
