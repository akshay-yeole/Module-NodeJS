const fs = require("fs");

function requestLogs(fileName) {
  return (req, res, next) => {
    fs.writeFile(
      fileName,
      `${new Date()} - ${req.method} - ${req.url}\n`,
      { flag: "a" },
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = { requestLogs };
