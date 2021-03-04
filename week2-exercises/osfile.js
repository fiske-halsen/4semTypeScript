const os = require("os");

const osObj = {
  platform: os.platform(),
  osType: os.type(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  EOL: "\r\n",
};

module.exports = osObj;
