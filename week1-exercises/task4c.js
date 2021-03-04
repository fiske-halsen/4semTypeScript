let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

let averageAge = members.reduce(
  (accumulator, currentValue, currentIndex, members) =>
    accumulator + currentValue.age / members.length,
  0
);

console.log(averageAge);
