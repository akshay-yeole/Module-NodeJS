const fs = require('fs');

// Write File Sync
// fs.writeFileSync('demo.txt', 'Hello, world!');

// Write File Async
// fs.writeFile('demo.txt', 'Hello, world!', (err) => {
//     if (err) throw err;
// });

// Read File Sync
// const fileData = fs.readFileSync('demo.txt', 'utf8');
// console.log(fileData);

// Read File Async
// fs.readFile('demo.txt', 'utf8', (err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });

// Append File Sync
// fs.appendFileSync('demo.txt', '. Just now aaded this line');
// const fileData = fs.readFileSync('demo.txt', 'utf8');
// console.log(fileData);

//Copy File Sync
//fs.cpSync('demo.txt', 'demo2.txt');

//Make Directory Sync
//fs.mkdirSync('newFolder');

//Check cpu cores in your system
const os = require('os');
const count = os.cpus().length;
console.log(`Total cores are :: ${count}`);