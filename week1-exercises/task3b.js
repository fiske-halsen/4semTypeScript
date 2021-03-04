var names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myMap = (callback) => {
  return callback;
};

const sortNames = (array) => {
  let newArray = [];
  array.forEach((name) => newArray.push(name.toUpperCase()));
  return newArray;
};

console.log(names.myMap(sortNames(names)));
