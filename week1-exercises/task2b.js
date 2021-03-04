var nameArray = ["Phillip", "Gulag", "Lars"];

const myMap = (array, callback) => {
  return callback(array);
};

const sortByName = (array) => {
  let newArray = [];

  array.forEach((name) => {
    newArray.push(name.toUpperCase());
  });

  return newArray;
};

console.log(myMap(nameArray, sortByName));

// original map method

let newNameArray = nameArray.map((name) => {
  return name.toUpperCase();
});

console.log(newNameArray);
