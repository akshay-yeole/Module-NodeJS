# Module-NodeJS

## Index

- [Prerequisites](#prerequisites)
- [Verify Node.js Installation](#verify-nodejs-installation)
- [Node.js](#nodejs)
- [NPM](#npm)
- [Hello World Code](#hello-world-code)
- [Working with NPM](#working-with-npm)
- [Modules in NodeJS](#modules-in-nodejs)
- [File Handling in NodeJS](#file-handling-in-nodejs)
- [How NodeJS works?](#how-nodejs-works)
- [Creating Server in NodeJS](#creating-server-in-nodejs)
- [Handling URLs](#handling-urls)
- [Http Methods](#http-methods)
- [ExpressJS](#expressjs)
- [REST Api](#rest-api)
- [Implementation](#implementation)

## Prerequisites

- Ensure Node.js is installed on your system. [Download Node.js](https://nodejs.org/en).
- Recommended Code Editor: VS Code. [Download VS Code](https://code.visualstudio.com/).

## Verify Node.js Installation

To check the installed version of Node.js, run:

```sh
node --version
```

## Node.js

To start Node.js:

1. Open your terminal.
2. Run:

  ```sh
  node
  ```

3. You can now write and execute code in the terminal.

## NPM

NPM is used to install packages. To check the installed version of NPM, run:

```sh
npm -v
```

## Hello World Code

1. Create a folder `hello-world` and open it in VS Code:

  ```sh
  code .
  ```

2. Create a `hello.js` file.
3. Add the following code to `hello.js`:

  ```js
  console.log('Welcome to Hello World');
  ```

4. To run this code, open the terminal and run:

  ```sh
  node hello.js
  ```

  It will display **Welcome to Hello World**.

## Working with NPM

- Use `npm init` to create a template for your application.
- Follow the prompts to complete the setup.
- Add the following command in the `scripts` section of `package.json`:

  ```json
  "start": "node hello.js"
  ```

- Run:

  ```sh
  npm run start
  ```

  It will display **Welcome to Hello World**.

## Modules in NodeJS

Moduling involves breaking code into multiple chunks.

### Way 1

Create `greet.js`:

```js
function Greet() {
  return `Welcome to the world of Node.js`;
} 
module.exports = Greet; 
```

In `hello.js`:

```js
const greet = require("./greet");
console.log('way 1', greet() );
```

### Way 2

Create `greet.js`:

```js
function Greet() {
  return `Welcome to the world of Node.js`;
} 

module.exports = {
   GreetUser: Greet
};
```

In `hello.js`:

```js
const { GreetUser } = require("./greet");
console.log('way 2', GreetUser() );
```

### Way 3

Create `greet.js`:

```js
exports.displayMessage = (name) => 'Welcome, ' + name;
```

In `hello.js`:

```js
const { displayMessage } = require("./greet");
console.log('way 3', displayMessage('John Doe') );
```

You can also use built-in Node.js modules:

```js
const http = require("http");
```

## File Handling in NodeJS

Create `file.js` and import the `fs` module.

### Write File Sync

```js
const fs = require('fs');
fs.writeFileSync('demo.txt', 'Hello, world!');
```

Run `node file.js` to create the file and add content.

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

Request -> Event Queue -> Event Loop -> Process -> Response

The event loop checks if the request is blocking and processes it accordingly.

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

By default, there are 4 workers in the Thread pool. The number of threads can be increased based on CPU cores.

#### Get count of CPU cores:

```js
const os = require('os');
const count = os.cpus().length;
console.log(`Total cores are :: ${count}`);
```

## Creating Server in NodeJS

- Create a folder `demo-server-app` and run `npm init`.
- Create `index.js` and add server creation code:

  ```js
  const http = require("http");

  const server = http.createServer((req, res) => {
    res.end("Hello world");
  });

  server.listen(3000, () => {
    console.log("Server is up and running on port : 3000");
  });
  ```

- Add the following command in `package.json`:

  ```json
  "start": "node index.js",
  ```

- Run `npm run start`.
- Open browser and go to `localhost:3000` to see the output.

## Handling URLs 

Configure URLs to provide specific responses.

- Create a folder and run `npm init`.
- Create a server and return responses:

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

- Add `"start": "node index.js",` in `package.json` and run `npm run start`.
- Open `localhost:3000/about` to see `About Us`.
- Use the `url` package. [url package link](https://www.npmjs.com/package/url)
- Run `npm i url`.
- Update code:

  ```js
  case "/contact":
    const userName = parsedUrl.query.uname;
    console.log(parsedUrl);
    res.end("Contact Us : " + userName);
  break;
  ```

- Open `http://localhost:3000/contact?uname=test` to see `Contact Us : test`.

> **Tip:** Create a `.gitignore` file at the root level of the project and add `node_modules/` to it.

## Http Methods

#### GET Request

To filter requests, use `req.method` to handle `GET | POST | PUT | DELETE` requests.

```js
if (req.method === "GET") {
  res.end("This is a GET request");
}
```

## ExpressJS

- Run `npm i express` to install Express.js.

- Create a simple ExpressJS app:

  ```js
  const express = require("express");

  const app = express();

  app.get("/", (req, res) => {
    res.send("This is a GET request");
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
  ```

## REST Api

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| [POST](#add-user)   | /api/users     | Create a user            |
| [GET](#get-users)    | /api/users     | Get all users            |
| [GET](#get-user-by-id)    | /api/users/:id | Get a single user by ID  |
| [PUT](#update-user)    | /api/users/:id | Update a user            |
| [DELETE](#delete-user) | /api/users/:id | Delete a user            |

## Implementation

- Create a folder and install the following modules:
  - express
  - nodemon
  - mongoose

- Create `index.js` and add database connection code:

```js
const mongoose = require("mongoose");

mongoose.connect("connection string for mongodb") 
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
```
> **Tip:** We need the following folder structure:
>
> ```
> ├── controllers  [ Here we have handlers. ]
> ├── models       [ Here we have models. ]
> ├── routes       [ Here we have routes defined. ]
> └── core         [ Here we have database connection code. ]
> ```

### Get Users

1. **Create User Model:**
  - Create a folder `models` and add `user.js`:

  ```js
  const mongoose = require("mongoose");

  const userSchema = new mongoose.Schema({
    firstname: {
     type: String,
     required: true,
    },
    lastname: {
     type: String,
     required: true,
    },
    email: {
     type: String,
     required: true,
     unique: true,
    },
    job_title: {
     type: String,
    },
  });

  const User = mongoose.model("user", userSchema);
  module.exports = User;
  ```

2. **Create User Controller:**
  - Create a folder `controllers` and add `users.js`:

  ```js
  const User = require('../models/User');

  async function handleGetAllUsers(req, res) {
     const allUsers = await User.find({});
     return res.status(200).json(allUsers);
  }

  module.exports = { handleGetAllUsers };
  ```

3. **Create User Routes:**
  - Create a folder `routes` and add `user.js`:

  ```js
  const express = require("express");
  const { handleGetAllUsers } = require("../controllers/users");
  const router = express.Router();

  router.route("/")
    .get(handleGetAllUsers);

  module.exports = router;
  ```

4. **Update Server Configuration:**
  - Update `index.js`:

  ```js
  const express = require("express");
  const userRouter = require("./routes/user");
  const mongoose = require("mongoose");

  const PORT = 3000;
  const app = express();

  mongoose.connect("mongodb://localhost:27017/nodejs-demo")
    .then(() => {
     console.log("Connected to MongoDB");
    })
    .catch((error) => {
     console.log("Error connecting to MongoDB", error);
    });

  app.use(express.json());

  app.use("/api/users", userRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  ```

### Get User By Id

- Handler code:

```js
async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
}
```

- Route code:

```js
router
  .route("/:id")
  .get(handleGetUserById);
```

### Add User

- Handler code:

```js
async function handleCreateUser(req, res) {
    const body = req.body;

  if (!body.firstname || !body.lastname || !body.email) {
    return res.status(400).json({ error: "All fields are required" });
  }
```

- Route code:

```js
router.route("/")
  .post(handleCreateUser);
```

### Update User

- Handler code:

```js
async function handleUpdateUserById(req, res) {
    try {
        const updatedItem = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedItem) {
          return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json({ message: "Item updated successfully", updatedItem });
      } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Server error", details: error.message });
      }
}
```

- Route code:

```js
router
  .route("/:id")
  .put(handleUpdateUserById);
```

### Delete User

- Handler code:

```js
async function handleDeleteUserById(req, res) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
  
    return res.status(204).json({ msg: "Deleted" });
}
```

- Route code:

```js
router
  .route("/:id")
  .delete(handleDeleteUserById);
```

> **Tip:** Refer to the Postman folder for the postman collection and environment file for the above API endpoints.
