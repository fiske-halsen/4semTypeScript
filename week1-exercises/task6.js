/* Whenever a constructor is used, this referes to 
the specific instance of the object that is created and returned by the constructor function.
*/

var person = {
  firstName: "Phillip",
  lastName: "Ole",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  fullNameAsync: function () {
    setTimeout(() => console.log(this.firstName + " " + this.lastName), 1000);
  },
};

console.log(person.fullName());
console.log(person.fullNameAsync());
