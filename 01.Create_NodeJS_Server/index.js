const http = require("http");

//Create a server object
const server = http.createServer((req, res) => {
  res.end("Hello world");
});

//Configure the server to listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
