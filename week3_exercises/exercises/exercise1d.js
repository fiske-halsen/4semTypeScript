const ex1b = require("./exercise1b");

async function getResult() {
  const promise = await ex1b.makeSecureRandomList([8, 16, 24, 32, 40, 48]);
  return promise;
}

module.exports.getResult = getResult;
