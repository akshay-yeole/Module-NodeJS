const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  switch (parsedUrl.pathname) {
    case "/":
      res.end("Hello, World!");
      break;
    case "/about":
      res.end("About Us");
      break;
    case "/contact":
      const userName = parsedUrl.query.uname;
      console.log(parsedUrl);
      res.end("Contact Us : " + userName);
      break;
    default:
      res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
