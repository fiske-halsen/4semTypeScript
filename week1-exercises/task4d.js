var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

var initialValue = {};
var reducer = function (obj, vote) {
  if (!obj[vote]) {
    obj[vote] = 1;
  } else {
    obj[vote] += 1;
  }
  return obj;
};
var result = votes.reduce(reducer, initialValue);

console.log(result);
