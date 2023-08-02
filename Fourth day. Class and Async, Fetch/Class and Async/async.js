// =============== Promise ===============>>>>>>>>

const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

delay(1000).then(() => console.log("1 sec"));

// ============== Fetch ================>>>>>>>>

const url = "https://jsonplaceholder.typicode.com/todos";

function fetchTodos() {
  console.log("Fetch todo started ...");
  return delay(2000)
    .then(() => fetch(url))
    .then((response) => response.json());
}

fetchTodos()
  .then((data) => console.log("Data: ", data))
  .catch((e) => console.error(e));

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
