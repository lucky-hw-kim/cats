// asyncBreeds.js
const { log } = require('console');
const fs = require('fs');

console.log("1.First");
const breedDetailsFromFile = function(breed, callback) {

  console.log('4.breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if(error) {
      callback(undefined)
    }
    console.log("5.In readFile's Callback: it has the data.");
    if (!error) {
      callback(data);
    }
  });
  
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.

};

module.exports = breedDetailsFromFile