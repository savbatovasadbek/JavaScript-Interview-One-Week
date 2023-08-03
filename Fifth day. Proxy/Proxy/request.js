const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  console.log(request.responseText);
});

// open
request.open("GET", "https://restcountries.com/v3.1/all");

// Send
request.send();

// 1. open tayyor
// 2. send qilindi
// 3. Loading ...
// 4. Ma'lumot kelib tushdi

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
