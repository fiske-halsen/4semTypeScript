function Person(name, age) {
  this.name = name;
  this.age = age;

  return {
    setAge: function (age) {
      this.age = age;
    },

    setName: function (name) {
      this.name = name;
    },

    info: function () {
      console.log(`${name}, ${age}`);
    },
  };
}

const person1 = new Person("Hans", 10);

person1.info();
