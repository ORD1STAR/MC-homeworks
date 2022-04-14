requirejs(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    const fs = require('fs')

const content = 'this is what i want to write to me'
// console.log("test");
// console.log(fs.readFile("C:/Users/azerty/Desktop/Dev/MC-homeworks/teste.txt", err => { 
//     if(err){
//         console.log(err)
//     }
// }));

fs.writeFile('C:/Users/azerty/Desktop/Dev/MC-homeworks/teste.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
});

// write to js file
