const ex1b = require("./exercise1b");

ex1b
  .makeSecureRandomList([8, 16, 24, 32, 40, 48])
  .then((data) => console.log(data));
