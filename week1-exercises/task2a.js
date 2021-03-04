const numberArray = [1, 2, 5, 6, 7, 8, 10];

const myFilter = (array, callback) => {
  return callback(array);
};

const sortByNumber = (array) => {
  let newArray = [];

  array.forEach((number) => {
    if (number < 5) {
      newArray.push(number);
    }
  });

  return newArray;
};

console.log(myFilter(numberArray, sortByNumber));

// original filter method

let filteredArray = numberArray.filter((element) => {
  return element < 5;
});

console.log(filteredArray);
