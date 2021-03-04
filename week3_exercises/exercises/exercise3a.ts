import fetch from "node-fetch"
import now from "performance-now"
const URL = "https://swapi.dev/api/people/";

async function fetchPerson(url: string) {
  const response = await fetch(url);
  return await response.json()
}

async function printNames() {
  var start = now()
  console.log(`Before`);
  //const person1 = await fetchPerson(`${URL}${1}`);
  //const person2 = await fetchPerson(`${URL}${2}`);
  return Promise.all([fetchPerson(`${URL}${1}`).then((person1) => person1.name), fetchPerson(`${URL}${2}`).then((person2) => person2.name)]).then((results) => {
    console.log(results);
    console.log(`After all`);
    var end = now()
    console.log((end-start).toFixed(3))
  });
 // await sleeping();
}

function sleeping(): Promise <void> {
  return new Promise((resolve) => {
    console.log(`Sleeping`);
    setTimeout(() => {
      console.log(`Finished sleeping`);
      resolve();
    }, 2000);
  });
}

printNames();
