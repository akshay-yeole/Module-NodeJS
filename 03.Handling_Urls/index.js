const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Hello, World!");
      break;
    case "/about":
      res.end("About Us");
      break;
    case "/contact":
      res.end("Contact Us");
      break;
    default:
      res.end("Page Not Found");
  }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
