// 2.FS (file system) Module (Built-In)

// Asynchronous Functions

// writeFile()
// appendfile()
// readFile()
// renameFile()
// Unlink()
// Exits()

// const fs = require('fs');

// fs.writeFile('demo.txt', "This is smaple text",(err) => {
//       if(err){
//           console.log(err)
//       }else{
//           console.log("successful")
//       }
// })

// const fs = require('fs');

// fs.appendFile('demo.txt', "My name is Zian",(err) => {
//       if(err){
//           console.log(err)
//       }else{
//           console.log("successful")
//       }
// })

const fs = require('fs');

// fs.readFile('demo.txt','utf-8', (err, data) => {
//       if(err){
//           console.log(err);
//       }else{
//           console.log(data);
//       }
// });

// fs.rename('demo.txt','demo2.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("data");
//     }
// });

// fs.unlink('demo2.txt', (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// });

// fs.exists('demo.txt','demo2.txt', (result) => {
//     if(result){
//         console.log("found");
//     }else{
//         console.log("not found");
//     }
// });

// For Synchronous

fs.existsSync('demo2.txt') 

// (result) => {
//     if(result){
//         console.log("found");
//     }else{
//         console.log("not found");
//     }
// });
