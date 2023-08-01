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
    callBack((data) => {
      console.log(data);
    });
  }, 2000);
}

addUser({ fName: "Harry", lName: "Potter" }, getUsers);
// getUsers();
