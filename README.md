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
