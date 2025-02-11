# Module-NodeJS

## Prerequisites
- Ensure that Node.js is installed on your system. [Download Node.js](https://nodejs.org/en).
- Code Editor: VS Code (Recommended). [Download VS Code](https://code.visualstudio.com/).

## Verify Node.js Installation
To verify the installed version of Node.js, run the following command in your terminal:
```sh
node --version
```

## Node.js
To start Node.js, follow these steps:
1. Open your terminal.
2. Enter the following command to start Node.js:
  ```sh
  node
  ```
3. Now you can write and execute code inside the terminal.

## NPM
NPM is used to install packages and use them in your code. To verify the installed version of NPM, run the following command in your terminal:
```sh
npm -v
```

## Hello World Code
1. Create a folder `hello-world` and open it in VS Code. For example, go inside that folder and run the command:
  ```sh
  code .
  ```
2. Create a `hello.js` file.
3. Write the following code in `hello.js`:
  ```js
  console.log('Welcome to Hello World');
  ```
4. To run this code, open the terminal and run the command:
  ```sh
  node hello.js
  ```
  It will display **Welcome to Hello World**.

## Working with NPM
- `npm init` is used to create a template which is used to run our application.
- We need to pass a few data and press enter to complete it:
  - `package name`: (any name you can give)
  - `version`: no need
  - `description`: no need
  - `entry point`: file which you want (hello.js). Default is index.js. Once the file gets created, go to that file and replace index with hello.
  - `test command`: no need
  - `git repository`: no need
  - `keywords`: no need
  - `author`: no need
  - `license`: (ISC)

- Now add the below command in the `scripts` section of `package.json` file:
  ```json
  "start": "node hello.js"
  ```
- Run the command below. It will display **Welcome to Hello World**:
  ```sh
  npm run start
  ```

## Modules in NodeJS
Moduling is nothing but breaking our code into multiple chunks.

### Way 1
Create a file `greet.js` and add the following code:
```js
function Greet() {
  return `Welcome to the world of Node.js`;
} 
module.exports = Greet; 
```

In `hello.js` file:
```js
const greet = require("./greet");
console.log('way 1', greet() );
```

### Way 2
Create a file `greet.js` and add the following code:
```js
function Greet() {
  return `Welcome to the world of Node.js`;
} 

module.exports = {
   GreetUser: Greet
};
```

In `hello.js` file:
```js
const { GreetUser } = require("./greet");
console.log('way 2', GreetUser() );
```

### Way 3
Create a file `greet.js` and add the following code:
```js
exports.displayMessage = (name) => 'Welcome, ' + name;
```

In `hello.js` file:
```js
const { displayMessage } = require("./greet");
console.log('way 3', displayMessage('John Doe') );
```

You can also use built-in Node.js modules. For example:
```js
const http = require("http");
```

## File Handling in NodeJS
Create a `file.js` file and import the `fs` module/package.

### Write File Sync
```js
const fs = require('fs');
fs.writeFileSync('demo.txt', 'Hello, world!');
```
Now run the command `node file.js` so that `writeFileSync` will create the file and add content to it.

### Write File Async
```js
fs.writeFile(
  'demo.txt', 'Hello, world!', 
  (err) => { if (err) throw err;}
);
```

### Read File Sync
```js
const fileData = fs.readFileSync('demo.txt', 'utf8');
console.log(fileData);
```

### Read File Async
```js
fs.readFile(
  'demo.txt', 
  'utf8', 
  (err, result) => {
   if (err) 
    throw err;
   console.log(result);
});
```

### Append File Sync
```js
fs.appendFileSync('demo.txt', '. Just now added this line');
const fileData = fs.readFileSync('demo.txt', 'utf8');
console.log(fileData);
```

### Copy File
```js
fs.cpSync('demo.txt', 'demo2.txt');
```

### Make Directory Sync
```js
fs.mkdirSync('folder-name-here');
```

## How NodeJS works?
Request  -> Event Queue -> Event Loop -> Process -> Response     

Event loop checks whether request is blocking or not and it processes accordingly.

Example:
```js
console.log("1");
console.log("2");
const fileData = fs.readFileSync('demo.txt', 'utf8');
console.log(fileData);
console.log("3");
```

Output:
```
1
2
3
Hello World
```

By default, we have 4 workers in the Thread pool. We can increase threads and it depends on your CPU cores.

#### Get count of CPU cores in your system:
```js
const os = require('os');
const count = os.cpus().length;
console.log(`Total cores are :: ${count}`);
```

## Creating Server in NodeJS

- Create a folder `demo-server-app` and run command `npm init`.  
- Now create `index.js` file and add server creation code.
```js
const http = require("http");

//Create a server object
const server = http.createServer((req, res) => {
  res.end("Hello world");
});

//Configure the server to listen on port 3000
server.listen(3000, () => {
  console.log("Server is up and running on port : 3000");
});
```

- Add command inside `package.json` file.
```json
"start": "node index.js",
```

- Now run command `npm run start`.

- Open browser and hit URL `localhost:3000`. Here you will see the output.

## Handling URLs 
- We can configure URLs so that we can provide exact responses.

- Create folder and run command `npm init`. 

- Create Server and return responses
```js
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
```

- Now add command `"start": "node index.js",` in `package.json` file and run command `npm run start`.

- Open web page and hit URL `localhost:3000/about`. It should display `About Us` text.

- For url's we need to use url package. [url package link](https://www.npmjs.com/package/url)
- we need to run command `npm i url`.
- Now update code.
```js
case "/contact":
  const userName = parsedUrl.query.uname;
  console.log(parsedUrl);
  res.end("Contact Us : " + userName);
break;
```
- Open browser and hit url `http://localhost:3000/contact?uname=test`. Now you will get ouput like `Contact Us : test`.

> **Tip:** If your project doesn't have a `.gitignore` file, it will show a lot of changes. To handle this, create a `.gitignore` file at the root level of the project and add `node_modules/` inside it.
