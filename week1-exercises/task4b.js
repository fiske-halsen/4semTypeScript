var numbers = [2, 3, 67, 33];

const reducerFunction = (array) => {
  let sum = 0;
  array.forEach((number) => (sum += number));
  return sum;
};

console.log(reducerFunction(numbers));
