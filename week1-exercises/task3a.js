var names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myFilter = (callback) => {
  return callback;
};

const sortNames = (array) => {
  let newArray = [];
  array.forEach((name) => newArray.push(name.toLowerCase()));
  return newArray;
};

console.log(names.myFilter(sortNames(names)));
