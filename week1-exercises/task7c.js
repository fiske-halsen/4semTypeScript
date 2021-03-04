class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  print = function () {
    console.log(`About this person: name: ${this._name} and age: ${this._age}`);
  };

  showAsync = function () {
    setTimeout(() => {
      console.log(this._name);
    }, 1000);
  };

  get name() {
    return this_name;
  }

  set name(name) {
    this._name = name;
  }
}

const person1 = new Person("Phillip", 10);
const person2 = new Person("Sumit", 5);

person1.print();
person2.print();

person1.showAsync();
