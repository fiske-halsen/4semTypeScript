const osObj = require("./osfile");
console.log(osObj);

const DOS_Detector = require("./dosDetector.js");
const publisher = new DOS_Detector(3000);

publisher.on("DosDetected", (e) => console.log(JSON.stringify(e)));
publisher.addUrl("dsadasdsad");
setTimeout(() => publisher.addUrl("dsadasdsad"), 1000);
