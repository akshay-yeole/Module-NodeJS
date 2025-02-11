const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  switch (parsedUrl.pathname) {
    case "/":
      if (req.method === "GET") {
        res.end("This is a GET request");
      }
      break;
    default:
      res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
