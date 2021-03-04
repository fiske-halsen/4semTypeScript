const crypto = require("crypto");
const { resolve } = require("path");
ex1_obj = {
  title: "6 Secure Randoms",
  randoms: [],
};
/*function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buffer) {
      let secureHex = buffer.toString("hex");
      const obj = { length: size, random: secureHex };
      resolve(obj);
    });
  });
}
*/
async function makeSecureRandomList(array) {
  return new Promise((resolve, reject) => {
    array.forEach((number) => {
      crypto.randomBytes(number, function (err, buffer) {
        let secureHex = buffer.toString("hex");
        let obj = { length: number, random: secureHex };
        ex1_obj.randoms.push(obj);
      });
    });
    setTimeout(() => {
      resolve(ex1_obj);
    }, 1000);
  });
}

// makeSecureRandom(8).then((data) => {
//   ex1_obj.randoms.push(data);
// });

/*Promise.all([
  makeSecureRandom(8),
  makeSecureRandom(16),
  makeSecureRandom(24),
]).then((values) => {
  ex1_obj.randoms.push(values), console.log(values);
});*/

module.exports.makeSecureRandomList = makeSecureRandomList;
